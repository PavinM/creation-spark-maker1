import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ProductCard, SectionHeading, Reveal, CTASection, QuickViewModal } from "@/components/site";
import { products, brandsList, type Product } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  SlidersHorizontal,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/products/")({
  validateSearch: (
    search: Record<string, unknown>,
  ): {
    filter?: string | undefined;
    brand?: string | undefined;
    category?: string | undefined;
    search?: string | undefined;
  } => {
    const out: {
      filter?: string | undefined;
      brand?: string | undefined;
      category?: string | undefined;
      search?: string | undefined;
    } = {};
    if (typeof search["filter"] === "string" && search["filter"]) {
      out.filter = search["filter"];
    }
    if (typeof search["brand"] === "string" && search["brand"]) {
      out.brand = search["brand"];
    }
    if (typeof search["category"] === "string" && search["category"]) {
      out.category = search["category"];
    }
    if (typeof search["search"] === "string" && search["search"]) {
      out.search = search["search"];
    }
    return out;
  },
  head: () => ({
    meta: [
      { title: "Kidswear Catalogue & Online Shop | Kids Korner Multi-Brand" },
      {
        name: "description",
        content:
          "Browse our complete children's garment catalogue across Kids Korner, X-Zone, H&D Club, and Boy Munna. Soft combed cotton, child-safe bio dyes, manufactured in Tirupur, India.",
      },
      { property: "og:title", content: "Kids Korner Kidswear Catalogue" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const searchParams = Route.useSearch();

  // Filter States
  const [selectedBrand, setSelectedBrand] = useState<string>(searchParams.brand || "All");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.category
      ? searchParams.category === "t-shirts"
        ? "T-Shirts"
        : searchParams.category === "sleepwear"
          ? "Sleepwear"
          : searchParams.category === "joggers"
            ? "Joggers"
            : searchParams.category
      : "All",
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All");
  const [selectedSize, setSelectedSize] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.search || "");
  const [sortBy, setSortBy] = useState<string>(
    searchParams.filter === "new"
      ? "newest"
      : searchParams.filter === "bestseller"
        ? "bestseller"
        : "featured",
  );

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Available Sizes in catalog
  const allSizes = ["12–18M", "2–3Y", "4–5Y", "6–7Y", "8–9Y", "10–12Y", "13–14Y"];

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brandName.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesTags) return false;
      }

      // Brand
      if (selectedBrand !== "All" && p.brandId !== selectedBrand) return false;

      // Gender
      if (selectedGender !== "All") {
        if (selectedGender === "Boys" && p.gender !== "Boys" && p.gender !== "Unisex") return false;
        if (selectedGender === "Girls" && p.gender !== "Girls" && p.gender !== "Unisex")
          return false;
      }

      // Category
      if (selectedCategory !== "All") {
        const cat = selectedCategory.toLowerCase();
        const matches =
          p.category.toLowerCase().includes(cat) ||
          p.tags.some((t) => t.toLowerCase().includes(cat));
        if (!matches) return false;
      }

      // Size
      if (selectedSize !== "All") {
        const hasSize = p.variants?.some((v) => v.size.includes(selectedSize));
        if (!hasSize) return false;
      }

      // Price Range
      if (selectedPriceRange === "under-500" && p.price >= 500) return false;
      if (selectedPriceRange === "500-1000" && (p.price < 500 || p.price > 1000)) return false;
      if (selectedPriceRange === "above-1000" && p.price <= 1000) return false;

      // URL search filters
      if (searchParams.filter === "new" && !p.isNewArrival) return false;
      if (searchParams.filter === "bestseller" && !p.isBestSeller) return false;

      return true;
    });
  }, [
    searchQuery,
    selectedBrand,
    selectedGender,
    selectedCategory,
    selectedSize,
    selectedPriceRange,
    searchParams.filter,
  ]);

  // Sort logic
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "discount") return b.discountPercent - a.discountPercent;
      if (sortBy === "newest") return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === "bestseller") return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0; // featured
    });
  }, [filteredProducts, sortBy]);

  const resetFilters = () => {
    setSelectedBrand("All");
    setSelectedGender("All");
    setSelectedCategory("All");
    setSelectedPriceRange("All");
    setSelectedSize("All");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedBrand !== "All" ||
    selectedGender !== "All" ||
    selectedCategory !== "All" ||
    selectedPriceRange !== "All" ||
    selectedSize !== "All" ||
    searchQuery.trim().length > 0;

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="page-shell">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
              <span className="size-2 rounded-full bg-[#EF8557]" />
              <span>Multi-Brand Online Catalog</span>
            </div>
            <h1 className="mt-4 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-6xl">
              Kidswear Range & Collections.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#252525]/85">
              Explore 100% bio-washed combed cotton children&apos;s garments from Kids Korner,
              X-Zone, H&D Club, and Boy Munna. Select your size, colour variant, and enjoy direct
              geo-wise dispatch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ SHOPPING CATALOGUE LAYOUT ═══ */}
      <section className="py-12 sm:py-16">
        <div className="page-shell">
          {/* Top Control Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#226192]/20 pb-6 mb-8">
            {/* Search Input */}
            <div className="flex items-center gap-2 border border-[#226192]/25 bg-[#FFFFFF] px-3 py-2 flex-1 max-w-md">
              <Search className="size-4 text-[#226192]" />
              <input
                type="text"
                placeholder="Search styles, brands, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-[#252525] placeholder-[#252525]/50 outline-none"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")}>
                  <X className="size-3 text-[#252525]/50" />
                </button>
              )}
            </div>

            {/* Mobile Filter Button & Sorting */}
            <div className="flex items-center gap-3 justify-between md:justify-end">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex items-center gap-1.5 border border-[#226192] bg-[#FFFFFF] px-3.5 py-2 text-xs font-bold uppercase text-[#226192] md:hidden"
              >
                <SlidersHorizontal className="size-3.5" />
                <span>Filters {hasActiveFilters && "•"}</span>
              </button>

              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-[#252525]/70 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#226192]/30 bg-[#FFFFFF] px-3 py-2 font-bold text-[#226192] focus:outline-none"
                >
                  <option value="featured">Featured Styles</option>
                  <option value="newest">Newest First</option>
                  <option value="bestseller">Best Selling</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Customer Rated</option>
                  <option value="discount">Biggest Savings (% Off)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-[260px_1fr] items-start">
            {/* ═══ LEFT SIDEBAR FILTERS ═══ */}
            <aside
              className={`space-y-6 md:block ${
                mobileFilterOpen ? "fixed inset-0 z-50 overflow-y-auto bg-[#EAE6DE] p-6" : "hidden"
              }`}
            >
              {mobileFilterOpen && (
                <div className="flex items-center justify-between border-b border-[#226192]/20 pb-4 mb-4 md:hidden">
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                    Filter Products
                  </h3>
                  <button type="button" onClick={() => setMobileFilterOpen(false)}>
                    <X className="size-5" />
                  </button>
                </div>
              )}

              {/* Reset Action */}
              {hasActiveFilters && (
                <div className="flex items-center justify-between border border-[#EF8557] bg-[#FFFFFF] p-2.5">
                  <span className="text-xs font-bold text-[#EF8557]">Filters Applied</span>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs font-bold text-[#226192] hover:underline"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Brand Filter */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-4">
                <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#226192] border-b border-[#226192]/10 pb-2">
                  Brand Portfolio
                </h4>
                <div className="mt-2.5 space-y-1.5 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === "All"}
                      onChange={() => setSelectedBrand("All")}
                      className="accent-[#226192]"
                    />
                    <span>All 4 Brands ({products.length})</span>
                  </label>
                  {brandsList.map((b) => (
                    <label key={b.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        checked={selectedBrand === b.id}
                        onChange={() => setSelectedBrand(b.id)}
                        className="accent-[#226192]"
                      />
                      <span className="font-medium text-[#252525]">
                        {b.name} ({products.filter((p) => p.brandId === b.id).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-4">
                <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#226192] border-b border-[#226192]/10 pb-2">
                  Gender & Category
                </h4>
                <div className="mt-2.5 space-y-1.5 text-xs">
                  {["All", "Boys", "Girls"].map((g) => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        checked={selectedGender === g}
                        onChange={() => setSelectedGender(g)}
                        className="accent-[#226192]"
                      />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-4">
                <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#226192] border-b border-[#226192]/10 pb-2">
                  Garment Silhouette
                </h4>
                <div className="mt-2.5 space-y-1.5 text-xs">
                  {[
                    "All",
                    "T-Shirts",
                    "Co-Ord Sets",
                    "Sleepwear",
                    "Shorts",
                    "Joggers",
                    "Polos",
                  ].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-[#226192]"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-4">
                <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#226192] border-b border-[#226192]/10 pb-2">
                  Size / Age Range
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedSize("All")}
                    className={`px-2.5 py-1 text-[11px] font-bold border ${
                      selectedSize === "All"
                        ? "bg-[#226192] text-[#FFFFFF] border-[#226192]"
                        : "border-[#226192]/20 bg-[#EAE6DE]/50 text-[#226192]"
                    }`}
                  >
                    All
                  </button>
                  {allSizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-2 py-1 text-[11px] font-semibold border ${
                        selectedSize === s
                          ? "bg-[#226192] text-[#FFFFFF] border-[#226192]"
                          : "border-[#226192]/20 bg-[#FFFFFF] text-[#252525] hover:border-[#EF8557]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-4">
                <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#226192] border-b border-[#226192]/10 pb-2">
                  Price Range
                </h4>
                <div className="mt-2.5 space-y-1.5 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === "All"}
                      onChange={() => setSelectedPriceRange("All")}
                      className="accent-[#226192]"
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === "under-500"}
                      onChange={() => setSelectedPriceRange("under-500")}
                      className="accent-[#226192]"
                    />
                    <span>Under ₹500</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === "500-1000"}
                      onChange={() => setSelectedPriceRange("500-1000")}
                      className="accent-[#226192]"
                    />
                    <span>₹500 to ₹1,000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === "above-1000"}
                      onChange={() => setSelectedPriceRange("above-1000")}
                      className="accent-[#226192]"
                    />
                    <span>Above ₹1,000</span>
                  </label>
                </div>
              </div>

              {mobileFilterOpen && (
                <Button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF]"
                >
                  Apply Filters ({sortedProducts.length} Results)
                </Button>
              )}
            </aside>

            {/* ═══ RIGHT PRODUCT GRID ═══ */}
            <main>
              <div className="mb-4 flex items-center justify-between text-xs text-[#252525]/70">
                <span>
                  Showing <strong className="text-[#226192]">{sortedProducts.length}</strong> styles
                  across our 4 brands
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-[#EF8557] font-semibold hover:underline"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      onQuickView={(p) => setQuickViewProduct(p)}
                    />
                  ))}
                </div>
              ) : (
                <div className="border border-[#226192]/20 bg-[#FFFFFF] p-16 text-center">
                  <p className="font-['Space_Grotesk'] text-lg font-bold text-[#226192]">
                    No garments match your selected filters.
                  </p>
                  <p className="mt-2 text-xs text-[#252525]/70">
                    Try broadening your size, price range or category choices.
                  </p>
                  <Button
                    onClick={resetFilters}
                    className="mt-6 rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </main>
          </div>
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
