import { createFileRoute } from "@tanstack/react-router";
import { Check, Leaf, Recycle, Factory, Package, Droplets } from "lucide-react";
import { CTASection, PageHero, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Responsible Kidswear Manufacturing | Muthu International" },
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
    title: "Waste Reduction & Pattern Optimization",
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
    title: "Responsible Manufacturing & Ethics",
    icon: Droplets,
    desc: "Maintaining strict compliance with labor welfare standards, fair wage compensation, safe and well-ventilated operating floors, and zero child or forced labor.",
    points: ["Ethical labor practices & fair wages", "Health, safety & fire compliance", "Zero child-labor absolute policy"],
  },
];

function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Environmental & Social Stewardship"
        title="Responsibility, grounded in fact."
        text="A transparent framework for documenting verified practices, responsible material sourcing, and efficient manufacturing without exaggerated environmental claims."
        image={images.factory}
      />

      {/* Philosophy Statement */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="label-track mb-3 text-gold">Our Philosophy</p>
              <h2 className="display-title text-3xl uppercase text-navy sm:text-5xl">
                Real commitments. No greenwashing.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">
                As a kids apparel manufacturer, our responsibility starts with the safety of the children who wear our garments and extends to the craftspeople who produce them. We approach sustainability practically: eliminating hazardous chemistry, conserving raw fabrics, and continuously improving resource efficiency.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                We believe in factual transparency rather than unsupported marketing claims. When your brand requests certified organic or recycled fibers, we provide authentic transaction certificates and verified supply chain documentation.
              </p>
            </Reveal>

            <Reveal className="border border-border bg-white p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Buyer Verification Area</span>
              <h3 className="mt-3 text-xl font-bold uppercase text-navy">Corporate Sustainability Framework</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate">
                This section is configured for factual data verified by company audits:
              </p>
              <div className="mt-6 space-y-4 text-xs">
                <div className="border-l-2 border-gold pl-4 text-slate">
                  <strong className="block text-navy uppercase tracking-wider">Organic Cotton Certification:</strong>
                  [ADD GOTS / OCS CERTIFICATION SCOPE CERTIFICATE DETAILS WHEN SUPPLIED]
                </div>
                <div className="border-l-2 border-gold pl-4 text-slate">
                  <strong className="block text-navy uppercase tracking-wider">Social Compliance Audit:</strong>
                  [ADD SMETA / BSCI / WRAP AUDIT SCORES AND DATE WHEN SUPPLIED]
                </div>
                <div className="border-l-2 border-gold pl-4 text-slate">
                  <strong className="block text-navy uppercase tracking-wider">Chemical Safety Compliance:</strong>
                  [ADD OEKO-TEX STANDARD 100 ANNEX OR REACH COMPLIANCE DOCUMENTATION]
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 Practical Focus Areas */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Action Areas"
            title="Practical Areas of Focus."
            text="How we actively manage material selection, energy efficiency, waste minimization, and humane workplace standards."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title}>
                  <div className="flex h-full flex-col justify-between border border-border bg-white p-7 transition-all duration-300 hover:border-gold hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-gold">0{idx + 1}</span>
                        <div className="flex size-9 items-center justify-center border border-gold/40 bg-ivory text-gold">
                          <Icon className="size-4" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-lg font-bold uppercase text-navy">{p.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate">{p.desc}</p>
                    </div>

                    <div className="mt-6 border-t border-border pt-4">
                      <ul className="space-y-1.5 text-[11px] text-slate">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2">
                            <Check className="size-3 text-gold shrink-0" />
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
    </>
  );
}