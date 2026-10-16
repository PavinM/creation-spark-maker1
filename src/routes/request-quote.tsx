import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, FileSpreadsheet, Clock } from "lucide-react";
import { InquiryForm, PageHero } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Kidswear Manufacturing Quote | Muthu International Atelier" },
      {
        name: "description",
        content:
          "Submit your custom kidswear OEM or private-label product brief to Muthu International. Fast quotation and technical feasibility assessment in Tirupur, India.",
      },
      { property: "og:title", content: "Request a Kidswear Manufacturing Quote | Muthu International" },
      {
        property: "og:description",
        content: "Tell us about your upcoming kidswear production requirements and receive a detailed quotation.",
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
        eyebrow="Commercial Estimator"
        title="START YOUR PRODUCTION RUN."
        text="Share your silhouettes, target quantities, and design references. Our atelier merchandising team will prepare formal FOB costing and a production calendar."
        image={images.bloomHero || images.quality}
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Guidance & Value Proposition */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Commercial Roadmap</span>
                <h2 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192]">
                  What Happens Next?
                </h2>

                <div className="mt-6 space-y-6 text-xs text-[#252525]/85">
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-[#EF8557] bg-[#226192] font-mono font-bold text-[#FFFFFF]">
                      1
                    </span>
                    <div>
                      <strong className="block font-['Space_Grotesk'] font-bold text-[#226192] uppercase">Technical Feasibility</strong>
                      <p className="mt-1 leading-relaxed">
                        We review yarn GSM, botanical print complexity, and sizing distribution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-[#EF8557] bg-[#226192] font-mono font-bold text-[#FFFFFF]">
                      2
                    </span>
                    <div>
                      <strong className="block font-['Space_Grotesk'] font-bold text-[#226192] uppercase">Costing & Milestones</strong>
                      <p className="mt-1 leading-relaxed">
                        FOB/CIF pricing broken down by volume tiers, packaging specs, and air/sea freight.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-[#EF8557] bg-[#226192] font-mono font-bold text-[#FFFFFF]">
                      3
                    </span>
                    <div>
                      <strong className="block font-['Space_Grotesk'] font-bold text-[#226192] uppercase">Sampling & Sign-Off</strong>
                      <p className="mt-1 leading-relaxed">
                        Lab dips, counter-sampling, and pre-production prototypes dispatched for fit approval.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#226192]/15 pt-6 text-[11px] text-[#252525]/80">
                  <div className="flex items-center gap-2 font-bold text-[#226192]">
                    <ShieldCheck className="size-4 text-[#EF8557]" />
                    <span>Non-Disclosure Protected</span>
                  </div>
                  <p className="mt-1 leading-relaxed">
                    Your artwork, tech packs, and commercial details remain confidential under strict mutual NDA.
                  </p>
                </div>
              </div>

              {/* Tips for fast quotation */}
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 text-xs shadow-sm">
                <strong className="block uppercase tracking-wider text-[#226192] font-bold">
                  Pro-Tip for Faster Costing:
                </strong>
                <p className="mt-2 leading-relaxed text-[#252525]/80">
                  Attach a PDF tech pack or reference photograph with estimated quantities per size for formal quotation within 24 hours.
                </p>
              </div>
            </aside>

            {/* Right Detailed Quote Form */}
            <div className="lg:col-span-8">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">B2B Production Brief</span>
                <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Product & Commercial Requirements
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80 sm:text-sm">
                  Complete the fields below so we can assign the dedicated kidswear technical merchandiser to your brand.
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