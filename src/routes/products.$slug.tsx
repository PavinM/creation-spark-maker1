import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Heart,
  ShoppingBag,
  Star,
  Ruler,
  Truck,
  RotateCcw,
  Package,
  Layers,
  MapPin,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CTASection, ProductCard, Reveal, SizeGuideModal } from "@/components/site";
import {
  COMPANY_OWNER_EMAIL,
  products,
  images,
  CartStore,
  WishlistStore,
  ReviewsStore,
  StockStore,
  calculateGeoShipping,
  calculateGstBreakdown,
  type Product,
  type ProductVariant,
  type ProductReview,
} from "@/lib/content";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} | ${loaderData.brandName} Official Store`
          : "Product Not Found | Kids Korner Platform",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Explore certified kidswear garments.",
      },
      { property: "og:title", content: loaderData?.name ?? "Kids Korner Product" },
      { property: "og:type", content: "product" },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const p = Route.useLoaderData();
  const navigate = useNavigate();

  // All product images
  const allImages = useMemo(() => {
    return p.galleryImages && p.galleryImages.length > 0
      ? p.galleryImages
      : [p.image, images.detail, images.quality];
  }, [p.galleryImages, p.image]);
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  // Variant Selection
  const defaultVariant = p.variants?.[0] || {
    id: "v-default",
    sku: p.sku,
    size: "4–5Y",
    colour: "Ocean Blue",
    colourHex: "#226192",
    stock: 12,
    price: p.price,
    mrp: p.mrp,
    image: p.image,
  };
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(defaultVariant);
  const [qty, setQty] = useState(1);
  const [addedToast, setAddedToast] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Geo-Shipping Pin Checker
  const [checkPin, setCheckPin] = useState("641602"); // default Tirupur
  const [shippingResult, setShippingResult] = useState(() =>
    calculateGeoShipping("641602", p.price),
  );

  // Reviews
  const [reviews, setReviews] = useState<ProductReview[]>(() => ReviewsStore.getReviews(p.slug));
  const [newReviewAuthor, setNewReviewAuthor] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    setIsWishlisted(WishlistStore.has(p.slug));
    setReviews(ReviewsStore.getReviews(p.slug));
    setSelectedImage(allImages[0]);
    const firstVariant = p.variants?.[0];
    if (firstVariant) {
      setSelectedVariant(firstVariant);
    }
  }, [p.slug, allImages, p.variants]);

  const uniqueColours = Array.from(new Set(p.variants?.map((v) => v.colour) || []));
  const uniqueSizes = Array.from(new Set(p.variants?.map((v) => v.size) || []));
  const liveStock = StockStore.getVariantStock(selectedVariant.id, selectedVariant.stock);
  const gst = calculateGstBreakdown(selectedVariant.price, selectedVariant.mrp, qty);

  const handleSelectColour = (col: string) => {
    const match =
      p.variants?.find((v) => v.colour === col && v.size === selectedVariant.size) ||
      p.variants?.find((v) => v.colour === col);
    if (match) {
      setSelectedVariant(match);
      if (match.image) setSelectedImage(match.image);
      setQty(1);
    }
  };

  const handleSelectSize = (size: string) => {
    const match =
      p.variants?.find((v) => v.size === size && v.colour === selectedVariant.colour) ||
      p.variants?.find((v) => v.size === size);
    if (match) {
      setSelectedVariant(match);
      setQty(1);
    }
  };

  const handleAddToCart = () => {
    CartStore.addItem({
      productId: p.slug,
      productSlug: p.slug,
      productName: p.name,
      brandId: p.brandId,
      brandName: p.brandName,
      variantId: selectedVariant.id,
      sku: selectedVariant.sku,
      size: selectedVariant.size,
      colour: selectedVariant.colour,
      colourHex: selectedVariant.colourHex,
      image: selectedVariant.image || p.image,
      price: selectedVariant.price,
      mrp: selectedVariant.mrp,
      quantity: qty,
      maxStock: liveStock,
    });

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate({ to: "/checkout" });
  };

  const handleToggleWishlist = () => {
    const nowHas = WishlistStore.toggle(p.slug);
    setIsWishlisted(nowHas);
  };

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateGeoShipping(checkPin, selectedVariant.price * qty);
    setShippingResult(res);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    ReviewsStore.addReview({
      productId: p.slug,
      author: newReviewAuthor,
      city: "Verified Shopper",
      rating: newReviewRating,
      title: `${newReviewRating} Star Kidswear Feedback`,
      comment: newReviewComment,
      verifiedPurchase: true,
    });

    setReviews(ReviewsStore.getReviews(p.slug));
    setNewReviewAuthor("");
    setNewReviewComment("");
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 3000);
  };

  // Related products from same brand or category
  const relatedProducts = products
    .filter(
      (other) =>
        other.slug !== p.slug && (other.brandId === p.brandId || other.gender === p.gender),
    )
    .slice(0, 4);

  return (
    <div className="product-detail-page bg-[#EAE6DE] text-[#252525]">
      {/* ═══ BREADCRUMB & BACK NAVIGATION ═══ */}
      <section className="bg-[#EAE6DE] pt-28 pb-16 sm:pb-24">
        <div className="page-shell">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.14em] text-[#226192] hover:text-[#EF8557] transition-colors"
            >
              <ArrowLeft className="size-4" /> Back to Product Catalog
            </Link>
            <div className="flex items-center gap-2 text-[#252525]/60">
              <Link to="/" className="hover:text-[#226192]">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/brands/$slug"
                params={{ slug: p.brandId }}
                className="hover:text-[#226192] font-semibold text-[#EF8557]"
              >
                {p.brandName}
              </Link>
              <span>/</span>
              <span className="text-[#252525] font-semibold truncate max-w-[200px]">{p.name}</span>
            </div>
          </div>

          {/* ═══ TWO-COLUMN PRODUCT HERO LAYOUT ═══ */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* LEFT COLUMN: MULTI-IMAGE GALLERY WITH ZOOM & THUMBNAILS */}
            <div className="space-y-4 lg:col-span-7">
              {/* Main Image Frame */}
              <div className="relative border border-[#226192]/20 bg-[#FFFFFF] p-2 shadow-sm">
                <div className="aspect-[4/5] overflow-hidden bg-[#EAE6DE] relative group">
                  <img
                    src={selectedImage}
                    width={1024}
                    height={1280}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-crosshair"
                    alt={p.name}
                  />
                  <div className="absolute left-3 top-3 border border-[#226192] bg-[#226192] px-2.5 py-1 text-[10px] font-bold text-[#FFFFFF] uppercase tracking-wider">
                    {p.brandName}
                  </div>
                  {p.discountPercent > 0 && (
                    <div className="absolute right-3 top-3 border border-[#EF8557] bg-[#EF8557] px-2.5 py-1 text-[10px] font-bold text-[#FFFFFF] uppercase tracking-wider">
                      {p.discountPercent}% OFF
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer overflow-hidden border p-1 transition-all ${
                      selectedImage === img
                        ? "border-[#EF8557] ring-2 ring-[#EF8557]"
                        : "border-[#226192]/20 bg-[#FFFFFF] hover:border-[#226192]"
                    }`}
                  >
                    <div className="aspect-square bg-[#EAE6DE]">
                      <img src={img} className="size-full object-cover" alt="" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: BUY BOX, VARIANTS, SIZE GUIDE & ACTIONS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
                {/* Brand & SKU */}
                <div className="flex items-center justify-between border-b border-[#226192]/10 pb-3">
                  <Link
                    to="/brands/$slug"
                    params={{ slug: p.brandId }}
                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF8557] hover:underline"
                  >
                    {p.brandName}
                  </Link>
                  <span className="text-[11px] font-mono text-[#252525]/60">
                    SKU: {selectedVariant.sku}
                  </span>
                </div>

                {/* Product Title */}
                <h1 className="mt-3 font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-[#226192]">
                  {p.name}
                </h1>

                {/* Rating & Review Header */}
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <div className="flex items-center text-[#EF8557]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-[#226192]">{p.rating} / 5.0</span>
                  <span className="text-[#252525]/50">({reviews.length} Verified Reviews)</span>
                </div>

                {/* Pricing Box */}
                <div className="mt-4 flex items-baseline gap-3 border-y border-[#226192]/10 py-3">
                  <span className="text-3xl font-extrabold text-[#226192]">
                    ₹{selectedVariant.price}
                  </span>
                  {selectedVariant.mrp > selectedVariant.price && (
                    <span className="text-sm text-[#252525]/50 line-through">
                      MRP ₹{selectedVariant.mrp}
                    </span>
                  )}
                  <span className="rounded-none border border-[#EF8557] bg-[#EF8557]/10 px-2 py-0.5 text-xs font-bold text-[#EF8557]">
                    Save ₹{selectedVariant.mrp - selectedVariant.price} (
                    {Math.round(
                      ((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100,
                    )}
                    % OFF)
                  </span>
                </div>
                <p className="text-[10px] text-[#252525]/60 mt-1">
                  Inclusive of all taxes. Free shipping across India on orders above ₹999.
                </p>

                {/* ═══ COLOUR VARIANT SELECTOR ═══ */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#226192]">
                    <span>
                      Select Colour:{" "}
                      <strong className="text-[#EF8557]">{selectedVariant.colour}</strong>
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {uniqueColours.map((col) => {
                      const match = p.variants?.find((v) => v.colour === col);
                      const isSelected = selectedVariant.colour === col;
                      return (
                        <button
                          key={col}
                          type="button"
                          onClick={() => handleSelectColour(col)}
                          className={`flex items-center gap-2 border px-3 py-1.5 text-xs font-semibold transition-all ${
                            isSelected
                              ? "border-[#226192] bg-[#226192] text-[#FFFFFF]"
                              : "border-[#226192]/20 bg-[#FFFFFF] text-[#252525] hover:border-[#EF8557]"
                          }`}
                        >
                          <span
                            className="size-3.5 rounded-full border border-black/20"
                            style={{ backgroundColor: match?.colourHex || "#226192" }}
                          />
                          <span>{col}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ═══ SIZE VARIANT SELECTOR & SIZE CHART ═══ */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#226192]">
                    <span>
                      Select Size:{" "}
                      <strong className="text-[#EF8557]">{selectedVariant.size}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSizeGuideOpen(true)}
                      className="flex items-center gap-1 text-[11px] font-bold text-[#EF8557] hover:underline"
                    >
                      <Ruler className="size-3" />
                      <span>Size Guide</span>
                    </button>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {uniqueSizes.map((s) => {
                      const match =
                        p.variants?.find(
                          (v) => v.size === s && v.colour === selectedVariant.colour,
                        ) || p.variants?.find((v) => v.size === s);
                      const isSelected = selectedVariant.size === s;
                      const variantStock = match
                        ? StockStore.getVariantStock(match.id, match.stock)
                        : 0;
                      const inStock = variantStock > 0;

                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleSelectSize(s)}
                          disabled={!inStock}
                          className={`min-w-[48px] border px-3 py-2 text-xs font-bold transition-all ${
                            isSelected
                              ? "border-[#226192] bg-[#226192] text-[#FFFFFF]"
                              : inStock
                                ? "border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557]"
                                : "border-dashed border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed line-through"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Stock Availability Indicator */}
                <div className="mt-4 text-xs font-semibold">
                  {liveStock > 5 ? (
                    <span className="text-emerald-700 flex items-center gap-1.5">
                      <Check className="size-4" /> Available in Company Stock ({liveStock} garments
                      ready to reserve)
                    </span>
                  ) : liveStock > 0 ? (
                    <span className="text-amber-600 font-bold flex items-center gap-1.5">
                      ⚠ Only {liveStock} left in stock — reserve soon!
                    </span>
                  ) : (
                    <span className="text-rose-600 font-bold">
                      ✕ Selected size variant currently out of stock.
                    </span>
                  )}
                </div>

                {/* Live Price, MRP & GST Tax Breakdown Panel */}
                <div className="mt-5 border border-[#226192]/25 bg-[#EAE6DE]/50 p-4 text-xs space-y-1.5">
                  <div className="flex items-center justify-between border-b border-[#226192]/15 pb-1.5">
                    <span className="font-bold uppercase tracking-wider text-[#226192]">
                      Price & GST Breakdown ({qty} {qty === 1 ? "Unit" : "Units"})
                    </span>
                    <span className="font-mono text-[10px] text-[#EF8557] font-bold">
                      GST Slab: {gst.gstRate}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#252525]/75">Total MRP Value:</span>
                    <span className="line-through text-[#252525]/60">₹{gst.totalMrp}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Promotional Offer Savings ({gst.discountPercent}% Off):</span>
                    <span>-₹{gst.discountAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#252525]/75">Taxable Base Value (Excl. GST):</span>
                    <span>₹{gst.taxableValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#252525]/75">
                      CGST ({gst.gstRate / 2}%) + SGST ({gst.gstRate / 2}%):
                    </span>
                    <span>
                      ₹{gst.cgstAmount} + ₹{gst.sgstAmount} = ₹{gst.gstAmount}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-[#226192]/20 pt-2 font-extrabold text-sm text-[#226192]">
                    <span>Final Booking Price (Incl. GST):</span>
                    <span>₹{gst.totalPrice}</span>
                  </div>
                </div>

                {/* Quantity and Booking Actions */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center border border-[#226192]/30 bg-[#FFFFFF] shrink-0">
                    <button
                      type="button"
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="px-3 py-2 text-base font-bold text-[#226192] hover:bg-[#EAE6DE]"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-sm font-bold">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(Math.min(liveStock, qty + 1))}
                      className="px-3 py-2 text-base font-bold text-[#226192] hover:bg-[#EAE6DE]"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    disabled={liveStock === 0}
                    className="flex-1 rounded-none border border-[#226192] bg-[#226192] h-11 font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557] hover:border-[#EF8557]"
                  >
                    {addedToast ? "✓ Reserved in List!" : "Add to Booking List"}
                  </Button>

                  <Button
                    onClick={handleBuyNow}
                    disabled={liveStock === 0}
                    className="rounded-none border border-[#EF8557] bg-[#EF8557] h-11 px-6 font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557]/90"
                  >
                    Book Stock Now
                  </Button>

                  <button
                    type="button"
                    onClick={handleToggleWishlist}
                    className={`flex size-11 items-center justify-center border transition-all ${
                      isWishlisted
                        ? "border-[#EF8557] bg-[#EF8557] text-[#FFFFFF]"
                        : "border-[#226192]/30 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
                    }`}
                    title={isWishlisted ? "In Wishlist" : "Save to Wishlist"}
                  >
                    <Heart className={`size-5 ${isWishlisted ? "fill-current" : ""}`} />
                  </button>
                </div>

                <p className="mt-3 text-[11px] text-[#226192]/80 font-medium">
                  ✦ Promotional Booking: No payment gateway needed. Confirm your booking to hold
                  stock & notify <strong>{COMPANY_OWNER_EMAIL}</strong>.
                </p>

                {/* ═══ PIN CODE GEO-SHIPPING ESTIMATOR ═══ */}
                <div className="mt-8 border-t border-[#226192]/15 pt-6">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#226192]">
                    <MapPin className="size-3.5 text-[#EF8557]" />
                    <span>Check Delivery & Geo-Shipping Fee</span>
                  </span>

                  <form onSubmit={handleCalculateShipping} className="mt-2.5 flex gap-2">
                    <Input
                      type="text"
                      maxLength={6}
                      value={checkPin}
                      onChange={(e) => setCheckPin(e.target.value)}
                      placeholder="Enter 6-digit PIN Code..."
                      className="h-10 rounded-none border-[#226192]/30 bg-[#FFFFFF] text-xs font-mono"
                    />
                    <Button
                      type="submit"
                      variant="outline"
                      className="h-10 rounded-none border-[#226192] text-xs font-bold uppercase text-[#226192] hover:bg-[#226192] hover:text-[#FFFFFF]"
                    >
                      Check
                    </Button>
                  </form>

                  {shippingResult && (
                    <div className="mt-3 border border-[#226192]/20 bg-[#EAE6DE]/60 p-3 text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-[#226192]">
                        <span>
                          Delivery to {shippingResult.city} ({shippingResult.pinCode}):
                        </span>
                        <span className="text-[#EF8557]">
                          {shippingResult.isFreeShipping
                            ? "FREE"
                            : `₹${shippingResult.discountedFee}`}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#252525]/75">
                        Zone: {shippingResult.zoneName} · Est: {shippingResult.estimatedDays}
                      </p>
                      {!shippingResult.isFreeShipping && (
                        <p className="text-[10px] text-emerald-700 font-semibold">
                          Add ₹
                          {Math.max(
                            0,
                            shippingResult.freeShippingThreshold - selectedVariant.price * qty,
                          )}{" "}
                          more for 100% Free Shipping!
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Quality Guarantees */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#226192]/15 pt-4 text-[11px] text-[#252525]/75">
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 text-emerald-600 shrink-0" />
                    <span>100% Combed Cotton</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Nickel-Free Child Snaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 text-emerald-600 shrink-0" />
                    <span>7-Day Easy Returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Tirupur Factory Direct</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ TABS: SPECIFICATIONS, FABRIC & CARE, SIZE & FIT ═══ */}
          <div className="mt-16 border-t border-[#226192]/20 pt-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#226192]">
                    Product Description & Craft
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#252525]/85">{p.description}</p>
                </div>

                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#226192]">
                    Technical Specifications
                  </h3>
                  <div className="mt-4 border border-[#226192]/20 bg-[#FFFFFF]">
                    <table className="w-full text-xs">
                      <tbody className="divide-y divide-[#226192]/10">
                        {p.specifications.map(([label, val]) => (
                          <tr key={label}>
                            <td className="p-3 font-bold text-[#226192] w-1/3 bg-[#EAE6DE]/30">
                              {label}
                            </td>
                            <td className="p-3 text-[#252525]/85">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6">
                  <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase text-[#226192]">
                    Fabric & Wash Care
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-[#252525]/80">
                    <li>✦ Fabric: {p.fabric}</li>
                    <li>✦ Dyeing: {p.colours}</li>
                    <li>✦ Machine wash inside-out at 30°C on gentle cycle</li>
                    <li>✦ Use gentle baby detergent; do not bleach</li>
                    <li>✦ Iron on reverse side; avoid ironing directly over prints</li>
                  </ul>
                </div>

                <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6">
                  <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase text-[#226192]">
                    Shipping & Returns
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">
                    Dispatched within 24 hours directly from our central warehouse in Tirupur, Tamil
                    Nadu. Estimated transit 1–3 days within South India and 3–6 days nationwide.
                    7-day hassle-free size exchange policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ CUSTOMER REVIEWS & RATINGS SECTION ═══ */}
          <div className="mt-20 border-t border-[#226192]/20 pt-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                  Verified Shopper Feedback
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192] mt-1">
                  Customer Reviews ({reviews.length})
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#226192]">
                <Star className="size-5 fill-[#EF8557] text-[#EF8557]" />
                <span className="text-xl">{p.rating} out of 5</span>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              {/* Existing Reviews List */}
              <div className="lg:col-span-7 space-y-4">
                {reviews.length > 0 ? (
                  reviews.map((rev) => (
                    <div key={rev.id} className="border border-[#226192]/20 bg-[#FFFFFF] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-xs text-[#226192]">{rev.author}</span>
                          <span className="text-[10px] text-emerald-700 font-semibold ml-2">
                            ✓ Verified Purchase
                          </span>
                        </div>
                        <span className="text-[10px] text-[#252525]/50">{rev.date}</span>
                      </div>
                      <div className="mt-1 flex items-center text-[#EF8557]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="size-3 fill-current" />
                        ))}
                      </div>
                      <h4 className="mt-2 text-xs font-bold text-[#252525]">{rev.title}</h4>
                      <p className="mt-1 text-xs text-[#252525]/80 leading-relaxed">
                        {rev.comment}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-[#252525]/70 italic">
                    No reviews yet for this style. Be the first to review!
                  </p>
                )}
              </div>

              {/* Submit a Review Form */}
              <div className="lg:col-span-5">
                <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6">
                  <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase text-[#226192]">
                    Write a Review
                  </h4>
                  <p className="text-xs text-[#252525]/70 mt-1">
                    Share your experience with sizing, softness, and print longevity.
                  </p>

                  {reviewSubmitted ? (
                    <div className="mt-4 border border-emerald-600 bg-emerald-50 p-3 text-xs text-emerald-800 font-semibold">
                      ✓ Thank you for your review! It has been posted to this garment page.
                    </div>
                  ) : (
                    <form onSubmit={handleAddReview} className="mt-4 space-y-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Your Name *
                        </label>
                        <Input
                          required
                          value={newReviewAuthor}
                          onChange={(e) => setNewReviewAuthor(e.target.value)}
                          placeholder="e.g. Priya Sundaram"
                          className="h-9 rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Rating *
                        </label>
                        <select
                          value={newReviewRating}
                          onChange={(e) => setNewReviewRating(Number(e.target.value))}
                          className="w-full h-9 border border-[#226192]/30 bg-[#FFFFFF] px-2 text-xs font-semibold text-[#226192]"
                        >
                          <option value={5}>★★★★★ (5 Stars - Outstanding)</option>
                          <option value={4}>★★★★☆ (4 Stars - Very Good)</option>
                          <option value={3}>★★★☆☆ (3 Stars - Average)</option>
                          <option value={2}>★★☆☆☆ (2 Stars - Disappointed)</option>
                          <option value={1}>★☆☆☆☆ (1 Star - Poor)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Review Comments *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={newReviewComment}
                          onChange={(e) => setNewReviewComment(e.target.value)}
                          placeholder="Tell parents how it fits, fabric feel, or child's reaction..."
                          className="w-full border border-[#226192]/30 p-2 text-xs"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
                      >
                        Submit Verified Review
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ RELATED PRODUCTS / MORE FROM THIS BRAND ═══ */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 border-t border-[#226192]/20 pt-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                    Curated Pairings
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192] mt-1">
                    More From {p.brandName}
                  </h3>
                </div>
                <Link
                  to="/brands/$slug"
                  params={{ slug: p.brandId }}
                  className="text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557] flex items-center gap-1"
                >
                  <span>Explore Brand Store</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.slug} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Size Guide Modal */}
      <SizeGuideModal
        category={p.sizeChartCategory}
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </div>
  );
}
