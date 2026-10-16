import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, ProductCard, SectionHeading } from "@/components/site";
import { products, images } from "@/lib/content";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Kidswear Product Catalogue | Muthu International Atelier" },
      {
        name: "description",
        content:
          "Explore customizable boys’, girls’, printed, embroidered, co-ord and babycord kidswear developments by Muthu International.",
      },
      { property: "og:title", content: "Muthu International Kidswear Catalogue" },
      {
        property: "og:description",
        content: "Contemporary kidswear developed for OEM and private-label programmes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const filters = [
  "All",
  "Boys",
  "Girls",
  "T-Shirts",
  "Co-Ord Sets",
  "Cord Sets",
  "Printed",
  "Embroidered",
  "Casualwear",
  "Baby",
  "Essentials",
  "Polos",
  "Joggers",
  "Overshirts",
  "Dresses",
  "Sleepwear",
  "Layering",
  "Unisex",
];

function ProductsPage() {
  const [filter, setFilter] = useState("All");

  const shown =
    filter === "All"
      ? products
      : products.filter((p) => p.tags.includes(filter) || p.category.includes(filter));

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Product Catalogue"
        title="KIDSWEAR DEVELOPED WITH INTENT."
        text="A curated selection of silhouettes, pure cotton fabrications, and artisanal embellishments ready for full OEM customization."
        image={images.bloomHero || images.hero}
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Explore Silhouettes"
            title="PURPOSE-BUILT TO BE CUSTOMIZED."
            text="Filter by silhouette, embellishment technique, or category. All styles are fully customizable for GSM, sizing, Pantone colors, and private labeling."
          />

          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-2.5" role="group" aria-label="Product categories">
            {filters.map((category) => {
              const isActive = filter === category;
              const count =
                category === "All"
                  ? products.length
                  : products.filter((p) => p.tags.includes(category) || p.category.includes(category)).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`flex items-center gap-2 border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                    isActive
                      ? "border-[#226192] bg-[#226192] text-[#FFFFFF] shadow-sm"
                      : "border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive ? "bg-[#EF8557] text-[#FFFFFF] font-bold" : "bg-[#EAE6DE] text-[#226192]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          {shown.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-12 text-center text-[#252525]/80">
              <p className="font-['Space_Grotesk'] text-base font-bold uppercase text-[#226192]">
                No products match this specific filter.
              </p>
              <p className="mt-2 text-sm">
                We develop bespoke silhouettes on request. Contact our merchandising team with your technical pack.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}