import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Filter, Eye, Layers } from "lucide-react";
import { CollectionCard, CTASection, Reveal, SectionHeading } from "@/components/site";
import { collections, images } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Kidswear Collections Lookbook | Muthu International" },
      {
        name: "description",
        content:
          "Explore Muthu International's curated kidswear collections: Bloom & Sprout Organic, Sunburst Playground, and Woodland Slumber. In-house daily design innovations.",
      },
      { property: "og:title", content: "Curated Kidswear Collections | Muthu International" },
      {
        property: "og:description",
        content: "High-fashion lookbook showcasing contemporary children's apparel, coord sets, and nightwear.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <div className="bg-[#FAF9F6] text-[#1E293B]">
      {/* High-Fashion Editorial Cover Hero */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#111827] text-[#FFFFFF]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={images.editorial}
            alt="Muthu International High-Fashion Editorial Kidswear"
            className="size-full object-cover object-top filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent" />
        </div>

        <div className="page-shell relative z-10 py-24 sm:py-32 lg:py-36 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#F59E0B] uppercase">
              <Sparkles className="size-3.5" />
              <span>Seasonal Curations</span>
            </div>
            <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Curated Kidswear Stories.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[#CBD5E1] sm:text-lg">
              Each collection is an expressive narrative combining hand-drawn graphic stories, ergonomic silhouettes, and certified skin-safe fabrics.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="border border-[#F59E0B] bg-[#F59E0B] font-bold text-[#0F172A] hover:bg-[#D97706]">
                <Link to="/products">Browse Full Garment Catalog</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#FFFFFF]/20 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF]/10">
                <Link to="/gallery">View Editorial Lookbook Gallery</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Collections Showcase */}
      <section className="py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Signature Lines"
            title="Designed for Joyful Movement"
            text="Explore the seasonal lines crafted by our in-house atelier, ready for retail distribution and private label customization."
          />

          <div className="mt-16 space-y-16">
            {collections.map((col, index) => (
              <Reveal key={col.slug}>
                <div className={`overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-sm transition-all duration-300 hover:shadow-xl lg:grid lg:grid-cols-12 lg:items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}>
                  <div className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="size-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-[#0F172A]/80 px-3 py-1 text-xs font-bold text-[#FFFFFF] backdrop-blur-sm">
                      {col.season}
                    </div>
                  </div>

                  <div className="p-8 sm:p-12 lg:col-span-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                      Collection Capsule
                    </span>
                    <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold text-[#0F172A]">
                      {col.name}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                      {col.description}
                    </p>

                    <div className="mt-6 border-t border-[#E2E8F0] pt-6">
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                        Signature Highlight:
                      </span>
                      <p className="mt-2 text-xs font-medium text-[#226192] flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#EF8557]" />
                        {col.highlight}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <Button asChild className="border border-[#226192] bg-[#226192] text-[#FFFFFF] hover:bg-[#1B4E75]">
                        <Link to="/collections/$slug" params={{ slug: col.slug }} className="flex items-center gap-2">
                          <span>Explore Capsule</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-[#E2E8F0] text-[#0F172A] hover:bg-[#FAF8F5]">
                        <Link to="/request-quote">Request Line Sheet</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Innovation Callout */}
      <section className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-16">
        <div className="page-shell">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#FAF8F5] p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                  Daily Innovation
                </span>
                <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold text-[#0F172A] sm:text-3xl">
                  Custom Collection Development for Your Brand
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  Looking for exclusive silhouettes not shown here? Our design studio creates customized private label collections matched to your brand’s demographic and price targets.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button asChild size="lg" className="border border-[#226192] bg-[#226192] text-[#FFFFFF] hover:bg-[#1B4E75]">
                  <Link to="/oem-private-label">Inquire About Custom Drops</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
