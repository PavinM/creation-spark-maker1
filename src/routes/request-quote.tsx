import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, FileSpreadsheet, Clock } from "lucide-react";
import { InquiryForm, PageHero } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Kidswear Manufacturing Quote | Muthu International" },
      {
        name: "description",
        content:
          "Submit your custom kidswear OEM or private-label product brief to Muthu International. Fast quotation and technical feasibility assessment.",
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
    <>
      <PageHero
        eyebrow="Commercial Quotation"
        title="Start your project."
        text="Submit your product specifications, target order volume, and design references. Our merchandising team will prepare an itemized cost estimate and production calendar."
        image={images.quality}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Guidance & Value Proposition */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="border border-border bg-white p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Commercial Process</span>
                <h2 className="mt-2 text-2xl font-bold uppercase text-navy">
                  What Happens Next?
                </h2>

                <div className="mt-6 space-y-6 text-xs text-slate">
                  <div className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-gold bg-navy font-mono font-bold text-gold">
                      1
                    </span>
                    <div>
                      <strong className="block font-semibold text-navy uppercase">Technical Review</strong>
                      <p className="mt-1 leading-relaxed">
                        Our merchandising team reviews your fabric GSM, print complexity, and sizing distribution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-gold bg-navy font-mono font-bold text-gold">
                      2
                    </span>
                    <div>
                      <strong className="block font-semibold text-navy uppercase">Costing & Lead Times</strong>
                      <p className="mt-1 leading-relaxed">
                        We calculate FOB/CIF pricing options based on your target quantities, packaging requirements and freight method.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center border border-gold bg-navy font-mono font-bold text-gold">
                      3
                    </span>
                    <div>
                      <strong className="block font-semibold text-navy uppercase">Sample Scheduling</strong>
                      <p className="mt-1 leading-relaxed">
                        Upon price alignment, we schedule counter-sampling, lab-dips, and fit proto developments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6 text-[11px] text-slate">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <ShieldCheck className="size-4 text-gold" />
                    <span>Non-Disclosure Protected</span>
                  </div>
                  <p className="mt-1 leading-relaxed">
                    Your tech packs, artwork and commercial details remain confidential under standard supplier NDAs.
                  </p>
                </div>
              </div>

              {/* Tips for fast quotation */}
              <div className="border border-border bg-[#F1ECE3] p-6 text-xs">
                <strong className="block uppercase tracking-wider text-navy font-bold">
                  Pro-Tip for Faster Quotes:
                </strong>
                <p className="mt-2 leading-relaxed text-slate">
                  Attaching a visual tech pack or reference photo along with estimated quantity per style allows us to generate accurate factory pricing within 24 hours.
                </p>
              </div>
            </aside>

            {/* Right Detailed Quote Form */}
            <div className="lg:col-span-8">
              <div className="border border-border bg-white p-8 sm:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">B2B Manufacturing Brief</span>
                <h3 className="mt-2 text-2xl font-bold uppercase text-navy sm:text-3xl">
                  Product & Commercial Requirements
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate sm:text-sm">
                  Please complete the technical fields below so we can assign the most relevant merchandising specialist to your project.
                </p>

                <div className="mt-8">
                  <InquiryForm kind="quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}