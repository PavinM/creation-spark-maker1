import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Layers, Sparkles, Check } from "lucide-react";
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
import manufacturingFilm from "@/assets/manufacturing-hero.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Kidswear Manufacturer India | Muthu International" },
      {
        name: "description",
        content:
          "Muthu International Private Ltd — Premium kids apparel manufacturer in India specializing in OEM manufacturing, private label, custom development, printing, embroidery and bulk export.",
      },
      { property: "og:title", content: "Muthu International — Premium Kidswear Manufacturing" },
      {
        property: "og:description",
        content:
          "From concept to finished garment: design development, OEM, private label and quality-focused kidswear production.",
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
      const offset = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const keywords = [
    {
      word: "DESIGN",
      desc: "Translating contemporary kidswear aesthetics, silhouettes and mood boards into production-ready specifications.",
    },
    {
      word: "DEVELOPMENT",
      desc: "Custom yarn selection, organic cotton knitting, Pantone-matched lab dips, and precise pattern grading.",
    },
    {
      word: "MANUFACTURING",
      desc: "Computerized cutting, non-toxic rotary/digital printing, multi-head embroidery, and modular stitching floors.",
    },
    {
      word: "QUALITY",
      desc: "Strict multi-stage AQL 2.5 checkpoints, dimensional shrinkage tests, button pull tests, and 100% metal scan.",
    },
  ];

  const productCategories = [
    "Boys' T-Shirts",
    "Girls' T-Shirts",
    "Co-Ord Sets",
    "Cord Sets",
    "Printed Apparel",
    "Embroidered Apparel",
    "Casualwear",
  ];

  const factoryStages = [
    "Design",
    "Cutting",
    "Printing",
    "Embroidery",
    "Stitching",
    "Finishing",
    "Quality Control",
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] overflow-hidden bg-navy pt-20 text-white">
        <ScrollMedia className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={images.factory}
            className="hero-media-anim size-full object-cover opacity-45"
            aria-label="Kidswear manufacturing craftsmanship at Muthu International"
          >
            <source src={manufacturingFilm} type="video/mp4" />
          </video>
        </ScrollMedia>

        {/* Ambient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />

        <div className="page-shell hero-copy relative flex min-h-[calc(95vh-5rem)] flex-col justify-end pb-20 sm:pb-24">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-gold" />
            <p className="label-track text-gold">MUTHU INTERNATIONAL PRIVATE LTD</p>
          </div>

          <h1 className="display-title mt-6 max-w-5xl text-5xl uppercase tracking-tight sm:text-7xl lg:text-8xl">
            CRAFTING KIDSWEAR.<br />
            <span className="text-gold">BUILDING BRANDS.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Premium kids apparel manufacturing for brands, retailers and private-label businesses.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button
              asChild
              className="h-13 rounded-none bg-gold px-8 text-xs font-bold uppercase tracking-[0.16em] text-navy hover:bg-gold/90"
            >
              <Link to="/collections">
                EXPLORE COLLECTION <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-13 rounded-none border-white/40 bg-transparent px-8 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-white/10 hover:text-gold"
            >
              <Link to="/request-quote">GET A QUOTE</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 lg:flex">
          <span>Scroll</span>
          <span className="scroll-line h-10 w-px bg-gold" />
          <ArrowDown className="size-3 text-gold" />
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="page-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="label-track mb-4 flex items-center gap-2 text-gold">
              <span className="inline-block h-px w-5 bg-gold" />
              Our Purpose
            </p>
            <h2 className="display-title text-4xl uppercase sm:text-6xl lg:text-7xl">
              FROM CONCEPT<br />
              TO FINISHED<br />
              GARMENT.
            </h2>
          </Reveal>

          <Reveal className="lg:pt-6">
            <p className="text-lg leading-relaxed text-slate sm:text-xl">
              Muthu International Private Ltd brings together product development, manufacturing expertise and quality-focused production to create contemporary kidswear collections for modern brands.
            </p>

            {/* 4 Animated / Interactive Keywords */}
            <div className="mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
              {keywords.map((k, idx) => (
                <div
                  key={k.word}
                  onMouseEnter={() => setActiveKeyword(idx)}
                  onClick={() => setActiveKeyword(idx)}
                  className={`group cursor-pointer border p-5 transition-all duration-300 ${
                    activeKeyword === idx
                      ? "border-gold bg-[#F1ECE3] shadow-sm"
                      : "border-border bg-white hover:border-gold/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold">0{idx + 1}</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate">Key Pillar</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold uppercase tracking-wider text-navy group-hover:text-gold">
                    {k.word}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate">{k.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PRODUCTS WITH HORIZONTAL SCROLL / DRAG INTERACTION */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="label-track mb-3 flex items-center gap-2 text-gold">
                <span className="inline-block h-px w-5 bg-gold" />
                Product Direction
              </p>
              <h2 className="display-title text-4xl uppercase sm:text-6xl text-navy">
                OUR KIDSWEAR
              </h2>
              <p className="mt-3 text-base text-slate">
                Contemporary products developed for today's kidswear market.
              </p>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollHoriz("left")}
                className="flex size-11 items-center justify-center border border-navy/20 bg-white text-navy transition-colors hover:border-gold hover:text-gold"
                aria-label="Scroll left"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollHoriz("right")}
                className="flex size-11 items-center justify-center border border-navy/20 bg-white text-navy transition-colors hover:border-gold hover:text-gold"
                aria-label="Scroll right"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Category tags pill list */}
          <div className="mt-8 flex flex-wrap gap-2">
            {productCategories.map((c) => (
              <span
                key={c}
                className="border border-border bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy"
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
                className="w-[280px] shrink-0 sm:w-[340px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-between items-center border-t border-border pt-6">
            <p className="text-xs text-slate">
              Showing curated production silhouettes · Sizing from 12M to 14Y
            </p>
            <Button asChild variant="outline" className="rounded-none border-navy text-xs font-bold uppercase tracking-wider text-navy hover:bg-navy hover:text-white">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING STORY (Sticky Storytelling Section) */}
      <ManufacturingStorySection />

      {/* 5. OEM SECTION (Navy Background) */}
      <section className="bg-navy py-24 text-white sm:py-32">
        <div className="page-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="label-track mb-5 flex items-center gap-2 text-gold">
                <span className="inline-block h-px w-6 bg-gold" />
                OEM & Private Label
              </p>
              <h2 className="display-title text-4xl uppercase sm:text-6xl lg:text-7xl">
                YOUR BRAND.<br />
                YOUR DESIGN.<br />
                <span className="text-gold">OUR MANUFACTURING.</span>
              </h2>
            </Reveal>

            <Reveal className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                Develop your own kidswear collection with customized products, colours, prints, embroidery, labels and specifications.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-gold" /> Custom fabric knitting & Pantone matching
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-gold" /> Custom neck labels, care tags & branded barcoding
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-gold" /> Specialized baby & toddler safety compliance
                </li>
              </ul>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button asChild className="h-12 rounded-none bg-gold px-7 text-xs font-bold uppercase tracking-[0.16em] text-navy hover:bg-gold/90">
                  <Link to="/oem-private-label">EXPLORE OEM</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-none border-white/30 bg-transparent px-7 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-white/10 hover:text-gold"
                >
                  <Link to="/request-quote">START YOUR PROJECT</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. WHY MUTHU (Six Premium Cards) */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Why Muthu International"
            title="Built around your brand."
            text="Six pillars of reliability that make Muthu International the preferred kidswear manufacturing partner for brands worldwide."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyMuthuPoints.map((item) => (
              <Reveal key={item.title}>
                <div className="group h-full border border-border bg-white p-8 transition-all duration-300 hover:border-gold hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-gold">{item.number}</span>
                    <span className="inline-block size-2 rounded-full bg-gold/40 group-hover:bg-gold" />
                  </div>
                  <h3 className="mt-8 text-xl font-bold uppercase tracking-wider text-navy group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FACTORY (Full-Width Image Section) */}
      <section className="relative min-h-[75vh] overflow-hidden bg-navy text-white">
        <img
          src={images.factory}
          loading="lazy"
          width={1536}
          height={1024}
          className="absolute inset-0 size-full object-cover opacity-45"
          alt="Muthu International kidswear manufacturing facility"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />

        <div className="page-shell relative flex min-h-[75vh] flex-col justify-end pb-20">
          <Reveal>
            <p className="label-track mb-3 flex items-center gap-2 text-gold">
              <span className="inline-block h-px w-5 bg-gold" />
              Inside Our Factory
            </p>
            <h2 className="display-title text-4xl uppercase sm:text-6xl lg:text-7xl">
              WHERE IDEAS<br />
              <span className="text-gold">BECOME GARMENTS.</span>
            </h2>

            {/* Process badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {factoryStages.map((stage) => (
                <span
                  key={stage}
                  className="border border-white/20 bg-navy/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
                >
                  {stage}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="h-12 rounded-none bg-gold px-8 text-xs font-bold uppercase tracking-[0.16em] text-navy hover:bg-gold/90"
              >
                <Link to="/manufacturing">
                  EXPLORE MANUFACTURING <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. COLLECTION (Editorial Fashion Gallery, Asymmetric Layout) */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="label-track mb-3 flex items-center gap-2 text-gold">
                <span className="inline-block h-px w-5 bg-gold" />
                Seasonal Direction
              </p>
              <h2 className="display-title text-4xl uppercase sm:text-6xl text-navy">
                OUR LATEST DEVELOPMENTS
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-none border-navy text-xs font-bold uppercase tracking-wider text-navy hover:bg-navy hover:text-white">
              <Link to="/collections">
                All Collections <ArrowRight className="ml-2 size-3.5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            {/* Main large feature */}
            <div className="md:col-span-7">
              <Link
                to="/products/$slug"
                params={{ slug: "atelier-embroidered-set" }}
                className="group relative block overflow-hidden border border-border bg-white"
              >
                <div className="image-zoom aspect-[4/5] bg-ivory">
                  <img
                    src={images.editorial}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="size-full object-cover"
                    alt="Atelier Embroidered Set"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                    New Developments · Cord Sets
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold uppercase text-navy group-hover:text-gold">
                    Atelier Tailored Cord Set
                  </h3>
                  <p className="mt-2 text-sm text-slate">
                    Artisanal multi-needle chain stitch and 21-wale cotton babycorduroy development.
                  </p>
                </div>
              </Link>
            </div>

            {/* Side stacked features */}
            <div className="grid gap-6 md:col-span-5">
              <Link
                to="/products/$slug"
                params={{ slug: "botanical-coord-set" }}
                className="group relative block overflow-hidden border border-border bg-white"
              >
                <div className="image-zoom aspect-[16/10] bg-ivory">
                  <img
                    src={images.printedSet}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="size-full object-cover"
                    alt="Botanical Co-Ord Set"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                    Spring / Summer · Printed
                  </span>
                  <h4 className="mt-1 text-lg font-semibold uppercase text-navy group-hover:text-gold">
                    Botanical Co-Ord Two-Piece Set
                  </h4>
                  <p className="mt-1 text-xs text-slate">Rotary all-over print with child-safe soft pigment.</p>
                </div>
              </Link>

              <Link
                to="/products/$slug"
                params={{ slug: "embroidered-girls-tee" }}
                className="group relative block overflow-hidden border border-border bg-white"
              >
                <div className="image-zoom aspect-[16/10] bg-ivory">
                  <img
                    src={images.girlsTee}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="size-full object-cover"
                    alt="Embroidered Girls Tee"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                    Spring / Summer · Embroidered
                  </span>
                  <h4 className="mt-1 text-lg font-semibold uppercase text-navy group-hover:text-gold">
                    Embroidered Girls’ Flutter Tee
                  </h4>
                  <p className="mt-1 text-xs text-slate">Delicate floral embroidery with skin-safe backing.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA (Navy background) */}
      <CTASection />
    </>
  );
}