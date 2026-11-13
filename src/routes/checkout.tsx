import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Mail,
  Copy,
  Printer,
  Check,
  ShieldCheck,
  BookmarkCheck,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  COMPANY_OWNER_EMAIL,
  CartStore,
  OrdersStore,
  UserStore,
  products,
  calculateGeoShipping,
  calculateGstBreakdown,
  applyCouponCode,
  formatBookingEmailBody,
  getBookingMailtoUrl,
  type CartItem,
  type CustomerAddress,
  type Order,
} from "@/lib/content";
import { submitBookingEmailFn } from "@/lib/booking-server";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Confirm Stock Booking | Kids Korner Promotional Store" },
      {
        name: "description",
        content:
          "Finalize your stock reservation with full MRP and GST tax breakdown. No payment gateway or login required.",
      },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => CartStore.getCart());
  const savedVisitor = UserStore.getUser();
  const lastAddress = savedVisitor.addresses[0];

  // Form State (No multiple logins required — pre-fills only if visitor previously booked)
  const [fullName, setFullName] = useState(lastAddress?.fullName || "");
  const [phone, setPhone] = useState(lastAddress?.phone || "");
  const [email, setEmail] = useState(lastAddress?.email || "");
  const [addressLine1, setAddressLine1] = useState(lastAddress?.addressLine1 || "");
  const [addressLine2, setAddressLine2] = useState(lastAddress?.addressLine2 || "");
  const [pinCode, setPinCode] = useState(lastAddress?.pinCode || "641603");
  const [city, setCity] = useState(lastAddress?.city || "Tirupur / Coimbatore");
  const [state, setState] = useState(lastAddress?.state || "Tamil Nadu");
  const [addressType, setAddressType] = useState<"Home" | "Work">("Home");
  const [bookingNotes, setBookingNotes] = useState("");

  const [couponCode, setCouponCode] = useState("");
  const [couponFeedback, setCouponFeedback] = useState<{
    success: boolean;
    discountAmount: number;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Order | null>(null);
  const [serverEmailMessage, setServerEmailMessage] = useState<string>("");
  const [emailSentByServer, setEmailSentByServer] = useState<boolean>(false);
  const [copiedSlip, setCopiedSlip] = useState<boolean>(false);

  // Financial & Tax Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMrp = cartItems.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
  const totalSavings = Math.max(0, totalMrp - subtotal);

  const taxAggregation = cartItems.reduce(
    (acc, item) => {
      const gst = calculateGstBreakdown(item.price, item.mrp, item.quantity);
      return {
        taxableValue: Number((acc.taxableValue + gst.taxableValue).toFixed(2)),
        gstAmount: Number((acc.gstAmount + gst.gstAmount).toFixed(2)),
      };
    },
    { taxableValue: 0, gstAmount: 0 },
  );

  const shippingCalculation = calculateGeoShipping(pinCode, subtotal);
  const shippingFee = shippingCalculation.discountedFee;

  useEffect(() => {
    if (pinCode.length >= 3) {
      const calc = calculateGeoShipping(pinCode, subtotal);
      if (calc.city !== "India") setCity(calc.city);
      if (calc.state !== "India") setState(calc.state);
    }
  }, [pinCode, subtotal]);

  const discountAmount = couponFeedback?.success ? couponFeedback.discountAmount : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCouponCode(couponCode, subtotal, shippingCalculation.baseFee);
    setCouponFeedback(res);
  };

  const handleConfirmBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    const shippingAddress: CustomerAddress = {
      id: `addr_${Date.now()}`,
      fullName,
      phone,
      email,
      addressLine1,
      addressLine2,
      city,
      state,
      pinCode,
      addressType,
    };

    UserStore.saveContactFromBooking(shippingAddress);

    // Prepare stock reservation map for variants
    const variantStockMap = cartItems.map((c) => {
      const prod = products.find((p) => p.slug === c.productSlug);
      const variant = prod?.variants.find((v) => v.id === c.variantId);
      return {
        variantId: c.variantId,
        defaultStock: variant?.stock ?? c.maxStock,
        qty: c.quantity,
      };
    });

    const newBooking = OrdersStore.createOrder(
      {
        status: "Stock Reserved",
        items: cartItems.map((c) => {
          const itemGst = calculateGstBreakdown(c.price, c.mrp, c.quantity);
          return {
            productId: c.productId,
            productSlug: c.productSlug,
            productName: c.productName,
            brandName: c.brandName,
            sku: c.sku,
            size: c.size,
            colour: c.colour,
            image: c.image,
            price: c.price,
            mrp: c.mrp,
            quantity: c.quantity,
            gstRate: itemGst.gstRate,
            taxableValue: itemGst.taxableValue,
            gstAmount: itemGst.gstAmount,
          };
        }),
        totalMrp,
        subtotal,
        discount: discountAmount,
        couponCode: couponFeedback?.success ? couponCode.toUpperCase() : undefined,
        shippingFee,
        shippingZone: shippingCalculation.zoneName,
        taxableValue: taxAggregation.taxableValue,
        tax: taxAggregation.gstAmount,
        total: finalTotal,
        shippingAddress,
        paymentMethod: "Stock Reservation (No Online Payment)",
        paymentStatus: "Stock Reserved for Customer",
        emailDispatchedToOwner: true,
        trackingNumber: `RES-${Math.floor(100000 + Math.random() * 900000)}`,
        courierName: "Muthu International Direct Hold",
        notes: bookingNotes,
      },
      variantStockMap,
    );

    try {
      const serverResp = await submitBookingEmailFn({ data: { order: newBooking } });
      setEmailSentByServer(serverResp.emailSentByServer);
      setServerEmailMessage(serverResp.message);
    } catch (err) {
      console.warn("[checkout] Server notification fallback:", err);
      setEmailSentByServer(false);
      setServerEmailMessage(
        `Booking saved! Click "Send Booking Email" below to open your email app to ${COMPANY_OWNER_EMAIL}.`,
      );
    }

    setConfirmedBooking(newBooking);
    setIsSubmitting(false);
  };

  const handleCopyBookingSlip = () => {
    if (!confirmedBooking) return;
    navigator.clipboard?.writeText(formatBookingEmailBody(confirmedBooking));
    setCopiedSlip(true);
    setTimeout(() => setCopiedSlip(false), 2500);
  };

  if (confirmedBooking) {
    const mailtoUrl = getBookingMailtoUrl(confirmedBooking);

    return (
      <div className="bg-[#EAE6DE] text-[#252525] min-h-screen pt-28 pb-20">
        <div className="page-shell max-w-3xl mx-auto">
          <div className="border border-[#226192] bg-[#FFFFFF] p-6 sm:p-10 shadow-lg animate-in fade-in-50 zoom-in-95">
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="size-10" />
              </div>

              <span className="mt-5 inline-block rounded-full bg-[#EF8557]/15 px-3 py-1 text-xs font-bold text-[#EF8557] uppercase tracking-wider">
                Stock Reserved · Identified by Customer Email
              </span>

              <h1 className="mt-3 font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-[#226192]">
                Booking Confirmed!
              </h1>

              <p className="mt-2 text-xs font-mono text-[#252525]/80">
                Booking Reference:{" "}
                <strong className="text-[#226192]">{confirmedBooking.orderNumber}</strong>
                {" · "}
                Email ID:{" "}
                <strong className="text-[#EF8557]">{confirmedBooking.shippingAddress.email}</strong>
              </p>
            </div>

            {/* Owner Notification Action Card */}
            <div
              className={`mt-6 border-2 p-5 space-y-3 ${
                emailSentByServer
                  ? "border-emerald-600 bg-emerald-50/70"
                  : "border-[#EF8557] bg-[#EAE6DE]/50"
              }`}
            >
              <div className="flex items-start gap-3">
                {emailSentByServer ? (
                  <CheckCircle2 className="size-5 text-emerald-700 shrink-0 mt-0.5" />
                ) : (
                  <Mail className="size-5 text-[#EF8557] shrink-0 mt-0.5" />
                )}
                <div className="text-xs space-y-1">
                  <p
                    className={`font-bold uppercase tracking-wider ${
                      emailSentByServer ? "text-emerald-800" : "text-[#226192]"
                    }`}
                  >
                    {emailSentByServer
                      ? `✓ Automated Email Dispatched to ${COMPANY_OWNER_EMAIL}`
                      : `Owner Stock Notification: ${COMPANY_OWNER_EMAIL}`}
                  </p>
                  <p className="text-[#252525]/85">
                    {emailSentByServer
                      ? serverEmailMessage
                      : serverEmailMessage ||
                        `Your booking slip is ready and stock has been reserved locally. Please send this booking slip directly to the company owner (${COMPANY_OWNER_EMAIL}) so we hold your physical stock in Tirupur:`}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                {!emailSentByServer && (
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 border border-[#EF8557] bg-[#EF8557] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557]/90 transition-colors"
                  >
                    <Send className="size-3.5" />
                    <span>Send Booking Email to {COMPANY_OWNER_EMAIL}</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={handleCopyBookingSlip}
                  className="inline-flex items-center gap-2 border border-[#226192] bg-[#FFFFFF] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#226192] hover:bg-[#226192] hover:text-[#FFFFFF] transition-colors"
                >
                  {copiedSlip ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  <span>{copiedSlip ? "Copied Slip!" : "Copy Booking Slip"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 border border-[#226192]/40 bg-[#FFFFFF] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#226192] hover:border-[#226192]"
                >
                  <Printer className="size-3.5" />
                  <span>Print Slip</span>
                </button>
              </div>
            </div>

            {/* Booked Items & Tax Summary */}
            <div className="mt-6 border border-[#226192]/20 p-4 text-xs space-y-3">
              <h3 className="font-['Space_Grotesk'] font-bold uppercase text-[#226192] border-b border-[#226192]/10 pb-2">
                Booked Items & Tax Summary
              </h3>

              <div className="divide-y divide-[#226192]/10">
                {confirmedBooking.items.map((item, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-[#226192]">
                        {item.productName} ({item.brandName})
                      </span>
                      <p className="text-[11px] text-[#252525]/75">
                        Colour: <strong>{item.colour}</strong> · Size: <strong>{item.size}</strong>{" "}
                        · Qty: <strong>{item.quantity}</strong> · SKU: {item.sku}
                      </p>
                      <p className="text-[10px] text-[#252525]/60">
                        MRP: ₹{item.mrp * item.quantity} | Base: ₹{item.taxableValue} +{" "}
                        {item.gstRate}% GST: ₹{item.gstAmount}
                      </p>
                    </div>
                    <span className="font-bold text-[#226192]">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#226192]/15 pt-3 space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#252525]/70">Total MRP Value:</span>
                  <span className="line-through text-[#252525]/60">
                    ₹{confirmedBooking.totalMrp}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#252525]/70">Taxable Base Value (Excl. GST):</span>
                  <span>₹{confirmedBooking.taxableValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#252525]/70">Total GST (CGST + SGST):</span>
                  <span>₹{confirmedBooking.tax}</span>
                </div>
                {confirmedBooking.discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Promo Discount:</span>
                    <span>-₹{confirmedBooking.discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#252525]/70">Estimated Geo-Shipping:</span>
                  <span>
                    {confirmedBooking.shippingFee === 0
                      ? "FREE"
                      : `₹${confirmedBooking.shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#226192]/20 font-extrabold text-sm text-[#226192]">
                  <span>Final Booking Total (Incl. GST):</span>
                  <span>₹{confirmedBooking.total}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 print:hidden">
              <Button
                asChild
                className="rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
              >
                <Link to="/account" search={{ tab: "orders" }}>
                  Track Booking by Email / ID
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-[#226192] text-xs font-bold uppercase text-[#226192]"
              >
                <Link to="/products">Browse More Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#EAE6DE] text-[#252525] min-h-screen pt-32 pb-20 text-center">
        <div className="page-shell max-w-md mx-auto border border-[#226192]/20 bg-[#FFFFFF] p-12">
          <ClipboardList className="size-12 text-[#226192]/40 mx-auto" />
          <h2 className="mt-4 font-['Space_Grotesk'] text-xl font-bold uppercase text-[#226192]">
            Your Booking List is Empty
          </h2>
          <p className="mt-2 text-xs text-[#252525]/75">
            Select your garment style, colour, size, and quantity before confirming a booking.
          </p>
          <Button
            asChild
            className="mt-6 rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF]"
          >
            <Link to="/products">Browse Kidswear Catalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EAE6DE] text-[#252525] min-h-screen pt-28 pb-20">
      <div className="page-shell">
        <div className="mb-6 flex items-center justify-between border-b border-[#226192]/20 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
              No Online Payment Gateway · Stock Reservation
            </span>
            <h1 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-[#226192]">
              Confirm Stock Booking & Owner Mail Notice
            </h1>
          </div>
          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557]"
          >
            <ArrowLeft className="size-4" /> Edit Booking List
          </Link>
        </div>

        <form onSubmit={handleConfirmBooking} className="grid gap-10 lg:grid-cols-12 items-start">
          {/* ═══ LEFT 8 COLS: CUSTOMER IDENTIFICATION & ADDRESS ═══ */}
          <div className="lg:col-span-8 space-y-8">
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#226192]/10 pb-3 mb-6">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#226192] text-[11px] font-bold text-[#FFFFFF]">
                  1
                </span>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                    Customer Identification & Delivery Details
                  </h3>
                  <p className="text-[11px] text-[#252525]/70">
                    No login required — your booked items will be identified by your Email ID &
                    Booking Reference.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Karthik Subramanian"
                    className="h-10 rounded-none border-[#226192]/30 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 97878 06802"
                    className="h-10 rounded-none border-[#226192]/30 text-xs font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Customer Email Address (Used to Identify Your Booking) *
                  </label>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="h-10 rounded-none border-[#226192]/30 text-xs"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Delivery / Pickup Address *
                  </label>
                  <Input
                    required
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    placeholder="Door no., building, street..."
                    className="h-10 rounded-none border-[#226192]/30 text-xs"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Landmark / Area (Optional)
                  </label>
                  <Input
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    placeholder="Near landmark..."
                    className="h-10 rounded-none border-[#226192]/30 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Delivery PIN Code *
                  </label>
                  <Input
                    required
                    maxLength={6}
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    className="h-10 rounded-none border-[#226192]/30 text-xs font-mono font-bold"
                  />
                  <span className="text-[10px] text-[#EF8557] font-semibold mt-0.5 block">
                    Zone: {shippingCalculation.zoneName}
                  </span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    City *
                  </label>
                  <Input
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-10 rounded-none border-[#226192]/30 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    State *
                  </label>
                  <Input
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="h-10 rounded-none border-[#226192]/30 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Address Type
                  </label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="addrType"
                        checked={addressType === "Home"}
                        onChange={() => setAddressType("Home")}
                        className="accent-[#226192]"
                      />
                      <span>Home</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="addrType"
                        checked={addressType === "Work"}
                        onChange={() => setAddressType("Work")}
                        className="accent-[#226192]"
                      />
                      <span>Work / Store</span>
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                    Note to Owner (Optional)
                  </label>
                  <Input
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    placeholder="e.g. Please hold red t-shirt size 4-5Y until Friday..."
                    className="h-10 rounded-none border-[#226192]/30 text-xs"
                  />
                </div>
              </div>
            </div>

            {/* 2. Owner Notification Info (Replaces Payment Gateway) */}
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#226192]/10 pb-3 mb-4">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#EF8557] text-[11px] font-bold text-[#FFFFFF]">
                  2
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                  Stock Reservation & Owner Email Confirmation
                </h3>
              </div>

              <div className="border border-[#226192]/20 bg-[#EAE6DE]/40 p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#226192]">
                  <BookmarkCheck className="size-4 text-[#EF8557]" />
                  <span>Direct Company Stock Reservation (No Payment Gateway)</span>
                </div>
                <p className="text-[#252525]/85 leading-relaxed">
                  Since this platform showcases promotional collections from Muthu International,{" "}
                  <strong>you do not pay online here</strong>. Confirming this booking will:
                </p>
                <ul className="space-y-1 text-[#252525]/80 pl-1">
                  <li>
                    ✦ Immediately reserve your selected colours, sizes & quantities in company
                    stock.
                  </li>
                  <li>
                    ✦ Generate a unique Booking ID tagged with your email address for
                    identification.
                  </li>
                  <li>
                    ✦ Prepare and dispatch your full MRP + GST booking slip directly to the company
                    owner at <strong>{COMPANY_OWNER_EMAIL}</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ═══ RIGHT 4 COLS: PRICE, MRP, GST BREAKDOWN & CONFIRM BUTTON ═══ */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192] border-b border-[#226192]/10 pb-3">
                Final Price & GST Review
              </h3>

              {/* Items summary */}
              <div className="mt-4 max-h-60 overflow-y-auto divide-y divide-[#226192]/10 pr-1">
                {cartItems.map((item) => {
                  const itemGst = calculateGstBreakdown(item.price, item.mrp, item.quantity);
                  return (
                    <div
                      key={item.id}
                      className="py-2.5 flex items-start justify-between text-xs gap-2"
                    >
                      <div>
                        <span className="font-bold text-[#226192] line-clamp-1">
                          {item.productName}
                        </span>
                        <span className="text-[10px] text-[#252525]/70 block">
                          {item.brandName} · {item.colour} · {item.size} (Qty: {item.quantity})
                        </span>
                        <span className="text-[9px] text-[#252525]/60 block">
                          MRP ₹{itemGst.totalMrp} · GST {itemGst.gstRate}% (₹{itemGst.gstAmount})
                        </span>
                      </div>
                      <span className="font-bold text-[#226192]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Coupon Input */}
              <div className="mt-4 border-t border-[#226192]/10 pt-3">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Promo code (e.g. WELCOME10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="h-8 rounded-none border-[#226192]/30 text-xs uppercase font-mono"
                  />
                  <Button
                    type="button"
                    onClick={handleApplyCoupon}
                    variant="outline"
                    className="h-8 rounded-none border-[#226192] text-[10px] font-bold uppercase text-[#226192]"
                  >
                    Apply
                  </Button>
                </div>
                {couponFeedback && (
                  <p
                    className={`mt-1 text-[10px] font-semibold ${
                      couponFeedback.success ? "text-emerald-700" : "text-rose-600"
                    }`}
                  >
                    {couponFeedback.message}
                  </p>
                )}
              </div>

              {/* Pricing breakdown */}
              <div className="mt-4 space-y-2 border-t border-[#226192]/10 pt-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#252525]/75">Total MRP:</span>
                  <span className="line-through text-[#252525]/60">₹{totalMrp}</span>
                </div>

                {totalSavings > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Promotional Savings:</span>
                    <span>-₹{totalSavings}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-[#252525]/75">Taxable Base Value:</span>
                  <span>₹{taxAggregation.taxableValue}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#252525]/75">Apparel GST (CGST + SGST):</span>
                  <span>₹{taxAggregation.gstAmount}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Promo Coupon Discount:</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-[#252525]/75">Est. Geo-Shipping:</span>
                  <span className="font-bold text-[#226192]">
                    {shippingCalculation.isFreeShipping ? (
                      <span className="text-emerald-700">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-3 border-t border-[#226192]/20 font-bold text-base text-[#226192]">
                  <span>Final Booking Value:</span>
                  <span className="text-2xl text-[#226192]">₹{finalTotal}</span>
                </div>
                <span className="block text-[10px] text-[#252525]/60 text-right">
                  Inclusive of all GST & taxes
                </span>
              </div>

              {/* Confirm CTA */}
              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-none border border-[#EF8557] bg-[#EF8557] text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557]/90 transition-all"
                >
                  {isSubmitting ? "Reserving Stock..." : "Confirm Booking & Notify Owner"}
                </Button>
              </div>

              <div className="mt-4 border-t border-[#226192]/10 pt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#252525]/70">
                <ShieldCheck className="size-3.5 text-emerald-700" />
                <span>Sent to {COMPANY_OWNER_EMAIL}</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
