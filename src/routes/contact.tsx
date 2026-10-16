import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageSquare, Instagram, Linkedin, Clock, ArrowRight } from "lucide-react";
import { InquiryForm, PageHero, Reveal } from "@/components/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Muthu International | Kidswear Apparel Atelier" },
      {
        name: "description",
        content:
          "Connect with Muthu International Private Ltd for OEM manufacturing, private label kidswear, custom development, and bulk export enquiries in Tirupur, India.",
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
    <div className="bg-[#EAE6DE] text-[#252525]">
      <PageHero
        eyebrow="Commercial Enquiries"
        title="LET’S INITIATE A CONVERSATION."
        text="Whether launching a new seasonal private-label range, scaling contract OEM capacity, or developing custom prototypes, our atelier merchandising team is at your service."
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
                      <p className="text-xs text-[#EF8557]">Direct Merchandising Desk Available</p>
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
                      <p className="text-xs text-[#252525]/70">Factory walkthroughs scheduled by appointment</p>
                    </div>
                  </div>
                </div>

                {/* Professional Networks */}
                <div className="mt-8 border-t border-[#226192]/15 pt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#226192]">Global Networks:</span>
                  <div className="mt-3 flex gap-3">
                    <span className="flex items-center gap-2 border border-[#226192]/20 px-3 py-1.5 text-xs text-[#226192]">
                      <Linkedin className="size-3.5 text-[#EF8557]" /> LinkedIn Official
                    </span>
                    <span className="flex items-center gap-2 border border-[#226192]/20 px-3 py-1.5 text-xs text-[#226192]">
                      <Instagram className="size-3.5 text-[#EF8557]" /> Instagram Studio
                    </span>
                  </div>
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