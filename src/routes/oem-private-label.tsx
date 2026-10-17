import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Sparkles, Building2, PackageCheck, Layers, Tag, Scissors, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/oem-private-label")({
  head: () => ({
    meta: [
      { title: "Kidswear Manufacturing Expertise | OEM & Private Label | Muthu International" },
      {
        name: "description",
        content:
          "Discover Muthu International's private label and OEM kidswear manufacturing expertise. Custom branding, bespoke trims, rapid sampling, and export-grade production in Tirupur, India.",
      },
      { property: "og:title", content: "Kidswear Manufacturing Expertise | Muthu International" },
      {
        property: "og:description",
        content: "Turnkey private label apparel solutions for retailers and children's brands worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OemPrivateLabelPage,
});

const oemCapabilities = [
  {
    title: "Bespoke Brand Identity Trims",
    icon: Tag,
    desc: "Complete personalization: high-definition woven damask labels, soft tagless heat-transfers, embossed hangtags, and barcoded inventory swing tickets.",
    points: ["Damask woven & satin neck labels", "Tagless irritation-free heat seals", "FSC-certified embossed hangtags"],
  },
  {
    title: "Custom Hardware & Fasteners",
    icon: Scissors,
    desc: "Premium, baby-safe custom hardware engraved with your brand monogram: nickel-free snap buttons, anti-pinch zippers, and dyed-to-match drawcords.",
    points: ["Nickel-free child-safe snaps", "Monogrammed zipper pullers", "OEKO-TEX compliant elastane trims"],
  },
  {
    title: "Retail-Ready Packaging & Kitting",
    icon: PackageCheck,
    desc: "From individual 100% biodegradable compostable polybags to branded gift boxes, master carton barcoding, and EDI-compliant logistical packing.",
    points: ["Biodegradable polybags with warning prints", "Custom folding & hanger-packing", "Master cartons with drop-test safety"],
  },
  {
    title: "Tech Pack Engineering & Sampling",
    icon: Layers,
    desc: "Send us your tech pack or reference sample. Our master patternmakers generate graded CAD patterns and deliver physical pilot samples within 7 business days.",
    points: ["7-day rapid prototype turnaround", "Pediatric ergonomic fit testing", "Pre-production lab dip approval"],
  },
];

const serviceComparison = [
  {
    feature: "Minimum Order Quantity (MOQ)",
    whiteLabel: "250 pcs / color / style",
    customOem: "500 pcs / color / style",
  },
  {
    feature: "Pattern & Silhouette",
    whiteLabel: "Proven Muthu Atelier Silhouettes",
    customOem: "100% Bespoke Tech Pack Patterns",
  },
  {
    feature: "Branded Neck Labels & Tags",
    whiteLabel: "Included (Custom tags on stock bodies)",
    customOem: "Included (Full custom hardware + tags)",
  },
  {
    feature: "Fabric Blends & Custom Dyes",
    whiteLabel: "Standard Premium In-Stock Pantones",
    customOem: "Bespoke Yarn Blends & Spectro Dyeing",
  },
  {
    feature: "Sample Turnaround",
    whiteLabel: "3-5 Business Days",
    customOem: "7-10 Business Days",
  },
  {
    feature: "Bulk Production SLA",
    whiteLabel: "14-21 Days",
    customOem: "25-35 Days",
  },
];

const workflowSteps = [
  { step: "01", title: "Tech Pack & Specification Review", desc: "Detailed review of specs, measurements, fabric selections, and target price points." },
  { step: "02", title: "Proto Sampling & Lab Dips", desc: "Precision pilot sample stitched and spectrophotometer-calibrated color lab dips sent for physical sign-off." },
  { step: "03", title: "Fit Validation & PP Approval", desc: "Wear testing on live pediatric fit models, shrinkage tests, and official pre-production approval." },
  { step: "04", title: "Bulk Fabric Knitting & Dyeing", desc: "Yarn spun and knitted under automated tension controls, followed by non-toxic dyeing." },
  { step: "05", title: "Precision Sewing & Assembly", desc: "State-of-the-art Juki sewing lines with in-line needle inspection and seam integrity monitoring." },
  { step: "06", title: "Custom Trims & Retail Packaging", desc: "Attachment of your custom woven labels, hangtags, barcodes, and protective retail kitting." },
  { step: "07", title: "Final AQL 1.5 & Logistics Dispatch", desc: "Final third-party or in-house AQL inspection before dispatch to domestic distribution or global ports." },
];

function OemPrivateLabelPage() {
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      {/* ═══ SIGNATURE WARM IVORY & DEEP BLUE HERO ═══ */}
      <section className="relative overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#226192]/25 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
                  <span className="size-2 rounded-full bg-[#EF8557]" />
                  <span>Our Manufacturing Expertise</span>
                </div>

                <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
                  Your Brand.
                  <br />
                  <span className="text-[#EF8557]">Our Precision.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
                  Over 25 years in the garment industry, supported by an in-house design team, two modern operational factories, and a dedicated warehouse. From custom woven labels to export-grade bulk production, we bring complete OEM capabilities to your brand.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="border border-[#226192] bg-[#226192] font-bold text-[#FFFFFF] shadow-sm hover:bg-[#1B4E75]">
                    <Link to="/request-quote" className="flex items-center gap-2">
                      <span>Request Private Label Quote</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#226192]/30 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]">
                    <Link to="/gallery">
                      <span>View Finished Products</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: HD Featured Detail Showcase */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-[#226192]/25 bg-[#FFFFFF] p-3 shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={images.detail}
                      alt="Garment trim and label craftsmanship"
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-[#226192] px-3 py-1 text-[11px] font-bold text-[#FFFFFF]">
                      Export Grade AQL 1.5
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-[#226192]/15 bg-[#EAE6DE]/60 p-3.5">
                      <ShieldCheck className="size-4 text-[#EF8557]" />
                      <strong className="mt-1 block font-['Space_Grotesk'] font-bold text-[#226192]">Established 2000</strong>
                      <span className="text-[11px] text-[#252525]/75">25+ Years Experience</span>
                    </div>
                    <div className="rounded-xl border border-[#226192]/15 bg-[#EAE6DE]/60 p-3.5">
                      <Globe className="size-4 text-[#EF8557]" />
                      <strong className="mt-1 block font-['Space_Grotesk'] font-bold text-[#226192]">Pan-India Supply</strong>
                      <span className="text-[11px] text-[#252525]/75">Serving Brands Nationwide</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4 CORE CAPABILITY PILLARS ON WARM IVORY ═══ */}
      <section className="py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="What We Bring Together"
            title="Design, Manufacturing & Supply"
            text="Our team and facilities support an evolving product range and the needs of retailers and private labels."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {oemCapabilities.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-[#226192]/20 bg-[#FFFFFF] p-7 shadow-sm transition-all duration-300 hover:border-[#EF8557] hover:shadow-md">
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#226192] text-[#FFFFFF]">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="mt-5 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-[#226192]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 border-t border-[#226192]/15 pt-4">
                      <ul className="space-y-2 text-[11px] text-[#252525]/85">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <Check className="size-3 text-[#EF8557] shrink-0" />
                            <span>{p}</span>
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

      {/* ═══ COMPARISON TABLE ON CLEAN WHITE & DEEP BLUE ACCENTS ═══ */}
      <section className="border-t border-[#226192]/20 bg-[#FFFFFF] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Flexible Partnership Models"
            title="Choose Your Production Path"
            text="Whether you need fast-to-market curated blanks or 100% bespoke tech pack patternmaking."
          />

          <div className="mt-14 overflow-hidden rounded-2xl border border-[#226192]/25 bg-[#FAF8F5] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#226192]/20 bg-[#226192] text-[#FFFFFF]">
                    <th className="p-5 font-['Space_Grotesk'] text-base font-bold uppercase tracking-wider">Production Parameter</th>
                    <th className="p-5 font-['Space_Grotesk'] text-base font-bold uppercase tracking-wider text-[#EAE6DE]">Curated White Label</th>
                    <th className="p-5 font-['Space_Grotesk'] text-base font-bold uppercase tracking-wider text-[#EF8557]">Full Bespoke OEM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#226192]/15 text-xs sm:text-sm">
                  {serviceComparison.map((row) => (
                    <tr key={row.feature} className="transition-colors hover:bg-[#FFFFFF]">
                      <td className="p-5 font-bold text-[#226192]">{row.feature}</td>
                      <td className="p-5 text-[#252525]/80">{row.whiteLabel}</td>
                      <td className="p-5 font-semibold text-[#EF8557]">{row.customOem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7-STEP BUYER WORKFLOW ON DEEP BLUE ACCENT BAND ═══ */}
      <section className="bg-[#226192] py-20 text-[#FFFFFF] sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="The Buyer Workflow"
            title="From Design Tech Pack to Retail Shelves"
            text="Organized, milestone-driven production tracking at every step."
            light
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((s, index) => (
              <Reveal key={s.step} className={index === workflowSteps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="relative flex h-full flex-col justify-between rounded-xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#EF8557] hover:bg-[#FFFFFF]/15">
                  <div>
                    <span className="font-['Space_Grotesk'] text-2xl font-black text-[#EF8557]">
                      {s.step}
                    </span>
                    <h4 className="mt-3 font-['Space_Grotesk'] text-base font-bold text-[#FFFFFF]">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#FFFFFF]/80">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALL TO ACTION ═══ */}
      <CTASection />
    </div>
  );
}