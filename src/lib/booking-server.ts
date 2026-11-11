import { createServerFn } from "@tanstack/react-start";
import { COMPANY_OWNER_EMAIL, formatBookingEmailBody, type Order } from "./ecommerce";

export interface BookingNotificationResult {
  success: boolean;
  emailSentByServer: boolean;
  provider?: string;
  ownerEmail: string;
  message: string;
}

export interface EmailConfigStatus {
  configured: boolean;
  provider: string;
  ownerEmail: string;
}

type NodeProcessWithLoadEnv = NodeJS.Process & {
  loadEnvFile?: (path?: string) => void;
};

function getServerEnv() {
  if (typeof process === "undefined") return undefined;
  const proc = process as NodeProcessWithLoadEnv;

  // Dynamically load .env.local / .env in Node if not already populated (handles hot edits without server restart)
  if (
    !proc.env?.["BOOKING_WEBHOOK_URL"] &&
    !proc.env?.["RESEND_API_KEY"] &&
    !proc.env?.["BREVO_API_KEY"] &&
    !proc.env?.["WEB3FORMS_ACCESS_KEY"] &&
    typeof proc.loadEnvFile === "function"
  ) {
    for (const file of [".env.local", ".env"]) {
      try {
        proc.loadEnvFile(file);
      } catch {
        // File does not exist or cannot be read; ignore safely
      }
    }
  }

  return proc.env;
}

export const getEmailNotificationStatusFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<EmailConfigStatus> => {
    const env = getServerEnv();
    if (env?.["BOOKING_WEBHOOK_URL"]) {
      return {
        configured: true,
        provider: "Google Apps Script / Webhook",
        ownerEmail: COMPANY_OWNER_EMAIL,
      };
    }
    if (env?.["RESEND_API_KEY"]) {
      return { configured: true, provider: "Resend API", ownerEmail: COMPANY_OWNER_EMAIL };
    }
    if (env?.["BREVO_API_KEY"]) {
      return { configured: true, provider: "Brevo API", ownerEmail: COMPANY_OWNER_EMAIL };
    }
    if (env?.["WEB3FORMS_ACCESS_KEY"]) {
      return { configured: true, provider: "Web3Forms API", ownerEmail: COMPANY_OWNER_EMAIL };
    }
    return {
      configured: false,
      provider: "None (Manual mailto fallback active)",
      ownerEmail: COMPANY_OWNER_EMAIL,
    };
  },
);

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(new Error(`Request timed out after ${timeoutMs}ms`)),
    timeoutMs,
  );
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function sleepMs(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function readWebhookEchoResponse(
  echoUrl: string,
): Promise<{ ok: boolean; status?: number; detail?: string }> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const followRes = await fetchWithTimeout(echoUrl, { method: "GET" }, 7000);
      const text = await followRes.text();
      const trimmed = text.trim();
      const isHtml = trimmed.startsWith("<");
      if (followRes.ok && !isHtml) {
        try {
          const parsed = JSON.parse(trimmed) as { ok?: boolean; error?: string };
          if (parsed && parsed.ok === false) {
            return {
              ok: false,
              status: followRes.status,
              detail: parsed.error || "Apps Script returned ok:false",
            };
          }
        } catch {
          // Non-JSON plain text response is still acceptable as long as not HTML
        }
        return { ok: true, status: followRes.status };
      }
      return {
        ok: false,
        status: followRes.status,
        detail: `Webhook echo error (status ${followRes.status}, html=${isHtml})`,
      };
    } catch (err) {
      lastErr = err;
      if (attempt < 3) {
        await sleepMs(400 * attempt);
      }
    }
  }
  return {
    ok: false,
    detail: `Webhook POST reached Google Apps Script, but reading confirmation timed out: ${String(lastErr)}`,
  };
}

async function postWebhookWithRetry(
  webhookUrl: string,
  payloadStr: string,
): Promise<{ ok: boolean; status?: number; detail?: string }> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetchWithTimeout(
        webhookUrl,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payloadStr,
          redirect: "manual",
        },
        8000,
      );

      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get("location") || "";
        await res.arrayBuffer().catch(() => {});

        if (location.includes("accounts.google.com")) {
          return {
            ok: false,
            status: res.status,
            detail:
              "Google Apps Script redirected to Google login (redeploy with Who has access: Anyone).",
          };
        }

        if (location) {
          // doPost has already executed once Google responds with the redirect location; do not re-POST.
          return await readWebhookEchoResponse(location);
        }
      }

      const text = await res.text();
      const trimmed = text.trim();
      const isHtmlRedirectError = trimmed.startsWith("<");

      if (res.ok && !isHtmlRedirectError) {
        try {
          const parsed = JSON.parse(trimmed) as { ok?: boolean; error?: string };
          if (parsed && parsed.ok === false) {
            return {
              ok: false,
              status: res.status,
              detail: parsed.error || "Webhook returned ok:false",
            };
          }
        } catch {
          // Plain text success body is fine
        }
        return { ok: true, status: res.status };
      }

      if (res.status >= 400 && res.status < 500 && res.status !== 429) {
        return {
          ok: false,
          status: res.status,
          detail: `Webhook rejected request (status ${res.status}, html=${isHtmlRedirectError})`,
        };
      }

      lastErr = new Error(`status ${res.status}, html=${isHtmlRedirectError}`);
    } catch (err) {
      lastErr = err;
    }

    if (attempt < 3) {
      await sleepMs(400 * attempt);
    }
  }

  return {
    ok: false,
    detail: `Webhook dispatch failed after 3 attempts: ${String(lastErr)}`,
  };
}

