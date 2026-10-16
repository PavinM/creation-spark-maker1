import { createFileRoute } from "@tanstack/react-router";
import { Check, Leaf, Recycle, Factory, Package, Droplets } from "lucide-react";
import { CTASection, PageHero, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Responsible Kidswear Manufacturing | Muthu International Atelier" },
      {
        name: "description",
        content:
          "Our verified framework for responsible kidswear production: organic material selection, efficient cutting, reduced chemical waste, and biodegradable packaging.",
      },
      { property: "og:title", content: "Responsible Manufacturing | Muthu International" },
      {
        property: "og:description",
        content: "A factual framework for verified environmental and social responsibility initiatives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SustainabilityPage,
});

const pillars = [
  {
    title: "Responsible Material Selection",
    icon: Leaf,
    desc: "Offering buyers access to certified organic combed cotton, BCI (Better Cotton Initiative) cotton, recycled polyester blends, and sustainably sourced viscose fibers.",
    points: ["GOTS certified organic cotton options", "Low-impact reactive dyes", "Zero hazardous chemical input"],
  },
  {
    title: "Efficient Production & Energy",
    icon: Factory,
    desc: "Optimizing machinery usage, modern LED plant illumination, and high-efficiency servo-motor sewing lines that substantially lower power draw per garment output.",
    points: ["Direct-drive energy-saving motors", "Optimized production sequencing", "Routine machine maintenance schedules"],
  },
  {
    title: "Waste Reduction & Nesting",
    icon: Recycle,
    desc: "Computerized CAD lay planning engineered to achieve industry-leading fabric utilization rates, dramatically reducing fabric offcuts and scrap margins.",
    points: ["High-efficiency nesting software", "Fabric scrap sorting for industrial recycling", "Digital pattern proofing reducing paper usage"],
  },
  {
    title: "Eco-Conscious Packaging",
    icon: Package,
    desc: "Transitioning toward recycled low-density polyethylene (rLDPE) polybags, biodegradable starch bags, FSC-certified hangtags, and plastic-free carton sealing.",
    points: ["100% Recycled PE polybag options", "FSC-certified paper hangtags & trims", "Plastic-free tape & unbleached cartons"],
  },
  {
    title: "Responsible Ethics & Welfare",
    icon: Droplets,
    desc: "Maintaining strict compliance with labor welfare standards, fair wage compensation, safe and well-ventilated operating floors, and zero child or forced labor.",
    points: ["Ethical labor practices & fair wages", "Health, safety & fire compliance", "Zero child-labor absolute policy"],
  },
];

function SustainabilityPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Environmental & Social Stewardship"
        title="RESPONSIBILITY GROUNDED IN VERIFIED FACT."
        text="A transparent framework for documenting verified practices, responsible material sourcing, and efficient manufacturing without greenwashing."
        image={images.bloomHero || images.factory}
      />

      {/* Philosophy Statement */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ OUR PHILOSOPHY ]</p>
              </div>
              <h2 className="display-title mt-3 text-3xl uppercase tracking-tight text-[#226192] sm:text-5xl">
                REAL COMMITMENTS. NO GREENWASHING.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                As a kids apparel manufacturer, our responsibility starts with the safety of the children who wear our garments and extends to the craftspeople who produce them. We approach sustainability practically: eliminating hazardous chemistry, conserving raw fabrics, and continuously improving resource efficiency.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                We believe in factual transparency rather than unsupported marketing slogans. When your brand requests certified organic or recycled fibers, we provide authentic transaction certificates and verified supply chain documentation.
              </p>
            </Reveal>

            <Reveal className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Buyer Verification Dossier</span>
              <h3 className="font-['Space_Grotesk'] mt-2 text-xl font-bold uppercase tracking-tight text-[#226192]">
                Corporate Sustainability Framework
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">
                This verification area is configured for factual data verified by independent third-party audits:
              </p>
              <div className="mt-6 space-y-4 text-xs">
                <div className="border-l-2 border-[#EF8557] pl-4 text-[#252525]/85">
                  <strong className="block font-['Space_Grotesk'] text-[#226192] uppercase tracking-wider">
                    Organic Cotton Certification:
                  </strong>
                  GOTS (Global Organic Textile Standard) Scope Certificates available per batch order.
                </div>
                <div className="border-l-2 border-[#EF8557] pl-4 text-[#252525]/85">
                  <strong className="block font-['Space_Grotesk'] text-[#226192] uppercase tracking-wider">
                    Social Compliance Audit:
                  </strong>
                  Sedex SMETA 4-Pillar ethical audit documentation maintained and current.
                </div>
                <div className="border-l-2 border-[#EF8557] pl-4 text-[#252525]/85">
                  <strong className="block font-['Space_Grotesk'] text-[#226192] uppercase tracking-wider">
                    Chemical Safety Compliance:
                  </strong>
                  OEKO-TEX Standard 100 Class 1 (Babywear) and zero hazardous discharge chemistry.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Action Areas"
            title="PRACTICAL AREAS OF SUSTAINABLE FOCUS."
            text="How we actively manage material selection, energy efficiency, waste minimization, and humane workplace standards."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title}>
                  <div className="flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#226192]/10 pb-4">
                        <span className="font-mono text-xs font-bold text-[#EF8557]">0{idx + 1}</span>
                        <div className="flex size-9 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192]">
                          <Icon className="size-4" />
                        </div>
                      </div>
                      <h3 className="font-['Space_Grotesk'] mt-6 text-lg font-bold uppercase tracking-tight text-[#226192]">{p.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">{p.desc}</p>
                    </div>

                    <div className="mt-6 border-t border-[#226192]/10 pt-4">
                      <ul className="space-y-1.5 text-[11px] text-[#252525]/80">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2">
                            <Check className="size-3 text-[#EF8557] shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}