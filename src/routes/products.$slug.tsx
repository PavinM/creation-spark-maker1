import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal } from "@/components/site";
import { products, images } from "@/lib/content";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} | Muthu International Kidswear Atelier`
          : "Product Not Found | Muthu International",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Explore Muthu International kidswear manufacturing products.",
      },
      { property: "og:title", content: loaderData?.name ?? "Muthu International Product" },
      {
        property: "og:description",
        content: loaderData?.description ?? "Premium private-label kidswear development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const p = Route.useLoaderData();
  const allImages = p.galleryImages && p.galleryImages.length > 0 ? p.galleryImages : [p.image, images.detail, images.quality];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  const customizationHighlights = [
    { label: "Fabric Construction", val: p.fabric },
    { label: "Pantone Dyeing", val: p.colours },
    { label: "Size Grading", val: p.sizes },
    { label: "Printing Techniques", val: p.print },
    { label: "Embroidery Execution", val: p.embroidery },
    { label: "Private Label OEM", val: p.customization },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <section className="bg-[#EAE6DE] pt-28 pb-20 sm:pb-28">
        <div className="page-shell">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#226192] transition-colors hover:text-[#EF8557]"
            >
              <ArrowLeft className="size-4" /> Back to Products
            </Link>
            <span className="text-xs uppercase tracking-[0.14em] text-[#252525]/70">
              OEM & Private Label Reference Specification
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left: Large Image Gallery with interactive thumbnails */}
            <div className="space-y-4 lg:col-span-7">
              {/* Main Image View */}
              <div className="relative">
                <div className="absolute -inset-2 bg-[#226192] translate-x-2 translate-y-2 -z-10 opacity-30" />
                <div className="border border-[#226192]/20 bg-[#FFFFFF] p-2 shadow-sm">
                  <div className="aspect-[4/5] overflow-hidden bg-[#EAE6DE]">
                    <img
                      src={selectedImage}
                      width={1024}
                      height={1280}
                      className="size-full object-cover transition-all duration-500"
                      alt={p.name}
                    />
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer overflow-hidden border p-1 transition-all ${
                      selectedImage === img
                        ? "border-[#EF8557] ring-1 ring-[#EF8557]"
                        : "border-[#226192]/20 bg-[#FFFFFF] hover:border-[#226192]"
                    }`}
                  >
                    <div className="aspect-square bg-[#EAE6DE]">
                      <img src={img} className="size-full object-cover" alt={`${p.name} view ${i + 1}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Details & Specifications */}
            <aside className="lg:sticky lg:top-28 lg:col-span-5">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm">
                <div className="flex items-center gap-2 text-[#EF8557]">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <p className="label-track text-[#EF8557]">{p.category}</p>
                </div>

                <h1 className="font-['Space_Grotesk'] mt-3 text-3xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-4xl">
                  {p.name}
                </h1>

                <p className="mt-5 text-sm leading-relaxed text-[#252525]/85">{p.description}</p>

                {/* Primary specs list */}
                <div className="mt-8 space-y-3 border-t border-[#226192]/15 pt-6">
                  {customizationHighlights.map((item) => (
                    <div key={item.label} className="border-b border-[#226192]/10 pb-3 text-xs">
                      <span className="font-bold uppercase tracking-wider text-[#226192]">{item.label}: </span>
                      <span className="text-[#252525]/80">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Specifications Table */}
                <div className="mt-8 border-t border-[#226192]/15 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#226192]">
                    Atelier Production Parameters
                  </h4>
                  <dl className="mt-3 divide-y divide-[#226192]/10 text-xs">
                    {p.specifications.map(([title, val]) => (
                      <div key={title} className="flex justify-between py-2">
                        <dt className="font-semibold text-[#226192]">{title}</dt>
                        <dd className="font-medium text-[#252525] text-right">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* B2B Action Button */}
                <div className="mt-8 space-y-3">
                  <Link
                    to="/request-quote"
                    className="inline-flex h-12 w-full items-center justify-center gap-3 border border-[#226192] bg-[#226192] text-xs font-bold uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors hover:border-[#EF8557] hover:bg-[#EF8557]"
                  >
                    <span>Request Quote for this Style</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex h-11 w-full items-center justify-center border border-[#226192]/30 bg-transparent text-xs font-bold uppercase tracking-wider text-[#226192] transition-colors hover:border-[#EF8557] hover:text-[#EF8557]"
                  >
                    Speak with a Merchandiser
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-[#252525]/75">
                  <ShieldCheck className="size-4 text-[#EF8557]" />
                  <span>100% Quality Inspected · Needle Detection Cleared</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}