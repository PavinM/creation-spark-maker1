import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentBand, CTASection, PageHero, ProcessList, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Muthu International | Kidswear Apparel Manufacturing" },
      {
        name: "description",
        content:
          "Discover Muthu International’s purpose-driven approach to premium kidswear manufacturing, OEM partnerships, and private-label apparel production.",
      },
      { property: "og:title", content: "About Muthu International Private Ltd" },
      {
        property: "og:description",
        content: "A quality-focused kidswear manufacturing partner for modern brands.",
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
      desc: "Every product decision prioritizes sensitive skin—from nickel-free fasteners to non-toxic dyes and zero-friction flatlock seams.",
    },
    {
      title: "Design Integrity",
      desc: "We don't simply replicate tech packs; our team respects the artistic proportion, fit dynamics and aesthetic direction of your brand.",
    },
    {
      title: "Repeatable Quality",
      desc: "Statistical AQL 2.5 auditing and strict inline inspections ensure the 10,000th piece matches the approved pre-production sample.",
    },
    {
      title: "Transparent Partnership",
      desc: "Direct communication with merchandisers, truthful production lead times, and proactive milestones updates for buyer peace of mind.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="About Muthu International"
        title="Manufacturing with purpose."
        text="A dedicated product development and kidswear manufacturing partner focused on considered craftsmanship, dependable execution and enduring international brand relationships."
        image={images.editorial}
      />

      {/* 1. Who We Are & Our Story */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="label-track mb-3 text-gold">Who We Are</p>
              <h2 className="display-title text-3xl uppercase text-navy sm:text-5xl">
                Dedicated exclusively to children’s apparel.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">
                Muthu International Private Ltd is an Indian apparel manufacturing company specialized in kidswear. We work closely with international fashion labels, kidswear brands, retail chains, and private-label importers who require higher standards of finishing, child safety, and reliable bulk execution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Unlike generalist garment factories, our facility, machinery calibrations, and quality checkpoints are tailored specifically to the unique nuances of kidswear—from tensile pull tests on baby snaps to skin-friendly embroidery backings.
              </p>
            </Reveal>

            <Reveal className="border border-border bg-white p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Factory Overview</span>
              <h3 className="mt-3 text-xl font-bold uppercase text-navy">Corporate & Operational Profile</h3>
              <dl className="mt-6 divide-y divide-border text-xs">
                <div className="flex justify-between py-3">
                  <dt className="text-slate uppercase tracking-wider font-semibold">Legal Entity</dt>
                  <dd className="font-bold text-navy">Muthu International Private Ltd</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-slate uppercase tracking-wider font-semibold">Specialization</dt>
                  <dd className="font-bold text-navy">Infant, Toddler & Kidswear (0-14Y)</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-slate uppercase tracking-wider font-semibold">Factory Location</dt>
                  <dd className="text-navy">[ADD FACTORY LOCATION]</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-slate uppercase tracking-wider font-semibold">Production Capacity</dt>
                  <dd className="text-navy">[ADD PRODUCTION CAPACITY]</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-slate uppercase tracking-wider font-semibold">Certifications</dt>
                  <dd className="text-navy">[ADD CERTIFICATIONS]</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-slate uppercase tracking-wider font-semibold">Export Markets</dt>
                  <dd className="text-navy">[ADD COUNTRIES SERVED]</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Our Manufacturing Philosophy */}
      <ContentBand
        title="Our Manufacturing Philosophy."
        text="We approach every order as an extension of your design studio. From interpreting creative moodboards and selecting soft organic cottons to testing seam stretchability and verifying barcode labels, we care for the micro-details so your brand can grow with confidence."
        image={images.detail}
      />

      {/* 3. Our Values */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Core Values"
            title="The principles that guide our lines."
            text="Every garment created on our floors embodies these uncompromising commitments to safety, quality, and buyer transparency."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title}>
                <div className="h-full border border-border bg-white p-7 transition-all duration-300 hover:border-gold hover:shadow-md">
                  <span className="font-mono text-xs font-bold text-gold">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold uppercase text-navy">{v.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach / Process */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Approach"
            title="Clarity at every stage."
            text="Our working philosophy brings design thinking, production discipline and transparent communication together."
          />
          <ProcessList
            items={[
              "Understand the buyer brief and design intent",
              "Source specialized kid-safe fabrics & lab-dip colors",
              "Execute precision CAD pattern grading and proto sampling",
              "Conduct fit review and incorporate buyer refinements",
              "Bulk production on dedicated modular sewing lines",
              "100% metal scan, AQL 2.5 audit and export packing",
            ]}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}