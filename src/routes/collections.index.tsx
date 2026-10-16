import { createFileRoute } from "@tanstack/react-router";
import { CollectionCard, CTASection, PageHero, Reveal, SectionHeading } from "@/components/site";
import { collections, images } from "@/lib/content";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Kidswear Collections | Muthu International Atelier" },
      {
        name: "description",
        content:
          "Explore seasonal kidswear collection directions and new developments: Spring/Summer, Autumn/Winter, and Atelier lines for brands and retailers.",
      },
      { property: "og:title", content: "Muthu International Collections" },
      {
        property: "og:description",
        content: "Curated seasonal kidswear collections and new technical developments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Collections & Developments"
        title="SEASONAL DIRECTIONS. ATELIER VISION."
        text="Editorial product stories designed to inspire your upcoming range. Fully customizable for your brand’s Pantone colors, organic cottons, botanical prints, and private labeling."
        image={images.bloomHero || images.editorial}
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Curated Directions"
            title="DEVELOPMENTS FOR WHAT’S NEXT."
            text="Each collection is developed as a cohesive technical showcase—combining surface embellishment, fabric chemistry and childrenswear ergonomics."
          />

          <div className="space-y-12">
            {collections.map((col) => (
              <Reveal key={col.slug}>
                <CollectionCard collection={col} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Development Banner */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                  Bespoke Atelier Development
                </span>
                <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Develop Your Brand’s Exclusive Seasonal Line
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">
                  Looking to build a proprietary collection? We partner with fashion brands to engineer exclusive knits, custom Pantone color stories, all-over botanical prints, and private label trims from the ground up.
                </p>
              </div>
              <div className="space-y-3 border-t border-[#226192]/15 pt-6 text-xs text-[#226192] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#EF8557]">✓</span> Complete range planning & CAD grading
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#EF8557]">✓</span> Custom strike-offs and embroidery swatches
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#EF8557]">✓</span> Pre-production sampling with fast turnaround
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
