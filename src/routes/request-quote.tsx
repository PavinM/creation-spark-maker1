import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, FileSpreadsheet, Clock } from "lucide-react";
import { InquiryForm, PageHero } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Kidswear Business Enquiry | Muthu International" },
      {
        name: "description",
        content:
          "Contact Muthu International to discuss kidswear products, manufacturing capabilities and business opportunities across India.",
      },
      { property: "og:title", content: "Request a Kidswear Manufacturing Quote | Muthu International" },
      {
        property: "og:description",
        content: "Share your kidswear product enquiry with our team and start a business conversation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RequestQuotePage,
});

function RequestQuotePage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Business Enquiry"
        title="Let's discuss kidswear manufacturing."
        text="Tell us about your product requirements and business enquiry. Our team welcomes opportunities to build long-term customer relationships."
        image={images.bloomHero || images.quality}
        variant="enquiry"
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Guidance & Value Proposition */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Our Approach</span>
                <h2 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192]">
                  Building a Partnership
                </h2>

                <div className="mt-6 space-y-6 text-xs text-[#252525]/85">
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-[#EF8557] bg-[#226192] font-mono font-bold text-[#FFFFFF]">
                      1
                    </span>
                    <div>
                      <strong className="block font-['Space_Grotesk'] font-bold text-[#226192]">Share Your Requirements</strong>
                      <p className="mt-1 leading-relaxed">
                        Tell us about the kidswear products and business needs you would like to discuss.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-[#EF8557] bg-[#226192] font-mono font-bold text-[#FFFFFF]">
                      2
                    </span>
                    <div>
                      <strong className="block font-['Space_Grotesk'] font-bold text-[#226192]">Learn About Our Capabilities</strong>
                      <p className="mt-1 leading-relaxed">
                        Our team can discuss our product range, design team and manufacturing facilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-[#EF8557] bg-[#226192] font-mono font-bold text-[#FFFFFF]">
                      3
                    </span>
                    <div>
                      <strong className="block font-['Space_Grotesk'] font-bold text-[#226192]">Explore a Partnership</strong>
                      <p className="mt-1 leading-relaxed">
                        We value lasting relationships with customers and business partners across India.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#226192]/15 pt-6 text-[11px] text-[#252525]/80">
                  <div className="flex items-center gap-2 font-bold text-[#226192]">
                    <ShieldCheck className="size-4 text-[#EF8557]" />
                    <span>Established since 2000</span>
                  </div>
                  <p className="mt-1 leading-relaxed">
                    More than 25 years of garment industry experience, with kidswear as our core specialization.
                  </p>
                </div>
              </div>

              {/* Tips for fast quotation */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 text-xs shadow-sm">
                <strong className="block uppercase tracking-wider text-[#226192] font-bold">
                  To help us respond:
                </strong>
                <p className="mt-2 leading-relaxed text-[#252525]/80">
                  Share the kidswear product categories or business requirements you would like to discuss.
                </p>
              </div>
            </aside>

            {/* Right Detailed Quote Form */}
            <div className="lg:col-span-8">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Business Enquiry</span>
                <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Product Requirements
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80 sm:text-sm">
                  Complete the fields below to share your enquiry with our team.
                </p>

                <div className="mt-8">
                  <InquiryForm kind="quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}