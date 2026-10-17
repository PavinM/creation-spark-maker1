import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Sparkles, Building2, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, PageHero, Reveal, ScrollMedia, SectionHeading } from "@/components/site";
import { images, oemSteps } from "@/lib/content";

export const Route = createFileRoute("/oem-private-label")({
  head: () => ({
    meta: [
      { title: "Kidswear Manufacturing Expertise | Muthu International" },
      {
        name: "description",
        content:
          "Discover Muthu International's kidswear expertise, in-house design team, two operational factories and domestic supply operations.",
      },
      { property: "og:title", content: "Kidswear Manufacturing Expertise | Muthu International" },
      {
        property: "og:description",
        content: "Over 25 years of garment industry experience, with kidswear as our core specialization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OemPrivateLabelPage,
});

function OemPrivateLabelPage() {
  const models = [
    {
      title: "Kidswear Manufacturing",
      desc: "Children's clothing is our primary area of specialization, supported by over 25 years of garment industry experience.",
      points: ["Established in 2000", "A diverse kidswear range", "Domestic market focus"],
    },
    {
      title: "Daily Design Development",
      desc: "Our in-house design team continuously develops new styles to keep collections aligned with changing preferences.",
      points: ["In-house design team", "New designs every day", "Trend awareness"],
    },
    {
      title: "Modern Manufacturing",
      desc: "Two operational factories equipped with modern machinery support our garment manufacturing operations.",
      points: ["Two operational factories", "Modern machinery", "Organized production"],
    },
    {
      title: "People & Supply",
      desc: "A dedicated workforce and warehouse support manufacturing, inventory management and domestic supply.",
      points: ["100+ employees", "Dedicated warehouse", "Customers across India"],
    },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Our Expertise"
        title="Experience behind every kidswear collection."
        text="Over 25 years in the garment industry, supported by an in-house design team, two factories and a dedicated warehouse."
        image={images.bloomHero || images.printedSet}
      />

      {/* Models Explanation */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="What We Bring Together"
            title="Design, manufacturing and supply."
            text="Our team and facilities support an evolving product range and the needs of customers across India."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m) => (
              <Reveal key={m.title}>
                <div className="flex h-full flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192]">{m.title}</h3>
                    <p className="mt-4 text-xs leading-relaxed text-[#252525]/80">{m.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-[#226192]/15 pt-4">
                    <ul className="space-y-2 text-[11px] text-[#252525]/80">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <Check className="size-3 text-[#EF8557] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Interactive Process on Deep Editorial Blue */}
      <section className="bg-[#226192] py-20 text-[#FFFFFF] sm:py-28">
        <div className="page-shell">
          <Reveal>
            <div className="flex items-center gap-2 text-[#EF8557]">
              <span className="size-2 rounded-full bg-[#EF8557]" />
              <p className="label-track text-[#EF8557]">Our Manufacturing Foundation</p>
            </div>
            <h2 className="display-title mt-4 text-4xl uppercase tracking-tight text-[#FFFFFF] sm:text-6xl">
              Built on experience. Supported by modern facilities.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#EAE6DE]/85">
              Since 2000, we have focused on kidswear, daily design development, consistent quality and dependable customer relationships.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oemSteps.map((step, idx) => (
              <Reveal key={step.title} className={idx === oemSteps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="group h-full border border-[#EAE6DE]/20 bg-[#FFFFFF]/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#EF8557] hover:bg-[#FFFFFF]/10">
                  <h3 className="font-['Space_Grotesk'] mt-6 text-lg font-bold uppercase tracking-tight text-[#FFFFFF] group-hover:text-[#EF8557]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#EAE6DE]/80">{step.desc}</p>
                </div>
              </Reveal>
            ))}

            {/* Quick Action Tile */}
            <Reveal>
              <div className="flex h-full flex-col justify-center border border-[#EF8557] bg-[#EF8557]/20 p-6 text-center">
                <Sparkles className="mx-auto size-7 text-[#EF8557]" />
                <h4 className="font-['Space_Grotesk'] mt-3 text-lg font-bold uppercase text-[#FFFFFF]">Ready to Begin?</h4>
                <p className="mt-2 text-xs text-[#EAE6DE]/80">Contact our team to discuss our kidswear range.</p>
                <Link
                  to="/request-quote"
                  className="mt-5 inline-flex items-center justify-center border border-[#EF8557] bg-[#EF8557] py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] transition-colors hover:bg-[#EF8557]/90"
                >
                  Contact Our Team
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OEM Confidentiality & IP Protection Banner */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="label-track text-[#EF8557]">Our Commitment</p>
                <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Experienced in manufacturing. Inspired by design.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/85">
                  We combine garment industry experience, in-house design expertise, modern machinery and established production facilities to make children's clothing for customers across India.
                </p>
              </div>
              <div className="space-y-3 border-t border-[#226192]/15 pt-6 text-xs text-[#226192] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#EF8557]" /> More than 25 years of garment industry experience
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#EF8557]" /> In-house design team developing fresh styles every day
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#EF8557]" /> Two operational factories and a dedicated warehouse
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}