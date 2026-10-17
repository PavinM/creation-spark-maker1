import { createFileRoute } from "@tanstack/react-router";
import { Camera, Filter } from "lucide-react";
import { CTASection, GalleryWithLightbox, Reveal, SectionHeading } from "@/components/site";
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
      {/* ═══ MOSAIC HERO — OVERLAPPING IMAGE GRID ═══ */}
      <section className="relative overflow-hidden bg-[#0d1b2a] pt-28 pb-24 sm:pt-36 lg:pt-40">
        <div className="page-shell relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left text */}
            <div>
              <div className="flex items-center gap-3">
                <Camera className="size-4 text-[#EF8557]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#EF8557]">
                  Visual Portfolio
                </span>
              </div>

              <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Kidswear, design
                <br />
                <span className="text-[#EF8557]">& manufacturing.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
                A look at children's clothing, our design direction and the manufacturing
                environment behind Muthu International.
              </p>

              <div className="mt-8 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                <Filter className="size-3.5 text-[#EF8557]" />
                <span>Filter by category below</span>
              </div>
            </div>

            {/* Right: Mini mosaic preview */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 row-span-2 aspect-square overflow-hidden">
                  <img src={images.pageGallery} alt="Kidswear collection flatlay" className="size-full object-cover opacity-80 transition-transform duration-700 hover:scale-105" loading="eager" />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img src={images.editorial} alt="Editorial kidswear" className="size-full object-cover opacity-70 transition-transform duration-700 hover:scale-105" loading="eager" />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img src={images.factory} alt="Factory production" className="size-full object-cover opacity-70 transition-transform duration-700 hover:scale-105" loading="eager" />
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 size-24 border-l-2 border-b-2 border-[#EF8557]/30" />
            </div>
          </div>
        </div>

        {/* Abstract background shapes */}
        <div className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-[#226192]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-64 rounded-full bg-[#EF8557]/5 blur-3xl" />
      </section>

      {/* ═══ GALLERY GRID WITH LIGHTBOX ═══ */}
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