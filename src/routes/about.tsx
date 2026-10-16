import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Award, Globe2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentBand, CTASection, PageHero, ProcessList, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Muthu International | Kidswear Manufacturing Atelier" },
      {
        name: "description",
        content:
          "Discover Muthu International’s editorial approach to premium kidswear manufacturing, OEM partnerships, and private-label apparel production in Tirupur, India.",
      },
      { property: "og:title", content: "About Muthu International Private Ltd" },
      {
        property: "og:description",
        content: "A quality-focused kidswear manufacturing atelier for modern brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "Child-Safe Manufacturing",
      desc: "Every detail prioritizes sensitive skin — nickel-free fasteners, non-toxic reactive dyes, zero-friction flatlock seams.",
    },
    {
      title: "Design & Fit Integrity",
      desc: "We respect artistic proportion, relaxed silhouettes and your brand’s authentic editorial direction.",
    },
    {
      title: "Repeatable Quality",
      desc: "Meticulous AQL 2.5 auditing ensures the 10,000th unit matches the approved master prototype.",
    },
    {
      title: "Transparent Partnership",
      desc: "Direct communication with our Tirupur atelier team, dependable milestones and honest production timelines.",
    },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* Hero */}
      <PageHero
        eyebrow="About Muthu International"
        title="MANUFACTURING WITH ARTISANAL PURPOSE."
        text="Kidswear development and bulk production built on craftsmanship, material purity, and enduring international brand partnerships."
        image={images.bloomCraft || images.editorial}
      />

      {/* 1. Who We Are & Our Story */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ OUR PURPOSE & HERITAGE ]</p>
              </div>
              <h2 className="display-title mt-3 text-3xl tracking-tight text-[#226192] sm:text-5xl">
                Dedicated <span className="text-outline-blue">Exclusively</span> to Children’s Apparel.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                Muthu International Private Ltd is an Indian kidswear atelier and export manufacturer based in Tirupur, Tamil Nadu. We partner with international labels, retail chains, and boutique private-label founders who demand superior tactile finishing, chemical-free processing, and certified production standards.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                Our machinery, cutting suites, and testing checkpoints are engineered specifically for children's safety — from tensile pull tests on baby snap buttons to breathable, skin-friendly embroidery fusing.
              </p>
            </Reveal>

            <Reveal className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Operational Dossier</span>
              <h3 className="mt-2 font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192]">
                Corporate Profile & Facility Specs
              </h3>
              <dl className="mt-6 divide-y divide-[#226192]/15 text-xs">
                <div className="flex justify-between py-3">
                  <dt className="font-bold uppercase tracking-wider text-[#226192]">Legal Entity</dt>
                  <dd className="font-semibold text-[#252525]">Muthu International Private Ltd</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold uppercase tracking-wider text-[#226192]">Specialization</dt>
                  <dd className="font-semibold text-[#252525]">Infant, Toddler & Tweenwear (0M–14Y)</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold uppercase tracking-wider text-[#226192]">Facility Location</dt>
                  <dd className="font-semibold text-[#252525]">Tirupur, Tamil Nadu, India</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold uppercase tracking-wider text-[#226192]">Capacity</dt>
                  <dd className="font-semibold text-[#252525]">500,000+ Units / Month</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold uppercase tracking-wider text-[#226192]">Auditing Standard</dt>
                  <dd className="font-semibold text-[#252525]">AQL 2.5 Major / 4.0 Minor</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold uppercase tracking-wider text-[#226192]">Export Destinations</dt>
                  <dd className="font-semibold text-[#252525]">UK, EU, USA, UAE, Australia</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Manufacturing Philosophy Band */}
      <ContentBand
        title="A DISCIPLINED ATELIER EXTENSION."
        text="Every manufacturing contract is treated as a seamless extension of your design studio. From analyzing moodboards and selecting certified combed compact cottons to testing stretch recovery and packing barcodes — we own every detail."
        image={images.bloomHero || images.detail}
      />

      {/* 3. Core Values Grid */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Core Principles"
            title="STANDARDS THAT GUIDE OUR ATELIER."
            text="Safety, tactile excellence, and total transparency in every batch."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title}>
                <div className="flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#EF8557]">0{i + 1}</span>
                    <h3 className="mt-4 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-[#226192]">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Workflow */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Production Methodology"
            title="RIGOROUS CLARITY AT EVERY CHECKPOINT."
            text="Creative concepting, manufacturing discipline, and reliable global dispatch."
          />
          <ProcessList
            items={[
              "Client design brief & tech pack intake",
              "Cotton yarn selection & Pantone lab dips",
              "Precision pattern grading & initial prototype",
              "Fit review & buyer sample sign-off",
              "Bulk computerized cutting & embellishment",
              "100% metal detector scan & AQL 2.5 audit",
              "Global customs clearance & door delivery",
            ]}
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}