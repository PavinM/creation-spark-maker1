import { createFileRoute } from "@tanstack/react-router";
import { CollectionCard, CTASection, PageHero, Reveal, SectionHeading } from "@/components/site";
import { collections, images } from "@/lib/content";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Kidswear Collections | Muthu International" },
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
    <>
      <PageHero
        eyebrow="Collections & Developments"
        title="Seasonal ideas. Brand-ready thinking."
        text="Editorial product stories designed to inspire your next range. Fully adaptable to your brand’s colours, fabrics, graphics and silhouettes."
        image={images.editorial}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Curated Directions"
            title="Developments for what’s next."
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
      <section className="bg-beige py-20">
        <div className="page-shell">
          <div className="border border-border bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  Bespoke Development
                </span>
                <h3 className="mt-2 text-2xl font-bold uppercase text-navy sm:text-3xl">
                  Develop Your Brand’s Exclusive Seasonal Line
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  Looking to build a proprietary collection? We partner with brands to build exclusive fabrics, custom Pantone color stories, all-over prints, and private label trims from the ground up.
                </p>
              </div>
              <div className="space-y-3 border-t border-border pt-6 text-xs text-navy lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gold">✓</span> Complete range planning & CAD grading
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gold">✓</span> Custom strike-offs and embroidery swatches
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gold">✓</span> Pre-production sampling with fast turnaround
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
