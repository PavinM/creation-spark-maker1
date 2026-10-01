import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { images, manufacturingStages } from "@/lib/content";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Kidswear Manufacturing Process | Muthu International" },
      {
        name: "description",
        content:
          "Explore the complete 9-stage kidswear manufacturing journey at Muthu International: Fabric Selection, Pattern & Cutting, Printing, Embroidery, Stitching, Finishing, Quality Control and Packing.",
      },
      { property: "og:title", content: "Kidswear Manufacturing Process at Muthu International" },
      {
        property: "og:description",
        content: "A disciplined, quality-controlled kidswear production process from fabric to final packing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Inside Our Factory"
        title="Every garment has a process."
        text="A disciplined, synchronized 9-stage manufacturing journey engineered to transform approved designs into flawless, export-grade kidswear collections."
        image={images.factory}
      />

      {/* 9 Stages Visual Journey */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Stage-by-Stage Breakdown"
            title="The 9 Pillars of Production."
            text="Every garment moves through dedicated technical checkpoints, overseen by skilled supervisors and independent QA auditors."
          />

          <div className="mt-16 space-y-16">
            {manufacturingStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Reveal key={stage.number}>
                  <div className="grid items-center gap-10 border border-border bg-white p-6 sm:p-10 lg:grid-cols-12">
                    {/* Visual Media */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <ScrollMedia className="image-zoom aspect-[4/3] bg-beige border border-border">
                        <img
                          src={stage.image}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="size-full object-cover"
                          alt={stage.title}
                        />
                      </ScrollMedia>
                    </div>

                    {/* Content Details */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-gold">STAGE {stage.number}</span>
                        <span className="inline-block h-px w-6 bg-gold" />
                      </div>
                      <h3 className="display-title mt-2 text-2xl uppercase text-navy sm:text-4xl">
                        {stage.title}
                      </h3>
                      <p className="mt-4 text-sm font-medium text-navy/90">{stage.shortDesc}</p>
                      <p className="mt-2 text-xs leading-relaxed text-slate sm:text-sm">{stage.fullDesc}</p>

                      <div className="mt-6 border-t border-border pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-navy">Quality & Technical Highlights:</p>
                        <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {stage.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-xs text-slate">
                              <Check className="size-3.5 text-gold shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Factory Machinery & Standards Banner */}
      <section className="bg-beige py-20">
        <div className="page-shell">
          <div className="border border-border bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <span className="font-mono text-xs font-bold text-gold">01</span>
                <h4 className="mt-2 text-lg font-bold uppercase text-navy">Advanced Sewing Machinery</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate">
                  Equipped with specialized Juki & Brother lockstitch, 4-thread overlock, flatlock, and automatic collar attaching machines configured for delicate knits and woven garments.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-gold">02</span>
                <h4 className="mt-2 text-lg font-bold uppercase text-navy">In-House Embellishment</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate">
                  Direct multi-head Tajima embroidery and automated screen/digital printing stations capable of high-density, foil, flock, and reactive print applications.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-gold">03</span>
                <h4 className="mt-2 text-lg font-bold uppercase text-navy">Zero-Toxicity & Metal Scan</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate">
                  100% of finished children's apparel passes dual-head conveyorized needle detection to guarantee absolute metal contamination free security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}