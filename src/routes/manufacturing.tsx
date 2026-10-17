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
          "Learn about Muthu International's kidswear manufacturing infrastructure: two operational factories, modern machinery, a dedicated warehouse and an experienced workforce.",
      },
      { property: "og:title", content: "Kidswear Manufacturing Process at Muthu International" },
      {
        property: "og:description",
        content: "Over 25 years of garment industry experience, with facilities and design capability serving customers across India.",
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
        title="Built on experience and modern facilities."
        text="Since 2000, our two operational factories, modern machinery and dedicated workforce have supported our kidswear manufacturing business."
        image={images.bloomCraft || images.factory}
      />

      {/* 9 Stages Visual Journey */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Manufacturing Approach"
            title="Design, people and production working together."
            text="Our in-house design team, manufacturing facilities and warehouse support a varied kidswear range and domestic supply operations."
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

      {/* Manufacturing infrastructure */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <h4 className="font-['Space_Grotesk'] mt-2 text-lg font-bold text-[#226192]">Two operational factories</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">
                  Our two factories are equipped with modern machinery to support garment manufacturing processes.
                </p>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] mt-2 text-lg font-bold text-[#226192]">In-house design team</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">
                  Our dedicated team develops fresh designs every day, keeping the collection aligned with changing preferences.
                </p>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] mt-2 text-lg font-bold text-[#226192]">Warehouse and supply</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">
                  Our dedicated warehouse supports organized storage and inventory management for customers across India.
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