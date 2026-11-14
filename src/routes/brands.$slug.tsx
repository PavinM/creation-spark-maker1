import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Filter,
  Sparkles,
  Check,
  ShieldCheck,
  Package,
  ClipboardList,
  Compass,
  Layers,
  Award,
} from "lucide-react";
import { useState } from "react";
import { ProductCard, QuickViewModal, Reveal } from "@/components/site";
import { brandsList, getBrandById, products, images, CartStore, type Product } from "@/lib/content";
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

  // Kids Korner Lookbook Switcher State
  const [kidsKornerLook, setKidsKornerLook] = useState<"botanical" | "sunset">("botanical");
  const [kidsKornerAdded, setKidsKornerAdded] = useState(false);

  // Boy Munna Costume Switcher State
  const [munnaCostume, setMunnaCostume] = useState<"safari" | "space" | "dino">("safari");
  const [munnaAdded, setMunnaAdded] = useState(false);

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
    return 0;
  });

  // Handle Kids Korner Look Add
  const handleAddKidsKornerLook = () => {
    if (kidsKornerLook === "botanical") {
      CartStore.addItem({
        productId: "kk-cord-881",
        variantId: "kk-cord-881-2-3y",
        productSlug: "botanical-summer-co-ord-set",
        productName: "Kids Korner Botanical Summer Co-ord Set",
        brandId: "kids-korner",
        brandName: "Kids Korner",
        sku: "KK-CORD-881",
        size: "2-3Y",
        colour: "Oat & Olive",
        colourHex: "#8B9A6F",
        price: 499,
        mrp: 799,
        quantity: 1,
        maxStock: 25,
        image: images.detail,
      });
    } else {
      CartStore.addItem({
        productId: "kk-sunset-902",
        variantId: "kk-sunset-902-3-4y",
        productSlug: "kids-korner-organic-everyday-crew-tees",
        productName: "Kids Korner Sunset Ribbed Daywear Set",
        brandId: "kids-korner",
        brandName: "Kids Korner",
        sku: "KK-SUNSET-902",
        size: "3-4Y",
        colour: "Warm Terracotta",
        colourHex: "#C86D51",
        price: 549,
        mrp: 849,
        quantity: 1,
        maxStock: 20,
        image: images.printedSet,
      });
    }
    setKidsKornerAdded(true);
    setTimeout(() => setKidsKornerAdded(false), 2500);
  };

  // Handle Boy Munna Costume Add
  const handleAddMunnaCostume = () => {
    const titles = {
      safari: "Munna Jungle Safari Graphic Tee & Cargo Shorts",
      space: "Munna Rocket Launch Glow-in-the-Dark Playset",
      dino: "Munna Dino Roar Heavyweight Jogger Set",
    };
    CartStore.addItem({
      productId: `munna-${munnaCostume}`,
      variantId: `munna-${munnaCostume}-3y`,
      productSlug: "boy-munna-dino-explorer-playset",
      productName: titles[munnaCostume],
      brandId: "boy-munna",
      brandName: "Boy Munna",
      sku: `BM-${munnaCostume.toUpperCase()}-01`,
      size: "3Y",
      colour: "Character Print",
      colourHex: "#EF8557",
      price: 499,
      mrp: 799,
      quantity: 1,
      maxStock: 30,
      image: images.hero,
    });
    setMunnaAdded(true);
    setTimeout(() => setMunnaAdded(false), 2500);
  };

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ 1. BRAND HERO BANNER ═══ */}
      <section className="relative overflow-hidden border-b border-[#D8D2C5] bg-[#EAE6DE] pt-28 pb-16 sm:pt-36 sm:pb-24">
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

                <h1 className="mt-4 font-serif text-4xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
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
                    100% GOTS Bio-Wash Cotton
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

      {/* ═══ 2. KIDS KORNER OUTFIT-SWITCHING COORDINATOR ═══ */}
      {brand.id === "kids-korner" && (
        <section className="w-full py-16 px-4 sm:px-8 bg-white border-b border-[#D8D2C5]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#EF8557]">
                  Interactive Lookbook
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] mt-1">
                  Outfit-Switching Coordinator
                </h2>
              </div>
              <div className="flex items-center bg-[#EAE6DE] p-1 text-xs font-bold uppercase">
                <button
                  type="button"
                  onClick={() => setKidsKornerLook("botanical")}
                  className={`px-4 py-2 transition-all ${
                    kidsKornerLook === "botanical"
                      ? "bg-[#226192] text-white shadow-sm"
                      : "text-[#252525] hover:text-[#226192]"
                  }`}
                >
                  Botanical Garden Co-ord
                </button>
                <button
                  type="button"
                  onClick={() => setKidsKornerLook("sunset")}
                  className={`px-4 py-2 transition-all ${
                    kidsKornerLook === "sunset"
                      ? "bg-[#226192] text-white shadow-sm"
                      : "text-[#252525] hover:text-[#226192]"
                  }`}
                >
                  Sunset Ribbed Daywear
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F3EB] p-8 border border-[#D8D2C5]">
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-white shadow-md">
                <img
                  src={kidsKornerLook === "botanical" ? images.detail : images.printedSet}
                  alt="Kids Korner Coordinator Set"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-xs font-mono text-[#717880] uppercase">
                  {kidsKornerLook === "botanical" ? "SKU: KK-CORD-881" : "SKU: KK-SUNSET-902"} ·
                  Stock: In-Stock Tirupur
                </span>
                <h3 className="font-serif text-3xl text-[#252525]">
                  {kidsKornerLook === "botanical"
                    ? "Botanical Summer Co-ord Set"
                    : "Sunset Ribbed Daywear Set"}
                </h3>
                <p className="text-sm text-[#41474f] leading-relaxed">
                  {kidsKornerLook === "botanical"
                    ? "Smocked Top + Relaxed Trouser in 100% GOTS certified organic combed cotton with natural shell buttons."
                    : "Ultra-breathable rib-knit tee and elasticated lounge bottoms crafted from 180 GSM bio-wash cotton."}
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[#252525]">
                    {kidsKornerLook === "botanical" ? "₹499" : "₹549"}
                  </span>
                  <span className="text-xs uppercase bg-[#EF8557]/10 text-[#EF8557] px-2 py-1 font-bold">
                    Wholesale Pack Available
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddKidsKornerLook}
                  className="w-full bg-[#EF8557] text-white py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-[#d97346] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ClipboardList className="size-4" />
                  <span>
                    {kidsKornerAdded ? "Added to Booking List ✓" : "Add Coordinate Set to Booking"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ 3. BOY MUNNA CHARACTER COSTUME SWITCHER ═══ */}
      {brand.id === "boy-munna" && (
        <section className="w-full bg-white py-16 px-4 sm:px-8 border-b border-[#D8D2C5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EF8557]">
                Original Character IP
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252525] mt-1">
                Interactive Character Outfit Switcher
              </h2>
              <p className="text-xs text-[#717880] mt-1 uppercase tracking-wider">
                Select Munna&apos;s adventure persona to preview garment details
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-8">
              {(
                [
                  { id: "safari", label: "Safari Explorer" },
                  { id: "space", label: "Space Cadet" },
                  { id: "dino", label: "Dino Tracker" },
                ] as const
              ).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setMunnaCostume(c.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase transition-all ${
                    munnaCostume === c.id
                      ? "bg-[#226192] text-white shadow-sm"
                      : "bg-[#F7F3EB] text-[#252525] hover:bg-[#EAE6DE]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#F7F3EB] p-8 border border-[#D8D2C5]">
              <div className="aspect-[4/3] bg-white overflow-hidden shadow-md">
                <img
                  src={images.hero}
                  alt="Munna Character Persona"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-[#EF8557] uppercase">
                  Active Costume Set
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#252525] mt-1">
                  {munnaCostume === "safari" && "Munna Jungle Safari Graphic Tee & Cargo Shorts"}
                  {munnaCostume === "space" && "Munna Rocket Launch Glow-in-the-Dark Playset"}
                  {munnaCostume === "dino" && "Munna Dino Roar Heavyweight Jogger Set"}
                </h3>
                <p className="text-sm text-[#717880] mt-2 leading-relaxed">
                  Engineered with 180 GSM combed organic cotton, featuring adjustable waistbands,
                  scratch-free tagless necklines, and vibrant non-toxic water eco-inks.
                </p>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[#252525]">₹499</span>
                  <span className="text-xs text-[#717880] line-through">₹799</span>
                  <span className="text-xs font-bold text-[#EF8557] uppercase bg-[#EF8557]/10 px-2 py-0.5">
                    Includes Comic
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddMunnaCostume}
                  className="mt-4 bg-[#EF8557] hover:bg-[#d97346] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <ClipboardList className="size-4" />
                  <span>
                    {munnaAdded ? "Added to Booking List ✓" : "Add Look to Booking List — ₹499"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ 4. 180 GSM BIO-WASH STANDARD & SPECIFICATIONS ═══ */}
      <section className="border-b border-[#D8D2C5] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="page-shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#D8D2C5] p-6 bg-[#F7F3EB]">
              <ShieldCheck className="size-8 text-[#226192] mb-3" />
              <h4 className="font-serif text-lg font-bold text-[#252525]">
                180 GSM Bio-Wash Standard
              </h4>
              <p className="text-xs text-[#717880] mt-2 leading-relaxed">
                Every fabric roll is enzyme-washed to remove impurities and fiber prickliness,
                ensuring a cloud-like touch against sensitive young skin.
              </p>
            </div>

            <div className="border border-[#D8D2C5] p-6 bg-[#F7F3EB]">
              <Sparkles className="size-8 text-[#EF8557] mb-3" />
              <h4 className="font-serif text-lg font-bold text-[#252525]">Zero-Rub Eco Inks</h4>
              <p className="text-xs text-[#717880] mt-2 leading-relaxed">
                Oeko-Tex Standard 100 certified water-based inks that never crack, stiffen, or leach
                chemicals even after 50+ household wash cycles.
              </p>
            </div>

            <div className="border border-[#D8D2C5] p-6 bg-[#F7F3EB]">
              <Package className="size-8 text-[#226192] mb-3" />
              <h4 className="font-serif text-lg font-bold text-[#252525]">
                Tirupur Mill Direct Stock
              </h4>
              <p className="text-xs text-[#717880] mt-2 leading-relaxed">
                Direct allocation from our 14/2 Asher Nagar facility with instant booking references
                and automated dispatch notification to corporate stock desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. BRAND CATALOGUE BROWSING & FILTERS ═══ */}
      <section className="py-16 sm:py-24">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="label-track mb-1 flex items-center gap-2 text-[#EF8557]">
                <span className="size-1.5 rounded-full bg-[#EF8557]" />
                Catalogue Collection
              </p>
              <h2 className="font-serif text-3xl font-extrabold uppercase text-[#226192]">
                {brand.name} Garment Range ({brandProducts.length} Styles)
              </h2>
            </div>

            {/* Sort Picker */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-[#252525]/70">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#D8D2C5] bg-[#FFFFFF] px-3 py-1.5 font-bold text-[#226192] focus:outline-none focus:border-[#226192]"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#D8D2C5] pb-6 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold uppercase transition-all ${
                  activeCategory === cat
                    ? "border border-[#226192] bg-[#226192] text-white"
                    : "border border-[#D8D2C5] bg-white text-[#252525] hover:border-[#226192]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {sortedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} onQuickView={setQuickViewProduct} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-[#717880]">
              <p className="text-base font-semibold">
                No garments match &ldquo;{activeCategory}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-4 border border-[#226192] bg-[#226192] px-4 py-2 text-xs font-bold uppercase text-white hover:bg-[#EF8557] transition-colors"
              >
                Show All {brand.name} Styles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}
