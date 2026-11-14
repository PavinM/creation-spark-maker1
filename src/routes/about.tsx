import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users, Factory, Palette, Package, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, SectionHeading } from "@/components/site";
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
        content:
          "Over 25 years of garment manufacturing experience, serving kidswear customers across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const milestones = [
    {
      year: "2000",
      title: "Founded",
      desc: "Muthu International established in Tirupur, Tamil Nadu as a kidswear manufacturer.",
    },
    {
      year: "2005",
      title: "First Factory Expansion",
      desc: "Expanded operations with modern machinery and a growing workforce.",
    },
    {
      year: "2012",
      title: "In-House Design Team",
      desc: "Established a dedicated design team developing new styles every day.",
    },
    {
      year: "2018",
      title: "Second Factory",
      desc: "Opened a second operational factory to support growing production needs.",
    },
    {
      year: "2022",
      title: "Dedicated Warehouse",
      desc: "Built a dedicated warehouse for organized storage and supply operations.",
    },
    {
      year: "Today",
      title: "100+ Employees",
      desc: "Serving customers across India with a dedicated workforce and modern facilities.",
    },
  ];

  const stats = [
    { icon: Award, num: "25+", label: "Years Experience", color: "from-[#226192] to-[#1a4d75]" },
    { icon: Factory, num: "2", label: "Factories", color: "from-[#EF8557] to-[#d96b3f]" },
    { icon: Users, num: "100+", label: "Employees", color: "from-[#226192] to-[#1a4d75]" },
    { icon: Palette, num: "Daily", label: "New Designs", color: "from-[#EF8557] to-[#d96b3f]" },
    { icon: Package, num: "1", label: "Warehouse", color: "from-[#226192] to-[#1a4d75]" },
    { icon: MapPin, num: "Pan", label: "India Supply", color: "from-[#EF8557] to-[#d96b3f]" },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ SIGNATURE WARM IVORY & DEEP BLUE ABOUT HERO ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 border border-[#226192]/25 bg-[#FFFFFF] px-3.5 py-1 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
                  <span className="size-2 bg-[#EF8557]" />
                  <span>About Muthu International · Tirupur Garment Heritage</span>
                </div>

                <h1 className="mt-6 font-serif text-4xl font-bold uppercase leading-tight tracking-tight text-[#252525] sm:text-6xl lg:text-7xl">
                  Over 25 Years in
                  <br />
                  <span className="text-[#EF8557]">Kidswear Manufacturing.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                  Established in 2000 in Tirupur, Muthu International brings garment industry
                  experience, in-house daily design development, and two modern manufacturing
                  factories together to serve brands and customers across India.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="border border-[#226192] bg-[#226192] font-bold text-[#FFFFFF] shadow-sm hover:bg-[#1B4E75]"
                  >
                    <Link to="/manufacturing" className="flex items-center gap-2">
                      <span>Our Facilities</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#226192]/30 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
                  >
                    <Link to="/contact">
                      <span>Contact Our Team</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: HD Team & Factory Review Image */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-[#226192]/25 bg-[#FFFFFF] p-3 shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={images.pageAbout}
                      alt="Muthu International team reviewing kidswear samples"
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-[#226192] px-3 py-1 text-[11px] font-bold text-[#FFFFFF]">
                      Since 2000
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#226192]">25+</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Years</span>
                    </div>
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#EF8557]">2</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Factories</span>
                    </div>
                    <div className="rounded-lg bg-[#EAE6DE]/70 p-2.5 border border-[#226192]/15">
                      <strong className="block text-base font-bold text-[#226192]">100+</strong>
                      <span className="text-[10px] text-[#252525]/75 uppercase">Team</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FLOATING STAT CARDS SECTION ═══ */}
      <section className="relative -mt-1 bg-[#EAE6DE] py-20">
        <div className="page-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label}>
                  <div className="group relative overflow-hidden border border-[#226192]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div
                      className={`absolute -right-4 -top-4 size-20 rounded-full bg-gradient-to-br ${s.color} opacity-[0.07] transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.12]`}
                    />
                    <Icon className="size-5 text-[#EF8557]" />
                    <p className="mt-3 font-['Space_Grotesk'] text-3xl font-extrabold tracking-tight text-[#226192]">
                      {s.num}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#252525]/60">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SPLIT STORY SECTION — IMAGE + TEXT ═══ */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -bottom-5 -right-5 top-5 left-5 border-2 border-[#226192]/15" />
                <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-xl">
                  <img
                    src={images.bloomCraft || images.factory}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Artisanal craftsmanship at Muthu International"
                  />
                  {/* Corner accent */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#226192]/90 to-transparent p-6 pt-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                      Since 2000
                    </p>
                    <p className="mt-1 font-['Space_Grotesk'] text-lg font-bold text-white">
                      Crafting Children's Clothing
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-2 text-[#EF8557]">
                <span className="size-2 rounded-full bg-[#EF8557]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em]">
                  Our Purpose & Heritage
                </p>
              </div>

              <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-5xl">
                Dedicated to children's clothing since 2000.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[#252525]/85">
                Muthu International Private Limited is an established domestic garment manufacturer
                specializing in kidswear. For more than 25 years, we have built our business around
                quality, creativity, manufacturing experience and reliable customer relationships.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#252525]/85">
                Our in-house design team, two operational factories, dedicated warehouse, modern
                machinery and workforce of over 100 employees provide an established foundation for
                serving the evolving Indian kidswear market.
              </p>

              {/* Quote accent */}
              <div className="mt-8 border-l-4 border-[#EF8557] bg-[#226192]/5 p-6">
                <p className="font-serif text-lg italic leading-relaxed text-[#226192]">
                  "We combine experience, creativity and reliable manufacturing to build lasting
                  customer relationships."
                </p>
              </div>

              <Link
                to="/request-quote"
                className="group mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#226192] transition-colors hover:text-[#EF8557]"
              >
                <span className="border-b border-[#226192]/40 pb-0.5 group-hover:border-[#EF8557]">
                  Start a Conversation
                </span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ COMPANY SNAPSHOT — HORIZONTAL DATA TABLE ═══ */}
      <section className="border-y border-[#226192]/15 bg-[#226192] py-16 text-white">
        <div className="page-shell">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EF8557]">
                  Company at a glance
                </span>
                <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tight">
                  An established manufacturing team
                </h3>
              </div>
              <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Established", "2000 · 25+ years"],
                  ["Specialization", "Children's clothing"],
                  ["Facilities", "2 factories · 1 warehouse"],
                  ["Workforce", "100+ employees"],
                  ["Design", "In-house team · daily"],
                  ["Market", "Customers across India"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="border-l-2 border-[#EF8557]/40 pl-4">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      {dt}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-white/90">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ JOURNEY TIMELINE ═══ */}
      <section className="bg-[#EAE6DE] py-24 sm:py-32">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Journey"
            title="Building kidswear expertise, year by year."
            text="Key milestones in Muthu International's growth as an established kidswear manufacturer."
          />

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#EF8557] via-[#226192]/30 to-transparent lg:left-1/2" />

            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <Reveal key={m.year}>
                  <div
                    className={`relative flex items-start gap-8 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 top-1 z-10 flex size-3 -translate-x-1/2 items-center justify-center lg:left-1/2">
                      <span className="size-3 rounded-full border-2 border-[#EF8557] bg-[#EAE6DE]" />
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-10 w-full border border-[#226192]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md lg:ml-0 lg:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "lg:mr-auto lg:pr-10" : "lg:ml-auto lg:pl-10"}`}
                    >
                      <span className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#EF8557]">
                        {m.year}
                      </span>
                      <h4 className="mt-1 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-[#226192]">
                        {m.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#252525]/75">{m.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VISION / MISSION / PROMISE — MOSAIC CARDS ═══ */}
      <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Our Vision",
                text: "To become a recognized and trusted name in kidswear manufacturing by developing fresh designs, strengthening our capabilities and delivering quality children's garments across India.",
                accent: "border-t-4 border-t-[#226192]",
              },
              {
                label: "Our Mission",
                text: "To manufacture quality kidswear by combining industry experience, in-house design, modern machinery and established production facilities while building lasting customer relationships.",
                accent: "border-t-4 border-t-[#EF8557]",
              },
              {
                label: "Our Promise",
                text: "Since 2000, our focus has been to develop fresh designs, manufacture quality kidswear and strengthen partnerships with customers throughout India.",
                accent: "border-t-4 border-t-[#226192]",
              },
            ].map((item) => (
              <Reveal key={item.label}>
                <div
                  className={`group flex h-full flex-col justify-between bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.accent}`}
                >
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192]">
                      {item.label}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#252525]/80">{item.text}</p>
                  </div>
                  <div className="mt-6 h-px w-12 bg-[#EF8557]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#EF8557]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
