import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, ProductCard, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { collections, products } from "@/lib/content";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = collections.find((c) => c.slug === params.slug);
    if (!collection) throw notFound();
    return collection;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} Collection | Muthu International Atelier`
          : "Collection Not Found | Muthu International",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Explore seasonal kidswear collections by Muthu International.",
      },
      { property: "og:title", content: loaderData?.name ?? "Muthu International Collection" },
      { property: "og:description", content: loaderData?.highlight ?? "Kidswear collection development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionDetailPage,
});

function CollectionDetailPage() {
  const collection = Route.useLoaderData();
  const collectionProducts = products.filter((p) => p.collectionSlug === collection.slug);

  return (
    <div className="collection-detail-page bg-[#EAE6DE] text-[#252525]">
      {/* Hero */}
      <section className="collection-detail-page__hero relative min-h-[60vh] overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 sm:pt-36 pb-16">
        <div className="page-shell">
          <Link
            to="/collections"
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#226192] transition-colors hover:text-[#EF8557]"
          >
            <ArrowLeft className="size-4" /> All Collections
          </Link>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">{collection.season}</span>
              <h1 className="font-['Space_Grotesk'] mt-2 text-4xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
                {collection.name}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                {collection.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#226192] translate-x-2.5 translate-y-2.5" />
                <div className="relative aspect-[16/10] overflow-hidden border border-[#226192] bg-[#FFFFFF]">
                  <img
                    src={collection.image}
                    width={1200}
                    height={800}
                    className="size-full object-cover"
                    alt={collection.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Focus & Highlights */}
      <section className="bg-[#EAE6DE] py-16 sm:py-24">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="label-track mb-3 text-[#EF8557]">Collection Overview</p>
                <h2 className="font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Collection Highlights
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">{collection.highlight}</p>
                <div className="mt-6">
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center gap-2 border border-[#226192] bg-[#226192] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] transition-colors hover:bg-[#EF8557] hover:border-[#EF8557]"
                  >
                    <span>Enquire for this Range</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
              <div className="space-y-3 border-t border-[#226192]/15 pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-wider text-[#226192]">In This Collection:</p>
                {collection.details.map((d) => (
                  <div key={d} className="flex items-start gap-2.5 text-xs text-[#252525]/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#EF8557]" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products in this Collection */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Curated Styles"
            title={`Styles in ${collection.name}`}
            text="Explore children's clothing styles from our evolving kidswear range."
          />

          {collectionProducts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {collectionProducts.map((p) => (
                <Reveal key={p.slug}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-12 text-center text-[#252525]/80">
              <p className="text-sm">Additional styles for {collection.name} are currently in development.</p>
              <Link
                to="/products"
                className="mt-6 inline-flex border border-[#226192] bg-[#226192] px-6 py-2.5 text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
