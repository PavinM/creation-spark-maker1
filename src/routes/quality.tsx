import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, AlertCircle, FileCheck, Scale, Scissors, Sparkles, Box } from "lucide-react";
import { CTASection, PageHero, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Kidswear Quality Control & Testing | Muthu International" },
      {
        name: "description",
        content:
          "Multi-stage quality assurance for children’s apparel: material audits, measurement tolerance, print & embroidery fastness, tensile button pull tests, and 100% metal scan.",
      },
      { property: "og:title", content: "Quality at Every Stage | Muthu International" },
      {
        property: "og:description",
        content: "A disciplined stage-by-stage quality assurance protocol protecting brand integrity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QualityPage,
});

const qualityStages = [
  {
    step: "01",
    title: "Material Checking",
    desc: "Incoming yarn and knitted/woven fabrics are tested for GSM consistency, 4-point fabric defects, color matching under D65 daylight, and residual shrinkage.",
    icon: Scale,
  },
  {
    step: "02",
    title: "Measurement Verification",
    desc: "Rigorous pattern audit against approved size specification charts. Measurements are checked across neck width, armhole, chest and body length at critical stages.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Print Inspection",
    desc: "Testing print adhesion, wash fastness, rub fastness, and resolution. Screen and digital prints are certified free from harmful phthalates and formaldehydes.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Embroidery Inspection",
    desc: "Checking stitch density, thread tension, loose trims, and verifying the presence of ultra-soft child-safe protective backings on inner surfaces.",
    icon: Scissors,
  },
  {
    step: "05",
    title: "Stitching Inspection",
    desc: "In-line roving QA examiners check stitches per inch (SPI), seam elasticity, differential stretch, bar-tacking on stress points, and puckering prevention.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Finishing Quality",
    desc: "Garments are cleaned using thread suction machines, steam pressed on form finishers, and checked for soil-free, spot-free presentation.",
    icon: Sparkles,
  },
  {
    step: "07",
    title: "Final Inspection (AQL 2.5)",
    desc: "An independent internal audit team conducts randomized statistical audits adhering to international AQL 2.5 / 4.0 standards prior to packing clearance.",
    icon: FileCheck,
  },
  {
    step: "08",
    title: "Packing & Needle Detection",
    desc: "Every single garment passes through high-sensitivity dual-head conveyorized needle detection to ensure zero broken needle fragments or foreign metal contaminations.",
    icon: Box,
  },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance & Compliance"
        title="Quality at every stage."
        text="Protecting your brand reputation through non-negotiable standards of craftsmanship, dimensional stability, and child safety compliance."
        image={images.quality}
      />

      {/* Quality Process Timeline */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="The Quality Journey"
            title="Checked with intent, from yarn to carton."
            text="Our multi-tier quality gate system catches variances early, ensuring bulk production adheres to pre-production standards."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStages.map((q) => {
              const Icon = q.icon;
              return (
                <Reveal key={q.step}>
                  <div className="group flex h-full flex-col justify-between border border-border bg-white p-7 transition-all duration-300 hover:border-gold hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-gold">STAGE {q.step}</span>
                        <div className="flex size-8 items-center justify-center border border-gold/30 bg-ivory text-gold group-hover:bg-navy">
                          <Icon className="size-4" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-lg font-bold uppercase text-navy group-hover:text-gold">
                        {q.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate">{q.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Child Safety Testing Protocols */}
      <section className="bg-beige py-20">
        <div className="page-shell">
          <div className="border border-border bg-white p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Kidswear Specific Checks</span>
                <h3 className="mt-2 text-2xl font-bold uppercase text-navy sm:text-3xl">
                  Dedicated Child Safety Testing Protocols
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  Kidswear requires distinct safety benchmarks that general apparel factories often overlook. Our testing apparatus includes calibrated pull testers for snaps, buttons, and bows to withstand 70-90N pull force for 10 seconds, in full alignment with international safety standards.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-navy">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-gold" /> Calibrated Button Pull Testing
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-gold" /> Saliva & Perspiration Colorfastness
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-gold" /> Nickel-Free Metal Snap Fasteners
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-gold" /> Zero Sharp Edge / Seam Inspection
                  </div>
                </div>
              </div>

              <div className="border border-border bg-ivory p-6 lg:col-span-5">
                <div className="flex items-center gap-2 text-navy">
                  <AlertCircle className="size-5 text-gold" />
                  <span className="text-xs font-bold uppercase tracking-wider">Compliance & Certifications</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate">
                  Muthu International works with audited and buyer-compliant production standards.
                </p>
                <div className="mt-4 border-l-2 border-gold pl-4 text-xs italic text-slate">
                  [ADD CERTIFICATIONS: e.g. OEKO-TEX Standard 100, GOTS Organic Cotton, Sedex SMETA or BSCI audits as supplied by company management]
                </div>
                <p className="mt-4 text-[11px] text-slate/75">
                  Official certificates and audit documentation can be furnished directly upon buyer request during commercial vetting.
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