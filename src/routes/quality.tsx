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
          "Learn about Muthu International's commitment to consistent kidswear quality, customer requirements and applicable statutory and industry standards.",
      },
      { property: "og:title", content: "Quality at Every Stage | Muthu International" },
      {
        property: "og:description",
        content: "Quality is an important part of our manufacturing approach and customer relationships.",
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
    title: "Product Requirements",
    desc: "Understand the garment style, customer needs and intended use.",
    icon: Scale,
  },
  {
    step: "02",
    title: "Design Coordination",
    desc: "Coordinate new styles from our in-house design team with manufacturing operations.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Production Planning",
    desc: "Organize manufacturing work across our two operational factories.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Modern Machinery",
    desc: "Use modern machinery to support the garment manufacturing process.",
    icon: Scissors,
  },
  {
    step: "05",
    title: "Experienced Workforce",
    desc: "A team of over 100 employees supports manufacturing and business operations.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Quality Commitment",
    desc: "Coordinate design and manufacturing processes while working toward consistent product quality.",
    icon: Sparkles,
  },
  {
    step: "07",
    title: "Applicable Requirements",
    desc: "Maintain applicable statutory and industry requirements relevant to business operations.",
    icon: FileCheck,
  },
  {
    step: "08",
    title: "Customer Relationships",
    desc: "Build long-term relationships through quality, reliable business practices and cooperation.",
    icon: Box,
  },
];

function QualityPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Quality & Compliance"
        title="Quality in every garment."
        text="We focus on consistent product quality, customer requirements and applicable statutory and industry standards."
        image={images.bloomCraft || images.quality}
      />

      {/* Quality Process Timeline */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Quality Protocol"
            title="A quality-focused approach."
            text="Our manufacturing approach coordinates design and production processes and aims to meet customer requirements through dependable business practices."
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

      {/* Quality and compliance commitment */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Our commitment</span>
                <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Quality is part of every relationship
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">
                  We understand that quality, comfort and consistency matter in children's clothing. Our team works to meet customer requirements and build lasting relationships through reliable manufacturing practices.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-[#226192]">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> Kidswear as our core specialization
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> In-house design and development
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> Modern manufacturing facilities
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" /> Applicable requirements and standards
                  </div>
                </div>
              </div>

              <div className="border border-[#226192]/20 bg-[#EAE6DE] p-6 lg:col-span-5">
                <div className="flex items-center gap-2 text-[#226192]">
                  <AlertCircle className="size-5 text-[#EF8557]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Manufacturing Profile</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#252525]/85">
                  Established domestic kidswear manufacturer serving customers across India.
                </p>
                <div className="mt-4 border-l-2 border-[#EF8557] pl-4 text-xs font-medium text-[#226192]">
                  Established in 2000 · Two operational factories · 100+ employees
                </div>
                <p className="mt-4 text-[11px] text-[#252525]/70">
                  In-house design team · Dedicated warehouse · Modern machinery
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