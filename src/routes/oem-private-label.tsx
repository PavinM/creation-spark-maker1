import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Sparkles, Building2, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { images, oemSteps } from "@/lib/content";

export const Route = createFileRoute("/oem-private-label")({
  head: () => ({
    meta: [
      { title: "Kidswear OEM & Private Label Manufacturer | Muthu International" },
      {
        name: "description",
        content:
          "Full-scale OEM and private-label kidswear apparel manufacturing. Turn your brand’s designs into retail-ready collections with custom trims, packaging, and strict quality control.",
      },
      { property: "og:title", content: "Your Brand. Your Vision. Our Expertise. | Muthu International" },
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
      title: "OEM Manufacturing",
      desc: "Original Equipment Manufacturing built precisely to your technical packs, fabric compositions, patterns and bill of materials. You supply the blueprint; we handle the industrial execution.",
      points: ["100% adherence to buyer tech specs", "Custom fabric knitting & Pantone dyeing", "Dedicated assembly lines for bulk contracts"],
    },
    {
      title: "Private Label Solutions",
      desc: "Select from our curated seasonal silhouettes and apply your brand's labels, custom prints, unique colorways, and retail-ready packaging with accelerated lead times.",
      points: ["Faster time-to-market with proven fits", "Custom woven neck tags & wash care labels", "Branded polybags & barcoded hangtags"],
    },
    {
      title: "Custom Product Development",
      desc: "Co-creation of specialized garment concepts, innovative fabric finishes (like UV protection or bio-polish), and unique multi-piece sets tailored for boutique and department stores.",
      points: ["Bespoke surface textures & prints", "Ergonomic toddler & baby sizing", "Custom snap buttons & drawcords"],
    },
    {
      title: "Collection Development",
      desc: "End-to-end seasonal range planning covering boys, girls, infants and coordinates to produce balanced, commercially cohesive drop collections.",
      points: ["Cross-garment color synchronization", "Matched trim and accessories suite", "Consolidated freight shipping"],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="OEM & Private Label Services"
        title="Your brand. Your vision. Our expertise."
        text="A flexible development and manufacturing partnership providing global fashion labels, kidswear retailers and private-label brands with dependable, export-grade apparel production."
        image={images.printedSet}
      />

      {/* Models Explanation */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Manufacturing Models"
            title="Tailored to your commercial strategy."
            text="Whether you require turnkey private-label products or pure contract OEM manufacturing, we adapt our infrastructure to fit your operating model."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m) => (
              <Reveal key={m.title}>
                <div className="flex h-full flex-col justify-between border border-border bg-white p-7 transition-all duration-300 hover:border-gold hover:shadow-md">
                  <div>
                    <h3 className="text-xl font-bold uppercase text-navy">{m.title}</h3>
                    <p className="mt-4 text-xs leading-relaxed text-slate">{m.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <ul className="space-y-2 text-[11px] text-slate">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <Check className="size-3 text-gold shrink-0" />
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

      {/* 7-Step Interactive Process */}
      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="page-shell">
          <Reveal>
            <p className="label-track mb-3 text-gold">Structured Workflow</p>
            <h2 className="display-title text-4xl uppercase sm:text-6xl">
              From Idea to Delivery in 7 Stages.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/70">
              Our clear, transparent timeline ensures every milestone is inspected and approved before progressing to the next stage.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oemSteps.map((step, idx) => (
              <Reveal key={step.number} className={idx === oemSteps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="group h-full border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-gold">{step.number}</span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40">Phase {idx + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold uppercase tracking-wider text-white group-hover:text-gold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}

            {/* Quick Action Tile */}
            <Reveal>
              <div className="flex h-full flex-col justify-center border border-gold bg-gold/15 p-6 text-center">
                <Sparkles className="mx-auto size-7 text-gold" />
                <h4 className="mt-3 text-lg font-bold uppercase text-white">Ready to Begin?</h4>
                <p className="mt-2 text-xs text-white/80">Connect directly with our merchandising directors.</p>
                <Button asChild className="mt-5 rounded-none bg-gold text-xs font-bold uppercase text-navy hover:bg-gold/90">
                  <Link to="/request-quote">START YOUR PROJECT</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OEM Value Proposition */}
      <section className="bg-beige py-20">
        <div className="page-shell">
          <div className="border border-border bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="label-track text-gold">Strict Confidentiality & IP Protection</p>
                <h3 className="mt-2 text-2xl font-bold uppercase text-navy sm:text-3xl">
                  Your Designs Remain Exclusively Yours.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  We respect the proprietary value of your artwork, patterns and brand concepts. All OEM and private-label partnerships operate under strict non-disclosure, ensuring your designs never appear in competitor catalogs or unauthorized channels.
                </p>
              </div>
              <div className="space-y-3 border-t border-border pt-6 text-xs text-navy lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-gold" /> Comprehensive NDA & IP protection agreements
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-gold" /> Dedicated production slots for scheduled seasons
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-gold" /> Custom barcode, RFID & retail packing integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}