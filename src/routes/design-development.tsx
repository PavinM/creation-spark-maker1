import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Palette, Scissors, Sparkles, Tag, Shirt, Box } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/design-development")({
  head: () => ({
    meta: [
      { title: "Kidswear Design & Development | Muthu International Atelier" },
      {
        name: "description",
        content:
          "Muthu International's in-house design team develops new kidswear styles every day, coordinating design development with manufacturing operations.",
      },
      { property: "og:title", content: "From Idea to Production | Muthu International" },
      {
        property: "og:description",
        content: "Fresh designs and a varied children's clothing range, informed by changing trends and customer preferences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignDevelopmentPage,
});

const capabilities = [
  {
    title: "In-House Design Team",
    icon: Shirt,
    desc: "Our dedicated design team creates new kidswear styles every day for an evolving product collection.",
    points: ["Daily design development", "Kidswear specialization", "Fresh product ideas"],
  },
  {
    title: "Trend Awareness",
    icon: Scissors,
    desc: "We keep our collections responsive to changing fashion trends and customer preferences.",
    points: ["Changing trends", "Customer preferences", "Fresh collections"],
  },
  {
    title: "Product Range Development",
    icon: Palette,
    desc: "Design development spans children's garments for everyday wear, nightwear and seasonal needs.",
    points: ["T-shirts and co-ord sets", "Nightwear and paijamas", "Shorts, sweaters and hoodies"],
  },
  {
    title: "Design & Manufacturing Coordination",
    icon: Sparkles,
    desc: "In-house design capabilities coordinate with our manufacturing operations for an integrated approach to children's garments.",
    points: ["In-house design team", "Two operational factories", "Integrated production approach"],
  },
  {
    title: "Modern Manufacturing Facilities",
    icon: Scissors,
    desc: "Our two operational factories use modern machinery to support the garment manufacturing process.",
    points: ["Two factories", "Modern machinery", "Organized production"],
  },
  {
    title: "Experienced Workforce",
    icon: Shirt,
    desc: "Our workforce supports manufacturing and operational activities through teamwork and garment industry experience.",
    points: ["100+ employees", "Dedicated team", "Manufacturing experience"],
  },
  {
    title: "Warehouse & Supply",
    icon: Tag,
    desc: "A dedicated warehouse supports organized storage and inventory management for our domestic supply operations.",
    points: ["Dedicated warehouse", "Inventory management", "Serving customers across India"],
  },
  {
    title: "Quality & Compliance",
    icon: Box,
    desc: "We are committed to maintaining appropriate quality standards and complying with applicable statutory and industry requirements.",
    points: ["Consistent product quality", "Applicable requirements", "Reliable business practices"],
  },
];

function DesignDevelopmentPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Design & Development"
        title="Fresh designs. Changing trends."
        text="Our in-house team develops new kidswear styles every day, creating a varied and continuously evolving collection."
        image={images.bloomCraft || images.detail}
        variant="design"
      />

      {/* Overview & Collaborative Briefing */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ IN-HOUSE DESIGN TEAM ]</p>
              </div>
              <h2 className="display-title mt-3 text-3xl uppercase tracking-tight text-[#226192] sm:text-5xl">
                Design and manufacturing, working together.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                Our dedicated design team develops styles that reflect changing trends and customer requirements. Keeping design within our organization helps coordinate creative development with our manufacturing operations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                We focus on combining creativity, comfort and contemporary styling to develop children's garments across a diverse product range.
              </p>
              <div className="mt-8">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 border border-[#226192] bg-[#226192] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] transition-colors hover:bg-[#EF8557] hover:border-[#EF8557]"
                >
                  <span>Submit a Design Brief</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>

            <ScrollMedia className="image-zoom relative aspect-[4/3] border border-[#226192]/20 bg-[#FFFFFF] shadow-md">
              <div className="absolute -inset-2 bg-[#226192] -z-10 translate-x-2.5 translate-y-2.5 opacity-30" />
              <img
                src={images.editorial}
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover"
                alt="Kidswear design development sampling"
              />
            </ScrollMedia>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Core Competencies"
            title="A varied and evolving kidswear range."
            text="Our design work spans children's clothing for everyday wear, nightwear, casual occasions and seasonal needs."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="group flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#226192]/10 pb-4">
                        <div className="flex size-10 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192] transition-colors group-hover:bg-[#226192] group-hover:text-[#FFFFFF]">
                          <Icon className="size-5" />
                        </div>
                      </div>
                      <h3 className="font-['Space_Grotesk'] mt-6 text-lg font-bold uppercase tracking-tight text-[#226192] group-hover:text-[#EF8557]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">{item.desc}</p>
                    </div>

                    <div className="mt-6 border-t border-[#226192]/10 pt-4">
                      <ul className="space-y-1.5 text-[11px] text-[#252525]/80">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-center gap-1.5">
                            <Check className="size-3 text-[#EF8557]" />
                            <span>{p}</span>
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