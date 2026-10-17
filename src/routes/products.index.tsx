import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, ProductCard, SectionHeading } from "@/components/site";
import { products, images } from "@/lib/content";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Kidswear Product Range | Muthu International" },
      {
        name: "description",
        content:
          "Explore children's T-shirts, co-ord sets, night suits, girls' paijamas, shorts, sweaters, hoodies and other kidswear from Muthu International.",
      },
      { property: "og:title", content: "Muthu International Kidswear Catalogue" },
      {
        property: "og:description",
        content: "A varied children's clothing range for everyday wear, nightwear, casual occasions and seasonal needs.",
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
  "Night Suits",
  "Paijamas",
  "Nightwear",
  "Shorts",
  "Sweaters",
  "Hoodies",
  "Seasonal",
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
        eyebrow="Our Product Range"
        title="A complete range of kidswear."
        text="From everyday T-shirts and co-ord sets to nightwear and seasonal clothing, our range serves a variety of children's garment needs."
        image={images.bloomHero || images.hero}
        variant="products"
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Explore Kidswear"
            title="Styles for everyday and seasonal wear."
            text="Browse the product categories in our evolving children's clothing range."
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