import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Filter,
  Sparkles,
  Star,
  SlidersHorizontal,
  Check,
  ShieldCheck,
  Package,
} from "lucide-react";
import { useState } from "react";
import { ProductCard, QuickViewModal, Reveal, SectionHeading } from "@/components/site";
import { brandsList, getBrandById, products, type Product } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/brands/$slug")({
  loader: ({ params }) => {
    const brand = getBrandById(params.slug);
    if (!brand) throw notFound();
    return brand;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} Kidswear | Official Brand Store`
          : "Brand Not Found | Kids Korner Platform",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Explore specialized kidswear collection.",
      },
      { property: "og:title", content: loaderData?.name ?? "Brand Store" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BrandLandingPage,
});

function BrandLandingPage() {
  const brand = Route.useLoaderData();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Products belonging to this brand
  const brandProducts = products.filter((p) => p.brandId === brand.id);

  // Categories available for this brand
  const categories = ["All", ...brand.featuredCategories];

  // Filtering
  const filteredProducts = brandProducts.filter((p) => {
    if (activeCategory === "All") return true;
    return (
      p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
    );
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "discount") return b.discountPercent - a.discountPercent;
    return 0; // default featured
  });

  const brandNewArrivals = brandProducts.filter((p) => p.isNewArrival);
  const brandBestSellers = brandProducts.filter((p) => p.isBestSeller);

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ 1. BRAND HERO BANNER ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="page-shell">
          <div className="mb-6 flex items-center justify-between">
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#226192] hover:text-[#EF8557] transition-colors"
            >
              <ArrowLeft className="size-4" /> Back to 4 Brands Directory
            </Link>
            <span className="text-xs uppercase tracking-[0.14em] text-[#252525]/70">
              Muthu International Portfolio
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-2.5 text-[#EF8557]">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <p className="label-track text-[#EF8557]">{brand.role}</p>
                </div>

                <h1 className="mt-4 font-['Space_Grotesk'] text-4xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
                  {brand.name}
                </h1>

                <p className="mt-3 font-serif italic text-lg sm:text-xl text-[#EF8557]">
                  &ldquo;{brand.tagline}&rdquo;
                </p>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#252525]/85">
                  {brand.description}
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold">
                  <span className="border border-[#226192] bg-[#226192] px-3 py-1 text-[#FFFFFF]">
                    {brand.badge}
                  </span>
                  <span className="border border-[#226192]/25 bg-[#FFFFFF] px-3 py-1 text-[#226192]">
                    Tirupur Factory Direct
                  </span>
                  <span className="border border-[#226192]/25 bg-[#FFFFFF] px-3 py-1 text-[#226192]">
                    100% Skin-Safe
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Brand Banner Visual */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#226192] bg-[#FFFFFF] p-2 shadow-xl">
                <img
                  src={brand.bannerImage}
                  alt={brand.name}
                  className="aspect-[4/3] size-full object-cover"
                />
                <div className="absolute bottom-4 left-4 border border-[#FFFFFF]/30 bg-[#226192]/90 px-3 py-1 text-[10px] font-bold text-[#FFFFFF] uppercase tracking-wider backdrop-blur-sm">
                  {brand.name} Atelier Lookbook
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. BRAND STORYTELLING SECTION (SPECIAL EMPHASIS FOR BOY MUNNA) ═══ */}
      <section className="border-b border-[#226192]/20 bg-[#FFFFFF] py-16 sm:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
              Brand Story & Philosophy
            </span>
            <h2 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192] sm:text-3xl">
              {brand.id === "boy-munna"
                ? "The Story of Munna — Our Original Registered Character"
                : `The Craftsmanship Behind ${brand.name}`}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#252525]/85 sm:text-base">
              {brand.story}
            </p>

            {brand.id === "boy-munna" && (
              <div className="mt-6 border-l-2 border-[#EF8557] bg-[#EAE6DE]/40 p-4 text-xs text-[#252525]/85">
                <p className="font-semibold text-[#226192]">
                  Registered Trademark & Intellectual Property Notice:
                </p>
                <p className="mt-1">
                  Munna is an original character registered by our business. Every T-shirt, coord
                  set, and comic illustration is officially produced under authorized rights from
                  our Tirupur studio.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 3. BRAND CATALOGUE BROWSING & FILTERS ═══ */}
      <section className="py-16 sm:py-24">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="label-track mb-1 flex items-center gap-2 text-[#EF8557]">
                <span className="size-1.5 rounded-full bg-[#EF8557]" />
                Catalogue Collection
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl font-extrabold uppercase text-[#226192]">
                {brand.name} Garment Range ({brandProducts.length} Styles)
              </h2>
            </div>

            {/* Sort Picker */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-[#252525]/70">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#226192]/30 bg-[#FFFFFF] px-3 py-1.5 font-bold text-[#226192] focus:outline-none focus:border-[#226192]"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#226192]/15 pb-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#226192] text-[#FFFFFF]"
                    : "border border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-12 text-center">
              <p className="text-sm text-[#252525]/70">
                No styles found in this category for {brand.name}.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setActiveCategory("All")}
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ═══ 4. BRAND PROMOTIONAL / WHOLESALE CALLOUT ═══ */}
      <section className="border-t border-[#226192]/20 bg-[#226192] py-14 text-[#FFFFFF]">
        <div className="page-shell flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
              B2B & Retail Distribution
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#FFFFFF] mt-1">
              Interested in Bulk Orders for {brand.name}?
            </h3>
            <p className="text-xs text-[#EAE6DE]/85 mt-2 max-w-xl">
              We supply retail chains, multi-brand outlets, and distributors nationwide directly
              from our Tirupur factories.
            </p>
          </div>
          <Link
            to="/wholesale"
            className="shrink-0 border border-[#EF8557] bg-[#EF8557] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557]/90 transition-colors"
          >
            Enquire for {brand.name}
          </Link>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
