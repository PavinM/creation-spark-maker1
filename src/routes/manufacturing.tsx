import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { images, manufacturingStages } from "@/lib/content";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Kidswear Manufacturing Process | Muthu International Atelier" },
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
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Inside Our Factory"
        title="EVERY GARMENT HAS A DISCIPLINED PROCESS."
        text="A synchronized 9-stage journey transforming approved designs into export-grade kidswear in Tirupur, India."
        image={images.bloomCraft || images.factory}
      />

      {/* 9 Stages Visual Journey */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Stage-by-Stage"
            title="THE NINE PILLARS OF PRODUCTION."
            text="Dedicated checkpoints overseen by skilled pattern masters and independent QA auditors."
          />

          <div className="mt-16 space-y-16">
            {manufacturingStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Reveal key={stage.number}>
                  <div className="grid items-center gap-10 border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm sm:p-10 lg:grid-cols-12">
                    {/* Visual Media */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <ScrollMedia className="image-zoom aspect-[4/3] bg-[#EAE6DE] border border-[#226192]/20">
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
                        <span className="inline-block h-px w-6 bg-[#EF8557]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF8557]">{stage.title}</span>
                      </div>
                      <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-4xl">
                        {stage.title}
                      </h3>
                      <p className="mt-4 text-sm font-semibold text-[#226192]">{stage.shortDesc}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[#252525]/85 sm:text-sm">{stage.fullDesc}</p>

                      <div className="mt-6 border-t border-[#226192]/15 pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#226192]">Quality & Technical Highlights:</p>
                        <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {stage.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-xs text-[#252525]/80">
                              <Check className="size-3.5 text-[#EF8557] shrink-0" />
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
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <span className="font-mono text-xs font-bold text-[#EF8557]">01</span>
                <h4 className="font-['Space_Grotesk'] mt-2 text-lg font-bold uppercase text-[#226192]">Sewing Machinery</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">
                  Specialized Juki & Brother lockstitch, 4-thread overlock, flatlock and automatic collar machines for knits and wovens.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-[#EF8557]">02</span>
                <h4 className="font-['Space_Grotesk'] mt-2 text-lg font-bold uppercase text-[#226192]">In-House Embellishment</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">
                  Multi-head Tajima embroidery and automated print stations — high-density, foil, flock and reactive botanical applications.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-[#EF8557]">03</span>
                <h4 className="font-['Space_Grotesk'] mt-2 text-lg font-bold uppercase text-[#226192]">Zero-Toxicity & Metal Scan</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">
                  100% of finished apparel passes dual-head needle detection — zero metal contamination guaranteed for child safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}