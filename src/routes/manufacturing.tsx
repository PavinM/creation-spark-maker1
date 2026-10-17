import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
      {/* ═══ IMMERSIVE VIDEO-STYLE HERO WITH DIAGONAL CUT ═══ */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#0d1b2a]">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img
            src={images.pageManufacturing}
            alt="Muthu International manufacturing facility"
            className="size-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/70 via-[#0d1b2a]/40 to-[#0d1b2a]/90" />
        </div>

        {/* Content */}
        <div className="page-shell relative flex min-h-[90vh] flex-col justify-center py-40">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 border border-[#EF8557]/30 bg-[#EF8557]/10 px-4 py-2 backdrop-blur-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-[#EF8557]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#EF8557]">
                  Inside Our Factory
                </span>
              </div>

              <h1 className="mt-8 font-['Space_Grotesk'] text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Built on
                <br />
                <span className="bg-gradient-to-r from-[#EF8557] to-[#f4a67e] bg-clip-text text-transparent">
                  experience
                </span>
                <br />
                & modern
                <br />
                facilities.
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                Since 2000, our two operational factories, modern machinery and dedicated
                workforce have supported our kidswear manufacturing business.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/quality"
                  className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#226192] shadow-lg transition-all duration-300 hover:bg-[#EF8557] hover:text-white hover:shadow-xl"
                >
                  <span>Quality Standards</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Side floating stat */}
          <div className="absolute bottom-20 right-8 hidden flex-col gap-6 lg:flex">
            {[
              { num: "2", label: "Factories" },
              { num: "100+", label: "Workers" },
              { num: "25+", label: "Years" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-[#EF8557]/40 pl-4 text-right">
                <p className="font-['Space_Grotesk'] text-3xl font-extrabold text-white">{s.num}</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal cut bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none">
            <polygon fill="#EAE6DE" points="0,80 1440,80 1440,30 0,80" />
          </svg>
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