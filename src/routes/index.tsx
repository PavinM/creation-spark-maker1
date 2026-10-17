import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Check,
  Award,
  Globe2,
  Cpu,
  Scissors,
  CheckCircle2
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CTASection,
  ManufacturingStorySection,
  ProductCard,
  Reveal,
  ScrollMedia,
  SectionHeading,
} from "@/components/site";
import { images, products, whyMuthuPoints } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muthu International | Kidswear Manufacturer Since 2000" },
      {
        name: "description",
        content:
          "Muthu International Private Limited is an established kidswear manufacturer in India. Since 2000, our design team and two factories have supported customers nationwide with quality children's clothing.",
      },
      { property: "og:title", content: "Muthu International | Kidswear Manufacturer Since 2000" },
      {
        property: "og:description",
        content:
          "Over 25 years of garment industry experience, in-house design, two operational factories, a dedicated warehouse and a team of 100+ employees.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeKeyword, setActiveKeyword] = useState<number>(0);

  const scrollHoriz = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const keywords = [
    {
      word: "In-house design",
      sub: "FRESH STYLES",
      desc: "Our design team develops new kidswear styles every day, responding to changing trends and customer preferences.",
    },
    {
      word: "A varied range",
      sub: "KIDSWEAR",
      desc: "From T-shirts and co-ord sets to nightwear, paijamas and seasonal clothing, we make clothing for everyday needs.",
    },
    {
      word: "Modern facilities",
      sub: "MANUFACTURING",
      desc: "Two operational factories, modern machinery and a dedicated warehouse support our organized production operations.",
    },
    {
      word: "Dependable supply",
      sub: "PAN-INDIA",
      desc: "An experienced team and established manufacturing infrastructure help us serve customers across India.",
    },
  ];

  const productCategories = [
    "All Silhouettes",
    "T-Shirts",
    "Co-Ord Sets",
    "Night Suits",
    "Paijamas",
    "Shorts",
    "Sweaters & Hoodies",
  ];

  const statistics = [
    { num: "25+", label: "Years of Experience", desc: "Garment manufacturing since 2000" },
    { num: "2", label: "Operational Factories", desc: "Established production facilities" },
    { num: "100+", label: "Team Members", desc: "A dedicated manufacturing workforce" },
    { num: "Daily", label: "New Designs", desc: "Fresh kidswear styles from our in-house team" },
  ];

  const clientPillars = [
    {
      quote: "More than 25 years of experience in the garment industry, with kidswear as our core specialization.",
      author: "ESTABLISHED SINCE",
      company: "A focused kidswear manufacturer",
      country: "2000",
    },
    {
      quote: "Two operational factories, modern machinery and a dedicated warehouse support our production and supply operations.",
      author: "MANUFACTURING INFRASTRUCTURE",
      company: "Built to support dependable production",
      country: "India",
    },
    {
      quote: "Our in-house design team develops new styles every day, while our team of over 100 people supports operations.",
      author: "DESIGN & WORKFORCE",
      company: "Creativity supported by experience",
      country: "100+ employees",
    },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* 1. HERO SECTION — BLOOM-INSPIRED EDITORIAL ASYMMETRICAL LAYOUT */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#EAE6DE] pt-28 sm:pt-36 lg:pt-40 pb-20">
        {/* Subtle decorative background line */}
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#226192]/10" />

        <div className="page-shell relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Side: Typography & Minimal CTA */}
            <div className="hero-copy lg:col-span-6 xl:col-span-7 z-10">
              <div className="flex items-center gap-2.5 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">
                  Kidswear manufacturing in India · Established 2000
                </p>
              </div>

              {/* Stacked Oversized Headline with Outlined Contrast */}
              <h1 className="hero-title-clean mt-6 text-4xl text-[#226192] sm:text-6xl lg:text-7xl xl:text-[4.75rem]">
                <span className="block text-[#252525]">Crafting</span>
                <span className="block text-[#226192]">Kidswear.</span>
                <span className="block text-[#EF8557]">Building</span>
                <span className="block text-[#226192]">Brands.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                Your trusted kidswear manufacturing partner since 2000. With over 25 years of garment industry experience, we bring together an in-house design team, modern facilities and a dedicated workforce to serve customers across India.
              </p>

              {/* Minimal Call-To-Action Button with Circular Arrow Icon */}
              <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  to="/collections"
                  className="group inline-flex items-center gap-3 border border-[#226192] bg-[#226192] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] shadow-sm transition-all duration-300 hover:border-[#EF8557] hover:bg-[#EF8557]"
                >
                  <span>Explore Collections</span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#FFFFFF]/20 text-[#FFFFFF] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#FFFFFF] group-hover:text-[#EF8557]">
                    <ArrowRight className="size-3.5" />
                  </span>
                </Link>

                <Link
                  to="/request-quote"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#226192] transition-colors hover:text-[#EF8557]"
                >
                  <span className="border-b border-[#226192]/40 pb-0.5 group-hover:border-[#EF8557]">
                    Request Production Spec
                  </span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Editorial Metadata Bar */}
              <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-[#226192]/20 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#252525]/70">
                <div>
                  <span className="text-[#EF8557]">25+ YEARS</span> · KIDSWEAR MANUFACTURING
                </div>
                <div className="hidden sm:block text-[#226192]/30">|</div>
                <div>IN-HOUSE DESIGN TEAM</div>
                <div className="hidden sm:block text-[#226192]/30">|</div>
                <div>SUPPLYING CUSTOMERS ACROSS INDIA</div>
              </div>
            </div>

            {/* Right Side: Editorial Layered Composition with Deep Blue Panel & Coral Graphic Accent */}
            <div className="relative lg:col-span-6 xl:col-span-5 lg:-ml-6 xl:-ml-10">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Deep Blue Rectangular Panel behind image */}
                <div
                  className="absolute -bottom-6 -right-6 top-8 left-8 bg-[#226192] sm:-bottom-8 sm:-right-8 sm:top-10 sm:left-10"
                  aria-hidden="true"
                />

                {/* Main Editorial Photograph */}
                <div className="relative aspect-[3/4] overflow-hidden border border-[#226192] bg-[#FFFFFF] shadow-xl">
                  <img
                    src={images.bloomHero || images.hero}
                    width={1024}
                    height={1365}
                    fetchPriority="high"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Muthu International Bloom Editorial Kidswear Atelier"
                  />

                  {/* Overlaid Editorial Watermark Badge */}
                  <div className="absolute bottom-4 left-4 border border-[#FFFFFF]/30 bg-[#226192]/80 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFFFFF]">
                      MUTHU INTERNATIONAL · EST. 2000
                    </span>
                  </div>
                </div>

                {/* Coral Orange Botanical Graphic Element */}
                <div className="absolute -top-6 -left-6 z-20 flex size-20 items-center justify-center border border-[#EF8557] bg-[#EF8557] p-3 text-center text-[#FFFFFF] shadow-lg sm:-top-8 sm:-left-8 sm:size-24">
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#FFFFFF]/90">
                      MUTHU
                    </span>
                    <span className="font-serif italic text-base sm:text-lg leading-none text-[#FFFFFF]">
                      Edition
                    </span>
                    <span className="mt-1 text-[8px] uppercase tracking-wider text-[#FFFFFF]/80">
                      Kidswear
                    </span>
                  </div>
                </div>

                {/* Subtitle Card Floating */}
                <div className="absolute -bottom-4 left-4 z-20 hidden border border-[#226192]/30 bg-[#EAE6DE] px-4 py-2.5 shadow-md sm:block">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#226192]">
                    Design · Manufacturing · Supply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RUNNING EDITORIAL TICKER TAPE */}
      <div className="border-y border-[#226192]/20 bg-[#226192] py-3.5 text-[#EAE6DE] overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-[0.22em]">
          <span>25+ YEARS OF GARMENT INDUSTRY EXPERIENCE</span>
          <span className="text-[#EF8557]">✦</span>
          <span>KIDSWEAR MANUFACTURING SINCE 2000</span>
          <span className="text-[#EF8557]">✦</span>
          <span>NEW DESIGNS EVERY DAY</span>
          <span className="text-[#EF8557]">✦</span>
          <span>IN-HOUSE DESIGN TEAM</span>
          <span className="text-[#EF8557]">✦</span>
          <span>TWO OPERATIONAL FACTORIES</span>
          <span className="text-[#EF8557]">✦</span>
          <span>SUPPLYING CUSTOMERS ACROSS INDIA</span>
          <span className="text-[#EF8557]">✦</span>
          <span>100+ DEDICATED EMPLOYEES</span>
          <span className="text-[#EF8557]">✦</span>
        </div>
      </div>

      {/* 3. ABOUT SECTION — SPLIT EDITORIAL COMPOSITION */}
      <section className="bg-[#EAE6DE] py-24 sm:py-32">
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* Left side text */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-2 text-[#EF8557]">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <p className="label-track text-[#EF8557]">[ ABOUT MUTHU INTERNATIONAL ]</p>
                </div>

                <h2 className="display-title mt-4 text-4xl uppercase tracking-tight text-[#226192] sm:text-5xl lg:text-6xl">
                  Your trusted kidswear manufacturing partner since 2000.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                  With over 25 years of garment industry experience, Muthu International Private Limited specializes in kidswear for the Indian domestic market. Our work brings design, product development and manufacturing together to create children’s garments that balance comfort, style and quality.
                </p>

                {/* Restrained Coral-Orange Decorative Graphic Element */}
                <div className="mt-8 flex items-center gap-4 border-l-2 border-[#EF8557] pl-4">
                  <p className="font-serif italic text-base text-[#226192] sm:text-lg">
                    “We combine experience, creativity and reliable manufacturing to build lasting customer relationships.”
                  </p>
                </div>

                {/* 4 Pillars Interactive Grid */}
                <div className="mt-10 grid gap-3 border-t border-[#226192]/20 pt-6 sm:grid-cols-2">
                  {keywords.map((k, idx) => (
                    <div
                      key={k.word}
                      onMouseEnter={() => setActiveKeyword(idx)}
                      onClick={() => setActiveKeyword(idx)}
                      className={`group cursor-pointer border p-5 transition-all duration-300 ${
                        activeKeyword === idx
                          ? "border-[#EF8557] bg-[#FFFFFF] shadow-sm"
                          : "border-[#226192]/20 bg-[#FFFFFF]/60 hover:border-[#226192] hover:bg-[#FFFFFF]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                          {k.sub}
                        </span>
                      </div>
                      <h3 className="mt-2 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-[#226192] group-hover:text-[#EF8557]">
                        {k.word}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">{k.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right side image */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative">
                  {/* Layered deep blue back panel */}
                  <div className="absolute -inset-3 bg-[#226192] translate-x-4 translate-y-4" />
                  <div className="relative aspect-[4/5] overflow-hidden border border-[#226192] bg-[#FFFFFF] shadow-lg">
                    <img
                      src={images.bloomCraft || images.factory}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 hover:scale-105"
                      alt="Artisanal Embroidery and Fabric Craft at Muthu International"
                    />
                    <div className="absolute bottom-4 right-4 border border-[#EF8557] bg-[#FFFFFF] px-3.5 py-2 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#226192]">
                        KIDSWEAR · DESIGN · MANUFACTURING
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES & CAPABILITIES SECTION (Crisp Rectangular Grid) */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-24 sm:py-32">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Experience, creativity and dependable manufacturing."
            text="Kidswear specialization, a dedicated design team, modern machinery and organized facilities support our work for customers across India."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyMuthuPoints.map((item, idx) => (
              <Reveal key={item.title}>
                <div className="group flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-8 transition-all duration-300 hover:border-[#EF8557] hover:shadow-[0_8px_24px_rgba(34,97,146,0.08)]">
                  <div>
                    <h3 className="mt-6 font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192] transition-colors group-hover:text-[#EF8557]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#252525]/80">{item.description}</p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#226192]/10 pt-4 text-[11px] font-bold uppercase tracking-wider text-[#226192]">
                    <span>Since 2000</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:text-[#EF8557]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CURATED PRODUCTS SECTION — WITH CAROUSEL & RECTANGULAR CARDS */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-24 sm:py-32">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ CURATED SILHOUETTES ]</p>
              </div>
              <h2 className="display-title mt-3 text-4xl uppercase tracking-tight text-[#226192] sm:text-6xl">
                Our Kidswear Range
              </h2>
              <p className="mt-3 text-base text-[#252525]/80">
                T-shirts, co-ord sets, night suits, paijamas, shorts, sweaters, hoodies and more.
              </p>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollHoriz("left")}
                className="flex size-11 items-center justify-center border border-[#226192]/30 bg-[#FFFFFF] text-[#226192] transition-all hover:border-[#EF8557] hover:bg-[#EF8557] hover:text-[#FFFFFF]"
                aria-label="Scroll left"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollHoriz("right")}
                className="flex size-11 items-center justify-center border border-[#226192]/30 bg-[#FFFFFF] text-[#226192] transition-all hover:border-[#EF8557] hover:bg-[#EF8557] hover:text-[#FFFFFF]"
                aria-label="Scroll right"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Category tags pill list */}
          <div className="mt-8 flex flex-wrap gap-2">
            {productCategories.map((c, i) => (
              <span
                key={c}
                className={`border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  i === 0
                    ? "border-[#226192] bg-[#226192] text-[#FFFFFF]"
                    : "border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={scrollContainerRef}
            className="no-scrollbar mt-10 flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {products.map((p) => (
              <div
                key={p.slug}
                className="w-[290px] shrink-0 sm:w-[350px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#226192]/20 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-[#252525]/75">
                A varied kidswear range · Fresh designs every day · Serving customers across India
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-[#226192] bg-[#226192] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors hover:bg-[#EF8557] hover:border-[#EF8557]"
            >
              <span>View All Products</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING STORY (Sticky Storytelling Section) */}
      <ManufacturingStorySection />

      {/* 7. KIDSWEAR MANUFACTURING PARTNERSHIP */}
      <section className="bg-[#226192] py-24 text-[#FFFFFF] sm:py-32">
        <div className="page-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">Serving the Indian Kidswear Market</p>
              </div>
              <h2 className="display-title mt-4 text-4xl uppercase tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
                Experience.<br />
                Design.<br />
                <span className="text-[#EF8557]">Quality.</span>
              </h2>
            </Reveal>

            <Reveal className="border-t border-[#EAE6DE]/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-base leading-relaxed text-[#EAE6DE]/85 sm:text-lg">
                Since 2000, we have grown our kidswear manufacturing business through customer relationships, daily design development and an established production infrastructure. We welcome enquiries from businesses looking for a domestic manufacturing partner.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-[#EAE6DE]/90">
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-[#EF8557]" /> Kidswear is our primary area of specialization
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-[#EF8557]" /> In-house design team developing new styles every day
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-[#EF8557]" /> Two factories, modern machinery and dedicated warehouse
                </li>
              </ul>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-[#EF8557] bg-[#EF8557] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] transition-colors hover:bg-[#EF8557]/90"
                >
                  <span>Learn About Our Company</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 border border-[#EAE6DE]/40 bg-transparent px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#EAE6DE] transition-colors hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF]"
                >
                  Contact Our Team
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. STATISTICS & HIGHLIGHTS SECTION */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-8 divide-y divide-[#226192]/20 sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:divide-[#226192]/20 lg:grid-cols-4">
            {statistics.map((s, idx) => (
              <Reveal key={s.label} className={idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}>
                <div className="text-[#226192]">
                  <span className="font-['Space_Grotesk'] text-5xl font-extrabold tracking-tight sm:text-6xl text-[#226192]">
                    {s.num}
                  </span>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                    {s.label}
                  </h3>
                  <p className="mt-1 text-xs text-[#252525]/75">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ASYMMETRIC EDITORIAL PORTFOLIO GALLERY */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-24 sm:py-32">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ SEASONAL DIRECTION ]</p>
              </div>
              <h2 className="display-title mt-3 text-4xl uppercase tracking-tight text-[#226192] sm:text-6xl">
                Fresh Kidswear Designs
              </h2>
            </div>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 border border-[#226192] bg-[#FFFFFF] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#226192] transition-colors hover:border-[#EF8557] hover:bg-[#226192] hover:text-[#FFFFFF]"
            >
              <span>All Collections</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            {/* Main large asymmetrical feature */}
            <div className="md:col-span-7">
              <Link
                to="/products/$slug"
                params={{ slug: "atelier-embroidered-set" }}
                className="group relative block overflow-hidden border border-[#226192]/20 bg-[#FFFFFF] shadow-sm transition-all hover:border-[#EF8557]"
              >
                <div className="image-zoom aspect-[4/5] bg-[#EAE6DE]">
                  <img
                    src={images.editorial}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="size-full object-cover"
                    alt="Atelier Tailored Cord Set"
                  />
                  <div className="absolute top-4 left-4 border border-[#EF8557] bg-[#EF8557] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FFFFFF]">
                    Kidswear Collection
                  </div>
                </div>
                <div className="p-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                    Children's Clothing
                  </span>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#226192] transition-colors group-hover:text-[#EF8557]">
                      A varied kidswear range
                    </h3>
                    <ArrowRight className="size-4 text-[#226192] transition-transform group-hover:translate-x-1 group-hover:text-[#EF8557]" />
                  </div>
                  <p className="mt-2 text-sm text-[#252525]/80">
                    From everyday essentials to seasonal clothing, our range responds to the changing needs of the Indian kidswear market.
                  </p>
                </div>
              </Link>
            </div>

            {/* Side stacked features */}
            <div className="grid gap-6 md:col-span-5">
              <Link
                to="/products/$slug"
                params={{ slug: "botanical-coord-set" }}
                className="group relative block overflow-hidden border border-[#226192]/20 bg-[#FFFFFF] shadow-sm transition-all hover:border-[#EF8557]"
              >
                <div className="image-zoom aspect-[16/10] bg-[#EAE6DE]">
                  <img
                    src={images.printedSet}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="size-full object-cover"
                    alt="Botanical Co-Ord Set"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                    Spring / Summer · Printed
                  </span>
                  <h4 className="mt-1 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192] transition-colors group-hover:text-[#EF8557]">
                    Botanical Co-Ord Two-Piece Set
                  </h4>
                  <p className="mt-1.5 text-xs text-[#252525]/80">Coordinated styles designed for comfort, style and everyday wear.</p>
                </div>
              </Link>

              <Link
                to="/products/$slug"
                params={{ slug: "embroidered-girls-tee" }}
                className="group relative block overflow-hidden border border-[#226192]/20 bg-[#FFFFFF] shadow-sm transition-all hover:border-[#EF8557]"
              >
                <div className="image-zoom aspect-[16/10] bg-[#EAE6DE]">
                  <img
                    src={images.girlsTee}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="size-full object-cover"
                    alt="Embroidered Girls Tee"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                    Spring / Summer · Embroidered
                  </span>
                  <h4 className="mt-1 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192] transition-colors group-hover:text-[#EF8557]">
                    Embroidered Girls’ Flutter Tee
                  </h4>
                  <p className="mt-1.5 text-xs text-[#252525]/80">A comfortable girls' T-shirt style in our kidswear range.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS & CLIENT EDITORIAL SECTION */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-24 sm:py-32">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="An experienced kidswear manufacturing partner."
            text="Over 25 years of experience, a varied product portfolio, in-house design and manufacturing facilities serving customers across India."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientPillars.map((c, i) => (
              <Reveal key={c.company}>
                <div className="flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm">
                  <div>
                    <span className="font-serif text-3xl font-bold text-[#EF8557]">“</span>
                    <p className="font-serif italic text-base leading-relaxed text-[#252525]/90 sm:text-lg">
                      {c.quote}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-[#226192]/15 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#226192]">{c.company}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[#252525]/70">
                      {c.author} · {c.country}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DISTINCTIVE CLOSING CONTACT & ATELIER CTA */}
      <CTASection />
    </div>
  );
}