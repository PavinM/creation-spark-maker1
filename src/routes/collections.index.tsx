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
          "Explore Muthu International's varied kidswear range, developed by an in-house design team and supplied to customers across India.",
      },
      { property: "og:title", content: "Muthu International Collections" },
      {
        property: "og:description",
        content: "Fresh kidswear designs for everyday wear, nightwear, casual occasions and seasonal requirements.",
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
        eyebrow="Our Product Range"
        title="Kidswear for everyday and seasonal needs."
        text="Our in-house design team develops fresh styles every day across a diverse selection of children's clothing."
        image={images.bloomHero || images.editorial}
        variant="collections"
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Changing Collections"
            title="Fresh designs for a changing market."
            text="Our product range evolves to reflect customer requirements and changing kidswear preferences."
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
                  Design & Development
                </span>
                <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  New designs every day
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">
                  Our in-house design team continuously develops new kidswear styles, helping us maintain a fresh and evolving collection for customers across India.
                </p>
              </div>
              <div className="space-y-3 border-t border-[#226192]/15 pt-6 text-xs text-[#226192] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#EF8557]">✓</span> In-house design team
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#EF8557]">✓</span> New styles developed every day
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#EF8557]">✓</span> Design coordinated with manufacturing
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
