import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ClipboardList,
  Trash2,
  Truck,
  ShieldCheck,
  Check,
  BookmarkCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  COMPANY_OWNER_EMAIL,
  CartStore,
  calculateGeoShipping,
  calculateGstBreakdown,
  applyCouponCode,
  type CartItem,
} from "@/lib/content";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Stock Booking List | Kids Korner Promotional Catalog" },
      {
        name: "description",
        content:
          "Review your selected kidswear garments, sizes, colours, and full MRP + GST tax breakdown before confirming your stock reservation.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => CartStore.getCart());
  const [couponCode, setCouponCode] = useState("");
  const [couponFeedback, setCouponFeedback] = useState<{
    success: boolean;
    discountAmount: number;
    message: string;
  } | null>(null);
  const [pinCode, setPinCode] = useState("641603");

  useEffect(() => {
    const handleUpdate = () => setCartItems(CartStore.getCart());
    window.addEventListener("cart-updated", handleUpdate);
    return () => window.removeEventListener("cart-updated", handleUpdate);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMrp = cartItems.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
  const totalSavings = Math.max(0, totalMrp - subtotal);

  // Per-item aggregated GST calculation
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

  const discountAmount = couponFeedback?.success ? couponFeedback.discountAmount : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCouponCode(couponCode, subtotal, shippingCalculation.baseFee);
    setCouponFeedback(res);
  };

  const handleUpdateQty = (itemId: string, newQty: number) => {
    const updated = CartStore.updateQty(itemId, newQty);
    setCartItems(updated);
  };

  const handleRemove = (itemId: string) => {
    const updated = CartStore.removeItem(itemId);
    setCartItems(updated);
  };

  return (
    <div className="bg-[#EAE6DE] text-[#252525] min-h-screen pt-28 pb-20">
      <div className="page-shell">
        <div className="mb-6 flex items-center justify-between border-b border-[#226192]/20 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
              Promotional Showcase · Stock Reservation
            </span>
            <h1 className="font-['Space_Grotesk'] text-3xl font-extrabold uppercase text-[#226192]">
              Booking List ({CartStore.getItemCount()} Garments)
            </h1>
          </div>
          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557]"
          >
            <ArrowLeft className="size-4" /> Browse More Garments
          </Link>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* ═══ RESERVED ITEMS LIST ═══ */}
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item) => {
                const itemGst = calculateGstBreakdown(item.price, item.mrp, item.quantity);
                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#226192]/20 bg-[#FFFFFF] p-4 sm:p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="size-20 sm:size-24 object-cover border border-[#226192]/20"
                      />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                          {item.brandName}
                        </span>
                        <Link
                          to="/products/$slug"
                          params={{ slug: item.productSlug }}
                          className="font-['Space_Grotesk'] text-base font-bold text-[#226192] hover:text-[#EF8557] line-clamp-1"
                        >
                          {item.productName}
                        </Link>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-[#252525]/75">
                          <span>
                            Size: <strong>{item.size}</strong>
                          </span>
                          <span>•</span>
                          <span>
                            Colour: <strong>{item.colour}</strong>
                          </span>
                          <span>•</span>
                          <span className="font-mono text-[10px] text-[#252525]/60">
                            SKU: {item.sku}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-baseline gap-2 text-xs">
                          <span className="font-bold text-[#226192] text-base">₹{item.price}</span>
                          {item.mrp > item.price && (
                            <span className="text-xs text-[#252525]/50 line-through">
                              MRP ₹{item.mrp}
                            </span>
                          )}
                          <span className="text-[10px] text-[#252525]/65">
                            (Base ₹{itemGst.taxableValue} + {itemGst.gstRate}% GST ₹
                            {itemGst.gstAmount})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#226192]/30 bg-[#FFFFFF]">
                        <button
                          type="button"
                          onClick={() => handleUpdateQty(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-xs font-bold text-[#226192] hover:bg-[#EAE6DE]"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => handleUpdateQty(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-xs font-bold text-[#226192] hover:bg-[#EAE6DE]"
                          disabled={item.quantity >= item.maxStock}
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right">
                        <span className="font-['Space_Grotesk'] text-base font-extrabold text-[#226192]">
                          ₹{item.price * item.quantity}
                        </span>
                        <span className="block text-[9px] text-[#252525]/60">Incl. GST</span>
                      </div>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        className="text-[#252525]/50 hover:text-rose-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Free shipping progress bar */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-4 text-xs">
                {subtotal >= 999 ? (
                  <p className="font-bold text-emerald-700 flex items-center gap-1.5">
                    <Check className="size-4" /> Eligible for Free Courier Delivery across India!
                  </p>
                ) : (
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#252525]/80 font-semibold mb-1">
                      <span>Add ₹{999 - subtotal} more to qualify for Free Geo-Shipping:</span>
                      <span>₹{subtotal} / ₹999</span>
                    </div>
                    <div className="h-2 w-full bg-[#EAE6DE] overflow-hidden">
                      <div
                        className="h-full bg-[#EF8557] transition-all duration-300"
                        style={{ width: `${Math.min(100, (subtotal / 999) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ═══ RIGHT: PRICE, MRP, GST & BOOKING SUMMARY ═══ */}
            <div className="lg:col-span-4 space-y-6">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm">
                <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192] border-b border-[#226192]/10 pb-3">
                  Booking & Tax Summary
                </h3>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#252525]/75">Total MRP Value:</span>
                    <span className="text-[#252525]/75 line-through">₹{totalMrp}</span>
                  </div>

                  {totalSavings > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Promotional Discount Savings:</span>
                      <span>-₹{totalSavings}</span>
                    </div>
                  )}

                  <div className="flex justify-between font-semibold text-[#226192]">
                    <span>Taxable Base Value (Excl. GST):</span>
                    <span>₹{taxAggregation.taxableValue}</span>
                  </div>

                  <div className="flex justify-between text-[#252525]/80">
                    <span>Total Apparel GST (CGST + SGST):</span>
                    <span>₹{taxAggregation.gstAmount}</span>
                  </div>

                  <div className="flex justify-between font-semibold text-[#226192] border-t border-[#226192]/10 pt-2">
                    <span>Garments Total (Incl. GST):</span>
                    <span>₹{subtotal}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Promo Code ({couponFeedback?.message.split(" ")[2]}):</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}

                  {/* Delivery PIN Code Checker inside Summary */}
                  <div className="border-t border-b border-[#226192]/10 py-3 my-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#226192] flex items-center gap-1">
                        <Truck className="size-3.5 text-[#EF8557]" />
                        <span>Est. Delivery ({shippingCalculation.city}):</span>
                      </span>
                      <span className="font-bold text-[#226192]">
                        {shippingCalculation.isFreeShipping ? (
                          <span className="text-emerald-700">FREE</span>
                        ) : (
                          `₹${shippingFee}`
                        )}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        maxLength={6}
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        placeholder="PIN Code..."
                        className="h-8 rounded-none text-xs font-mono"
                      />
                      <span className="text-[10px] text-[#252525]/60 self-center">
                        {shippingCalculation.zoneName}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline pt-2 border-t border-[#226192]/20">
                    <span className="font-['Space_Grotesk'] text-base font-extrabold text-[#226192]">
                      Final Booking Value
                    </span>
                    <span className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#226192]">
                      ₹{finalTotal}
                    </span>
                  </div>
                  <span className="block text-[10px] text-[#252525]/60 text-right">
                    Inclusive of GST & applicable taxes · No online payment needed
                  </span>
                </div>

                {/* Coupon Code Section */}
                <form
                  onSubmit={handleApplyCoupon}
                  className="mt-6 border-t border-[#226192]/10 pt-4"
                >
                  <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1.5">
                    Promotional Code (Optional)
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="e.g. WELCOME10, KORNER20"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="h-9 rounded-none border-[#226192]/30 text-xs uppercase font-mono"
                    />
                    <Button
                      type="submit"
                      variant="outline"
                      className="h-9 rounded-none border-[#226192] text-xs font-bold uppercase text-[#226192] hover:bg-[#226192] hover:text-[#FFFFFF]"
                    >
                      Apply
                    </Button>
                  </div>

                  {couponFeedback && (
                    <p
                      className={`mt-2 text-xs font-semibold ${
                        couponFeedback.success ? "text-emerald-700" : "text-rose-600"
                      }`}
                    >
                      {couponFeedback.message}
                    </p>
                  )}
                </form>

                {/* Proceed Button */}
                <div className="mt-6">
                  <Button
                    onClick={() => navigate({ to: "/checkout" })}
                    className="w-full h-12 rounded-none border border-[#226192] bg-[#226192] text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:border-[#EF8557] hover:bg-[#EF8557] transition-all"
                  >
                    Proceed to Confirm Booking →
                  </Button>
                </div>

                <div className="mt-4 border-t border-[#226192]/10 pt-3 flex items-start gap-2 text-[10px] text-[#252525]/75">
                  <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                  <span>
                    Booking notice is sent directly to <strong>{COMPANY_OWNER_EMAIL}</strong> to
                    hold your selected sizes & colours.
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-16 text-center max-w-xl mx-auto shadow-sm">
            <ClipboardList className="size-16 text-[#226192]/40 mx-auto" />
            <h2 className="mt-4 font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192]">
              Your Booking List is Empty
            </h2>
            <p className="mt-2 text-xs text-[#252525]/75">
              Browse available garments across Kids Korner, X-Zone, H&D Club, and Boy Munna and
              select your child&apos;s size, colour, and quantity to reserve stock.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                className="rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
              >
                <Link to="/products">Browse All Products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-[#226192] text-xs font-bold uppercase text-[#226192]"
              >
                <Link to="/brands">Explore 4 Brands</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
