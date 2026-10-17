import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Sparkles, Building2, PackageCheck, Layers, Tag, Scissors, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, Reveal, SectionHeading } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/oem-private-label")({
  head: () => ({
    meta: [
      { title: "Bespoke OEM & Private Label Kidswear Manufacturing | Muthu International" },
      {
        name: "description",
        content:
          "Transform your children's clothing brand with Muthu International's end-to-end OEM and private label services. Custom branding, bespoke trims, rapid prototyping, and export-grade production.",
      },
      { property: "og:title", content: "Executive OEM & Private Label Solutions | Muthu International" },
      {
        property: "og:description",
        content: "Turnkey private label apparel solutions for global retailers, D2C brands, and department stores.",
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
    desc: "Complete personalization: high-definition woven damask labels, soft tagless heat-transfers, embossed gold-foil hangtags, and barcoded inventory swing tickets.",
    points: ["Damask woven & satin neck labels", "Tagless irritation-free heat seals", "FSC certified embossed hangtags"],
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
    <div className="bg-[#0B132B] text-[#FFFFFF]">
      {/* Luxury Executive Dark Hero */}
      <section className="relative overflow-hidden border-b border-[#FFFFFF]/10 bg-[#070D1E] py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={images.detail}
            alt="Muthu International Custom Garment Details & Labels"
            className="size-full object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D1E] via-[#070D1E]/95 to-transparent" />
        </div>

        <div className="page-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D97706]/40 bg-[#D97706]/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#F59E0B] uppercase">
                  <Building2 className="size-3.5" />
                  <span>Turnkey Private Label Solutions</span>
                </div>
                <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
                  Your Brand. Our Manufacturing Precision.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
                  From international department stores to high-growth children's D2C labels, Muthu International provides seamless OEM and private label manufacturing with complete trim customization, pediatric safety compliance, and reliable lead times.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="border border-[#F59E0B] bg-[#F59E0B] font-bold text-[#070D1E] hover:bg-[#D97706] hover:border-[#D97706]">
                    <Link to="/request-quote" className="flex items-center gap-2">
                      <span>Request Private Label Quote</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#FFFFFF]/20 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF]/10">
                    <Link to="/gallery">
                      <span>View Custom Trim Gallery</span>
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Floating Visual Feature Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="overflow-hidden rounded-2xl border border-[#FFFFFF]/15 bg-[#1C2541]/80 p-6 shadow-2xl backdrop-blur-md">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={images.detail}
                      alt="Garment trim and label craftsmanship"
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 text-xs font-bold text-[#F59E0B]">
                      Precision Monogram & Stitch Callout
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-[#FFFFFF]/10 bg-[#0B132B]/60 p-3.5">
                      <ShieldCheck className="size-4 text-[#F59E0B]" />
                      <strong className="mt-2 block font-bold text-[#FFFFFF]">AQL 1.5 Standard</strong>
                      <span className="text-[10px] text-[#94A3B8]">Export quality guarantee</span>
                    </div>
                    <div className="rounded-xl border border-[#FFFFFF]/10 bg-[#0B132B]/60 p-3.5">
                      <Globe className="size-4 text-[#F59E0B]" />
                      <strong className="mt-2 block font-bold text-[#FFFFFF]">Worldwide Ready</strong>
                      <span className="text-[10px] text-[#94A3B8]">Barcode & carton EDI compliant</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Core Customization Pillars */}
      <section className="bg-[#0B132B] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Comprehensive Customization"
            title="Complete Private Label Anatomy"
            text="Every detail of your brand identity, executed with perfection."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {oemCapabilities.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-[#FFFFFF]/10 bg-[#1C2541]/50 p-7 transition-all duration-300 hover:border-[#F59E0B] hover:bg-[#1C2541] hover:shadow-xl">
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#0B132B] border border-[#FFFFFF]/10 text-[#F59E0B]">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="mt-5 font-['Space_Grotesk'] text-lg font-bold text-[#FFFFFF]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#94A3B8]">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 border-t border-[#FFFFFF]/10 pt-4">
                      <ul className="space-y-2 text-[11px] text-[#CBD5E1]">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <Check className="size-3 text-[#F59E0B] shrink-0" />
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

      {/* Comparison Matrix: White Label vs. Custom OEM */}
      <section className="border-t border-[#FFFFFF]/10 bg-[#070D1E] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Flexible Partnership Models"
            title="Choose Your Production Path"
            text="Whether you need fast-to-market curated blanks or 100% bespoke bespoke patternmaking."
          />

          <div className="mt-14 overflow-hidden rounded-2xl border border-[#FFFFFF]/15 bg-[#1C2541]/40 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#FFFFFF]/15 bg-[#0B132B]">
                    <th className="p-5 font-['Space_Grotesk'] text-base font-bold text-[#FFFFFF]">Production Parameter</th>
                    <th className="p-5 font-['Space_Grotesk'] text-base font-bold text-[#94A3B8]">Curated White Label</th>
                    <th className="p-5 font-['Space_Grotesk'] text-base font-bold text-[#F59E0B]">Full Bespoke OEM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FFFFFF]/10">
                  {serviceComparison.map((row) => (
                    <tr key={row.feature} className="transition-colors hover:bg-[#FFFFFF]/5">
                      <td className="p-5 font-medium text-[#FFFFFF]">{row.feature}</td>
                      <td className="p-5 text-[#94A3B8]">{row.whiteLabel}</td>
                      <td className="p-5 font-semibold text-[#F59E0B]">{row.customOem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Buyer Journey */}
      <section className="bg-[#0B132B] py-20 sm:py-28">
        <div className="page-shell">
          <SectionHeading
            eyebrow="The Buyer Workflow"
            title="From Design Tech Pack to Retail Shelves"
            text="Transparent, milestone-driven production tracking at every step."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((s, index) => (
              <Reveal key={s.step} className={index === workflowSteps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="relative flex h-full flex-col justify-between rounded-xl border border-[#FFFFFF]/10 bg-[#1C2541]/40 p-6">
                  <div>
                    <span className="font-mono text-2xl font-black text-[#F59E0B]">
                      {s.step}
                    </span>
                    <h4 className="mt-3 font-['Space_Grotesk'] text-base font-bold text-[#FFFFFF]">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Call to Action */}
      <section className="border-t border-[#FFFFFF]/10 bg-[#070D1E] py-20">
        <div className="page-shell text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-[#F59E0B]/20 px-4 py-1 text-xs font-semibold text-[#F59E0B]">
              Confidentiality Guaranteed
            </span>
            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-extrabold sm:text-5xl">
              Ready to Launch Your Kidswear Line?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#94A3B8]">
              Send your tech packs or sample concepts. We sign strict Non-Disclosure Agreements (NDAs) to protect your brand's intellectual property.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="border border-[#F59E0B] bg-[#F59E0B] font-bold text-[#070D1E] hover:bg-[#D97706]">
                <Link to="/request-quote">Request Tech Pack Evaluation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#FFFFFF]/20 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF]/10">
                <Link to="/contact">Speak with OEM Director</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}