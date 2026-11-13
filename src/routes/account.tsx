import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Heart, Clock, FileText, Printer, Search, Send, ClipboardList, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  COMPANY_ADDRESS_FULL,
  COMPANY_GSTIN,
  COMPANY_LANDLINE,
  COMPANY_NAME,
  COMPANY_OWNER_EMAIL,
  COMPANY_PRIMARY_MOBILE,
  COMPANY_SECONDARY_MOBILE,
  OrdersStore,
  WishlistStore,
  CartStore,
  StockStore,
  getBookingMailtoUrl,
  products,
  type Order,
  type OrderStatus,
} from "@/lib/content";

export const Route = createFileRoute("/account")({
  validateSearch: (
    search: Record<string, unknown>,
  ): {
    tab?: string | undefined;
    orderId?: string | undefined;
  } => {
    const out: { tab?: string | undefined; orderId?: string | undefined } = {};
    if (typeof search["tab"] === "string" && search["tab"]) {
      out.tab = search["tab"];
    }
    if (typeof search["orderId"] === "string" && search["orderId"]) {
      out.orderId = search["orderId"];
    }
    return out;
  },
  head: () => ({
    meta: [
      { title: "My Stock Bookings & Wishlist | Kids Korner" },
      {
        name: "description",
        content:
          "Look up your stock reservations by customer email or booking ID without logging in, print booking slips, and manage saved wishlist items.",
      },
    ],
  }),
  component: BookingsPortalPage,
});

const statusSteps: OrderStatus[] = [
  "Booking Placed",
  "Stock Reserved",
  "Confirmed",
  "Processing",
  "Packed",
  "Shipped",
  "Delivered",
];

