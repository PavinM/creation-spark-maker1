import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Award, Globe2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentBand, CTASection, PageHero, ProcessList, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Muthu International | Kidswear Manufacturing Atelier" },
      {
        name: "description",
        content:
          "Learn about Muthu International Private Limited: a kidswear manufacturer established in 2000, with two factories, an in-house design team, a dedicated warehouse and 100+ employees.",
      },
      { property: "og:title", content: "About Muthu International Private Ltd" },
      {
        property: "og:description",
        content: "Over 25 years of garment manufacturing experience, serving kidswear customers across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "Kidswear Specialization",
      desc: "Children’s clothing is our core business, with a varied range for everyday wear, casual occasions and seasonal needs.",
    },
    {
      title: "New Designs Every Day",
      desc: "Our in-house design team continuously develops new styles in response to trends and customer preferences.",
    },
    {
      title: "Modern Facilities",
      desc: "Two operational factories with modern machinery support our garment manufacturing processes.",
    },
    {
      title: "Dedicated Workforce",
      desc: "More than 100 employees contribute to manufacturing and business operations through teamwork and experience.",
    },
    {
      title: "Organized Supply",
      desc: "A dedicated warehouse supports organized storage, inventory management and coordination of supply operations.",
    },
    {
      title: "Quality & Compliance",
      desc: "We focus on consistent product quality and maintaining applicable statutory and industry requirements.",
    },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* Hero */}
      <PageHero
        eyebrow="About Muthu International"
        title="Over 25 years in kidswear manufacturing."
        text="Established in 2000, Muthu International brings garment industry experience, in-house design and modern manufacturing facilities together to serve customers across India."
        image={images.bloomCraft || images.editorial}
      />

      {/* 1. Who We Are & Our Story */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="label-track text-[#EF8557]">[ OUR PURPOSE & HERITAGE ]</p>
              </div>
              <h2 className="display-title mt-3 text-3xl tracking-tight text-[#226192] sm:text-5xl">
                Dedicated to children’s clothing since 2000.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                Muthu International Private Limited is an established domestic garment manufacturer specializing in kidswear. For more than 25 years, we have built our business around quality, creativity, manufacturing experience and reliable customer relationships.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                Our in-house design team, two operational factories, dedicated warehouse, modern machinery and workforce of over 100 employees provide an established foundation for serving the evolving Indian kidswear market.
              </p>
            </Reveal>

            <Reveal className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Company at a glance</span>
              <h3 className="mt-2 font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192]">
                An established manufacturing team
              </h3>
              <dl className="mt-6 divide-y divide-[#226192]/15 text-xs">
                <div className="flex justify-between py-3">
                  <dt className="font-bold tracking-wider text-[#226192]">Established</dt>
                  <dd className="font-semibold text-[#252525]">2000 · 25+ years of experience</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold uppercase tracking-wider text-[#226192]">Specialization</dt>
                  <dd className="font-semibold text-[#252525]">Children’s clothing and kidswear</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold tracking-wider text-[#226192]">Facilities</dt>
                  <dd className="font-semibold text-[#252525]">2 factories · 1 dedicated warehouse</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold tracking-wider text-[#226192]">Workforce</dt>
                  <dd className="font-semibold text-[#252525]">100+ employees</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold tracking-wider text-[#226192]">Design</dt>
                  <dd className="font-semibold text-[#252525]">In-house team · new styles every day</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-bold tracking-wider text-[#226192]">Market</dt>
                  <dd className="font-semibold text-[#252525]">Customers across India</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Manufacturing Philosophy Band */}
      <ContentBand
        title="Design and manufacturing, working together."
        text="Our in-house design team develops fresh kidswear styles and coordinates with our manufacturing operations. This integrated approach helps us respond to customer requirements and changing market preferences."
        image={images.bloomHero || images.detail}
      />

      {/* 3. Core Values Grid */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Core Principles"
            title="Our expertise in kidswear."
            text="Creativity, modern facilities, experienced people and organized supply operations support our work for customers across India."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                  <div>
                    <h3 className="mt-4 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-[#226192]">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Workflow */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Production Methodology"
            title="Built on experience and teamwork."
            text="Our people, factories, machinery and warehouse work together to support garment production and supply across India."
          />
          <ProcessList
            items={[
              "Understand customer and product requirements",
              "Develop new kidswear styles with our in-house design team",
              "Coordinate design development with manufacturing operations",
              "Plan production across our operational facilities",
              "Manufacture garments using modern machinery",
              "Focus on consistent product quality and applicable standards",
              "Coordinate warehouse and domestic supply operations",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          <Reveal className="border border-[#226192]/20 bg-white p-7">
            <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#226192]">Our vision</h3>
            <p className="mt-3 text-base leading-relaxed text-[#252525]/80">To become a recognized and trusted name in kidswear manufacturing by developing fresh designs, strengthening our capabilities and delivering quality children’s garments across India.</p>
          </Reveal>
          <Reveal className="border border-[#226192]/20 bg-white p-7">
            <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#226192]">Our mission</h3>
            <p className="mt-3 text-base leading-relaxed text-[#252525]/80">To manufacture quality kidswear by combining industry experience, in-house design, modern machinery and established production facilities while building lasting customer relationships.</p>
          </Reveal>
          <Reveal className="border border-[#226192]/20 bg-white p-7">
            <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#226192]">Our promise</h3>
            <p className="mt-3 text-base leading-relaxed text-[#252525]/80">Since 2000, our focus has been to develop fresh designs, manufacture quality kidswear and strengthen partnerships with customers throughout India.</p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
}