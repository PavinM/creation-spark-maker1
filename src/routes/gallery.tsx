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
        title="PRODUCT. PROCESS. TACTILE DETAIL."
        text="A visual documentation of our craftsmanship, clean stitching lines, botanical prints, and finished kidswear collections."
        image={images.bloomCraft || images.detail}
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Inside Muthu International"
            title="AN ATELIER PERSPECTIVE."
            text="Filter by production category. Click any visual for high-resolution inspection."
          />

          <GalleryWithLightbox items={gallery} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}