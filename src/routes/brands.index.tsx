import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { BrandCard, Reveal, SectionHeading } from "@/components/site";
import { brandsList, images } from "@/lib/content";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: [
      { title: "Our 4 Brands Portfolio | Kids Korner & Muthu International" },
      {
        name: "description",
        content:
          "Discover our four specialized kidswear brands: Kids Korner (Flagship), X-Zone (Athleisure), H&D Club (Boutique Tailoring), and Boy Munna (Original Registered Character).",
      },
      { property: "og:title", content: "Muthu International 4 Brands Portfolio" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BrandsIndexPage,
});

function BrandsIndexPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="page-shell text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
              <span className="size-2 rounded-full bg-[#EF8557]" />
              <span>Garment Brand Architecture</span>
            </div>
            <h1 className="mt-4 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-6xl">
              Four Distinct Brands.
              <br />
              <span className="text-[#EF8557]">One Unified Shopping Basket.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
              United under the 25-year garment manufacturing heritage of Muthu International in
              Tirupur, our brands cater to every child’s lifestyle with shared quality and direct
              geo-wise dispatch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Independent Identifies"
            title="Explore The Portfolio"
            text="Each brand maintains its own design language, specialized silhouettes, and registered artwork while sharing one seamless checkout."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {brandsList.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Hierarchy Callout */}
      <section className="border-t border-[#226192]/20 bg-[#FFFFFF] py-16">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#EAE6DE]/40 p-8 sm:p-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">
              Business Structure
            </span>
            <h2 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192] sm:text-3xl">
              Parent Manufacturing: Muthu International (Est. 2000)
            </h2>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#226192]">
              <span className="border border-[#226192] bg-[#226192] text-[#FFFFFF] px-3.5 py-2">
                1. Kids Korner (Flagship)
              </span>
              <span>✦</span>
              <span className="border border-[#226192]/30 bg-[#FFFFFF] px-3.5 py-2">
                2. X-Zone (Athleisure)
              </span>
              <span>✦</span>
              <span className="border border-[#226192]/30 bg-[#FFFFFF] px-3.5 py-2">
                3. H&D Club (Boutique)
              </span>
              <span>✦</span>
              <span className="border border-[#226192]/30 bg-[#FFFFFF] px-3.5 py-2">
                4. Boy Munna (Character-Led)
              </span>
            </div>
            <p className="mt-6 mx-auto max-w-xl text-xs text-[#252525]/75">
              All retail orders placed across any of our four brands are consolidated into a single
              shipment with geo-wise postage calculated on the total cart value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
