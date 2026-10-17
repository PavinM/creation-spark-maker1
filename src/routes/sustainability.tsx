import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Leaf, Recycle, Droplets, ShieldCheck, Sun, Heart, Sparkles, ArrowRight, Award } from "lucide-react";
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
        content: "Pure for little skin, gentle on our planet. Discover our responsible textile stewardship and zero liquid discharge water treatment.",
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
    <div className="bg-[#FAF9F6] text-[#1C2826]">
      {/* Eco-Luxe Hero */}
      <section className="relative overflow-hidden border-b border-[#E3E8E5] bg-[#0A2317] text-[#FFFFFF]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={images.bloomHero}
            alt="Organic Botanical Textile Craft"
            className="size-full object-cover object-center filter saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06170F] via-[#0A2317]/90 to-transparent" />
        </div>

        <div className="page-shell relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/40 bg-[#10B981]/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#34D399] uppercase">
                  <Leaf className="size-3.5" />
                  <span>Conscious Stewardship</span>
                </div>
                <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
                  Gentle on Young Skin. Kind to the Earth.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#D1FAE5]">
                  Children deserve clothes crafted with purity and love. At Muthu International, our environmental responsibility spans every meter of fabric—from certified organic cotton yarns to zero-discharge water recycling.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="border border-[#10B981] bg-[#10B981] font-bold text-[#06170F] hover:bg-[#34D399] hover:border-[#34D399]">
                    <Link to="/request-quote" className="flex items-center gap-2">
                      <span>Source Sustainable Kidswear</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#A7F3D0]/30 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF]/10">
                    <Link to="/quality">
                      <span>Review Lab Safety Testing</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Floating Eco Credentials */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="overflow-hidden rounded-2xl border border-[#FFFFFF]/15 bg-[#06170F]/85 p-6 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#34D399]">
                      Eco-Purity Scorecard
                    </span>
                    <Award className="size-5 text-[#34D399]" />
                  </div>

                  <div className="mt-6 space-y-4 text-xs">
                    <div className="rounded-xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-4">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-[#FFFFFF]">Water Reclamation Rate</strong>
                        <span className="font-mono text-base font-bold text-[#34D399]">92%</span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#A7F3D0]">Closed-loop biological ETP and reverse osmosis system</p>
                    </div>

                    <div className="rounded-xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-4">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-[#FFFFFF]">Chemical Safety Grade</strong>
                        <span className="font-mono text-base font-bold text-[#34D399]">Class 1</span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#A7F3D0]">OEKO-TEX standard compliant for direct infant skin contact</p>
                    </div>

                    <div className="rounded-xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-4">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-[#FFFFFF]">Ethical Artisan Workplace</strong>
                        <span className="font-mono text-base font-bold text-[#34D399]">100% Fair</span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#A7F3D0]">Over 100 respected employees with full healthcare & fair wages</p>
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
                      <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">
                        {pillar.desc}
                      </p>
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
                    <span className="text-xs font-bold uppercase tracking-widest text-[#34D399]">Pediatric Safety</span>
                    <h3 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold">Tested for Sensitive Skin</h3>
                    <p className="mt-2 text-xs text-[#D1FAE5]">Zero synthetic pesticide residue. Bio-washed for cloud-like touch.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#065F46]">Rigorous Protection</span>
                <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-extrabold text-[#0A2317] sm:text-4xl">
                  Built to the World's Strictest Children's Standards
                </h2>
                <p className="mt-4 text-base text-[#4A5568]">
                  Babies and children have thinner, more permeable skin than adults. We construct garments with zero-compromise mechanical and chemical safety checklists.
                </p>

                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {babySafetyChecks.map((check) => (
                    <div key={check} className="flex items-start gap-3 rounded-xl border border-[#10B981]/20 bg-[#FFFFFF] p-3.5 shadow-sm">
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
      <section className="bg-[#0A2317] py-20 text-[#FFFFFF]">
        <div className="page-shell text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#10B981]/20 px-4 py-1 text-xs font-semibold text-[#34D399]">
              <Sparkles className="size-3.5" />
              <span>Partner in Sustainability</span>
            </div>
            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-extrabold sm:text-5xl">
              Elevate Your Brand with Certified Sustainable Kidswear.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#D1FAE5]">
              Let your customers buy with pride, knowing their children's apparel was consciously created in Tirupur's most ethical manufacturing hub.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="border border-[#10B981] bg-[#10B981] font-bold text-[#06170F] hover:bg-[#34D399]">
                <Link to="/request-quote">Request Sustainable Apparel Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#34D399]/40 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF]/10">
                <Link to="/manufacturing">Inspect Our Production Facilities</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}