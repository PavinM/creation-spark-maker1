import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  Leaf,
  Recycle,
  Droplets,
  ShieldCheck,
  Sun,
  Heart,
  Sparkles,
  ArrowRight,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainable & Ethical Kidswear Manufacturing | Muthu International" },
      {
        name: "description",
        content:
          "Explore Muthu International's commitment to eco-conscious garment crafting: organic cotton fibers, non-toxic AZO-free dyes, solar-supported facilities, and child-safe ethical standards.",
      },
      { property: "og:title", content: "Eco-Conscious Kidswear Production | Muthu International" },
      {
        property: "og:description",
        content:
          "Pure for little skin, gentle on our planet. Discover our responsible textile stewardship and zero liquid discharge water treatment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SustainabilityPage,
});

const ecoPillars = [
  {
    icon: Leaf,
    title: "Pure Organic Fibers",
    subtitle: "GOTS-Compliant Sourcing",
    desc: "We prioritize long-staple organic combed cotton cultivated without synthetic pesticides or genetic modification, yielding softer yarns that soothe baby and child skin.",
    metrics: "100% Natural Yarns Available",
  },
  {
    icon: Droplets,
    title: "Zero Liquid Discharge (ZLD)",
    subtitle: "Closed-Loop Water Recycling",
    desc: "Our processing ecosystem utilizes advanced biological effluent treatment plants (ETP) and multi-stage reverse osmosis, reclaiming over 90% of processing water for reuse.",
    metrics: ">90% Water Recycled",
  },
  {
    icon: ShieldCheck,
    title: "Hypoallergenic Dyes",
    subtitle: "OEKO-TEX Class 1 Safe",
    desc: "Every dye formulation is rigorously tested to be free of AZO compounds, heavy metals, formaldehyde, and endocrine disruptors, passing stringent saliva and perspiration fastness.",
    metrics: "Zero Harmful Chemicals",
  },
  {
    icon: Sun,
    title: "Renewable Energy Transition",
    subtitle: "Solar & Energy Conservation",
    desc: "Our production units leverage rooftop solar arrays and energy-efficient servo-driven sewing equipment, drastically minimizing our operational carbon footprint per piece.",
    metrics: "Solar-Assisted Power",
  },
  {
    icon: Heart,
    title: "Ethical Human Dignity",
    subtitle: "100+ Happy Artisans",
    desc: "We strictly uphold zero child labor, fair living wages, comprehensive healthcare coverage, and safe, naturally ventilated ergonomic workspaces for all our employees.",
    metrics: "100% Ethical Workplace",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Patterning",
    subtitle: "Circular Fabric Management",
    desc: "Computerized nesting algorithms achieve up to 88% fabric yield efficiency. Fabric cut-waste is sorted and diverted to domestic recycling for insulation and paper mills.",
    metrics: "Circular Cut-Waste Stream",
  },
];

const babySafetyChecks = [
  "Nickel-free, anti-corrosion snaps to prevent contact dermatitis",
  "Reinforced button attachment tested to withstand >90N pull force",
  "Soft-touch heat seal labels replacing scratching woven neck tags",
  "Lead-free, non-phthalate plastisol and water-based discharge prints",
  "Smooth flatlock and overlock seam finishes that protect delicate skin",
  "Pre-washed and sanitized fabric rolls preventing post-purchase shrinkage",
];

function SustainabilityPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ SIGNATURE WARM IVORY & DEEP BLUE SUSTAINABILITY HERO ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <span>Conscious Stewardship</span>
                </div>
                <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
                  Gentle on Skin.
                  <br />
                  <span className="text-[#EF8557]">Kind to Nature.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                  Children deserve clothes crafted with purity and care. At Muthu International, our
                  environmental responsibility spans every meter of fabric—from certified organic
                  cotton yarns to zero-discharge water recycling.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="border border-[#226192] bg-[#226192] font-bold text-[#FFFFFF] shadow-sm hover:bg-[#1B4E75]"
                  >
                    <Link to="/request-quote" className="flex items-center gap-2">
                      <span>Source Sustainable Kidswear</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#226192]/30 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
                  >
                    <Link to="/quality">
                      <span>Review Lab Safety Standards</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Floating Eco Credentials */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="overflow-hidden rounded-2xl border border-[#226192]/25 bg-[#FFFFFF] p-6 shadow-lg">
                  <div className="flex items-center justify-between border-b border-[#226192]/15 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#226192]">
                      Eco-Purity Scorecard
                    </span>
                    <Award className="size-5 text-[#EF8557]" />
                  </div>

                  <div className="mt-6 space-y-4 text-xs">
                    <div className="rounded-xl border border-[#226192]/15 bg-[#EAE6DE]/60 p-4">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-[#226192]">
                          Water Reclamation Rate
                        </strong>
                        <span className="font-['Space_Grotesk'] text-base font-bold text-[#EF8557]">
                          92%
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#252525]/75">
                        Closed-loop biological ETP and reverse osmosis system
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#226192]/15 bg-[#EAE6DE]/60 p-4">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-[#226192]">
                          Chemical Safety Grade
                        </strong>
                        <span className="font-['Space_Grotesk'] text-base font-bold text-[#226192]">
                          Class 1
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#252525]/75">
                        OEKO-TEX standard compliant for direct infant skin contact
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#226192]/15 bg-[#EAE6DE]/60 p-4">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-[#226192]">
                          Ethical Workplace
                        </strong>
                        <span className="font-['Space_Grotesk'] text-base font-bold text-[#EF8557]">
                          100% Fair
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#252525]/75">
                        Over 100 respected employees with full healthcare & fair wages
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Stewardship Pillars */}
      <section className="py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Commitment in Action"
            title="Six Pillars of Responsible Production"
            text="How every garment is woven with consideration for the environment, our community, and the future generation."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ecoPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E3E8E5] bg-[#FFFFFF] p-8 shadow-sm transition-all duration-300 hover:border-[#10B981] hover:shadow-xl">
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#0A2317] text-[#34D399]">
                        <Icon className="size-6" />
                      </div>
                      <span className="mt-6 block text-[11px] font-bold uppercase tracking-wider text-[#10B981]">
                        {pillar.subtitle}
                      </span>
                      <h3 className="mt-1 font-['Space_Grotesk'] text-xl font-bold text-[#0A2317]">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">{pillar.desc}</p>
                    </div>
                    <div className="mt-6 border-t border-[#E3E8E5] pt-4">
                      <span className="inline-block rounded-full bg-[#ECFDF5] px-3 py-1 font-mono text-xs font-bold text-[#065F46]">
                        {pillar.metrics}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Child Skin Safety Certification Section */}
      <section className="border-y border-[#E3E8E5] bg-[#F0FDF4] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-[#10B981]/30 shadow-xl">
                  <img
                    src={images.bloomCraft}
                    alt="Natural cotton fabric texture"
                    className="aspect-[4/5] size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2317] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#34D399]">
                      Pediatric Safety
                    </span>
                    <h3 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold">
                      Tested for Sensitive Skin
                    </h3>
                    <p className="mt-2 text-xs text-[#D1FAE5]">
                      Zero synthetic pesticide residue. Bio-washed for cloud-like touch.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#065F46]">
                  Rigorous Protection
                </span>
                <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-extrabold text-[#0A2317] sm:text-4xl">
                  Built to the World's Strictest Children's Standards
                </h2>
                <p className="mt-4 text-base text-[#4A5568]">
                  Babies and children have thinner, more permeable skin than adults. We construct
                  garments with zero-compromise mechanical and chemical safety checklists.
                </p>

                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {babySafetyChecks.map((check) => (
                    <div
                      key={check}
                      className="flex items-start gap-3 rounded-xl border border-[#10B981]/20 bg-[#FFFFFF] p-3.5 shadow-sm"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-[#FFFFFF]">
                        <Check className="size-3" />
                      </div>
                      <span className="text-xs font-medium text-[#1C2826] leading-relaxed">
                        {check}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing CTA */}
      <CTASection />
    </div>
  );
}
