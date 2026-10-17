import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, SectionHeading, Reveal, CTASection } from "@/components/site";
import { products, images } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Sparkles, SlidersHorizontal, ArrowRight, ShieldCheck, Check } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Kidswear Product Catalogue | Muthu International" },
      {
        name: "description",
        content:
          "Browse our complete children's garment catalogue: T-shirts, coordinated sets, pajamas, rompers, hoodies, and winterwear produced in Tirupur, India.",
      },
      { property: "og:title", content: "Muthu International Kidswear Catalogue" },
      {
        property: "og:description",
        content: "Explore certified kidswear styles for infants, toddlers, boys, and girls. Volume manufacturing and private label ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const filterCategories = [
  "All Styles",
  "T-Shirts",
  "Co-Ord Sets",
  "Sleepwear",
  "Pajamas",
  "Hoodies & Sweaters",
  "Boys",
  "Girls",
  "Baby & Infant",
];

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Styles");

  const filteredProducts =
    activeCategory === "All Styles"
      ? products
      : products.filter(
          (p) =>
            p.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase())) ||
            p.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div className="bg-[#FAF9F6] text-[#1E293B]">
      {/* Contemporary Catalog Hero */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#0F172A] text-[#FFFFFF]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={images.hero}
            alt="Muthu International Garment Collection"
            className="size-full object-cover object-center filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
        </div>

        <div className="page-shell relative z-10 py-20 sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#F59E0B] uppercase">
              <Sparkles className="size-3.5" />
              <span>Garment Specification Catalog</span>
            </div>
            <h1 className="mt-4 font-['Space_Grotesk'] text-4xl font-extrabold tracking-tight sm:text-6xl">
              Complete Kidswear Range.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[#94A3B8] sm:text-lg">
              Engineered for comfort, safety, and longevity. All styles are crafted with bio-washed combed cotton, non-toxic eco-dyes, and reinforced child-safe seams.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Interactive Catalog Section */}
      <section className="py-16 sm:py-24">
        <div className="page-shell">
          {/* Filter Bar */}
          <div className="flex flex-col justify-between gap-6 border-b border-[#E2E8F0] pb-8 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#226192] text-[#FFFFFF] shadow-sm"
                      : "border border-[#E2E8F0] bg-[#FFFFFF] text-[#64748B] hover:border-[#94A3B8] hover:text-[#0F172A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-[#64748B]">
              <SlidersHorizontal className="size-4" />
              <span>
                Showing <strong className="text-[#0F172A]">{filteredProducts.length}</strong> styles
              </span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((p) => (
              <Reveal key={p.slug}>
                <div className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#226192] hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F5F9]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-[#0F172A]/80 px-2.5 py-1 text-[11px] font-bold text-[#FFFFFF] backdrop-blur-sm">
                      {p.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#0F172A] group-hover:text-[#226192] transition-colors">
                      <Link to="/products/$slug" params={{ slug: p.slug }}>
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#64748B]">
                      {p.description}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-[#E2E8F0] pt-4 text-[11px] text-[#475569]">
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">Fabric:</span>
                        <span className="font-semibold text-[#0F172A]">{p.fabric}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">Sizes:</span>
                        <span className="font-semibold text-[#0F172A]">{p.sizes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">Customization:</span>
                        <span className="font-semibold text-[#226192]">{p.customization}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-2">
                      <Link
                        to="/products/$slug"
                        params={{ slug: p.slug }}
                        className="text-xs font-bold text-[#226192] hover:underline"
                      >
                        Inspect Specifications &rarr;
                      </Link>
                      <Button asChild size="sm" variant="outline" className="text-xs border-[#226192]/30 text-[#226192] hover:bg-[#226192] hover:text-[#FFFFFF]">
                        <Link to="/request-quote">
                          Request Sample
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="my-16 rounded-2xl border border-dashed border-[#CBD5E1] p-12 text-center">
              <p className="text-base font-semibold text-[#64748B]">
                No styles match this exact category right now.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setActiveCategory("All Styles")}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Tech Pack Development Banner */}
      <section className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-16">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#226192]/20 bg-[#FAF8F5] p-8 md:flex-row md:items-center sm:p-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                Custom Silhouettes
              </span>
              <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold text-[#0F172A] sm:text-3xl">
                Have a proprietary design or tech pack?
              </h3>
              <p className="mt-2 text-sm text-[#64748B]">
                We manufacture bespoke garments tailored to your exact measurements, fabric blends, and print strikes.
              </p>
            </div>
            <Button asChild size="lg" className="border border-[#226192] bg-[#226192] text-[#FFFFFF] hover:bg-[#1B4E75] shrink-0">
              <Link to="/request-quote">Submit Your Tech Pack</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}