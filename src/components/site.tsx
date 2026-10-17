import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Download,
  Menu,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Upload,
  X,
  Maximize2,
  ArrowUpRight
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  images,
  products,
  collections,
  manufacturingStages,
  whyMuthuPoints,
  oemSteps,
  type Product,
  type Collection,
  type GalleryItem
} from "@/lib/content";

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Our Expertise", to: "/oem-private-label" },
  { label: "Collections", to: "/collections" },
  { label: "Quality", to: "/quality" },
] as const;

export const secondaryNav = [
  { label: "Design & Development", to: "/design-development" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
  { label: "Request a Quote", to: "/request-quote" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = useLocation({ select: (s) => s.pathname });

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          compact
            ? "border-b border-[#226192]/15 bg-[#EAE6DE]/95 py-3 shadow-[0_2px_12px_rgba(34,97,146,0.06)] backdrop-blur-md"
            : "border-b border-[#226192]/10 bg-[#EAE6DE]/90 py-4 backdrop-blur-sm"
        )}
      >
        <div className="page-shell flex items-center justify-between gap-6">
          {/* Brand Logo - Bloom Editorial Style */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Muthu International Home"
          >
            {/* Logo Emblem */}
            <img
              src={images.muthuEmblem}
              alt="Muthu International Emblem"
              className="h-14 w-auto object-contain transition-[height] duration-300 sm:h-16"
              loading="eager"
            />
            {/* Wordmark */}
            <img
              src={images.muthuWordmark}
              alt="Muthu International"
              className="h-8 w-auto object-contain transition-[height] duration-300 sm:h-10"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary Navigation">
            {primaryNav.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="group relative py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#226192]/80 transition-colors hover:text-[#226192]"
                activeProps={{ className: "text-[#226192] font-black" }}
              >
                <span>{label}</span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#EF8557] transition-all duration-300 group-hover:w-full group-[.font-black]:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-5 md:flex">
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-[0.12em] text-[#226192] transition-colors hover:text-[#EF8557]"
            >
              Contact
            </Link>
            <Link
              to="/request-quote"
              className="group inline-flex items-center gap-2 border border-[#226192] bg-[#226192] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#FFFFFF] transition-all duration-300 hover:border-[#EF8557] hover:bg-[#EF8557]"
            >
              <span>Get a Quote</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-[#FFFFFF]/20 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-[#FFFFFF] group-hover:text-[#EF8557]">
                <ArrowRight className="size-3" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none border border-[#226192]/30 text-[#226192] hover:bg-[#226192]/10 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5 text-[#EF8557]" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-[#226192] px-7 pb-12 pt-24 text-[#EAE6DE] transition-all duration-300 md:hidden",
          open ? "visible opacity-100 translate-x-0" : "invisible opacity-0 translate-x-full"
        )}
      >
        <div className="overflow-y-auto">
          <div className="mb-4 flex items-center gap-2 text-[#EF8557]">
            <span className="size-1.5 rounded-full bg-[#EF8557]" />
            <p className="label-track text-[#EF8557]">Directory & Atelier</p>
          </div>
          <nav className="flex flex-col divide-y divide-[#EAE6DE]/15" aria-label="Mobile Navigation">
            {[...primaryNav, ...secondaryNav].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="py-3.5 text-base font-semibold tracking-wide text-[#EAE6DE]/90 transition-colors hover:text-[#EF8557]"
                activeProps={{ className: "text-[#EF8557] font-bold" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-[#EAE6DE]/20 pt-6">
          <Link
            to="/request-quote"
            className="inline-flex h-12 w-full items-center justify-center gap-3 border border-[#EF8557] bg-[#EF8557] text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] shadow-sm transition-colors hover:bg-[#EF8557]/90"
          >
            <span>Request Manufacturing Quote</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#226192]/20 bg-[#226192] text-[#EAE6DE]">
      <div className="page-shell py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand Info */}
          <div>
            {/* Footer logo: emblem stacked above wordmark */}
            <div className="flex flex-col gap-3">
              <img
                src={images.muthuEmblem}
                alt="Muthu International Emblem"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90"
                loading="lazy"
              />
              <img
                src={images.muthuWordmark}
                alt="Muthu International"
                className="h-8 w-auto object-contain brightness-0 invert opacity-70"
                loading="lazy"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#EAE6DE]/80">
              Looking for an experienced kidswear manufacturer in India? Contact us to discuss our range, design capabilities and manufacturing facilities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#EAE6DE]/80">
              <span className="border border-[#EAE6DE]/20 bg-[#FFFFFF]/5 px-2.5 py-1">T-Shirts</span>
              <span className="border border-[#EAE6DE]/20 bg-[#FFFFFF]/5 px-2.5 py-1">Co-Ord Sets</span>
              <span className="border border-[#EAE6DE]/20 bg-[#FFFFFF]/5 px-2.5 py-1">Night Suits</span>
              <span className="border border-[#EAE6DE]/20 bg-[#FFFFFF]/5 px-2.5 py-1">Sweaters & Hoodies</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="label-track mb-5 text-[#EF8557]">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {primaryNav.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-[#EAE6DE]/80 transition-colors hover:text-[#FFFFFF]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <p className="label-track mb-5 text-[#EF8557]">Capabilities</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/design-development" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Design & Development
                </Link>
              </li>
              <li>
                <Link to="/oem-private-label" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Kidswear Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Production Process
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Factory & Product Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Enquiries */}
          <div>
            <p className="label-track mb-5 text-[#EF8557]">Direct Enquiries</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#EAE6DE]/60">Factory & Headquarters</p>
            <p className="mt-1 text-sm leading-relaxed text-[#EAE6DE]/90">
              Muthu International Private Ltd<br />
              Tirupur, Tamil Nadu, India<br />
              <span className="text-xs text-[#EAE6DE]/60">Kidswear manufacturing since 2000</span>
            </p>
            <div className="mt-5 space-y-1.5 text-xs text-[#EAE6DE]/80">
              <p>Email: <span className="text-[#FFFFFF]">export@muthuinternational.com</span></p>
              <p>Phone / WhatsApp: <span className="text-[#FFFFFF]">+91 421 220 0000</span></p>
            </div>
            <Link
              to="/request-quote"
              className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 border border-[#EF8557] bg-[#EF8557] text-xs font-bold uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors hover:bg-[#EF8557]/90"
            >
              <span>Request a Quote</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#EAE6DE]/15 pt-6 text-xs text-[#EAE6DE]/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Muthu International Private Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 text-[#EAE6DE]/70">
            <span className="hover:text-[#FFFFFF]">B2B Manufacturing</span>
            <span className="hover:text-[#FFFFFF]">100+ employees</span>
            <span className="hover:text-[#FFFFFF]">Serving customers across India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      element.style.setProperty("--scroll-progress", "1");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.setProperty("--scroll-progress", "1");
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);
  return ref;
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useScrollProgress<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("scroll-reveal", className)}>
      {children}
    </div>
  );
}

export function ScrollMedia({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useScrollProgress<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("scroll-media", className)}>
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image = images.bloomHero || images.hero,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[55vh] overflow-hidden border-b border-[#226192]/20 bg-[#EAE6DE] pt-28 text-[#252525] lg:pt-36">
      <div className="page-shell pb-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-track mb-4 flex items-center gap-2 text-[#EF8557]">
              <span className="inline-block h-px w-6 bg-[#EF8557]" />
              {eyebrow}
            </p>
            <h1 className="font-['Space_Grotesk'] text-4xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#252525]/85 sm:text-lg">
              {text}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-[#226192] translate-x-3 translate-y-3" />
              <div className="relative aspect-[16/10] overflow-hidden border border-[#226192] bg-[#FFFFFF]">
                <img
                  src={image}
                  width={1200}
                  height={800}
                  className="size-full object-cover"
                  alt={title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mb-12">
      <p className="label-track mb-3 flex items-center gap-2.5 text-[#EF8557]">
        <span className="size-1.5 rounded-full bg-[#EF8557]" />
        {eyebrow}
      </p>
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <h2 className={cn("font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight sm:text-5xl", light ? "text-[#FFFFFF]" : "text-[#226192]")}>
          {title}
        </h2>
        {text && (
          <p className={cn("max-w-xl text-sm leading-relaxed", light ? "text-[#EAE6DE]/80" : "text-[#252525]/80")}>
            {text}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] transition-all duration-300 hover:border-[#EF8557] hover:shadow-[0_8px_24px_rgba(34,97,146,0.08)]">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block overflow-hidden">
        <div className="image-zoom relative aspect-[4/5] bg-[#EAE6DE]/60">
          <img
            src={product.image}
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
            alt={product.name}
          />
          <div className="absolute left-3 top-3 border border-[#226192] bg-[#226192] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF]">
            {(product.category.split("·")[0] || product.category).trim()}
          </div>
        </div>
        <div className="p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF8557]">{product.category}</p>
          <div className="mt-2.5 flex items-center justify-between gap-3">
            <h3 className="font-['Space_Grotesk'] text-base font-bold uppercase tracking-tight text-[#226192] transition-colors group-hover:text-[#EF8557] sm:text-lg">
              {product.name}
            </h3>
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#226192]/20 bg-[#EAE6DE]/50 text-[#226192] transition-all duration-300 group-hover:border-[#EF8557] group-hover:bg-[#EF8557] group-hover:text-[#FFFFFF]">
              <ArrowRight className="size-3.5" />
            </span>
          </div>
          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-[#252525]/80">{product.description}</p>
          <div className="mt-4 border-t border-[#226192]/15 pt-3 text-[11px] text-[#252525]/70">
            <span className="font-semibold text-[#226192]">Fabric: </span>
            {product.fabric.slice(0, 36)}...
          </div>
        </div>
      </Link>
    </article>
  );
}

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="group grid border border-[#226192]/20 bg-[#FFFFFF] transition-all duration-300 hover:border-[#EF8557] md:grid-cols-12 md:items-center">
      <div className="p-8 md:col-span-5">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">{collection.season}</span>
        <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tight text-[#226192] transition-colors group-hover:text-[#EF8557] sm:text-3xl">
          {collection.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#252525]/80">{collection.description}</p>
        <p className="mt-3 font-serif italic text-xs text-[#226192]">{collection.highlight}</p>
        <div className="mt-6">
          <Link
            to="/collections/$slug"
            params={{ slug: collection.slug }}
            className="inline-flex items-center gap-2 border border-[#226192] bg-[#226192] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#EF8557] hover:border-[#EF8557]"
          >
            <span>Explore Collection ({collection.productCount} styles)</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
      <div className="image-zoom aspect-[16/10] bg-[#EAE6DE] md:col-span-7">
        <img
          src={collection.image}
          loading="lazy"
          width={1536}
          height={1024}
          className="size-full object-cover"
          alt={collection.name}
        />
      </div>
    </article>
  );
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#226192] py-20 text-[#FFFFFF] sm:py-28">
      {/* Decorative background shape */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full border border-[#FFFFFF]/10" />
      <div className="page-shell relative">
        <Reveal>
          <div className="flex items-center gap-2 text-[#EF8557]">
            <span className="size-2 rounded-full bg-[#EF8557]" />
            <p className="label-track text-[#EF8557]">Start a Conversation</p>
          </div>
          <h2 className="display-title mt-4 max-w-4xl text-4xl tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
            Let’s Build Your Next <span className="text-outline-white">Kidswear</span> Collection.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#EAE6DE]/85 sm:text-lg">
            Looking for a kidswear manufacturing partner in India? Contact our team to discuss your product requirements, our range and manufacturing capabilities.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/request-quote"
              className="group inline-flex items-center gap-3 border border-[#EF8557] bg-[#EF8557] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] shadow-sm transition-all hover:bg-[#EF8557]/90"
            >
              <span>Request a Quote</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-[#FFFFFF]/25 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#FFFFFF] group-hover:text-[#EF8557]">
                <ArrowRight className="size-3" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-[#EAE6DE]/40 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#EAE6DE] transition-colors hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF]"
            >
              Contact Our Team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InquiryForm({ kind, initialProduct }: { kind: "contact" | "quote"; initialProduct?: string }) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="border border-[#226192] bg-[#FFFFFF] p-8 sm:p-12 text-center">
        <div className="mx-auto flex size-14 items-center justify-center border border-[#EF8557] bg-[#226192] text-[#EF8557]">
          <CheckCircle2 className="size-8" />
        </div>
        <p className="label-track mt-6 text-[#EF8557]">Enquiry Received</p>
        <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192] sm:text-3xl">
          Thank you.
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#252525]/80">
          Your enquiry has been received. Thank you for contacting Muthu International Private Limited.
        </p>
        <button
          className="mt-8 border border-[#226192] bg-[#226192] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] transition-colors hover:bg-[#EF8557] hover:border-[#EF8557]"
          onClick={() => {
            setSent(false);
            setFileName(null);
          }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Full Name *
        <Input required className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]" placeholder="e.g. Eleanor Vance" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Company / Brand Name *
        <Input required className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]" placeholder="e.g. Bloom & Co. Kidswear" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Business Email *
        <Input required type="email" className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]" placeholder="name@company.com" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Phone / WhatsApp *
        <Input required type="tel" className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]" placeholder="+1 234 567 8900" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        City / State *
        <Input required className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]" placeholder="Your city and state" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Product Category *
        <select
          defaultValue={initialProduct ? "Specific Style" : "Boys T-Shirts"}
          className="h-12 border border-[#226192]/25 bg-[#FFFFFF] px-4 text-xs font-semibold text-[#226192] focus:border-[#226192] focus:outline-none"
        >
          {initialProduct && <option value="Specific Style">Product: {initialProduct}</option>}
          <option value="Boys T-Shirts">Boys' T-Shirts</option>
          <option value="Girls T-Shirts">Girls' T-Shirts</option>
          <option value="Co-Ord Sets">Co-Ord Sets</option>
          <option value="Night Suits">Night Suits</option>
          <option value="Girls Paijamas">Girls' Paijamas</option>
          <option value="Shorts">Shorts</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Other Kidswear">Other Children's Garments</option>
        </select>
      </label>

      {kind === "quote" && (
        <>
          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
            Estimated Order Quantity (Pieces) *
            <Input required className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525]" placeholder="e.g. 500 pcs per style / 3,000 pcs total" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
            Fabric Requirement
            <Input className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525]" placeholder="e.g. 100% Combed Cotton 180 GSM, French Terry" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
            Printing Requirement
            <Input className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525]" placeholder="e.g. Water-based reactive, Botanical AOP" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
            Embroidery Requirement
            <Input className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525]" placeholder="e.g. Multi-head satin stitch, Chenille patch" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
            Product Design Notes
            <Input className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525]" placeholder="Share any style or design details" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
            Target Delivery Date
            <Input className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525]" placeholder="e.g. SS27 / 60 days post-sample approval" />
          </label>
        </>
      )}

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192] sm:col-span-2">
        Detailed Brief / Specifications *
        <Textarea
          required
          rows={4}
          className="rounded-none border-[#226192]/25 bg-[#FFFFFF] p-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]"
          placeholder="Please describe your styles, artwork references, size breakdown, fabric weights, or specific testing requirements..."
        />
      </label>

      {/* File upload */}
      <div className="sm:col-span-2">
        <label className="flex h-16 cursor-pointer items-center justify-between border border-dashed border-[#226192]/40 bg-[#FFFFFF] px-4 text-xs text-[#252525]/70 transition-colors hover:border-[#EF8557] hover:bg-[#EAE6DE]/40">
          <div className="flex items-center gap-3">
            <Upload className="size-5 text-[#EF8557]" />
            <span>
              {fileName ? (
                <strong className="text-[#226192]">{fileName}</strong>
              ) : (
                "Attach Tech Pack, Sketches or Reference Photos (.pdf, .jpg, .png, .zip up to 20MB)"
              )}
            </span>
          </div>
          <span className="border border-[#226192]/20 bg-[#EAE6DE] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#226192]">
            Browse File
          </span>
          <input
            type="file"
            className="sr-only"
            accept=".pdf,.png,.jpg,.jpeg,.zip"
            onChange={(e) => {
              if (e.target.files?.[0]) setFileName(e.target.files[0].name);
            }}
          />
        </label>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-3 border border-[#226192] bg-[#226192] px-8 text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] shadow-sm transition-all hover:bg-[#EF8557] hover:border-[#EF8557]"
        >
          <span>{kind === "quote" ? "Submit Manufacturing Request" : "Send Enquiry"}</span>
          <ArrowRight className="size-4 text-[#EF8557] transition-transform group-hover:translate-x-1 group-hover:text-[#FFFFFF]" />
        </button>
      </div>
    </form>
  );
}

export function ProcessList({ items }: { items: string[] }) {
  return (
    <div className="border-t border-[#226192]/20">
      {items.map((item, i) => (
        <Reveal key={item}>
          <div className="grid grid-cols-[1.5rem_1fr] items-start gap-4 border-b border-[#226192]/20 py-5 transition-colors hover:bg-[#FFFFFF]/60">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EF8557]" />
            <h3 className="text-lg font-bold uppercase tracking-tight text-[#226192] sm:text-2xl">{item}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ContentBand({
  title,
  text,
  image,
  reverse = false,
}: {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className={cn("page-shell grid items-center gap-10 lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2")}>
        <ScrollMedia className="image-zoom relative aspect-[4/5] max-h-[38rem] border border-[#226192]/20 bg-[#FFFFFF]">
          <div className="absolute -inset-2 bg-[#226192] -z-10 translate-x-2 translate-y-2 opacity-30" />
          <img src={image} loading="lazy" width={1024} height={1280} className="size-full object-cover" alt={title} />
        </ScrollMedia>
        <Reveal className="lg:p-8">
          <p className="label-track mb-4 flex items-center gap-2 text-[#EF8557]">
            <span className="inline-block h-px w-5 bg-[#EF8557]" />
            Muthu International
          </p>
          <h2 className="font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight text-[#226192] sm:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#252525]/85">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Sticky scroll interactive storytelling for Manufacturing Story
 */
export function ManufacturingStorySection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="border-t border-[#226192]/15 bg-[#EAE6DE] py-20 sm:py-28">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Our Manufacturing Story"
          title="Experience supported by modern facilities."
          text="Since 2000, our two factories, in-house design team, modern machinery and dedicated warehouse have supported our kidswear manufacturing operations."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Sticky visual preview on desktop */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            {(() => {
              const currentStage = (manufacturingStages[activeStage] ?? manufacturingStages[0])!;
              return (
                <div className="relative">
                  {/* Bloom blue background panel offset */}
                  <div className="absolute -inset-2 bg-[#226192] translate-x-3 translate-y-3" />
                  <div className="relative border border-[#226192] bg-[#FFFFFF] p-2 shadow-sm">
                    <div className="aspect-[4/5] overflow-hidden bg-[#EAE6DE]">
                      <img
                        src={currentStage.image}
                        width={1024}
                        height={1280}
                        className="size-full object-cover transition-all duration-700"
                        alt={currentStage.title}
                      />
                    </div>
                    <div className="bg-[#226192] p-5 text-[#FFFFFF]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EF8557]">
                          Manufacturing Operations
                        </span>
                      </div>
                      <h4 className="mt-2 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#FFFFFF]">
                        {currentStage.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-[#EAE6DE]/80">
                        {currentStage.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Interactive process list */}
          <div className="space-y-4 lg:col-span-7">
            {manufacturingStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.number}
                  onMouseEnter={() => setActiveStage(idx)}
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    "cursor-pointer border p-6 transition-all duration-300",
                    isActive
                      ? "border-[#EF8557] bg-[#FFFFFF] shadow-sm"
                      : "border-[#226192]/20 bg-[#FFFFFF]/60 hover:border-[#226192] hover:bg-[#FFFFFF]"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className={cn("h-1 w-1 rounded-full mt-1.5 shrink-0", isActive ? "bg-[#EF8557]" : "bg-[#226192]/40")} />
                      <div>
                        <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight text-[#226192] sm:text-xl">
                          {stage.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">{stage.fullDesc}</p>
                        {isActive && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {stage.highlights.map((h) => (
                              <span
                                key={h}
                                className="border border-[#226192]/20 bg-[#EAE6DE] px-2.5 py-1 text-[11px] font-medium text-[#226192]"
                              >
                                ✓ {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight
                      className={cn("size-5 shrink-0 transition-transform", isActive ? "rotate-90 text-[#EF8557]" : "text-[#226192]/40")}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Filterable Gallery with Lightbox
 */
export function GalleryWithLightbox({ items }: { items: GalleryItem[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Factory",
    "Products",
    "Kidswear",
    "Printing",
    "Embroidery",
    "Stitching",
    "Quality",
    "Packaging",
  ];

  const filtered = activeFilter === "All" ? items : items.filter((i) => i.category === activeFilter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Gallery categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors",
              activeFilter === cat
                ? "border-[#226192] bg-[#226192] text-[#FFFFFF]"
                : "border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.map((item, idx) => (
          <Reveal key={`${item.title}-${idx}`} className="mb-6 break-inside-avoid">
            <figure
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden border border-[#226192]/20 bg-[#FFFFFF] transition-all duration-300 hover:border-[#EF8557] hover:shadow-md"
            >
              <div className="image-zoom relative aspect-[4/5] bg-[#EAE6DE]">
                <img
                  src={item.image}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="size-full object-cover"
                  alt={item.title}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#226192]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex size-10 items-center justify-center border border-[#EF8557] bg-[#226192] text-[#EF8557]">
                    <Maximize2 className="size-5" />
                  </div>
                </div>
              </div>
              <figcaption className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF8557]">{item.category}</span>
                <h4 className="mt-1 font-['Space_Grotesk'] text-sm font-bold uppercase text-[#226192] transition-colors group-hover:text-[#EF8557]">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-[#252525]/80">{item.description}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden border border-[#EF8557] bg-[#226192] p-2 text-[#FFFFFF]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center border border-[#FFFFFF]/30 bg-[#226192]/90 text-[#FFFFFF] hover:text-[#EF8557]"
              aria-label="Close image preview"
            >
              <X className="size-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[70vh] w-auto mx-auto object-contain"
              />
            </div>
            <div className="p-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF8557]">
                {selectedItem.category}
              </span>
              <h3 className="mt-1 font-['Space_Grotesk'] text-xl font-bold uppercase text-[#FFFFFF]">{selectedItem.title}</h3>
              <p className="mt-1 text-sm text-[#EAE6DE]/80">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}