export const submitBookingEmailFn = createServerFn({ method: "POST" })
  .validator((data: { order: Order }) => data)
  .handler(async ({ data }): Promise<BookingNotificationResult> => {
    const { order } = data;
    const emailSubject = `[Stock Booking ${order.orderNumber}] ${order.shippingAddress.fullName} (${order.shippingAddress.email}) - Reserve Stock`;
    const emailBody = formatBookingEmailBody(order);

    const env = getServerEnv();
    const webhookUrl = env?.["BOOKING_WEBHOOK_URL"]?.trim();
    const resendApiKey = env?.["RESEND_API_KEY"]?.trim();
    const brevoApiKey = env?.["BREVO_API_KEY"]?.trim();
    const web3FormsKey = env?.["WEB3FORMS_ACCESS_KEY"]?.trim();

    // 1. Always log on server for operational visibility
    console.info(`\n[MUTHU INTERNATIONAL STOCK BOOKING -> ${COMPANY_OWNER_EMAIL}]`);
    console.info(`Booking ID: ${order.orderNumber} | Customer: ${order.shippingAddress.email}`);

    // 2. Option A: Webhook / Google Apps Script (Sends directly via owner's Gmail)
    if (webhookUrl) {
      const payloadStr = JSON.stringify({
        to: COMPANY_OWNER_EMAIL,
        subject: emailSubject,
        customerEmail: order.shippingAddress.email,
        customerName: order.shippingAddress.fullName,
        customerPhone: order.shippingAddress.phone,
        bookingNumber: order.orderNumber,
        message: emailBody,
        order,
      });

      const webhookResult = await postWebhookWithRetry(webhookUrl, payloadStr);
      if (webhookResult.ok) {
        console.info(
          `[booking-server] Automated email sent via Webhook / Gmail Script -> ${COMPANY_OWNER_EMAIL}`,
        );
        return {
          success: true,
          emailSentByServer: true,
          provider: "Webhook / Gmail Script",
          ownerEmail: COMPANY_OWNER_EMAIL,
          message: `Booking slip was automatically emailed to ${COMPANY_OWNER_EMAIL}. No manual Outlook/email action needed.`,
        };
      }
      console.warn(`[booking-server] ${webhookResult.detail}`);
    }

    // 3. Option B: Resend API
    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: env?.["RESEND_FROM_EMAIL"] || "Kids Korner Bookings <onboarding@resend.dev>",
            to: [COMPANY_OWNER_EMAIL],
            reply_to: order.shippingAddress.email,
            subject: emailSubject,
            text: emailBody,
          }),
        });

        if (res.ok) {
          return {
            success: true,
            emailSentByServer: true,
            provider: "Resend API",
            ownerEmail: COMPANY_OWNER_EMAIL,
            message: `Booking email automatically sent to ${COMPANY_OWNER_EMAIL} via Resend. No manual email action needed.`,
          };
        }
        const errBody = await res.text();
        console.warn(`[booking-server] Resend failed (${res.status}):`, errBody);
      } catch (err) {
        console.warn("[booking-server] Resend email dispatch failed:", err);
      }
    }

    // 4. Option C: Brevo (Sendinblue) API
    if (brevoApiKey) {
      try {
        const res = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "api-key": brevoApiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: {
              name: "Kids Korner Stock Bookings",
              email: env?.["BREVO_SENDER_EMAIL"] || COMPANY_OWNER_EMAIL,
            },
            to: [{ email: COMPANY_OWNER_EMAIL, name: "Muthu International Owner Desk" }],
            replyTo: { email: order.shippingAddress.email, name: order.shippingAddress.fullName },
            subject: emailSubject,
            textContent: emailBody,
          }),
        });

        if (res.ok) {
          return {
            success: true,
            emailSentByServer: true,
            provider: "Brevo API",
            ownerEmail: COMPANY_OWNER_EMAIL,
            message: `Booking email automatically sent to ${COMPANY_OWNER_EMAIL} via Brevo. No manual email action needed.`,
          };
        }
        const errBody = await res.text();
        console.warn(`[booking-server] Brevo failed (${res.status}):`, errBody);
      } catch (err) {
        console.warn("[booking-server] Brevo dispatch failed:", err);
      }
    }

    // 5. Option D: Web3Forms API
    if (web3FormsKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: emailSubject,
            from_name: `${order.shippingAddress.fullName} (Kids Korner Booking)`,
            replyto: order.shippingAddress.email,
            message: emailBody,
          }),
        });

        if (res.ok) {
          return {
            success: true,
            emailSentByServer: true,
            provider: "Web3Forms",
            ownerEmail: COMPANY_OWNER_EMAIL,
            message: `Booking email automatically sent to ${COMPANY_OWNER_EMAIL} via Web3Forms. No manual email action needed.`,
          };
        }
      } catch (err) {
        console.warn("[booking-server] Web3Forms dispatch failed:", err);
      }
    }

    // 6. Fallback when no external email provider key is configured in env
    return {
      success: true,
      emailSentByServer: false,
      ownerEmail: COMPANY_OWNER_EMAIL,
      message: `Booking recorded! Automated email could not be sent from server—use the fallback button below to send via your email app to ${COMPANY_OWNER_EMAIL}.`,
    };
  });
