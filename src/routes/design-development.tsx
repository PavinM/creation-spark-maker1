import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Palette, Scissors, Sparkles, Tag, Shirt, Box } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/design-development")({
  head: () => ({
    meta: [
      { title: "Kidswear Design & Development | Muthu International" },
      {
        name: "description",
        content:
          "Turnkey product development: custom garments, fabric sourcing, Pantone color matching, print & embroidery development, sampling, and private-label branding.",
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
    title: "Custom Garment Development",
    icon: Shirt,
    desc: "Developing completely original silhouettes, proportions, and multi-piece coordinated sets from your tech packs, reference garments or sketches.",
    points: ["Original silhouette engineering", "Toddler & tween fit dynamics", "Seam construction optimization"],
  },
  {
    title: "Fabric Selection & Sourcing",
    icon: Scissors,
    desc: "Curating certified cottons, organic yarns, single jerseys, french terry, babycord, slub, and performance blends with custom handfeel finishes.",
    points: ["100% Combed Compact Cotton", "Bio-wash & peach skin finishes", "Weight development (140 - 360 GSM)"],
  },
  {
    title: "Colour Development",
    icon: Palette,
    desc: "Precision Pantone TCX / TPX matching via lab dips with strict spectrophotometer verification and eco-friendly reactive dyes.",
    points: ["Fast lab-dip turnaround", "Batch-to-batch shade consistency", "Saliva and wash fastness compliant"],
  },
  {
    title: "Print Development",
    icon: Sparkles,
    desc: "Engineering all-over rotary prints, digital direct-to-fabric prints, and localized screen prints using baby-safe water-based non-toxic chemistry.",
    points: ["Rotary cylinder & digital AOP", "Plastisol, puff & discharge prints", "Phthalate and formaldehyde free"],
  },
  {
    title: "Embroidery & Appliqué",
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
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <PageHero
        eyebrow="Technical Capabilities"
        title="From idea to production."
        text="Collaborative product development engineered around your brand aesthetics, customer comfort and target price-point."
        image={images.detail}
      />

      {/* Overview & Collaborative Briefing */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="label-track mb-3 text-gold">Product Innovation</p>
              <h2 className="display-title text-3xl uppercase text-navy sm:text-5xl">
                Bridging Creative Vision & Industrial Execution.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate">
                Whether you bring a complete technical pack or just inspirational moodboards and physical reference samples, our technical merchandising and sampling team translates concepts into manufacturing realities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                We balance modern fashion aesthetics with the stringent functional standards necessary for children's wear: non-scratchy seams, safe neckline stretchability, resilient wash durability, and compliant hardware.
              </p>
              <div className="mt-8">
                <Button asChild className="h-11 rounded-none bg-navy text-xs font-bold uppercase tracking-wider text-white hover:bg-navy/90 hover:text-gold">
                  <Link to="/request-quote">Submit a Design Brief</Link>
                </Button>
              </div>
            </Reveal>

            <ScrollMedia className="image-zoom aspect-[4/3] border border-border bg-beige shadow-sm">
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

      {/* Interactive Capabilities Grid */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Comprehensive Design & Sampling Services."
            text="Every facet of garment creation can be customized to your buyer manual specifications."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="group flex h-full flex-col justify-between border border-border bg-white p-7 transition-all duration-300 hover:border-gold hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex size-10 items-center justify-center border border-gold/40 bg-ivory text-gold transition-colors group-hover:bg-navy group-hover:text-gold">
                          <Icon className="size-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate">0{idx + 1}</span>
                      </div>
                      <h3 className="mt-6 text-lg font-bold uppercase text-navy group-hover:text-gold">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate">{item.desc}</p>
                    </div>

                    <div className="mt-6 border-t border-border/60 pt-4">
                      <ul className="space-y-1.5 text-[11px] text-slate">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-center gap-1.5">
                            <Check className="size-3 text-gold" />
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
    </>
  );
}