function BookingsPortalPage() {
  const searchParams = Route.useSearch();
  const [activeTab, setActiveTab] = useState<"orders" | "wishlist">(
    searchParams.tab === "wishlist" ? "wishlist" : "orders",
  );

  const [orders, setOrders] = useState<Order[]>(() => OrdersStore.getOrders());
  const [wishlistSlugs, setWishlistSlugs] = useState<string[]>(() => WishlistStore.getWishlist());
  const [lookupQuery, setLookupQuery] = useState<string>("");

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(() => {
    if (searchParams.orderId) {
      return OrdersStore.getOrderById(searchParams.orderId) || null;
    }
    return null;
  });

  useEffect(() => {
    const handleOrders = () => setOrders(OrdersStore.getOrders());
    const handleWishlist = () => setWishlistSlugs(WishlistStore.getWishlist());
    window.addEventListener("orders-updated", handleOrders);
    window.addEventListener("wishlist-updated", handleWishlist);
    return () => {
      window.removeEventListener("orders-updated", handleOrders);
      window.removeEventListener("wishlist-updated", handleWishlist);
    };
  }, []);

  const filteredBookings = orders.filter((ord) => {
    if (!lookupQuery.trim()) return true;
    const q = lookupQuery.trim().toLowerCase();
    return (
      ord.orderNumber.toLowerCase().includes(q) ||
      ord.shippingAddress.email.toLowerCase().includes(q) ||
      ord.shippingAddress.fullName.toLowerCase().includes(q) ||
      ord.shippingAddress.phone.toLowerCase().includes(q)
    );
  });

  const wishlistedProducts = products.filter((p) => wishlistSlugs.includes(p.slug));

  const handleMoveToBookingList = (productSlug: string) => {
    const product = products.find((p) => p.slug === productSlug);
    if (!product) return;

    const variant = product.variants?.find((v) => StockStore.getVariantStock(v.id, v.stock) > 0) ||
      product.variants?.[0] || {
        id: "v-default",
        sku: product.sku,
        size: "4–5Y",
        colour: "Classic Red",
        colourHex: "#C0392B",
        stock: 10,
        price: product.price,
        mrp: product.mrp,
      };

    const liveStock = StockStore.getVariantStock(variant.id, variant.stock);

    CartStore.addItem({
      productId: product.slug,
      productSlug: product.slug,
      productName: product.name,
      brandId: product.brandId,
      brandName: product.brandName,
      variantId: variant.id,
      sku: variant.sku,
      size: variant.size,
      colour: variant.colour,
      colourHex: variant.colourHex,
      image: variant.image || product.image,
      price: variant.price,
      mrp: variant.mrp,
      quantity: 1,
      maxStock: liveStock,
    });

    WishlistStore.toggle(productSlug);
  };

  return (
    <div className="bg-[#EAE6DE] text-[#252525] min-h-screen pt-28 pb-20">
      <div className="page-shell">
        {/* Header */}
        <div className="border-b border-[#226192]/20 pb-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
              No Login Required · Direct Identification by Email
            </span>
            <h1 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-[#226192]">
              My Stock Bookings & Saved Wishlist
            </h1>
            <p className="text-xs text-[#252525]/75 mt-1">
              Find any reserved order using your Customer Email or Booking Reference ID.
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              to="/cart"
              className="border border-[#EF8557] bg-[#EF8557] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557]/90 transition-colors"
            >
              View Booking List
            </Link>
            <Link
              to="/products"
              className="border border-[#226192] bg-[#226192] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557] hover:border-[#EF8557] transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#226192]/20 pb-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "orders"
                  ? "bg-[#226192] text-[#FFFFFF]"
                  : "border border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557]"
              }`}
            >
              <Clock className="size-3.5" />
              <span>Reserved Bookings ({orders.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("wishlist")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "wishlist"
                  ? "bg-[#226192] text-[#FFFFFF]"
                  : "border border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557]"
              }`}
            >
              <Heart className="size-3.5" />
              <span>Saved Wishlist ({wishlistedProducts.length})</span>
            </button>
          </div>

          {activeTab === "orders" && (
            <div className="flex items-center gap-2 border border-[#226192]/30 bg-[#FFFFFF] px-3 py-1.5 w-full sm:w-80">
              <Search className="size-3.5 text-[#226192]" />
              <input
                type="text"
                value={lookupQuery}
                onChange={(e) => setLookupQuery(e.target.value)}
                placeholder="Search by Email or Booking ID..."
                className="w-full bg-transparent text-xs outline-none"
              />
              {lookupQuery && (
                <button type="button" onClick={() => setLookupQuery("")}>
                  <X className="size-3 text-[#252525]/60" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* ═══ TAB 1: BOOKINGS LIST & TRACKING ═══ */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            {filteredBookings.length > 0 ? (
              filteredBookings.map((ord) => {
                const currentStepIdx = Math.max(0, statusSteps.indexOf(ord.status));
                const mailtoUrl = getBookingMailtoUrl(ord);

                return (
                  <div
                    key={ord.id}
                    className="border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm space-y-4"
                  >
                    {/* Top Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#226192]/10 pb-3 gap-2">
                      <div>
                        <span className="font-mono text-xs font-bold text-[#226192]">
                          Booking #{ord.orderNumber}
                        </span>
                        <span className="text-[11px] text-[#EF8557] font-semibold ml-2">
                          ({ord.shippingAddress.email})
                        </span>
                        <span className="text-[11px] text-[#252525]/60 block sm:inline sm:ml-2">
                          Reserved on{" "}
                          {new Date(ord.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#EF8557]/15 px-2.5 py-0.5 text-xs font-bold text-[#EF8557]">
                          {ord.status}
                        </span>
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-1 border border-[#EF8557] bg-[#EF8557] px-2.5 py-1 text-[10px] font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]/90"
                        >
                          <Send className="size-3" />
                          <span>Email Owner</span>
                        </a>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedOrder(ord)}
                          className="rounded-none border-[#226192] text-xs font-bold text-[#226192] hover:bg-[#226192] hover:text-[#FFFFFF]"
                        >
                          <FileText className="size-3 mr-1" />
                          <span>Booking & Tax Slip</span>
                        </Button>
                      </div>
                    </div>

                    {/* Status Timeline Flow */}
                    <div className="py-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#226192] mb-2">
                        Stock Reservation & Dispatch Progress:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-[10px]">
                        {statusSteps.map((step, idx) => {
                          const isDone = currentStepIdx >= idx;
                          const isCurrent = currentStepIdx === idx;
                          return (
                            <div
                              key={step}
                              className={`border p-2 transition-all ${
                                isCurrent
                                  ? "border-[#EF8557] bg-[#EF8557] text-[#FFFFFF] font-bold"
                                  : isDone
                                    ? "border-emerald-600 bg-emerald-50 text-emerald-800 font-semibold"
                                    : "border-gray-200 bg-gray-50 text-gray-400"
                              }`}
                            >
                              <span>{step}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="divide-y divide-[#226192]/10 border-t border-b border-[#226192]/10 py-2">
                      {ord.items.map((item, idx) => (
                        <div key={idx} className="py-2.5 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.productName}
                              className="size-14 object-cover border border-[#226192]/20"
                            />
                            <div>
                              <span className="text-[9px] font-bold uppercase tracking-wider text-[#EF8557]">
                                {item.brandName}
                              </span>
                              <Link
                                to="/products/$slug"
                                params={{ slug: item.productSlug }}
                                className="font-['Space_Grotesk'] text-sm font-bold text-[#226192] hover:underline block"
                              >
                                {item.productName}
                              </Link>
                              <span className="text-[11px] text-[#252525]/70">
                                Colour: {item.colour} · Size: {item.size} · Qty: {item.quantity}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-[#226192] text-sm">
                              ₹{item.price * item.quantity}
                            </span>
                            <span className="block text-[10px] text-[#252525]/60 font-mono">
                              MRP ₹{item.mrp * item.quantity} · SKU: {item.sku}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Summary */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div className="text-[#252525]/80">
                        <span>
                          Total Value: <strong>₹{ord.total}</strong> (Incl. GST ₹{ord.tax}) ·{" "}
                          {ord.paymentMethod}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#226192]">
                        Owner Hold Desk: {COMPANY_OWNER_EMAIL}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-12 text-center">
                <ClipboardList className="size-12 text-[#226192]/30 mx-auto" />
                <h3 className="mt-3 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                  No Bookings Found
                </h3>
                <p className="mt-1 text-xs text-[#252525]/70">
                  {lookupQuery
                    ? `No booking records matched "${lookupQuery}".`
                    : "Your reserved garments and booking slips will appear here."}
                </p>
                <Button
                  asChild
                  className="mt-4 rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF]"
                >
                  <Link to="/products">Browse Catalog</Link>
                </Button>
              </div>
            )}
          </div>
        )}

        {/* ═══ TAB 2: SAVED WISHLIST ═══ */}
        {activeTab === "wishlist" && (
          <div>
            {wishlistedProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {wishlistedProducts.map((p) => (
                  <div
                    key={p.slug}
                    className="border border-[#226192]/20 bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="aspect-[4/5] size-full object-cover border border-[#226192]/10"
                      />
                      <span className="mt-2 block text-[10px] font-bold uppercase text-[#EF8557]">
                        {p.brandName}
                      </span>
                      <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#226192] line-clamp-1">
                        {p.name}
                      </h4>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-bold text-[#226192]">₹{p.price}</span>
                        <span className="text-xs text-[#252525]/50 line-through">₹{p.mrp}</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2 border-t border-[#226192]/10 pt-3">
                      <Button
                        onClick={() => handleMoveToBookingList(p.slug)}
                        className="w-full rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
                      >
                        Move to Booking List
                      </Button>
                      <button
                        type="button"
                        onClick={() => WishlistStore.toggle(p.slug)}
                        className="w-full text-center text-xs text-[#252525]/60 hover:text-rose-600 font-semibold"
                      >
                        Remove from Wishlist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-12 text-center">
                <Heart className="size-12 text-[#226192]/30 mx-auto" />
                <h3 className="mt-3 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                  Your Wishlist is Empty
                </h3>
                <p className="mt-1 text-xs text-[#252525]/70">
                  Tap the heart on any garment to save styles for later.
                </p>
                <Button
                  asChild
                  className="mt-4 rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF]"
                >
                  <Link to="/products">Browse Garments</Link>
                </Button>
              </div>
            )}
          </div>
        )}

        {/* ═══ PRINTABLE BOOKING & TAX SLIP MODAL ═══ */}
        {selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#252525]/80 p-4 backdrop-blur-sm print:p-0 print:bg-white">
            <div className="w-full max-w-3xl border border-[#226192] bg-[#FFFFFF] p-8 shadow-2xl max-h-[90vh] overflow-y-auto print:max-h-none print:border-none print:shadow-none">
              <div className="flex items-start justify-between border-b-2 border-[#226192] pb-6">
                <div>
                  <h2 className="font-['Space_Grotesk'] text-2xl font-extrabold uppercase text-[#226192]">
                    Stock Booking & GST Price Slip
                  </h2>
                  <p className="text-xs text-[#252525]/75 mt-0.5">
                    {COMPANY_NAME} (Est. 2000) · GST No: {COMPANY_GSTIN}
                  </p>
                  <p className="text-[11px] text-[#252525]/60">{COMPANY_ADDRESS_FULL}</p>
                  <p className="text-[11px] text-[#252525]/70">
                    Mob: {COMPANY_PRIMARY_MOBILE} / {COMPANY_SECONDARY_MOBILE} · Ph:{" "}
                    {COMPANY_LANDLINE}
                  </p>
                  <p className="text-[11px] font-semibold text-[#226192]">
                    Owner Email: {COMPANY_OWNER_EMAIL}
                  </p>
                </div>

                <div className="text-right">
                  <span className="font-mono text-sm font-bold text-[#EF8557]">
                    #{selectedOrder.orderNumber}
                  </span>
                  <p className="text-xs text-[#252525]/70 mt-1">
                    Date: {new Date(selectedOrder.date).toLocaleDateString("en-IN")}
                  </p>
                  <p className="text-xs font-bold text-[#226192] mt-1">
                    Status: {selectedOrder.status}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 my-6 text-xs">
                <div className="border border-[#226192]/20 p-3 bg-[#EAE6DE]/30">
                  <span className="font-bold text-[#226192] uppercase block mb-1">
                    Reserved For Customer:
                  </span>
                  <p className="font-semibold">{selectedOrder.shippingAddress.fullName}</p>
                  <p className="font-mono text-[#EF8557]">{selectedOrder.shippingAddress.email}</p>
                  <p>{selectedOrder.shippingAddress.addressLine1}</p>
                  <p>
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} –{" "}
                    {selectedOrder.shippingAddress.pinCode}
                  </p>
                  <p className="mt-1 text-[#252525]/70">
                    Phone: {selectedOrder.shippingAddress.phone}
                  </p>
                </div>

                <div className="border border-[#226192]/20 p-3 bg-[#EAE6DE]/30">
                  <span className="font-bold text-[#226192] uppercase block mb-1">
                    Booking Mode & Hold Ref:
                  </span>
                  <p>{selectedOrder.paymentMethod}</p>
                  <p>Hold Ref: {selectedOrder.trackingNumber}</p>
                  <p>Dispatch Zone: {selectedOrder.shippingZone}</p>
                  {selectedOrder.notes && (
                    <p className="mt-1 italic text-[#252525]/75">Note: {selectedOrder.notes}</p>
                  )}
                </div>
              </div>

              <table className="w-full text-xs text-left border border-[#226192]/20">
                <thead className="bg-[#226192] text-[#FFFFFF] text-[10px] uppercase font-bold">
                  <tr>
                    <th className="p-2.5">Item & Brand</th>
                    <th className="p-2.5">SKU</th>
                    <th className="p-2.5">Colour / Size</th>
                    <th className="p-2.5">Qty</th>
                    <th className="p-2.5">MRP</th>
                    <th className="p-2.5 text-right">Final (Incl. GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#226192]/10">
                  {selectedOrder.items.map((it, idx) => (
                    <tr key={idx}>
                      <td className="p-2.5 font-bold text-[#226192]">
                        {it.productName}
                        <span className="block text-[9px] text-[#EF8557] font-semibold">
                          {it.brandName}
                        </span>
                      </td>
                      <td className="p-2.5 font-mono text-[10px]">{it.sku}</td>
                      <td className="p-2.5">
                        {it.colour} · {it.size}
                      </td>
                      <td className="p-2.5">{it.quantity}</td>
                      <td className="p-2.5 line-through text-[#252525]/60">
                        ₹{it.mrp * it.quantity}
                      </td>
                      <td className="p-2.5 text-right font-bold">₹{it.price * it.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 flex justify-end text-xs">
                <div className="w-72 space-y-1.5 border-t border-[#226192]/20 pt-3">
                  <div className="flex justify-between">
                    <span>Total MRP:</span>
                    <span className="line-through text-[#252525]/60">
                      ₹{selectedOrder.totalMrp ?? selectedOrder.subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxable Base Value:</span>
                    <span>₹{selectedOrder.taxableValue ?? selectedOrder.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total GST (CGST + SGST):</span>
                    <span>₹{selectedOrder.tax}</span>
                  </div>
                  {selectedOrder.discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Promo Discount:</span>
                      <span>-₹{selectedOrder.discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Est. Geo-Shipping:</span>
                    <span>
                      {selectedOrder.shippingFee === 0 ? "FREE" : `₹${selectedOrder.shippingFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-base text-[#226192] border-t border-[#226192]/20 pt-2">
                    <span>Final Booking Value:</span>
                    <span>₹{selectedOrder.total}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 print:hidden border-t border-[#226192]/20 pt-4">
                <Button
                  variant="outline"
                  onClick={() => window.print()}
                  className="rounded-none border-[#226192] text-xs font-bold uppercase text-[#226192]"
                >
                  <Printer className="size-3.5 mr-1.5" /> Print Slip
                </Button>
                <Button
                  onClick={() => setSelectedOrder(null)}
                  className="rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
