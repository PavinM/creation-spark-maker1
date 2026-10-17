import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Clock, FileSpreadsheet, Send, MessageSquare, Phone, Sparkles, Building, Layers } from "lucide-react";
import { useState } from "react";
import { InquiryForm, Reveal } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request Kidswear Manufacturing Quote | Muthu International" },
      {
        name: "description",
        content:
          "Submit your kidswear manufacturing enquiry to Muthu International. Fast 24-hour response on tech packs, private label collections, and volume wholesale production.",
      },
      { property: "og:title", content: "B2B Kidswear RFQ & Quotation | Muthu International" },
      {
        property: "og:description",
        content: "Transparent costing, rapid sampling, and export-grade production from Tirupur, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RequestQuotePage,
});

const garmentCategories = [
  "Infant & Baby Wear",
  "Boys & Girls T-Shirts",
  "Co-Ord & Cord Sets",
  "Pajamas & Sleepwear",
  "Hoodies & Winterwear",
  "Custom Tech Pack",
];

const volumeTiers = [
  { tier: "Sampling / Pilot", range: "100 - 250 pcs", turnaround: "7-10 Days", note: "Best for test drops" },
  { tier: "Brand Run", range: "500 - 2,500 pcs", turnaround: "20-25 Days", note: "Optimized unit cost" },
  { tier: "Volume Export", range: "5,000+ pcs", turnaround: "30-40 Days", note: "Containerized pricing" },
];

function RequestQuotePage() {
  const [selectedCategory, setSelectedCategory] = useState("Boys & Girls T-Shirts");
  const [selectedTier, setSelectedTier] = useState("Brand Run");

  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ SIGNATURE WARM IVORY & DEEP BLUE RFQ HEADER ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="page-shell">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
              <span className="size-2 rounded-full bg-[#EF8557]" />
              <span>B2B Procurement Desk</span>
            </div>
            <h1 className="mt-4 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-6xl">
              Request Your
              <br />
              <span className="text-[#EF8557]">Manufacturing Quote.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
              Partner directly with our Tirupur manufacturing facility. Share your garment specifications, tech packs, or volume requirements for a detailed line-item cost proposal within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main RFQ Workspace */}
      <section className="py-16 sm:py-24">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Guidance & Value Proposition */}
            <aside className="space-y-8 lg:col-span-5">
              {/* Interactive Scope Helper */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Step 1: Select Scope</span>
                <h3 className="mt-2 font-['Space_Grotesk'] text-xl font-bold text-[#0F172A]">
                  Primary Product Category
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {garmentCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        selectedCategory === cat
                          ? "bg-[#226192] text-[#FFFFFF] shadow-sm"
                          : "border border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <h3 className="mt-6 font-['Space_Grotesk'] text-xl font-bold text-[#0F172A]">
                  Estimated Order Volume
                </h3>
                <div className="mt-4 space-y-3">
                  {volumeTiers.map((t) => (
                    <button
                      key={t.tier}
                      type="button"
                      onClick={() => setSelectedTier(t.tier)}
                      className={`w-full rounded-xl border p-3.5 text-left transition-all ${
                        selectedTier === t.tier
                          ? "border-[#226192] bg-[#226192]/5 ring-1 ring-[#226192]"
                          : "border-[#E2E8F0] bg-[#FFFFFF] hover:border-[#94A3B8]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-xs font-bold text-[#0F172A]">{t.tier}</strong>
                        <span className="font-mono text-xs font-bold text-[#226192]">{t.range}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-[11px] text-[#64748B]">
                        <span>Turnaround: {t.turnaround}</span>
                        <span className="text-[#EF8557]">{t.note}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Response SLA & Trust Badges */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#226192]/10 text-[#226192]">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[#0F172A]">24-Hour Quote SLA</strong>
                    <span className="text-xs text-[#64748B]">Guaranteed business day response</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-[#E2E8F0] pt-4 text-xs text-[#475569]">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" />
                    <span>Line-item fabric, knitting, dye & CMT breakdown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" />
                    <span>Non-Disclosure Agreement (NDA) on request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#EF8557]" />
                    <span>Doorstep sample dispatch across India & globally</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-[#F8FAFC] p-4 border border-[#E2E8F0]">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Direct Desk</span>
                  <div className="mt-1 font-mono text-xs font-semibold text-[#0F172A]">
                    exports@muthuinternational.com
                  </div>
                  <div className="text-xs text-[#64748B]">+91 98422 12345 (Tirupur HQ)</div>
                </div>
              </div>
            </aside>

            {/* Right RFQ Form Submission */}
            <div className="lg:col-span-7">
              <Reveal className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-8 shadow-lg sm:p-10">
                <div className="border-b border-[#E2E8F0] pb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Step 2: Submit Details</span>
                  <h2 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold text-[#0F172A]">
                    Garment Project Specifications
                  </h2>
                  <p className="mt-1 text-xs text-[#64748B]">
                    Selected Category: <strong className="text-[#226192]">{selectedCategory}</strong> • Volume: <strong className="text-[#226192]">{selectedTier}</strong>
                  </p>
                </div>

                <div className="mt-8">
                  <InquiryForm kind="quote" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}