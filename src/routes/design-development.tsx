import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Palette, Scissors, Sparkles, Shirt, Box, Layers, Eye, RefreshCw, PenTool } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/design-development")({
  head: () => ({
    meta: [
      { title: "Kidswear Design & Development Atelier | Muthu International" },
      {
        name: "description",
        content:
          "Experience Muthu International's creative atelier: where daily kidswear sketches transform into production-ready collections through CAD design, Pantone matching, and precision sampling.",
      },
      { property: "og:title", content: "From Idea to Production | Muthu International Atelier" },
      {
        property: "og:description",
        content: "Fresh kidswear designs developed daily. In-house trend forecasting, textile innovation, and rapid prototyping.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignDevelopmentPage,
});

const seasonalPalettes = [
  {
    season: "Spring / Summer 2026",
    theme: "Sunlit Meadow & Coastal Breeze",
    colors: [
      { name: "Buttercup Yellow", hex: "#F6D86B", pantone: "13-0752 TCX" },
      { name: "Aegean Cerulean", hex: "#3B82F6", pantone: "16-4134 TCX" },
      { name: "Coral Blossom", hex: "#F87171", pantone: "15-1530 TCX" },
      { name: "Sage Sprout", hex: "#86EFAC", pantone: "14-6316 TCX" },
      { name: "Pure Cloud White", hex: "#F8FAFC", pantone: "11-0601 TCX" },
    ],
  },
  {
    season: "Autumn / Winter 2026",
    theme: "Woodland Hearth & Nordic Pine",
    colors: [
      { name: "Deep Spruce", hex: "#164E63", pantone: "19-4820 TCX" },
      { name: "Amber Ochre", hex: "#D97706", pantone: "16-1144 TCX" },
      { name: "Berry Mulled Wine", hex: "#9F1239", pantone: "19-1725 TCX" },
      { name: "Warm Cashmere Oat", hex: "#D4D4D8", pantone: "13-0002 TCX" },
      { name: "Midnight Indigo", hex: "#1E1B4B", pantone: "19-3921 TCX" },
    ],
  },
];

const designWorkflow = [
  {
    step: "01",
    phase: "Trend Analysis & Moodboarding",
    desc: "Our creative directors monitor international kidswear runways, social culture, and seasonal buying shifts to curate thematic moodboards with silhouettes, color stories, and print aesthetics.",
    icon: Eye,
    deliverable: "Digital Moodboards & Color Direction",
  },
  {
    step: "02",
    phase: "CAD Silhouettes & Tech Pack Drafting",
    desc: "Daily sketching translates into detailed 2D/3D CAD garment flats with millimeter-accurate grade rules, seam callouts, stitch densities, and stitch-tension specs for dynamic movement.",
    icon: PenTool,
    deliverable: "Comprehensive Tech Packs & Graded Specs",
  },
  {
    step: "03",
    phase: "Textile & Pantone Lab Dip Alignment",
    desc: "Yarn blends (100% combed cotton, French Terry, bamboo fleece) are dyed to exact spectrophotometer Pantone coordinates and certified for colorfastness and zero crocking.",
    icon: Palette,
    deliverable: "Approved Lab Dips & Strike-offs",
  },
  {
    step: "04",
    phase: "Art Studio: Screen, Rotary & Embroidery",
    desc: "In-house graphic artists formulate non-toxic water-based discharge prints, multi-color high-density puff prints, and Japanese multi-head embroidery designs tested for child-skin comfort.",
    icon: Scissors,
    deliverable: "Print Strike-off & Embroidery Strike",
  },
  {
    step: "05",
    phase: "Pilot Prototype & Fit Validation",
    desc: "First physical prototypes are hand-assembled in our pilot sampling room, fitted on pediatric mannequins and live models, and put through shrinkage and laundering tests.",
    icon: RefreshCw,
    deliverable: "Pre-Production Sample (PP Sample)",
  },
];

const studioCategories = [
  {
    title: "Infant & Toddler Ergonomics",
    description: "Anti-pinch zipper guards, expandable envelope necklines, nickel-free snap buttons, and flatlock irritation-free seams designed for sensitive developmental stages.",
    fabrics: "Interlock 180-220 GSM • Organic Combed Cotton",
  },
  {
    title: "Everyday Playwear & Co-ords",
    description: "High-recovery elastane rib collars, reinforced double-needle knees, non-roll drawstrings, and breathable single jersey engineered for active play.",
    fabrics: "Single Jersey 160-200 GSM • Cotton/Lycra Blends",
  },
  {
    title: "Artisanal Nightwear & Loungewear",
    description: "Ultra-soft brushed cotton paijama sets, breathable thermal waffle sets, and cozy loungewear dyed with hypoallergenic AZO-free pigments.",
    fabrics: "Waffle Knit • Bio-washed Rib • Modal Cotton",
  },
  {
    title: "Seasonal Outerwear & Hoodies",
    description: "Pre-shrunk 3-thread French Terry, cozy polar fleece zip hoodies, and raglan sweaters with ribbed cuffs tailored for seasonal drops.",
    fabrics: "French Terry 260-320 GSM • Brushed Fleece",
  },
];

function DesignDevelopmentPage() {
  const [activeSeason, setActiveSeason] = useState(0);

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ SIGNATURE ATELIER HERO ON WARM IVORY ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <span>The Creative Atelier</span>
                </div>
                <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
                  Daily Sketches.
                  <br />
                  <span className="text-[#EF8557]">Iconic Kidswear.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                  Inside Muthu International's in-house design studio, creative illustration and technical precision merge. Our designers craft fresh kidswear concepts every day—synchronizing trend forecasting directly with production.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="border border-[#226192] bg-[#226192] font-bold text-[#FFFFFF] shadow-sm hover:bg-[#1B4E75]">
                    <Link to="/request-quote" className="flex items-center gap-2">
                      <span>Request Design Consultation</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#226192]/30 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]">
                    <Link to="/collections">
                      <span>Explore Fresh Collections</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Floating Studio Visual Card */}
            <div className="lg:col-span-5">
              <Reveal className="relative">
                <div className="overflow-hidden rounded-2xl border border-[#226192]/25 bg-[#FFFFFF] p-3 shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={images.pageDesign}
                      alt="Design Studio Artwork and Fabric Swatches"
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute bottom-3 left-3 rounded-lg bg-[#226192] px-3 py-1.5 text-[11px] font-semibold text-[#FFFFFF] shadow-sm">
                      Live In-Studio CAD & Swatch Desk
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#226192]">365+</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Styles / Year</span>
                    </div>
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#EF8557]">7 Days</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Sampling</span>
                    </div>
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#226192]">100%</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">In-House CAD</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Seasonal Palette Bar */}
      <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Seasonal Color Curation</span>
              <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Pantone® Color Forecasts for Kidswear
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#64748B]">
                Curated color palettes developed specifically for children's fashion, balancing energetic warmth with soothing tones.
              </p>
            </div>
            <div className="flex gap-2">
              {seasonalPalettes.map((p, idx) => (
                <button
                  key={p.season}
                  type="button"
                  onClick={() => setActiveSeason(idx)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                    activeSeason === idx
                      ? "bg-[#0F172A] text-[#FFFFFF] shadow-sm"
                      : "border border-[#E2E8F0] bg-[#FAF8F5] text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  {p.season}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#FAF8F5] p-6 sm:p-8">
            {(() => {
              const currentSeason = seasonalPalettes[activeSeason] || seasonalPalettes[0]!;
              if (!currentSeason) return null;
              return (
                <>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <span className="text-xs font-semibold text-[#EF8557] uppercase tracking-wider">Color Direction</span>
                      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#0F172A]">
                        {currentSeason.theme}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#64748B]">
                      Lab-Tested Reactive Dye Formulations
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
                    {currentSeason.colors.map((c) => (
                      <div key={c.name} className="group overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                        <div
                          className="h-28 w-full rounded-lg shadow-inner transition-transform group-hover:scale-105"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div className="mt-3">
                          <strong className="block truncate text-xs font-bold text-[#0F172A]">{c.name}</strong>
                          <div className="mt-1 flex items-center justify-between text-[10px] text-[#64748B]">
                            <span>{c.hex}</span>
                            <span className="font-mono">{c.pantone}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 5-Step Atelier Workflow */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Precision Process"
            title="From Initial Spark to Finished Fit Sample"
            text="How our design team brings creative intuition and industrial rigor together to deliver flawless kidswear lines."
          />

          <div className="mt-16 space-y-6">
            {designWorkflow.map((step) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step}>
                  <div className="group rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:border-[#F59E0B] hover:shadow-lg lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
                    <div className="flex items-center gap-4 lg:col-span-4">
                      <span className="font-['Space_Grotesk'] text-4xl font-extrabold text-[#F59E0B]/80 group-hover:text-[#F59E0B]">
                        {step.step}
                      </span>
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] border border-[#E2E8F0] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-[#FFFFFF] transition-colors">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#0F172A]">
                          {step.phase}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-4 lg:col-span-5 lg:mt-0">
                      <p className="text-sm leading-relaxed text-[#64748B]">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-[#E2E8F0] pt-4 lg:col-span-3 lg:mt-0 lg:border-t-0 lg:pt-0 lg:text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">Atelier Output</span>
                      <span className="mt-0.5 block text-xs font-semibold text-[#0F172A]">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Ergonomics Matrix */}
      <section className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Kidswear Anatomy"
            title="Tailored Engineering for Little Adventurers"
            text="Designing for children requires deep technical empathy for skin sensitivity, rapid growth, and uninhibited play."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {studioCategories.map((cat) => (
              <Reveal key={cat.title}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-[#FAF8F5] p-7 transition-all duration-300 hover:border-[#0F172A] hover:bg-[#FFFFFF] hover:shadow-lg">
                  <div>
                    <span className="inline-block rounded-md bg-[#EF8557]/10 px-2.5 py-1 text-[11px] font-bold text-[#EF8557]">
                      Garment Engineering
                    </span>
                    <h3 className="mt-3 font-['Space_Grotesk'] text-lg font-bold text-[#0F172A]">
                      {cat.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#64748B]">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#E2E8F0] pt-4">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Fabric Architecture
                    </span>
                    <p className="mt-1 font-mono text-xs font-semibold text-[#0F172A]">
                      {cat.fabrics}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier CTA */}
      <CTASection />
    </div>
  );
}