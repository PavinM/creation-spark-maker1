import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Percent,
  Star,
  ShoppingBag,
  Heart,
  Ruler,
  Factory,
  Scissors,
  Users,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  BrandCard,
  CTASection,
  ManufacturingStorySection,
  ProductCard,
  QuickViewModal,
  Reveal,
  ScrollMedia,
  SectionHeading,
  SizeGuideModal,
} from "@/components/site";
import {
  images,
  products,
  collections,
  brandsList,
  whyMuthuPoints,
  type Product,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kids Korner & Muthu International | Multi-Brand Kidswear Platform" },
      {
        name: "description",
        content:
          "Official online shopping platform for Kids Korner, X-Zone, H&D Club, and Boy Munna. Over 25 years of specialized kidswear manufacturing in Tirupur, India.",
      },
      { property: "og:title", content: "Kids Korner | Multi-Brand Kidswear E-Commerce" },
      {
        property: "og:description",
        content:
          "Shop trendy children's clothing across four dedicated brands with unified checkout and pan-India geo-delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const heroSlides = [
  {
    id: 1,
    brandBadge: "Kids Korner · Flagship Collection",
    titleLine1: "Little Steps.",
    titleLine2: "Big Dreams.",
    subtitle:
      "Everyday hosiery essentials, playful dinosaur prints, and ultra-soft combed cotton for active children.",
    ctaText: "Shop Kids Korner",
    ctaLink: "/brands/kids-korner",
    secondaryCtaText: "Explore All 4 Brands",
    secondaryCtaLink: "/brands",
    image: images.bloomHero || images.hero,
    accent: "#226192",
    tagline: "100% Combed Compact Cotton · Bio-Polished",
  },
  {
    id: 2,
    brandBadge: "Boy Munna · Original Character Wear",
    titleLine1: "Adventures Begin",
    titleLine2: "With Munna!",
    subtitle:
      "Playful coordinates and T-shirt sets featuring Munna — our registered original character created for curious minds.",
    ctaText: "Discover Boy Munna",
    ctaLink: "/brands/boy-munna",
    secondaryCtaText: "Character Stories",
    secondaryCtaLink: "/brands/boy-munna",
    image: images.printedSet,
    accent: "#EF8557",
    tagline: "Official Registered Character · Non-Toxic Eco-Inks",
  },
  {
    id: 3,
    brandBadge: "X-Zone · Street & Athleisure",
    titleLine1: "Unstoppable Energy.",
    titleLine2: "Modern Motion.",
    subtitle:
      "Engineered sportswear, double-mercerized piqué polos, and reinforced French terry joggers for high-energy play.",
    ctaText: "Shop X-Zone",
    ctaLink: "/brands/x-zone",
    secondaryCtaText: "Athletic Wear",
    secondaryCtaLink: "/products",
    image: images.editorial,
    accent: "#226192",
    tagline: "Heavyweight Loopback Terry · Cord-Free Safety",
  },
  {
    id: 4,
    brandBadge: "H&D Club · Boutique Tailoring",
    titleLine1: "Refined Tailoring.",
    titleLine2: "Artisanal Charm.",
    subtitle:
      "Fine-wale corduroy coordinate sets, botanical poplin shirts, and delicate hand-guided embroidery for special days.",
    ctaText: "Shop H&D Club",
    ctaLink: "/brands/hd-club",
    secondaryCtaText: "Boutique Lookbook",
    secondaryCtaLink: "/gallery",
    image: images.bloomCraft || images.hero,
    accent: "#252525",
    tagline: "Fine 21-Wale Babycord · French Seam Craftsmanship",
  },
];

const categoryVisualTiles = [
  {
    name: "Boys' T-Shirts",
    count: "12 Styles",
    slug: "t-shirts",
    image: images.boysTee,
    brand: "Kids Korner & Boy Munna",
  },
  {
    name: "Girls' Flutter Tops",
    count: "8 Styles",
    slug: "girls",
    image: images.girlsTee,
    brand: "Kids Korner & H&D Club",
  },
  {
    name: "Co-Ord Sets",
    count: "9 Styles",
    slug: "co-ord",
    image: images.printedSet,
    brand: "All 4 Brands",
  },
  {
    name: "Night Suits & Pajamas",
    count: "6 Styles",
    slug: "sleepwear",
    image: images.hero,
    brand: "Kids Korner",
  },
  {
    name: "Athletic Joggers",
    count: "7 Styles",
    slug: "joggers",
    image: images.factory,
    brand: "X-Zone",
  },
  {
    name: "Corduroy & Overshirts",
    count: "5 Styles",
    slug: "layering",
    image: images.editorial,
    brand: "H&D Club",
  },
];

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Auto rotate hero slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide] ?? heroSlides[0];
  if (!slide) return null;

  // Filtered product lists
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ 1. PROMOTIONAL HERO BANNER (SLIDER) ═══ */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-[#EAE6DE] pt-24 sm:pt-32 pb-16 flex items-center">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#226192]/10" />

        <div className="page-shell relative w-full">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 z-10">
              <div className="flex items-center gap-2.5 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557] animate-pulse" />
                <p className="label-track text-[#EF8557]">{slide.brandBadge}</p>
              </div>

              <h1 className="hero-title-clean mt-5 text-4xl text-[#226192] sm:text-6xl lg:text-7xl xl:text-[4.5rem] tracking-tight">
                <span className="block text-[#252525]">{slide.titleLine1}</span>
                <span className="block text-[#226192]">{slide.titleLine2}</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  to={slide.ctaLink}
                  className="group inline-flex items-center gap-3 border border-[#226192] bg-[#226192] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] shadow-sm transition-all duration-300 hover:border-[#EF8557] hover:bg-[#EF8557]"
                >
                  <span>{slide.ctaText}</span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#FFFFFF]/20 text-[#FFFFFF] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#FFFFFF] group-hover:text-[#EF8557]">
                    <ArrowRight className="size-3" />
                  </span>
                </Link>

                <Link
                  to={slide.secondaryCtaLink}
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#226192] transition-colors hover:text-[#EF8557]"
                >
                  <span className="border-b border-[#226192]/40 pb-0.5 group-hover:border-[#EF8557]">
                    {slide.secondaryCtaText}
                  </span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Slider Dots & Ticker Indicator */}
              <div className="mt-12 flex items-center gap-3 border-t border-[#226192]/20 pt-6">
                <div className="flex gap-2">
                  {heroSlides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 transition-all ${
                        currentSlide === idx
                          ? "w-8 bg-[#EF8557]"
                          : "w-2 bg-[#226192]/30 hover:bg-[#226192]"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#252525]/60 pl-2">
                  {slide.tagline}
                </span>
              </div>
            </div>

            {/* Right Column: Layered Editorial Image Composition */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -bottom-6 -right-6 top-8 left-8 bg-[#226192] sm:-bottom-8 sm:-right-8 sm:top-10 sm:left-10"
                  aria-hidden="true"
                />

                <div className="relative aspect-[3/4] overflow-hidden border border-[#226192] bg-[#FFFFFF] shadow-xl">
                  <img
                    src={slide.image}
                    width={1024}
                    height={1365}
                    fetchPriority="high"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                    alt={slide.titleLine1}
                  />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-4 left-4 border border-[#FFFFFF]/30 bg-[#226192]/85 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFFFFF]">
                      MUTHU INTERNATIONAL · EST. 2000
                    </span>
                  </div>
                </div>

                {/* Coral Orange Badge */}
                <div className="absolute -top-6 -left-6 z-20 flex size-20 items-center justify-center border border-[#EF8557] bg-[#EF8557] p-3 text-center text-[#FFFFFF] shadow-lg sm:-top-8 sm:-left-8 sm:size-24">
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#FFFFFF]/90">
                      4 BRANDS
                    </span>
                    <span className="font-serif italic text-base leading-none text-[#FFFFFF]">
                      Stock
                    </span>
                    <span className="mt-1 text-[8px] uppercase tracking-wider text-[#FFFFFF]/80">
                      Booking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. RUNNING EDITORIAL TICKER TAPE ═══ */}
      <div className="border-y border-[#226192]/20 bg-[#226192] py-3 text-[#EAE6DE] overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-[0.22em] animate-marquee">
          <span>KIDS KORNER · LITTLE STEPS. BIG DREAMS.</span>
          <span className="text-[#EF8557]">✦</span>
          <span>BOY MUNNA · ORIGINAL REGISTERED CHARACTER</span>
          <span className="text-[#EF8557]">✦</span>
          <span>X-ZONE · UNSTOPPABLE ATHLEISURE</span>
          <span className="text-[#EF8557]">✦</span>
          <span>H&D CLUB · REFINED TAILORING</span>
          <span className="text-[#EF8557]">✦</span>
          <span>GEO-WISE DELIVERY FROM ₹39 · FREE ABOVE ₹999</span>
          <span className="text-[#EF8557]">✦</span>
          <span>OVER 25 YEARS OF GARMENT MANUFACTURING</span>
          <span className="text-[#EF8557]">✦</span>
          <span>TWO OPERATIONAL FACTORIES IN TIRUPUR</span>
          <span className="text-[#EF8557]">✦</span>
        </div>
      </div>

      {/* ═══ 3. OUR BRANDS SECTION (4-BRAND SHOWCASE) ═══ */}
      <section className="py-20 sm:py-28 bg-[#EAE6DE]">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Multi-Brand Portfolio"
            title="Four Brands. One Shopping Platform."
            text="Each brand represents its own dedicated style philosophy, manufactured under the high standards of Muthu International's two operational factories."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {brandsList.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>

          <div className="mt-12 border-t border-[#226192]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#EF8557]" />
              <p className="text-xs text-[#252525]/80 font-semibold">
                Reserve styles across all four brands in one unified booking list — no payment
                gateway or multiple logins required.
              </p>
            </div>
            <Link
              to="/brands"
              className="text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557] flex items-center gap-1.5"
            >
              <span>Explore Brand Profiles & Stories</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 4. NEW ARRIVALS SECTION ═══ */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#226192]/20">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="label-track mb-2 flex items-center gap-2 text-[#EF8557]">
                <span className="size-1.5 rounded-full bg-[#EF8557]" />
                Fresh Drops
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-4xl">
                New Arrivals
              </h2>
            </div>
            <Link
              to="/products"
              search={{ filter: "new" }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557]"
            >
              <span>View All New Styles</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. SHOP BY CATEGORY SECTION ═══ */}
      <section className="py-20 sm:py-28 bg-[#EAE6DE]">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Visual Directory"
            title="Shop By Category"
            text="Explore essential children's silhouettes engineered for comfort, safe movements, and durability."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {categoryVisualTiles.map((cat) => (
              <Link
                key={cat.name}
                to="/products"
                search={{ category: cat.slug }}
                className="group relative border border-[#226192]/20 bg-[#FFFFFF] overflow-hidden transition-all duration-300 hover:border-[#EF8557] hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#EAE6DE]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#226192]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF] flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#EF8557]">
                      {cat.brand}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#FFFFFF]">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#FFFFFF]/25 text-[#FFFFFF] group-hover:bg-[#EF8557]">
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. BEST SELLERS SECTION ═══ */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#226192]/20">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="label-track mb-2 flex items-center gap-2 text-[#EF8557]">
                <span className="size-1.5 rounded-full bg-[#EF8557]" />
                Customer Favorites
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-4xl">
                Best Sellers
              </h2>
            </div>
            <Link
              to="/products"
              search={{ filter: "bestseller" }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557]"
            >
              <span>View All Best Sellers</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. PROMOTIONAL CAMPAIGN / GEO-DELIVERY BANNER ═══ */}
      <section className="py-14 bg-[#226192] text-[#FFFFFF]">
        <div className="page-shell grid gap-8 md:grid-cols-3">
          <div className="flex items-center gap-4 border border-[#FFFFFF]/20 p-5 bg-[#FFFFFF]/5">
            <Truck className="size-8 text-[#EF8557] shrink-0" />
            <div>
              <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase">
                Geo-Wise Shipping
              </h4>
              <p className="text-xs text-[#EAE6DE]/80 mt-1">
                From ₹39 locally to pan-India delivery. Free shipping on all orders over ₹999.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-[#FFFFFF]/20 p-5 bg-[#FFFFFF]/5">
            <Percent className="size-8 text-[#EF8557] shrink-0" />
            <div>
              <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase">
                First Order 10% Off
              </h4>
              <p className="text-xs text-[#EAE6DE]/80 mt-1">
                Use promo code <strong>WELCOME10</strong> on your booking slip for instant festive
                savings.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-[#FFFFFF]/20 p-5 bg-[#FFFFFF]/5">
            <RotateCcw className="size-8 text-[#EF8557] shrink-0" />
            <div>
              <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase">
                7-Day Easy Returns
              </h4>
              <p className="text-xs text-[#EAE6DE]/80 mt-1">
                Simple doorstep exchanges and size adjustments for growing children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. MANUFACTURING & BUSINESS HERITAGE (ABOUT OUR BUSINESS) ═══ */}
      <section className="bg-[#EAE6DE] py-24 sm:py-32">
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Business Story */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-2 text-[#EF8557]">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <p className="label-track text-[#EF8557]">About Muthu International</p>
                </div>

                <h2 className="display-title mt-4 text-4xl uppercase tracking-tight text-[#226192] sm:text-5xl lg:text-6xl">
                  Kidswear Manufacturing Powerhouse Since 2000.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                  With over 25 years of garment industry specialization in Tirupur, India, Muthu
                  International Private Limited operates two modern factories, an in-house daily
                  design studio, and a dedicated team of over 100 garment artisans.
                </p>

                <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                  We unite four unique brands under one roof: <strong>Kids Korner</strong> (everyday
                  flagship fashion), <strong>X-Zone</strong> (active streetwear),{" "}
                  <strong>H&D Club</strong> (boutique tailored coordinates), and{" "}
                  <strong>Boy Munna</strong> (original registered character clothing).
                </p>

                <div className="mt-8 flex items-center gap-4 border-l-2 border-[#EF8557] pl-4">
                  <p className="font-serif italic text-base text-[#226192]">
                    “Every seam, button, and knit is engineered for children&apos;s comfort, safety,
                    and joy.”
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#226192]/20 pt-6">
                  <div>
                    <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#226192]">
                      25+
                    </span>
                    <p className="text-xs uppercase tracking-wider text-[#252525]/70 font-semibold mt-1">
                      Years Manufacturing
                    </p>
                  </div>
                  <div>
                    <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#EF8557]">
                      2
                    </span>
                    <p className="text-xs uppercase tracking-wider text-[#252525]/70 font-semibold mt-1">
                      Operational Factories
                    </p>
                  </div>
                  <div>
                    <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#226192]">
                      100+
                    </span>
                    <p className="text-xs uppercase tracking-wider text-[#252525]/70 font-semibold mt-1">
                      Experienced Team
                    </p>
                  </div>
                  <div>
                    <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#EF8557]">
                      Daily
                    </span>
                    <p className="text-xs uppercase tracking-wider text-[#252525]/70 font-semibold mt-1">
                      In-House New Designs
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Visual Composition */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#226192]/20 bg-[#FFFFFF] p-2">
                  <img
                    src={images.factory}
                    alt="Stitching floor"
                    className="aspect-square size-full object-cover"
                  />
                  <p className="p-2 text-[11px] font-bold text-[#226192] uppercase">
                    Factory Stitching Assembly
                  </p>
                </div>
                <div className="border border-[#226192]/20 bg-[#FFFFFF] p-2 mt-8">
                  <img
                    src={images.detail}
                    alt="Embroidery detail"
                    className="aspect-square size-full object-cover"
                  />
                  <p className="p-2 text-[11px] font-bold text-[#226192] uppercase">
                    Skin-Safe Soft Threadwork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. CTA SECTION ═══ */}
      <CTASection />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
