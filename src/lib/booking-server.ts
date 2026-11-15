import { createServerFn } from "@tanstack/react-start";
import {
  COMPANY_OWNER_EMAIL,
  formatBookingEmailBody,
  type Order,
  type WholesaleEnquiry,
} from "./ecommerce";

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

const DEFAULT_BOOKING_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzAEyMlcCwqAgxBJIhDJMdw6y2bS066AVlIOOl7R_S61QN_VFplweuBDt6HWuSgJwPP/exec";

export const getEmailNotificationStatusFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<EmailConfigStatus> => {
    const env = getServerEnv();
    const webhookUrl = env?.["BOOKING_WEBHOOK_URL"]?.trim() || DEFAULT_BOOKING_WEBHOOK_URL;
    if (webhookUrl) {
      return {
        configured: true,
        provider: "Google Apps Script / Gmail Webhook",
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
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const followRes = await fetchWithTimeout(echoUrl, { method: "GET" }, 3500);
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
      if (attempt < 2) {
        await sleepMs(300 * attempt);
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
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetchWithTimeout(
        webhookUrl,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payloadStr,
          redirect: "manual",
        },
        3500,
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

    if (attempt < 2) {
      await sleepMs(300 * attempt);
    }
  }

  return {
    ok: false,
    detail: `Webhook dispatch failed after 2 attempts: ${String(lastErr)}`,
  };
}

export const submitBookingEmailFn = createServerFn({ method: "POST" })
  .validator((data: { order: Order }) => data)
  .handler(async ({ data }): Promise<BookingNotificationResult> => {
    try {
      const { order } = data;
      const emailSubject = `[Stock Booking ${order.orderNumber}] ${order.shippingAddress.fullName} (${order.shippingAddress.email}) - Reserve Stock`;
      const emailBody = formatBookingEmailBody(order);

      const env = getServerEnv();
      const webhookUrl = env?.["BOOKING_WEBHOOK_URL"]?.trim() || DEFAULT_BOOKING_WEBHOOK_URL;
      const resendApiKey = env?.["RESEND_API_KEY"]?.trim();
      const brevoApiKey = env?.["BREVO_API_KEY"]?.trim();
      const web3FormsKey = env?.["WEB3FORMS_ACCESS_KEY"]?.trim();

      // 1. Always log on server for operational visibility
      console.info(`\n[MUTHU INTERNATIONAL STOCK BOOKING -> ${COMPANY_OWNER_EMAIL}]`);
      console.info(`Booking ID: ${order.orderNumber} | Customer: ${order.shippingAddress.email}`);

      // 2. Option A: Webhook / Google Apps Script (Sends directly via owner's Gmail & appends to Google Sheet)
      if (webhookUrl) {
        const payloadStr = JSON.stringify({
          action: "create_booking",
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
    } catch (unexpected) {
      console.warn("[booking-server] Caught unexpected error in submitBookingEmailFn:", unexpected);
      return {
        success: true,
        emailSentByServer: false,
        ownerEmail: COMPANY_OWNER_EMAIL,
        message: `Booking recorded! Please use the 'Send Booking Email' button below to email ${COMPANY_OWNER_EMAIL}.`,
      };
    }
  });

export interface InquiryData {
  kind: "contact" | "quote";
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  cityState: string;
  brand: string;
  message: string;
}

export const submitInquiryEmailFn = createServerFn({ method: "POST" })
  .validator((data: InquiryData) => data)
  .handler(async ({ data }): Promise<{ success: boolean; message: string }> => {
    try {
      const subject = `[${data.kind === "quote" ? "Quote Request" : "Contact Enquiry"}] ${data.fullName} - ${data.brand}`;
      const body = `MUTHU INTERNATIONAL FACTORY DESK NOTIFICATION
--------------------------------------------------
Type: ${data.kind === "quote" ? "B2B Production Quote Request" : "Customer / Brand Contact Inquiry"}
Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST

CUSTOMER / BRAND DETAILS:
Full Name: ${data.fullName}
Company / Brand: ${data.companyName}
Email: ${data.email}
Phone / WhatsApp: ${data.phone}
City / State: ${data.cityState}
Brand of Interest: ${data.brand}

INQUIRY / BRIEF:
${data.message}

--------------------------------------------------
Notification dispatched to: ${COMPANY_OWNER_EMAIL}
Muthu International Private Limited · Tirupur, India`;

      const env = getServerEnv();
      const webhookUrl = env?.["BOOKING_WEBHOOK_URL"]?.trim() || DEFAULT_BOOKING_WEBHOOK_URL;

      if (webhookUrl) {
        const payloadStr = JSON.stringify({
          action: "create_inquiry",
          to: COMPANY_OWNER_EMAIL,
          subject,
          customerEmail: data.email,
          customerName: data.fullName,
          customerPhone: data.phone,
          message: body,
          inquiry: data,
        });
        await postWebhookWithRetry(webhookUrl, payloadStr);
      }

      return { success: true, message: "Enquiry submitted successfully" };
    } catch (err) {
      console.warn("[booking-server] Inquiry dispatch failed:", err);
      return { success: true, message: "Enquiry recorded" };
    }
  });

export interface WholesaleData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  estimatedQuantity: string;
  interestedBrand: string;
  productCategory: string;
  message?: string;
}

export const submitWholesaleEmailFn = createServerFn({ method: "POST" })
  .validator((data: WholesaleData) => data)
  .handler(async ({ data }): Promise<{ success: boolean; message: string }> => {
    try {
      const subject = `[B2B Wholesale Brief] ${data.companyName} (${data.contactPerson}) - ${data.estimatedQuantity}`;
      const body = `MUTHU INTERNATIONAL WHOLESALE / B2B BRIEF
--------------------------------------------------
Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST

BUSINESS DETAILS:
Company / Business: ${data.companyName}
Contact Person: ${data.contactPerson}
Phone / WhatsApp: ${data.phone}
Email: ${data.email}
Location: ${data.city}, ${data.state}

REQUIREMENTS:
Target Volume: ${data.estimatedQuantity}
Brand of Interest: ${data.interestedBrand}
Product Category: ${data.productCategory}

NOTES / SPECIFICATIONS:
${data.message || "No additional notes provided."}

--------------------------------------------------
Logged to Factory Desk · Dispatched to: ${COMPANY_OWNER_EMAIL}
Muthu International Private Limited · 14/2 Asher Nagar, Tirupur - 641603`;

      const env = getServerEnv();
      const webhookUrl = env?.["BOOKING_WEBHOOK_URL"]?.trim() || DEFAULT_BOOKING_WEBHOOK_URL;

      if (webhookUrl) {
        const payloadStr = JSON.stringify({
          action: "create_wholesale",
          to: COMPANY_OWNER_EMAIL,
          subject,
          customerEmail: data.email,
          customerName: data.contactPerson,
          customerPhone: data.phone,
          message: body,
          wholesale: data,
        });
        await postWebhookWithRetry(webhookUrl, payloadStr);
      }

      return { success: true, message: "Wholesale brief submitted successfully" };
    } catch (err) {
      console.warn("[booking-server] Wholesale dispatch failed:", err);
      return { success: true, message: "Wholesale brief logged" };
    }
  });

export interface CentralSheetData {
  ok: boolean;
  bookings: Order[];
  wholesale: WholesaleEnquiry[];
  source: "sheets" | "fallback";
}

export const fetchCentralSheetDataFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<CentralSheetData> => {
    const env = getServerEnv();
    const webhookUrl = env?.["BOOKING_WEBHOOK_URL"]?.trim() || DEFAULT_BOOKING_WEBHOOK_URL;
    if (!webhookUrl) {
      return { ok: false, bookings: [], wholesale: [], source: "fallback" };
    }

    try {
      const getUrl = webhookUrl.includes("?")
        ? `${webhookUrl}&action=get_data`
        : `${webhookUrl}?action=get_data`;
      const res = await fetchWithTimeout(getUrl, { method: "GET", redirect: "follow" }, 5000);
      if (res.ok) {
        const text = await res.text();
        const trimmed = text.trim();
        if (!trimmed.startsWith("<")) {
          const parsed = JSON.parse(trimmed) as {
            ok?: boolean;
            bookings?: Order[];
            wholesale?: WholesaleEnquiry[];
          };
          if (parsed && parsed.ok && Array.isArray(parsed.bookings)) {
            return {
              ok: true,
              bookings: parsed.bookings,
              wholesale: Array.isArray(parsed.wholesale) ? parsed.wholesale : [],
              source: "sheets",
            };
          }
        }
      }
    } catch (err) {
      console.warn("[booking-server] fetchCentralSheetDataFn error:", err);
    }

    return { ok: false, bookings: [], wholesale: [], source: "fallback" };
  },
);
