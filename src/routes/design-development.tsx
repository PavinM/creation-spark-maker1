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
          "Turnkey product development: custom garments, fabric sourcing, Pantone color matching, botanical print & embroidery development, sampling, and private-label branding.",
      },
      { property: "og:title", content: "From Idea to Production | Muthu International" },
      {
        property: "og:description",
        content: "Collaborative kidswear design and technical product development for modern brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignDevelopmentPage,
});

const capabilities = [
  {
    title: "Custom Silhouette Development",
    icon: Shirt,
    desc: "Developing completely original silhouettes, proportions, and multi-piece coordinated sets from your tech packs, physical samples, or sketches.",
    points: ["Original silhouette engineering", "Toddler & tween fit dynamics", "Seam construction optimization"],
  },
  {
    title: "Fabric Engineering & Sourcing",
    icon: Scissors,
    desc: "Curating certified cottons, organic yarns, single jerseys, french terry, babycord, slub, and performance blends with custom handfeel finishes.",
    points: ["100% Combed Compact Cotton", "Bio-wash & peach skin finishes", "Custom weight engineering (140–360 GSM)"],
  },
  {
    title: "Pantone Color Formulation",
    icon: Palette,
    desc: "Precision Pantone TCX / TPX matching via lab dips with strict spectrophotometer verification and eco-friendly reactive dyes.",
    points: ["Fast lab-dip turnaround", "Batch-to-batch shade consistency", "Saliva and wash fastness compliant"],
  },
  {
    title: "Botanical & Reactive Printing",
    icon: Sparkles,
    desc: "Engineering all-over rotary prints, digital direct-to-fabric prints, and localized screen prints using baby-safe water-based non-toxic chemistry.",
    points: ["Rotary cylinder & digital AOP", "Plastisol, puff & discharge prints", "Phthalate and formaldehyde free"],
  },
  {
    title: "Artisanal Embroidery & Appliqué",
    icon: Scissors,
    desc: "Creating multi-colour flat satin stitch, 3D puff embroidery, chenille textures, and mixed-fabric appliqué with protective soft backings.",
    points: ["Multi-head Tajima machinery", "Ultra-soft fused backings", "High tensile pull resistance"],
  },
  {
    title: "Proto & Fit Sampling",
    icon: Shirt,
    desc: "Rapid sampling rounds from first proto review samples to pre-production samples (PPS), ensuring exact sizing and silhouette sign-off before bulk.",
    points: ["Speedy sample room turnaround", "Full size grading verification", "Complete technical specification sheets"],
  },
  {
    title: "Label & Trim Customization",
    icon: Tag,
    desc: "Custom woven damask labels, tear-away satin tags, heat-sealed neck transfers, customized hangtags, and embossed metal snaps.",
    points: ["Hypoallergenic heat-transfer labels", "Certified nickel-free metal snaps", "Recycled paper swing tags & barcoding"],
  },
  {
    title: "Turnkey Private-Label Solutions",
    icon: Box,
    desc: "End-to-end collection development where we handle every single step—delivering retail-ready packaged garments with your branded polybags.",
    points: ["Full brand package development", "Ratio packing & barcode compliance", "International direct export dispatch"],
  },
];

function DesignDevelopmentPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Technical Capabilities"
        title="FROM SKETCH TO PRODUCTION PROTOTYPE."
        text="Collaborative product development engineered around your brand aesthetics, tactile comfort, and target retail price-points."
        image={images.bloomCraft || images.detail}
      />

      {/* Overview & Collaborative Briefing */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ CONCEPT INNOVATION ]</p>
              </div>
              <h2 className="display-title mt-3 text-3xl uppercase tracking-tight text-[#226192] sm:text-5xl">
                BRIDGING CREATIVE VISION & INDUSTRIAL EXECUTION.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                Whether you bring a complete technical pack or just inspirational moodboards and physical reference swatches, our technical merchandising and sampling team in Tirupur translates concepts into manufacturing realities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                We balance contemporary magazine fashion aesthetics with the stringent functional standards necessary for children's wear: non-scratchy seams, safe neckline stretchability, resilient wash durability, and compliant hardware.
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
            title="COMPREHENSIVE DESIGN & SAMPLING SERVICES."
            text="Every facet of garment creation can be customized to your buyer manual specifications."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="group flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#226192]/10 pb-4">
                        <div className="flex size-10 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192] transition-colors group-hover:bg-[#226192] group-hover:text-[#FFFFFF]">
                          <Icon className="size-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#EF8557]">0{idx + 1}</span>
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