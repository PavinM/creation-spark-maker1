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
          ? `${loaderData.name} Collection | Muthu International`
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
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-navy pt-24 text-white">
        <ScrollMedia className="absolute inset-0">
          <img
            src={collection.image}
            width={1536}
            height={1024}
            className="size-full object-cover opacity-35"
            alt={collection.name}
          />
        </ScrollMedia>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />

        <div className="page-shell relative flex min-h-[calc(60vh-6rem)] flex-col justify-end pb-16">
          <Link
            to="/collections"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" /> All Collections
          </Link>
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{collection.season}</span>
            <h1 className="display-title mt-2 text-4xl uppercase sm:text-6xl lg:text-7xl">{collection.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Focus & Highlights */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="page-shell">
          <div className="border border-border bg-white p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="label-track mb-3 text-gold">Design Brief & Materials</p>
                <h2 className="text-2xl font-bold uppercase text-navy sm:text-3xl">
                  Collection Highlights
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate">{collection.highlight}</p>
                <div className="mt-6">
                  <Button asChild className="h-11 rounded-none bg-gold px-6 text-xs font-bold uppercase tracking-wider text-navy hover:bg-gold/90">
                    <Link to="/request-quote">
                      Enquire for this Range <ArrowRight className="ml-1.5 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-3 border-t border-border pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-wider text-navy">Development Features:</p>
                {collection.details.map((d) => (
                  <div key={d} className="flex items-start gap-2.5 text-xs text-slate">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products in this Collection */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Curated Styles"
            title={`Styles in ${collection.name}`}
            text="Explore production-ready silhouettes in this collection, ready for private label customization, color changes and custom branding."
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
            <div className="border border-border bg-white p-12 text-center text-slate">
              <p className="text-sm">Additional styles for {collection.name} are currently in development.</p>
              <Button asChild variant="outline" className="mt-6 rounded-none border-navy text-xs font-bold uppercase">
                <Link to="/products">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
