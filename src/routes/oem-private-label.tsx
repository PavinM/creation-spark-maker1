import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Sparkles, Building2, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { images, oemSteps } from "@/lib/content";

export const Route = createFileRoute("/oem-private-label")({
  head: () => ({
    meta: [
      { title: "Kidswear OEM & Private Label Manufacturer | Muthu International Atelier" },
      {
        name: "description",
        content:
          "Full-scale OEM and private-label kidswear apparel manufacturing. Turn your brand’s designs into retail-ready collections with custom trims, packaging, and strict quality control.",
      },
      { property: "og:title", content: "Your Brand. Your Vision. Our Atelier. | Muthu International" },
      {
        property: "og:description",
        content: "Custom kidswear OEM and private-label manufacturing built around your brief.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OemPrivateLabelPage,
});

function OemPrivateLabelPage() {
  const models = [
    {
      title: "Contract OEM Manufacturing",
      desc: "Engineered precisely to your tech packs, yarn counts, and bill of materials. You design; our atelier produces.",
      points: ["100% adherence to technical specs", "Custom knitting & Pantone lab dips", "Dedicated bulk assembly lines"],
    },
    {
      title: "Turnkey Private Label",
      desc: "Curated seasonal silhouettes with your branded neck tags, wash care labels, Pantone colorways, and retail packaging.",
      points: ["Accelerated time-to-market", "Custom damask labels & heat transfers", "Branded polybags & barcoding"],
    },
    {
      title: "Bespoke Co-Creation",
      desc: "Collaborative development of specialty fabric textures, innovative softening washes, and coordinated multi-piece sets.",
      points: ["Exclusive botanical artwork prints", "Ergonomic toddler & baby sizing", "Custom nickel-free snaps & drawcords"],
    },
    {
      title: "Range Planning & Drop Sync",
      desc: "Seasonal collection coordination across boys, girls, and infants for commercially cohesive, synchronized drops.",
      points: ["Cross-garment color balance", "Unified trim & packaging suite", "Consolidated air & sea freight"],
    },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="OEM & Private Label Atelier"
        title="YOUR BRAND VISION. OUR MANUFACTURING."
        text="High-precision development and bulk production for global fashion labels, department stores, and boutique private-label founders."
        image={images.bloomHero || images.printedSet}
      />

      {/* Models Explanation */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Manufacturing Frameworks"
            title="TAILORED TO YOUR SOURCING STRATEGY."
            text="Turnkey private-label collections or pure contract OEM — we adapt to your operational model."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m) => (
              <Reveal key={m.title}>
                <div className="flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192]">{m.title}</h3>
                    <p className="mt-4 text-xs leading-relaxed text-[#252525]/80">{m.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-[#226192]/15 pt-4">
                    <ul className="space-y-2 text-[11px] text-[#252525]/80">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <Check className="size-3 text-[#EF8557] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Interactive Process on Deep Editorial Blue */}
      <section className="bg-[#226192] py-20 text-[#FFFFFF] sm:py-28">
        <div className="page-shell">
          <Reveal>
            <div className="flex items-center gap-2 text-[#EF8557]">
              <span className="size-2 rounded-full bg-[#EF8557]" />
              <p className="label-track text-[#EF8557]">Structured Atelier Workflow</p>
            </div>
            <h2 className="display-title mt-4 text-4xl uppercase tracking-tight text-[#FFFFFF] sm:text-6xl">
              FROM CONCEPT TO DISPATCH IN SEVEN PHASES.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#EAE6DE]/85">
              Every milestone is physically sampled, tested, and buyer-approved before advancing to bulk line assembly.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oemSteps.map((step, idx) => (
              <Reveal key={step.number} className={idx === oemSteps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="group h-full border border-[#EAE6DE]/20 bg-[#FFFFFF]/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#EF8557] hover:bg-[#FFFFFF]/10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#EF8557]">{step.number}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#EAE6DE]/60">Phase {idx + 1}</span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] mt-6 text-lg font-bold uppercase tracking-tight text-[#FFFFFF] group-hover:text-[#EF8557]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#EAE6DE]/80">{step.desc}</p>
                </div>
              </Reveal>
            ))}

            {/* Quick Action Tile */}
            <Reveal>
              <div className="flex h-full flex-col justify-center border border-[#EF8557] bg-[#EF8557]/20 p-6 text-center">
                <Sparkles className="mx-auto size-7 text-[#EF8557]" />
                <h4 className="font-['Space_Grotesk'] mt-3 text-lg font-bold uppercase text-[#FFFFFF]">Ready to Begin?</h4>
                <p className="mt-2 text-xs text-[#EAE6DE]/80">Connect directly with our Tirupur atelier team.</p>
                <Link
                  to="/request-quote"
                  className="mt-5 inline-flex items-center justify-center border border-[#EF8557] bg-[#EF8557] py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] transition-colors hover:bg-[#EF8557]/90"
                >
                  START YOUR PROJECT
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OEM Confidentiality & IP Protection Banner */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="label-track text-[#EF8557]">Strict Confidentiality & IP Protection</p>
                <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Your Proprietary Artwork Remains Exclusively Yours.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">
                  All partnerships operate under comprehensive mutual non-disclosure. Your artwork, custom CAD pattern blocks, and brand concepts never appear in unauthorized supply chains or third-party catalogues.
                </p>
              </div>
              <div className="space-y-3 border-t border-[#226192]/15 pt-6 text-xs text-[#226192] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#EF8557]" /> Legal NDA & exclusive buyer IP protection agreements
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#EF8557]" /> Guaranteed production slots for scheduled season launches
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#EF8557]" /> Barcode, RFID tags, polybags & retail packing integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}