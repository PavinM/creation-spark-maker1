import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { InquiryForm, Reveal } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Muthu International | Kidswear Manufacturer" },
      {
        name: "description",
        content:
          "Contact Muthu International Private Limited to discuss kidswear products, manufacturing capabilities and domestic business opportunities across India.",
      },
      { property: "og:title", content: "Let's Talk | Muthu International Private Ltd" },
      {
        property: "og:description",
        content: "Our team welcomes product enquiries and opportunities for long-term business relationships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    {
      icon: MapPin,
      title: "Factory & Headquarters",
      lines: ["Muthu International Private Ltd", "Tirupur, Tamil Nadu 641602, India"],
      sub: "South India Textile Hub",
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      lines: ["+91 421 220 0000"],
      sub: "Contact us about our kidswear range",
    },
    {
      icon: Mail,
      title: "Business Email",
      lines: ["export@muthuinternational.com"],
      sub: "Tech pack: development@muthuinternational.com",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      lines: ["Monday – Saturday: 9:00 AM – 6:30 PM (IST)"],
      sub: "Serving customers across India",
    },
  ];

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ SPLIT HERO — IMAGE LEFT, CONTENT RIGHT ═══ */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#226192]">
        <div className="grid min-h-[70vh] lg:grid-cols-2">
          {/* Left: Full image */}
          <div className="relative hidden lg:block">
            <img
              src={images.pageContact}
              alt="Muthu International office reception"
              className="absolute inset-0 size-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#226192]/40" />
          </div>

          {/* Right: Content on deep blue */}
          <div className="flex items-center px-8 py-32 lg:px-16 xl:px-24">
            <div className="max-w-lg">
              <div className="flex items-center gap-3">
                <Send className="size-4 text-[#EF8557]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#EF8557]">
                  Business Enquiries
                </span>
              </div>

              <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let's build a
                <br />
                <span className="text-[#EF8557]">partnership.</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-white/75">
                Looking for an established kidswear manufacturer in India? Our team welcomes
                enquiries about our products, manufacturing capabilities and business opportunities.
              </p>

              <div className="mt-8 flex items-center gap-6 border-t border-white/15 pt-6">
                <div className="text-center">
                  <p className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#EF8557]">25+</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">Years</p>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div className="text-center">
                  <p className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#EF8557]">2</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">Factories</p>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div className="text-center">
                  <p className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#EF8557]">100+</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CARDS — HORIZONTAL STRIP ═══ */}
      <section className="relative -mt-8 z-10 pb-8">
        <div className="page-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title}>
                  <div className="group border border-[#226192]/10 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#226192]/5 text-[#EF8557] transition-colors group-hover:bg-[#EF8557] group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-[#226192]">{c.title}</h3>
                    {c.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-[#252525]/85">{line}</p>
                    ))}
                    <p className="mt-2 text-[11px] text-[#EF8557]">{c.sub}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM — CLEAN WIDE LAYOUT ═══ */}
      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left info panel */}
            <div className="lg:col-span-4">
              <Reveal>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EF8557]">Send An Enquiry</span>
                <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-4xl">
                  Connect with our team.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#252525]/80">
                  Please complete the form. For formal pricing quotes, yarn requirements, or
                  timeline estimates, please indicate your product silhouette and projected volumes.
                </p>

                <div className="mt-8 border-l-4 border-[#EF8557] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#226192]">Our focus</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">
                    Kidswear manufacturing, fresh designs and quality-focused customer partnerships.
                  </p>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 aspect-[4/3] overflow-hidden border border-[#226192]/10 bg-[#226192]/5">
                  <div className="flex size-full flex-col items-center justify-center text-center">
                    <MapPin className="size-8 text-[#226192]/30" />
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#226192]/50">Tirupur, Tamil Nadu</p>
                    <p className="mt-1 text-[10px] text-[#252525]/50">India's Knitwear Capital</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right form */}
            <div className="lg:col-span-8">
              <div className="border border-[#226192]/10 bg-white p-8 shadow-sm sm:p-12">
                <div className="flex items-center gap-3 border-b border-[#226192]/10 pb-6">
                  <div className="flex size-10 items-center justify-center bg-[#EF8557] text-white">
                    <Send className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase tracking-tight text-[#226192]">
                      Business Enquiry Form
                    </h3>
                    <p className="text-xs text-[#252525]/60">We'll respond within 24–48 business hours</p>
                  </div>
                </div>

                <div className="mt-8">
                  <InquiryForm kind="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}