import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Package,
  ShieldCheck,
  Truck,
  Heart,
  Sparkles,
  ChevronRight,
  ClipboardList,
  Factory,
  Layers,
  Award,
  BookmarkCheck,
  Compass,
} from "lucide-react";
import { useState } from "react";
import {
  images,
  products,
  brandsList,
  CartStore,
  WishlistStore,
  type Product,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muthu International | Luxury Kidswear E-Commerce & B2B Portal" },
      {
        name: "description",
        content:
          "Four independent kidswear labels manufactured by Muthu International: Kids Korner, X-Zone, H&D Club, and Boy Munna. Rooted in Tirupur since 2000.",
      },
      { property: "og:title", content: "Muthu International | Editorial Kidswear Atelier" },
      {
        property: "og:description",
        content:
          "Cinematic fashion lookbook, interactive coordinate studio, and direct mill stock booking for premium children's clothing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

// Coordinate Lookbook Top Options
const topOptions = [
  {
    id: "crew",
    name: "Bio-Wash Crew Tee",
    price: 499,
    label: "Kids Korner",
    image: images.boysTee,
    desc: "180 GSM Combed Cotton",
  },
  {
    id: "mandarin",
    name: "Linen Mandarin Shirt",
    price: 899,
    label: "H&D Club",
    image: images.detail,
    desc: "100% Breathable Flax & Cotton",
  },
  {
    id: "camp",
    name: "Velocity Skater Tee",
    price: 649,
    label: "X-Zone Cotton",
    image: images.editorial,
    desc: "Heavyweight 220 GSM Drop-Shoulder",
  },
];

// Coordinate Lookbook Bottom Options
const bottomOptions = [
  {
    id: "chino",
    name: "Linen Chino Shorts",
    price: 649,
    image: images.printedSet,
    desc: "Elasticated Comfort Waist",
  },
  {
    id: "jogger",
    name: "French Terry Jogger",
    price: 799,
    image: images.girlsTee,
    desc: "Reinforced Abrasion Seams",
  },
  {
    id: "munna-short",
    name: "Munna Safari Cargo",
    price: 549,
    image: images.hero,
    desc: "Toy Creative Water-Resistant Pockets",
  },
];

export function HomePage() {
  // Studio Lookbook State
  const [selectedTopId, setSelectedTopId] = useState<string>("crew");
  const [selectedBottomId, setSelectedBottomId] = useState<string>("chino");
  const [lookbookSize, setLookbookSize] = useState<string>("4-5Y");
  const [lookbookAdded, setLookbookAdded] = useState(false);

  const selectedTop = (topOptions.find((t) => t.id === selectedTopId) || topOptions[0])!;
  const selectedBottom = (bottomOptions.find((b) => b.id === selectedBottomId) || bottomOptions[0])!;
  const lookbookTotal = selectedTop.price + selectedBottom.price;

  // Add Coordinate Studio Set to Booking List
  const handleAddLookbookSet = () => {
    CartStore.addItem({
      productId: `studio-${selectedTop.id}-${selectedBottom.id}`,
      variantId: `studio-${selectedTop.id}-${selectedBottom.id}-${lookbookSize}`,
      productSlug: "botanical-summer-co-ord-set",
      productName: `SS25 Studio Coordinate: ${selectedTop.name} + ${selectedBottom.name}`,
      brandId: "kids-korner",
      brandName: selectedTop.label,
      sku: `STUDIO-${selectedTop.id.toUpperCase()}-${selectedBottom.id.toUpperCase()}`,
      size: lookbookSize,
      colour: "Tirupur Natural Dye",
      colourHex: "#226192",
      price: lookbookTotal,
      mrp: Math.round(lookbookTotal * 1.35),
      quantity: 1,
      maxStock: 20,
      image: selectedTop.image,
    });
    setLookbookAdded(true);
    setTimeout(() => setLookbookAdded(false), 2500);
  };

  // Add Boy Munna Set
  const handleAddMunnaSet = () => {
    CartStore.addItem({
      productId: "boy-munna-dino-explorer",
      variantId: "boy-munna-dino-explorer-3y",
      productSlug: "boy-munna-dino-explorer-playset",
      productName: "Boy Munna Official Adventure Set (With Mini Comic)",
      brandId: "boy-munna",
      brandName: "Boy Munna",
      sku: "BM-DINO-EXPLORER",
      size: "3Y",
      colour: "Mustard & Forest Green",
      colourHex: "#EF8557",
      price: 449,
      mrp: 699,
      quantity: 1,
      maxStock: 30,
      image: images.hero,
    });
  };

  return (
    <div className="w-full bg-[#EAE6DE] text-[#252525]">
      {/* ══════════════════════════════════════════════════════════════════
          1. CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[600px] lg:min-h-[720px] bg-[#164468] text-white overflow-hidden flex items-center border-b border-[#D8D2C5]">
        {/* Full-bleed Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src={images.bloomHero}
            alt="Muthu International kidswear fashion campaign"
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a41]/90 via-[#0d2a41]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a41]/85 via-transparent to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-28">
          <div className="max-w-2xl sm:max-w-3xl flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="size-3 bg-[#EF8557]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#cfe5ff] font-bold">
                SS25 MASTER RUNWAY · FACTORY DIRECT
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white font-semibold leading-[1.08] tracking-tight mb-4">
              Little Steps. <br />
              <span className="italic font-normal text-[#EF8557] underline decoration-1 underline-offset-8">
                Grand Journeys.
              </span>
            </h1>
            <p className="font-sans text-sm sm:text-lg text-slate-200 max-w-xl mb-8 leading-relaxed">
              Four Independent Kidswear Labels. One Master Manufacturing House. Crafted with zero
              compromises in Tirupur from 100% bio-washed combed cotton, skin-safe certified dyes,
              and unhurried tailoring.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#lookbook-studio"
                className="px-7 py-3.5 bg-[#EF8557] hover:bg-[#d97346] text-white font-bold text-xs tracking-widest uppercase transition-all shadow-md flex items-center gap-2 border border-orange-400/30"
              >
                <span>EXPLORE 4-BRAND LOOKBOOK</span>
                <ArrowRight className="size-4" />
              </a>
              <Link
                to="/products"
                className="px-6 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/80 hover:bg-white hover:text-[#252525] text-white font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-1.5"
              >
                <span>BROWSE CATALOGUE</span>
                <span className="text-[#EF8557] font-bold">→</span>
              </Link>
            </div>

            {/* Heritage Spec Strip */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider text-slate-300 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-[#EF8557]" />
                100% ZERO-SHRINKAGE COMBED COTTON
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-4 text-[#EF8557]" />
                OEKO-TEX CERTIFIED WATER INKS
              </span>
              <span className="flex items-center gap-1.5">
                <Factory className="size-4 text-[#EF8557]" />
                TIRUPUR INTEGRATED FACILITY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. ASYMMETRIC 4-BRAND EDITORIAL SHOWCASE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#EAE6DE] py-16 sm:py-20 border-b border-[#D8D2C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#D8D2C5]">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#EF8557] block mb-1">
                Proprietary Label Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-bold">
                Curated For Every Milestone of Childhood
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#717880] max-w-md">
              Muthu International houses 4 specialized in-house brands, each engineered with bespoke
              fabric weights, distinct tailoring, and intentional wear-testing.
            </p>
          </div>

          {/* Asymmetrical Editorial Spread (7 Col vs 5 Col Stack) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            {/* FEATURE 1: KIDS KORNER (Large 7-Column Editorial Spread) */}
            <div className="lg:col-span-7 bg-white border border-[#D8D2C5] p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between border-b border-[#D8D2C5] pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#226192] bg-[#F7F3EB] px-2 py-0.5 border border-[#D8D2C5]">
                      FLAGSHIP LABEL · EST. 2000
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#226192] mt-2">
                      Kids Korner
                    </h3>
                  </div>
                  <span className="font-serif italic text-sm text-[#717880]">
                    &ldquo;Little Steps. Big Dreams.&rdquo;
                  </span>
                </div>

                {/* Candid Lifestyle Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F3EB] mb-6 border border-[#D8D2C5]">
                  <img
                    src={images.editorial}
                    alt="Kids Korner candid lifestyle shoot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-[#D8D2C5] p-2.5 shadow-md flex items-center gap-2">
                    <Sparkles className="size-4 text-[#EF8557]" />
                    <div className="text-[11px] leading-tight">
                      <span className="font-bold text-[#252525] block">
                        180 GSM Bio-Wash Interlock
                      </span>
                      <span className="text-[#717880]">Preshrunk zero-irritation cotton</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#252525] leading-relaxed mb-4">
                  <strong className="font-semibold text-[#226192]">
                    Engineered for uninhibited playtime.
                  </strong>{" "}
                  Soft pastel cottons, relaxed summer silhouettes, and play-proof coordinates
                  tailored for boys & girls ages 2 to 14.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#D8D2C5] flex items-center justify-between">
                <Link
                  to="/brands/$slug"
                  params={{ slug: "kids-korner" }}
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#226192] hover:text-[#EF8557] transition-colors"
                >
                  <span>EXPLORE KIDS KORNER COLLECTION</span>
                  <ArrowRight className="size-4" />
                </Link>
                <span className="text-[11px] font-mono text-[#717880]">
                  Catalog: 140+ Active SKUs
                </span>
              </div>
            </div>

            {/* FEATURE 2: STACKED 5-COLUMN SHOWCASE (X-Zone + H&D Club) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* TOP CARD: X-ZONE */}
              <div className="bg-white border border-[#D8D2C5] p-6 shadow-sm flex flex-col justify-between group flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#EF8557]">
                        ATHLETIC STREETWEAR
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#252525]">X-Zone</h4>
                    </div>
                    <span className="bg-[#252525] text-white text-[10px] font-mono uppercase px-2 py-0.5">
                      Heavy Loopback
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-3">
                    <div className="sm:col-span-5 aspect-[4/3] bg-[#F7F3EB] overflow-hidden border border-[#D8D2C5]">
                      <img
                        src={images.factory}
                        alt="X-Zone skate athletic style"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="sm:col-span-7">
                      <span className="font-serif italic text-xs text-[#EF8557] font-bold">
                        &ldquo;Move Bold. Dress Different.&rdquo;
                      </span>
                      <p className="text-xs text-[#717880] mt-1.5 leading-normal">
                        Heavy-duty French terry cargo joggers, oversized skater graphic tees, and
                        water-repellent zipped pockets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D8D2C5] flex items-center justify-between">
                  <Link
                    to="/brands/$slug"
                    params={{ slug: "x-zone" }}
                    className="text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557] flex items-center gap-1"
                  >
                    <span>View X-Zone Line</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-[10px] text-[#717880] uppercase">Ages 6 - 16Y</span>
                </div>
              </div>

              {/* BOTTOM CARD: H&D CLUB */}
              <div className="bg-white border border-[#D8D2C5] p-6 shadow-sm flex flex-col justify-between group flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A473D]">
                        REFINED OCCASION
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#252525]">H&D Club</h4>
                    </div>
                    <span className="bg-[#4A473D] text-white text-[10px] font-mono uppercase px-2 py-0.5">
                      Sartorial Cut
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-3">
                    <div className="sm:col-span-5 aspect-[4/3] bg-[#F7F3EB] overflow-hidden border border-[#D8D2C5]">
                      <img
                        src={images.detail}
                        alt="H&D Club occasion elegance"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="sm:col-span-7">
                      <span className="font-serif italic text-xs text-[#226192] font-bold">
                        &ldquo;Everyday Wear. Elevated.&rdquo;
                      </span>
                      <p className="text-xs text-[#717880] mt-1.5 leading-normal">
                        Crisp linen mandarin shirts, mother-of-pearl buttons, and European-inspired
                        pleated holiday pinafores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D8D2C5] flex items-center justify-between">
                  <Link
                    to="/brands/$slug"
                    params={{ slug: "hd-club" }}
                    className="text-xs font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557] flex items-center gap-1"
                  >
                    <span>View H&D Club Occasion</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-[10px] text-[#717880] uppercase">Ages 4 - 14Y</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 3: FULL-WIDTH EDITORIAL BREAK (BOY MUNNA IP WORLD) */}
          <div className="w-full bg-[#18466b] text-white border-2 border-[#226192] shadow-md p-6 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left: Story & Badges */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-[#EF8557] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-3">
                  <Compass className="size-3.5" />
                  REGISTERED TRADEMARK IP · MUTHU EXCLUSIVE
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mb-2">
                  Meet Munna — <br />
                  <span className="italic font-normal text-[#EF8557]">
                    From Storybook Pages To Everyday Wardrobe
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-6 max-w-xl leading-relaxed">
                  Boy Munna isn&apos;t just an apparel line; it&apos;s an original illustrated
                  character world registered by Muthu International. Each collection drop pairs
                  wearable comic storylines with 100% bio-washed nursery cottons and skin-safe,
                  zero-rub eco-inks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-[#143653] p-3 border border-sky-400/30">
                    <span className="text-[#EF8557] font-bold text-xs block mb-0.5">
                      Zero-Rub Water Inks
                    </span>
                    <p className="text-[11px] text-slate-300">
                      Soft screen prints that never peel or stiffen against sensitive baby skin.
                    </p>
                  </div>
                  <div className="bg-[#143653] p-3 border border-sky-400/30">
                    <span className="text-[#EF8557] font-bold text-xs block mb-0.5">
                      Collectible Comics
                    </span>
                    <p className="text-[11px] text-slate-300">
                      Each piece ships with a printed mini adventure chapter featuring Munna.
                    </p>
                  </div>
                  <div className="bg-[#143653] p-3 border border-sky-400/30">
                    <span className="text-[#EF8557] font-bold text-xs block mb-0.5">
                      Tirupur Certified
                    </span>
                    <p className="text-[11px] text-slate-300">
                      Pre-washed cotton ensuring 0% shrinkage across 50+ wash cycles.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/brands/$slug"
                    params={{ slug: "boy-munna" }}
                    className="px-6 py-3 bg-[#EF8557] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#d97346] transition-colors flex items-center gap-2"
                  >
                    <span>EXPLORE BOY MUNNA RANGE</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={handleAddMunnaSet}
                    className="px-5 py-3 border border-white/40 text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#18466b] transition-colors flex items-center gap-2"
                  >
                    <ClipboardList className="size-4 text-[#EF8557]" />
                    <span>Reserve Adventure Pack (₹449)</span>
                  </button>
                </div>
              </div>

              {/* Right: Visual Panel with Model and Munna Badge */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] bg-white overflow-hidden border-2 border-white shadow-xl">
                  <img
                    src={images.hero}
                    alt="Boy Munna kidswear collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#EF8557] text-white p-3 shadow-xl border border-white flex items-center gap-2">
                  <div className="size-8 bg-white text-[#EF8557] font-serif font-bold flex items-center justify-center text-sm">
                    BM
                  </div>
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold uppercase tracking-wider block">
                      Official Registered IP
                    </span>
                    <span className="text-white/80">Regd. No. 4910283 / Chennai Registry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. SS25 COORDINATE STUDIO LOOKBOOK
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full bg-[#F7F3EB] py-16 sm:py-24 border-b border-[#D8D2C5]"
        id="lookbook-studio"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Studio Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="size-2 bg-[#EF8557]" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#226192]">
                Interactive Lookbook Studio
              </span>
              <span className="size-2 bg-[#EF8557]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252525]">
              The Tirupur SS25 Collection · Coordinate Studio
            </h2>
            <p className="text-xs sm:text-sm text-[#717880] mt-2">
              Mix & match our factory-direct tops, bottoms, and seasonal colorways. View instant
              transparent MRP and reserve directly from Tirupur warehouse inventory.
            </p>
          </div>

          {/* Studio Layout: Interactive Switcher Grid */}
          <div className="bg-white border border-[#D8D2C5] p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Column 1: Live Interactive Wardrobe Controls (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Step 1: Choose Top */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#252525]">
                      1. Select Top Garment:
                    </span>
                    <span className="text-xs text-[#EF8557] font-bold">{selectedTop.name}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {topOptions.map((top) => (
                      <button
                        key={top.id}
                        type="button"
                        onClick={() => setSelectedTopId(top.id)}
                        className={`p-2.5 text-center transition-all border ${
                          selectedTopId === top.id
                            ? "border-[#226192] bg-[#226192] text-white font-bold"
                            : "border-[#D8D2C5] bg-[#F7F3EB] text-[#252525] hover:border-[#226192]"
                        }`}
                      >
                        <span className="block text-xs font-bold line-clamp-1">{top.name}</span>
                        <span className="text-[10px] opacity-90 font-mono">₹{top.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Choose Bottom */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#252525]">
                      2. Select Bottom Garment:
                    </span>
                    <span className="text-xs text-[#EF8557] font-bold">{selectedBottom.name}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {bottomOptions.map((bot) => (
                      <button
                        key={bot.id}
                        type="button"
                        onClick={() => setSelectedBottomId(bot.id)}
                        className={`p-2.5 text-center transition-all border ${
                          selectedBottomId === bot.id
                            ? "border-[#226192] bg-[#226192] text-white font-bold"
                            : "border-[#D8D2C5] bg-[#F7F3EB] text-[#252525] hover:border-[#226192]"
                        }`}
                      >
                        <span className="block text-xs font-bold line-clamp-1">{bot.name}</span>
                        <span className="text-[10px] opacity-90 font-mono">₹{bot.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Choose Size */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#252525] block mb-2">
                    3. Select Fit Size:
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {["2-3Y", "4-5Y", "6-7Y", "8-9Y"].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setLookbookSize(sz)}
                        className={`py-2 text-xs font-bold border transition-all ${
                          lookbookSize === sz
                            ? "border-[#EF8557] bg-[#EF8557] text-white"
                            : "border-[#D8D2C5] bg-[#F7F3EB] text-[#252525] hover:border-[#226192]"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bundle Summary & Booking Action */}
                <div className="border-t border-[#D8D2C5] pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#717880] uppercase tracking-wider block">
                      Total Set (Top + Bottom)
                    </span>
                    <span className="font-serif font-bold text-2xl text-[#226192]">
                      ₹{lookbookTotal}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddLookbookSet}
                    className="px-6 py-3 bg-[#EF8557] hover:bg-[#d97346] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2"
                  >
                    <ClipboardList className="size-4" />
                    <span>{lookbookAdded ? "Added to Booking List ✓" : "Reserve Coordinate"}</span>
                  </button>
                </div>
              </div>

              {/* Column 2: Coordinate Visual Stage (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] bg-[#F7F3EB] border border-[#D8D2C5] overflow-hidden shadow-inner flex items-center justify-center">
                  <img
                    src={selectedTop.image}
                    alt={selectedTop.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#D8D2C5] px-3 py-1.5 shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557] block">
                      Active Coordinate
                    </span>
                    <span className="font-serif font-bold text-xs text-[#226192]">
                      {selectedTop.name} + {selectedBottom.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. VERTICALLY INTEGRATED PRODUCTION & QUALITY
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full bg-[#EAE6DE] py-16 sm:py-20 border-b border-[#D8D2C5]"
        id="craftsmanship"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#EF8557] block mb-1">
                VERTICALLY INTEGRATED PRODUCTION · TIRUPUR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-bold leading-tight mb-4">
                Crafting Purity & Integrity In Every Cotton Loop
              </h2>
              <p className="text-xs sm:text-sm text-[#717880] mb-4 leading-relaxed">
                Operating two dedicated state-of-the-art facilities across Avinashi Road and Asher
                Nagar in Tirupur, Muthu International controls every step from raw combed yarn
                spinning to laser pattern cutting and non-toxic water-based screen printing.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border-l-2 border-[#226192] pl-3">
                  <span className="font-serif text-2xl font-bold text-[#226192] block">
                    Facility 01
                  </span>
                  <p className="text-xs text-[#717880]">
                    14/2 Asher Nagar: Circular Knitting, Bio-Washing & Finishing
                  </p>
                </div>
                <div className="border-l-2 border-[#EF8557] pl-3">
                  <span className="font-serif text-2xl font-bold text-[#EF8557] block">
                    Facility 02
                  </span>
                  <p className="text-xs text-[#717880]">
                    Avinashi Road: Precision Cutting, QC Seaming & Pan-India Dispatch Hub
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Verified Stat Boxes */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 border border-[#D8D2C5] shadow-sm text-center">
                <span className="font-serif text-4xl font-bold text-[#226192] block mb-1">25+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#252525] block">
                  Years Experience
                </span>
                <span className="text-[11px] text-[#717880] mt-1 block">
                  Continuous operation since 2000 in Tirupur
                </span>
              </div>
              <div className="bg-white p-6 border border-[#D8D2C5] shadow-sm text-center">
                <span className="font-serif text-4xl font-bold text-[#EF8557] block mb-1">4</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#252525] block">
                  Proprietary Labels
                </span>
                <span className="text-[11px] text-[#717880] mt-1 block">
                  Kids Korner, X-Zone, H&D Club, Boy Munna
                </span>
              </div>
              <div className="bg-white p-6 border border-[#D8D2C5] shadow-sm text-center">
                <span className="font-serif text-4xl font-bold text-[#226192] block mb-1">
                  250,000+
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#252525] block">
                  Monthly Capacity
                </span>
                <span className="text-[11px] text-[#717880] mt-1 block">
                  Precision knitted garments per month
                </span>
              </div>
              <div className="bg-white p-6 border border-[#D8D2C5] shadow-sm text-center">
                <span className="font-serif text-4xl font-bold text-[#EF8557] block mb-1">
                  100%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#252525] block">
                  GOTS Cotton Standard
                </span>
                <span className="text-[11px] text-[#717880] mt-1 block">
                  Hypoallergenic bio-washed cotton
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. WHOLESALE & B2B DIRECT ALLOCATION GATEWAY
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#18466b] text-white py-14 border-b border-[#2d628d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#EF8557] block mb-1">
              DIRECT FACTORY TRADE DESK
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              B2B Stockist Pre-Packs & Carton Allocations
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Structured 48-piece, 240-piece, and full container volume runs for retailers and
              distributors across India. Direct dispatch from our Tirupur warehouse.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/wholesale"
              className="px-6 py-3.5 bg-[#EF8557] hover:bg-[#d97346] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
            >
              <span>EXPLORE WHOLESALE TIERS</span>
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+919787806802"
              className="px-5 py-3.5 border border-white/40 hover:bg-white hover:text-[#18466b] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Hotline: +91 97878 06802
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
