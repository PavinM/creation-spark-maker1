import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, ProductCard, SectionHeading } from "@/components/site";
import { products } from "@/lib/content";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Kidswear Product Catalogue | Muthu International" },
      {
        name: "description",
        content:
          "Explore customizable boys’, girls’, printed, embroidered, co-ord and cord set kidswear developments by Muthu International.",
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
];

function ProductsPage() {
  const [filter, setFilter] = useState("All");

  const shown =
    filter === "All"
      ? products
      : products.filter((p) => p.tags.includes(filter) || p.category.includes(filter));

  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title="Kidswear, developed with intent."
        text="A curated selection of silhouettes, fabric constructions and decorative techniques ready to be customized for your private label or retail collection."
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Explore Products"
            title="Built to be customized."
            text="Filter by silhouette, embellishment technique or gender category. All styles are fully customizable for GSM, sizing, colors, and branding."
          />

          {/* Filter Pills */}
          <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Product categories">
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
                  className={`flex items-center gap-2 border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                    isActive
                      ? "border-navy bg-navy text-white shadow-sm"
                      : "border-border bg-white text-navy hover:border-gold hover:text-gold"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive ? "bg-gold text-navy font-bold" : "bg-beige text-slate"
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
            <div className="border border-border bg-white p-12 text-center text-slate">
              <p className="text-base font-semibold text-navy">No products match this specific filter.</p>
              <p className="mt-2 text-sm">
                We develop custom products for this category on request. Contact our merchandising team with your technical pack.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}