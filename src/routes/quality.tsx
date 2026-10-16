import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, AlertCircle, FileCheck, Scale, Scissors, Sparkles, Box } from "lucide-react";
import { CTASection, PageHero, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Kidswear Quality Control & Testing | Muthu International Atelier" },
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
    desc: "GSM consistency, 4-point fabric defect audit, D65 color matching and residual shrinkage testing.",
    icon: Scale,
  },
  {
    step: "02",
    title: "Measurement Verification",
    desc: "Pattern audit against approved size specs — neck curve, armhole, chest and body length tolerance.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Print Fastness Audit",
    desc: "Adhesion, wash fastness, rub fastness. Certified 100% free from phthalates and formaldehydes.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Embroidery Inspection",
    desc: "Stitch density, tension control, trimmed jump threads, child-safe protective soft backings.",
    icon: Scissors,
  },
  {
    step: "05",
    title: "Seaming Inspection",
    desc: "SPI count, seam elasticity, bar-tacking on stress points, puckering and tension checks.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Finishing & Steam Press",
    desc: "Thread suction chambers, steam pressing on form finishers, spotless retail presentation.",
    icon: Sparkles,
  },
  {
    step: "07",
    title: "AQL 2.5 Final Audit",
    desc: "Independent statistical quality audit per international AQL 2.5 Major / 4.0 Minor parameters.",
    icon: FileCheck,
  },
  {
    step: "08",
    title: "100% Needle Detection",
    desc: "Every single finished garment passes through dual-head metal detectors — zero metal contamination.",
    icon: Box,
  },
];

function QualityPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Quality & Compliance"
        title="QUALITY AT EVERY STAGE OF CREATION."
        text="Non-negotiable standards of tactile craftsmanship, dimensional stability, and certified child safety."
        image={images.bloomCraft || images.quality}
      />

      {/* Quality Process Timeline */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Quality Protocol"
            title="FROM YARN TO EXPORT CARTON."
            text="Multi-tier quality gates catch variances early, keeping mass bulk production strictly aligned with approved prototypes."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStages.map((q) => {
              const Icon = q.icon;
              return (
                <Reveal key={q.step}>
                  <div className="group flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#226192]/10 pb-4">
                        <span className="font-mono text-xs font-bold text-[#EF8557]">STAGE {q.step}</span>
                        <div className="flex size-8 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192] group-hover:bg-[#226192] group-hover:text-[#FFFFFF]">
                          <Icon className="size-4" />
                        </div>
                      </div>
                      <h3 className="font-['Space_Grotesk'] mt-6 text-lg font-bold uppercase tracking-tight text-[#226192] group-hover:text-[#EF8557]">
                        {q.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">{q.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Child Safety Testing Protocols Banner */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Kidswear Specific Safeguards</span>
                <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Dedicated Child Safety Testing Protocols
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">
                  Tensile pull testers calibrated for 70–90N force on all snaps, buttons, bows, and appliqués to eliminate choking hazards, complying with ASTM F963 and EN71 standards.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-[#226192]">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> Calibrated Button Pull Testing
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> Saliva & Perspiration Fastness
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> Nickel-Free Snap Fasteners
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> Zero Sharp Seam Edge Inspection
                  </div>
                </div>
              </div>

              <div className="border border-[#226192]/20 bg-[#EAE6DE] p-6 lg:col-span-5">
                <div className="flex items-center gap-2 text-[#226192]">
                  <AlertCircle className="size-5 text-[#EF8557]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Compliance & Standards</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#252525]/85">
                  Audited and buyer-compliant production standards for North America, UK, Europe and Oceania markets.
                </p>
                <div className="mt-4 border-l-2 border-[#EF8557] pl-4 text-xs font-medium text-[#226192]">
                  OEKO-TEX Standard 100 Class 1 (Babywear) · GOTS Certified Organic Cottons · Sedex SMETA Audited
                </div>
                <p className="mt-4 text-[11px] text-[#252525]/70">
                  Full compliance dossiers furnished upon buyer request.
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