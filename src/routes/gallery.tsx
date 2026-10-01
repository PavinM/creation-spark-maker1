import { createFileRoute } from "@tanstack/react-router";
import { CTASection, GalleryWithLightbox, PageHero, SectionHeading } from "@/components/site";
import { gallery, images } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Kidswear & Factory Gallery | Muthu International" },
      {
        name: "description",
        content:
          "Visual archive of Muthu International: explore factory stitching lines, printing stations, embroidery detail, finished kidswear styles, and quality inspection.",
      },
      { property: "og:title", content: "Inside Muthu International | Manufacturing Gallery" },
      {
        property: "og:description",
        content: "High-definition photography of kidswear product development, factory floor, and craftsmanship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Portfolio"
        title="Product. Process. Detail."
        text="An authentic visual exploration of our childrenswear craftsmanship, manufacturing infrastructure, surface embellishments and final product deliveries."
        image={images.detail}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Inside Muthu International"
            title="A Closer Look."
            text="Filter through categories to explore production machinery, embroidery handfeel, printing clarity, and finished apparel. Click any image for full-screen inspection."
          />

          <GalleryWithLightbox items={gallery} />
        </div>
      </section>

      <CTASection />
    </>
  );
}