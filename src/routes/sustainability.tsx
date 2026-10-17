import { createFileRoute } from "@tanstack/react-router";
import { Check, Leaf, Recycle, Factory, Package, Droplets } from "lucide-react";
import { CTASection, PageHero, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Responsible Kidswear Manufacturing | Muthu International Atelier" },
      {
        name: "description",
        content:
          "Learn about Muthu International's commitment to quality, applicable requirements, experienced people and responsible business relationships.",
      },
      { property: "og:title", content: "Responsible Manufacturing | Muthu International" },
      {
        property: "og:description",
        content: "We focus on quality and applicable statutory and industry requirements in our manufacturing operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SustainabilityPage,
});

const pillars = [
  {
    title: "Kidswear Specialization",
    icon: Leaf,
    desc: "Children's clothing is our core business, with a varied range developed for everyday and seasonal needs.",
    points: ["A focus on kidswear", "Multiple product categories", "Serving the domestic market"],
  },
  {
    title: "Modern Manufacturing Facilities",
    icon: Factory,
    desc: "Two operational factories equipped with modern machinery support our garment manufacturing processes.",
    points: ["Two operational factories", "Modern machinery", "Organized production"],
  },
  {
    title: "In-House Design Development",
    icon: Recycle,
    desc: "Our dedicated design team develops new styles every day to keep collections fresh and responsive to customer preferences.",
    points: ["Fresh designs every day", "Trend awareness", "Design and production coordination"],
  },
  {
    title: "Warehouse & Supply",
    icon: Package,
    desc: "A dedicated warehouse supports organized storage, inventory management and domestic supply operations.",
    points: ["Dedicated warehouse", "Organized storage", "Customers across India"],
  },
  {
    title: "People & Experience",
    icon: Droplets,
    desc: "More than 100 employees contribute to manufacturing and business operations through teamwork and experience.",
    points: ["100+ employees", "Garment industry experience", "Dedicated workforce"],
  },
];

function SustainabilityPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Environmental & Social Stewardship"
        title="Experience, responsibility and quality."
        text="An established kidswear manufacturer focused on quality, applicable requirements and long-term customer relationships."
        image={images.bloomHero || images.factory}
        variant="sustainability"
      />

      {/* Philosophy Statement */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ OUR COMMITMENT ]</p>
              </div>
              <h2 className="display-title mt-3 text-3xl uppercase tracking-tight text-[#226192] sm:text-5xl">
                Quality and reliable business relationships.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                We are committed to maintaining appropriate quality standards and complying with applicable statutory and industry requirements. Our manufacturing approach focuses on organized production, experienced people and customer needs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                With two operational factories, a dedicated warehouse, modern machinery and a workforce of over 100 employees, we continue to serve the evolving Indian kidswear market.
              </p>
            </Reveal>

            <Reveal className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Our company</span>
              <h3 className="font-['Space_Grotesk'] mt-2 text-xl font-bold uppercase tracking-tight text-[#226192]">
                Established kidswear manufacturing
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">
                Our business is built on experience, creativity, manufacturing expertise and reliable customer relationships.
              </p>
              <div className="mt-6 space-y-4 text-xs">
                <div className="border-l-2 border-[#EF8557] pl-4 text-[#252525]/85">
                  <strong className="block font-['Space_Grotesk'] text-[#226192] uppercase tracking-wider">
                    Established:
                  </strong>
                  2000, with over 25 years of garment industry experience.
                </div>
                <div className="border-l-2 border-[#EF8557] pl-4 text-[#252525]/85">
                  <strong className="block font-['Space_Grotesk'] text-[#226192] uppercase tracking-wider">
                    Manufacturing:
                  </strong>
                  Two operational factories equipped with modern machinery.
                </div>
                <div className="border-l-2 border-[#EF8557] pl-4 text-[#252525]/85">
                  <strong className="block font-['Space_Grotesk'] text-[#226192] uppercase tracking-wider">
                    Design and supply:
                  </strong>
                  An in-house design team, dedicated warehouse and customers across India.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Commitments"
            title="The foundations of our business."
            text="Kidswear expertise, design development, modern facilities, an experienced workforce and organized domestic supply operations."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title}>
                  <div className="flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#226192]/10 pb-4">
                        <div className="flex size-9 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192]">
                          <Icon className="size-4" />
                        </div>
                      </div>
                      <h3 className="font-['Space_Grotesk'] mt-6 text-lg font-bold uppercase tracking-tight text-[#226192]">{p.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">{p.desc}</p>
                    </div>

                    <div className="mt-6 border-t border-[#226192]/10 pt-4">
                      <ul className="space-y-1.5 text-[11px] text-[#252525]/80">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2">
                            <Check className="size-3 text-[#EF8557] shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}