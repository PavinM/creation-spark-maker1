import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { InquiryForm, PageHero, Reveal } from "@/components/site";
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
      { property: "og:title", content: "Let’s Talk | Muthu International Private Ltd" },
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
  return (
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Business Enquiries"
        title="Let's build a business partnership."
        text="Looking for an established kidswear manufacturer in India? Our team welcomes enquiries about our products, manufacturing capabilities and business opportunities."
        image={images.bloomHero || images.hero}
      />

      <section className="bg-[#EAE6DE] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Direct Atelier Channels</span>
                <h2 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Muthu International
                </h2>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#252525]/70">Private Ltd · Tirupur</span>

                <div className="mt-8 space-y-6 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192]">
                      <MapPin className="size-4 text-[#EF8557]" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#226192]">Factory & Headquarters:</strong>
                      <p className="mt-1 leading-relaxed text-[#252525]/85">
                        Muthu International Private Ltd<br />
                        Tirupur, Tamil Nadu 641602, India<br />
                        <span className="text-xs text-[#252525]/70">South India Textile Hub</span>
                      </p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192]">
                      <Phone className="size-4 text-[#EF8557]" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#226192]">Phone & WhatsApp:</strong>
                      <p className="mt-1 text-[#252525]/85">+91 421 220 0000</p>
                      <p className="text-xs text-[#EF8557]">Contact us about our kidswear range</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192]">
                      <Mail className="size-4 text-[#EF8557]" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#226192]">Official Business Email:</strong>
                      <p className="mt-1 text-[#252525]/85">export@muthuinternational.com</p>
                      <p className="text-xs text-[#252525]/70">Tech pack inquiries: development@muthuinternational.com</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-[#226192]/20 bg-[#EAE6DE] text-[#226192]">
                      <Clock className="size-4 text-[#EF8557]" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#226192]">Operating Hours:</strong>
                      <p className="mt-1 text-[#252525]/85">Monday – Saturday: 9:00 AM – 6:30 PM (IST)</p>
                      <p className="text-xs text-[#252525]/70">Serving customers across India</p>
                    </div>
                  </div>
                </div>

                {/* Business focus */}
                <div className="mt-8 border-t border-[#226192]/15 pt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#226192]">Our focus</span>
                  <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">Kidswear manufacturing, fresh designs and quality-focused customer partnerships.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-8 shadow-sm sm:p-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">Send An Enquiry</span>
                <h3 className="font-['Space_Grotesk'] mt-2 text-2xl font-bold uppercase tracking-tight text-[#226192] sm:text-3xl">
                  Connect with Our Atelier Team
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#252525]/80 sm:text-sm">
                  Please complete the brief below. For formal pricing quotes, yarn requirements, or timeline estimates, please indicate your product silhouette and projected volumes.
                </p>

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