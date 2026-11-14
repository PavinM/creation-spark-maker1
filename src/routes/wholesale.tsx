import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  PackageCheck,
  Truck,
  ShieldCheck,
  Layers,
  ArrowRight,
  Factory,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading, Reveal } from "@/components/site";
import { WholesaleStore, brandsList } from "@/lib/content";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "B2B & Wholesale Kidswear Inquiries | Muthu International" },
      {
        name: "description",
        content:
          "Partner with Muthu International for bulk kidswear supply, regional distribution, and retail sourcing across Kids Korner, X-Zone, H&D Club, and Boy Munna.",
      },
      { property: "og:title", content: "Wholesale Kidswear Sourcing | Muthu International" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WholesalePage,
});

const wholesaleTiers = [
  {
    tier: "Retail Boutiques & Independent Stores",
    moq: "100 – 500 pcs",
    mix: "Assorted sizes & colours",
    turnaround: "7–10 Days dispatch",
    notes: "Direct from Tirupur warehouse ready inventory across all 4 brands.",
  },
  {
    tier: "Regional Multi-Brand Outlets (MBOs)",
    moq: "500 – 2,500 pcs",
    mix: "Brand capsules & custom hangtags",
    turnaround: "15–20 Days",
    notes: "Volume tier discounts, scheduled replenishment, and distributor terms.",
  },
  {
    tier: "National Chains & Private Label",
    moq: "2,500 – 20,000+ pcs",
    mix: "Custom CAD tech packs & lab dips",
    turnaround: "30–45 Days",
    notes: "Complete OEM production in our 2 operational factories with bespoke trims.",
  },
];

