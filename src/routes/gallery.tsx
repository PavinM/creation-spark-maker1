import { createFileRoute } from "@tanstack/react-router";
import { CTASection, GalleryWithLightbox, PageHero, SectionHeading } from "@/components/site";
import { gallery, images } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Kidswear & Atelier Gallery | Muthu International" },
      {
        name: "description",
        content:
          "Visual archive of Muthu International: explore factory stitching lines, printing stations, embroidery detail, finished kidswear styles, and quality inspection in Tirupur, India.",
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
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Visual Portfolio"
        title="Kidswear, design and manufacturing."
        text="A look at children's clothing, our design direction and the manufacturing environment behind Muthu International."
        image={images.bloomCraft || images.detail}
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Inside Muthu International"
            title="A look inside Muthu International."
            text="Filter by production category. Click any visual for high-resolution inspection."
          />

          <GalleryWithLightbox items={gallery} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}