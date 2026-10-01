import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageSquare, Instagram, Linkedin, Clock, ArrowRight } from "lucide-react";
import { InquiryForm, PageHero, Reveal } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Muthu International | Kidswear Apparel Manufacturer" },
      {
        name: "description",
        content:
          "Connect with Muthu International Private Ltd for OEM manufacturing, private label kidswear, custom development, and bulk export enquiries.",
      },
      { property: "og:title", content: "Let’s Talk | Muthu International Private Ltd" },
      {
        property: "og:description",
        content: "Initiate your kidswear manufacturing conversation with our merchandising team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Enquiries"
        title="Let’s talk."
        text="Whether you are launching a new private-label kidswear label, seeking reliable OEM manufacturing, or requesting product development samples, our merchandising team is here to assist."
        image={images.hero}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5">
              <div className="border border-border bg-white p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Direct Channels</span>
                <h2 className="mt-2 text-2xl font-bold uppercase text-navy sm:text-3xl">
                  Muthu International
                </h2>
                <span className="text-xs uppercase tracking-widest text-slate">Private Ltd</span>

                <div className="mt-8 space-y-6 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-gold/40 bg-ivory text-gold">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-navy">Factory & Headquarters:</strong>
                      <p className="mt-1 leading-relaxed text-slate">
                        Muthu International Private Ltd<br />
                        Tamil Nadu, India<br />
                        <span className="text-xs text-slate/75">[ADD COMPANY ADDRESS / STREET LOCATION]</span>
                      </p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-gold/40 bg-ivory text-gold">
                      <Phone className="size-4" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-navy">Phone / WhatsApp:</strong>
                      <p className="mt-1 text-slate">[ADD PHONE NUMBER]</p>
                      <p className="text-xs text-gold">[ADD WHATSAPP NUMBER FOR QUICK MERCHANDISING CHAT]</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-gold/40 bg-ivory text-gold">
                      <Mail className="size-4" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-navy">Official Email:</strong>
                      <p className="mt-1 text-slate">[ADD OFFICIAL BUSINESS EMAIL]</p>
                      <p className="text-xs text-slate/75">For Buyer Inquiries: [ADD MERCHANDISING EMAIL]</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-gold/40 bg-ivory text-gold">
                      <Clock className="size-4" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-navy">Operating Hours:</strong>
                      <p className="mt-1 text-slate">Monday – Saturday: 9:00 AM – 6:30 PM (IST)</p>
                      <p className="text-xs text-slate/75">Factory visits by appointment only</p>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-8 border-t border-border pt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">Professional Networks:</span>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2 border border-border px-3 py-1.5 text-xs text-slate hover:border-gold hover:text-gold"
                    >
                      <Linkedin className="size-3.5" /> LinkedIn [ADD LINK]
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2 border border-border px-3 py-1.5 text-xs text-slate hover:border-gold hover:text-gold"
                    >
                      <Instagram className="size-3.5" /> Instagram [ADD LINK]
                    </a>
                  </div>
                </div>

                {/* Google Maps Placeholder */}
                <div className="mt-8 border border-border bg-[#F1ECE3] p-4 text-center">
                  <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                    Interactive Map Integration
                  </span>
                  <p className="mt-1 text-[11px] text-slate">
                    [GOOGLE MAPS EMBED OR PIN LOCATION READY TO BE PLACED HERE]
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="border border-border bg-white p-8 sm:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Send An Enquiry</span>
                <h3 className="mt-2 text-2xl font-bold uppercase text-navy sm:text-3xl">
                  Connect with Our Team
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate sm:text-sm">
                  Please fill in the form below. If you require formal pricing, fabric specs or bulk timelines, please include your product category and estimated quantities.
                </p>

                <div className="mt-8">
                  <InquiryForm kind="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}