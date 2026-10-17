import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
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
      {/* ═══ SIGNATURE WARM IVORY & DEEP BLUE MANUFACTURING HERO ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <span>Inside Our Factories</span>
                </div>

                <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
                  Built on Experience.
                  <br />
                  <span className="text-[#EF8557]">Modern Facilities.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                  Since 2000, our two operational factories, modern high-speed machinery, and dedicated workforce of over 100 people have powered our organized kidswear manufacturing operations in Tirupur.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="border border-[#226192] bg-[#226192] font-bold text-[#FFFFFF] shadow-sm hover:bg-[#1B4E75]">
                    <Link to="/quality" className="flex items-center gap-2">
                      <span>Explore Quality Standards</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#226192]/30 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]">
                    <Link to="/request-quote">
                      <span>Schedule Factory Visit</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: HD Manufacturing Visual */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-[#226192]/25 bg-[#FFFFFF] p-3 shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={images.pageManufacturing}
                      alt="Muthu International modern manufacturing facility"
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-[#226192] px-3 py-1 text-[11px] font-bold text-[#FFFFFF]">
                      Tirupur Hub
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#226192]">2</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Factories</span>
                    </div>
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#EF8557]">100+</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Workers</span>
                    </div>
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#226192]">25+</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Years</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9 STAGES — ALTERNATING CARDS WITH NUMBERED TIMELINE ═══ */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Manufacturing Approach"
            title="Design, people and production working together."
            text="Our in-house design team, manufacturing facilities and warehouse support a varied kidswear range and domestic supply operations."
          />

          <div className="mt-16 space-y-12">
            {manufacturingStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Reveal key={stage.number}>
                  <div className="group relative grid items-center gap-8 overflow-hidden border border-[#226192]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:p-0 lg:grid-cols-12">
                    {/* Number accent */}
                    <div className="pointer-events-none absolute -left-4 -top-8 font-['Space_Grotesk'] text-[120px] font-extrabold leading-none text-[#226192]/[0.04]">
                      {stage.number}
                    </div>

                    {/* Visual Media */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <ScrollMedia className="aspect-[4/3] bg-[#EAE6DE]">
                        <img
                          src={stage.image}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                          alt={stage.title}
                        />
                      </ScrollMedia>
                    </div>

                    {/* Content */}
                    <div className={`p-8 sm:p-10 lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-3">
                        <span className="flex size-8 items-center justify-center bg-gradient-to-br from-[#EF8557] to-[#d96b3f] font-mono text-xs font-bold text-white">
                          {stage.number}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF8557]">{stage.title}</span>
                      </div>
                      <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-3xl">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-[#226192]/70">{stage.shortDesc}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[#252525]/80">{stage.fullDesc}</p>

                      <div className="mt-6 border-t border-[#226192]/10 pt-4">
                        <div className="grid grid-cols-2 gap-2">
                          {stage.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 text-xs text-[#252525]/75">
                              <Check className="size-3.5 shrink-0 text-[#EF8557]" />
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

      {/* ═══ INFRASTRUCTURE HIGHLIGHT — 3 COLUMN GLASS CARDS ═══ */}
      <section className="border-t border-[#226192]/15 bg-gradient-to-br from-[#226192] to-[#1a4d75] py-20 text-white">
        <div className="page-shell">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Two operational factories",
                  desc: "Our two factories are equipped with modern machinery to support garment manufacturing processes.",
                  accent: "border-l-4 border-l-[#EF8557]",
                },
                {
                  title: "In-house design team",
                  desc: "Our dedicated team develops fresh designs every day, keeping the collection aligned with changing preferences.",
                  accent: "border-l-4 border-l-white/30",
                },
                {
                  title: "Warehouse and supply",
                  desc: "Our dedicated warehouse supports organized storage and inventory management for customers across India.",
                  accent: "border-l-4 border-l-[#EF8557]",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`group bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 ${item.accent}`}
                >
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#EF8557]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
}