function WholesalePage() {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [estimatedQuantity, setEstimatedQuantity] = useState("500 – 1,000 pcs");
  const [interestedBrand, setInterestedBrand] = useState("Kids Korner (Flagship)");
  const [productCategory, setProductCategory] = useState("Boys & Girls Combed T-Shirts");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    WholesaleStore.submit({
      companyName,
      contactPerson,
      phone,
      email,
      city,
      state,
      estimatedQuantity,
      interestedBrand,
      productCategory,
      message,
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-[#EAE6DE] text-[#252525] min-h-screen pt-28 pb-20">
      <div className="page-shell">
        {/* Hero Header */}
        <section className="border-b border-[#226192]/20 pb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[#226192]/25 bg-[#FFFFFF] px-3.5 py-1 text-xs font-bold tracking-widest text-[#226192] uppercase shadow-sm">
              <span className="size-2 bg-[#EF8557]" />
              <span>Tirupur Direct Garment Manufacturing · Established 2000</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold uppercase leading-tight tracking-tight text-[#252525] sm:text-6xl">
              Direct-from-Mill Wholesale &amp; B2B Distribution.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
              Partner directly with Muthu International Private Limited in Tirupur, India. Over 25
              years of specialized kidswear production, two operational factories, daily design
              developments, and nationwide logistical reach.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#226192]/15 pt-6">
              <div className="border border-[#226192]/15 bg-[#FFFFFF] p-4">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#226192]">
                  250K+
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#252525]/60 mt-0.5">
                  Monthly Capacity
                </p>
              </div>
              <div className="border border-[#226192]/15 bg-[#FFFFFF] p-4">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#226192]">
                  2 Facilities
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#252525]/60 mt-0.5">
                  Asher Nagar &amp; Avinashi Rd
                </p>
              </div>
              <div className="border border-[#226192]/15 bg-[#FFFFFF] p-4">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#226192]">
                  100% GOTS
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#252525]/60 mt-0.5">
                  Pure Combed Cotton
                </p>
              </div>
              <div className="border border-[#226192]/15 bg-[#FFFFFF] p-4">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#226192]">
                  0% Azo Dyes
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#252525]/60 mt-0.5">
                  Child Safe Standard
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 3 Tier Cards */}
        <section className="py-14 border-b border-[#226192]/20">
          <SectionHeading
            eyebrow="Commercial Order Capacities"
            title="Bulk Supply Tiers"
            text="Flexible minimum order quantities designed to support independent boutique retailers, regional chains, and national department stores."
          />

          <div className="grid gap-6 sm:grid-cols-3 mt-8">
            {wholesaleTiers.map((tier) => (
              <div
                key={tier.tier}
                className="border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                  {tier.moq}
                </span>
                <h3 className="mt-2 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                  {tier.tier}
                </h3>
                <div className="mt-4 space-y-2 text-xs text-[#252525]/80">
                  <p>✦ Mix: {tier.mix}</p>
                  <p>✦ Dispatch: {tier.turnaround}</p>
                  <p className="pt-2 border-t border-[#226192]/10 text-[11px] text-[#252525]/70">
                    {tier.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4 Brands Overview */}
        <section className="py-14 border-b border-[#226192]/20">
          <SectionHeading
            eyebrow="Portfolio Available for Wholesale"
            title="Choose Your Brand Focus"
            text="Distribute one brand exclusively in your territory or offer an integrated mix across everyday, athleisure, boutique, and character clothing."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {brandsList.map((b) => (
              <div key={b.id} className="border border-[#226192]/20 bg-[#FFFFFF] p-5">
                <span className="rounded-none border border-[#EF8557] px-2 py-0.5 text-[9px] font-bold text-[#EF8557] uppercase">
                  {b.badge}
                </span>
                <h4 className="mt-2 font-['Space_Grotesk'] text-base font-bold uppercase text-[#226192]">
                  {b.name}
                </h4>
                <p className="mt-1 text-xs text-[#252525]/75 line-clamp-2">{b.positioning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wholesale Enquiry Form */}
        <section className="py-14">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
                  Dedicated B2B Desk
                </span>
                <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold uppercase text-[#226192]">
                  Submit Your Wholesale Brief
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">
                  Our commercial team reviews every request and responds with technical line sheets,
                  bulk price matrices, and fabric swatch sets within 24 hours.
                </p>
              </div>

              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <Factory className="size-5 text-[#EF8557] shrink-0" />
                  <span>
                    <strong>Tirupur Facility 01:</strong> 14/2, Asher Nagar, North 1st Street,
                    Avinashi Road, Tirupur - 641603
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-[#EF8557] shrink-0" />
                  <span>
                    <strong>Child Safety:</strong> 100% Combed Cotton, Bio-Polished & Azo-Free Dyes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="size-5 text-[#EF8557] shrink-0" />
                  <span>
                    <strong>Pan-India Logistics:</strong> Surface freight, express air, and master
                    carton drop shipping
                  </span>
                </div>
                <div className="pt-2 border-t border-[#226192]/15 text-[11px] space-y-1">
                  <p>
                    Direct Hotline:{" "}
                    <a
                      href="tel:+919787806802"
                      className="font-bold text-[#226192] hover:text-[#EF8557]"
                    >
                      +91 97878 06802
                    </a>{" "}
                    / +91 94432 38068 (Ph: 0421-4248068)
                  </p>
                  <p className="text-[#252525]/70">
                    Email: cottoncastlesuresh@gmail.com · GST: 33AARCM6569Q1ZD
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-[#226192] bg-[#FFFFFF] p-6 sm:p-10 shadow-md">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192]">
                      Enquiry Successfully Received
                    </h3>
                    <p className="text-xs text-[#252525]/80 max-w-md mx-auto">
                      Thank you, {contactPerson}. Your wholesale brief for{" "}
                      <strong>{companyName}</strong> has been logged directly into our manufacturing
                      desk. An account executive will contact you via WhatsApp / email shortly.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF]"
                    >
                      Submit Another Brief
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Company / Business Name *
                        </label>
                        <Input
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Metro Kids Retail Pvt Ltd"
                          className="h-10 rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Contact Person *
                        </label>
                        <Input
                          required
                          value={contactPerson}
                          onChange={(e) => setContactPerson(e.target.value)}
                          placeholder="e.g. Suresh Menon"
                          className="h-10 rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Mobile / WhatsApp Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 94470 11223"
                          className="h-10 rounded-none border-[#226192]/30 text-xs font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Business Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="suresh@metrokids.in"
                          className="h-10 rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          City *
                        </label>
                        <Input
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Kochi"
                          className="h-10 rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          State *
                        </label>
                        <Input
                          required
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="e.g. Kerala"
                          className="h-10 rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Estimated Order Quantity *
                        </label>
                        <select
                          value={estimatedQuantity}
                          onChange={(e) => setEstimatedQuantity(e.target.value)}
                          className="w-full h-10 border border-[#226192]/30 bg-[#FFFFFF] px-3 text-xs font-semibold text-[#226192]"
                        >
                          <option value="100 – 500 pcs">100 – 500 pcs (Boutique Tier)</option>
                          <option value="500 – 2,500 pcs">500 – 2,500 pcs (Regional MBO)</option>
                          <option value="2,500 – 10,000 pcs">
                            2,500 – 10,000 pcs (National Chain)
                          </option>
                          <option value="10,000+ pcs">10,000+ pcs (Export / Private Label)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Interested Brand *
                        </label>
                        <select
                          value={interestedBrand}
                          onChange={(e) => setInterestedBrand(e.target.value)}
                          className="w-full h-10 border border-[#226192]/30 bg-[#FFFFFF] px-3 text-xs font-semibold text-[#226192]"
                        >
                          <option value="Kids Korner (Flagship)">
                            Kids Korner (Everyday Flagship)
                          </option>
                          <option value="X-Zone (Athleisure)">X-Zone (Active Streetwear)</option>
                          <option value="H&D Club (Boutique)">H&D Club (Boutique Tailoring)</option>
                          <option value="Boy Munna (Character)">
                            Boy Munna (Registered Character)
                          </option>
                          <option value="Multi-Brand Assortment">
                            All 4 Brands Mixed Assortment
                          </option>
                          <option value="Custom Private Label">Custom Private Label OEM</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Primary Product Category Focus *
                        </label>
                        <Input
                          required
                          value={productCategory}
                          onChange={(e) => setProductCategory(e.target.value)}
                          placeholder="e.g. Boys T-Shirts, Co-Ord Sets, Cotton Nightwear"
                          className="h-10 rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold uppercase text-[#226192] mb-1">
                          Enquiry Message & Requirements *
                        </label>
                        <Textarea
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Please provide details about your retail outlets, distribution territory, target delivery timelines, or fabric specifications..."
                          className="rounded-none border-[#226192]/30 text-xs"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 rounded-none border border-[#EF8557] bg-[#EF8557] text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557]/90 transition-all"
                    >
                      Submit Wholesale Brief to Tirupur Factory Desk
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
