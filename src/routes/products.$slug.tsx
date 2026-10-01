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
          ? `${loaderData.name} | Muthu International Kidswear Manufacturer`
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
    { label: "Fabric", val: p.fabric },
    { label: "Colours", val: p.colours },
    { label: "Sizes", val: p.sizes },
    { label: "Printing", val: p.print },
    { label: "Embroidery", val: p.embroidery },
    { label: "Customization", val: p.customization },
  ];

  return (
    <>
      <section className="bg-ivory pt-28 pb-20 sm:pb-28">
        <div className="page-shell">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
            >
              <ArrowLeft className="size-4" /> All Products
            </Link>
            <span className="text-xs uppercase tracking-wider text-slate">
              OEM & Private Label Reference
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left: Large Image Gallery with interactive thumbnails */}
            <div className="space-y-4 lg:col-span-7">
              {/* Main Image View */}
              <div className="border border-border bg-white p-2">
                <div className="aspect-[4/5] overflow-hidden bg-beige">
                  <img
                    src={selectedImage}
                    width={1024}
                    height={1280}
                    className="size-full object-cover transition-all duration-500"
                    alt={p.name}
                  />
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
                        ? "border-gold ring-1 ring-gold"
                        : "border-border bg-white hover:border-gold/60"
                    }`}
                  >
                    <div className="aspect-square bg-beige">
                      <img src={img} className="size-full object-cover" alt={`${p.name} view ${i + 1}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Details & Specifications */}
            <aside className="lg:sticky lg:top-28 lg:col-span-5">
              <div className="border border-border bg-white p-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-px w-4 bg-gold" />
                  <p className="label-track text-gold">{p.category}</p>
                </div>

                <h1 className="display-title mt-3 text-3xl uppercase text-navy sm:text-4xl">
                  {p.name}
                </h1>

                <p className="mt-5 text-sm leading-relaxed text-slate">{p.description}</p>

                {/* Primary specs list */}
                <div className="mt-8 space-y-3 border-t border-border pt-6">
                  {customizationHighlights.map((item) => (
                    <div key={item.label} className="border-b border-border/60 pb-3 text-xs">
                      <span className="font-bold uppercase tracking-wider text-navy">{item.label}: </span>
                      <span className="text-slate">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Specifications Table */}
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-navy">
                    Production Parameters
                  </h4>
                  <dl className="mt-3 divide-y divide-border/60 text-xs">
                    {p.specifications.map(([title, val]) => (
                      <div key={title} className="flex justify-between py-2">
                        <dt className="font-medium text-slate">{title}</dt>
                        <dd className="font-semibold text-navy text-right">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* B2B Action Button */}
                <div className="mt-8 space-y-3">
                  <Button
                    asChild
                    className="h-12 w-full rounded-none bg-navy text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-navy/90 hover:text-gold"
                  >
                    <Link to="/request-quote">
                      Request Quote for this Style <ArrowRight className="ml-2 size-4 text-gold" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 w-full rounded-none border-border text-xs font-bold uppercase tracking-wider text-navy hover:border-gold"
                  >
                    <Link to="/contact">Speak with a Merchandiser</Link>
                  </Button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate">
                  <ShieldCheck className="size-4 text-gold" />
                  <span>100% Quality Inspected · Needle Detection Cleared</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}