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
  Maximize2
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
  { label: "OEM / Private Label", to: "/oem-private-label" },
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
    const onScroll = () => setCompact(window.scrollY > 30);
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
            ? "border-b border-border/80 bg-[#FAF9F6]/95 py-2.5 shadow-sm backdrop-blur-md"
            : "border-b border-border/40 bg-[#FAF9F6]/85 py-4 backdrop-blur-sm"
        )}
      >
        <div className="page-shell flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 text-navy transition-opacity hover:opacity-90"
            aria-label="Muthu International Home"
          >
            <div className="flex size-10 items-center justify-center border border-gold bg-navy text-gold shadow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-sm font-bold tracking-widest">MI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-navy">
                Muthu International
              </span>
              <span className="text-[9px] font-medium tracking-[0.14em] text-slate">
                Private Ltd · Kidswear
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary Navigation">
            {primaryNav.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="relative py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold font-extrabold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gold" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/contact"
              className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
            >
              Contact
            </Link>
            <Button
              asChild
              className="h-10 rounded-none bg-navy px-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-navy/90 hover:text-gold"
            >
              <Link to="/request-quote">
                Get a Quote <ArrowRight className="ml-1 size-3.5 text-gold" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none text-navy md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6 text-gold" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-navy px-6 pb-12 pt-24 text-white transition-all duration-300 md:hidden",
          open ? "visible opacity-100 translate-x-0" : "invisible opacity-0 translate-x-full"
        )}
      >
        <div className="overflow-y-auto">
          <p className="label-track mb-3 text-gold">Navigation</p>
          <nav className="flex flex-col divide-y divide-white/10" aria-label="Mobile Navigation">
            {[...primaryNav, ...secondaryNav].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="py-3.5 text-lg font-medium tracking-wide text-white/90 hover:text-gold"
                activeProps={{ className: "text-gold font-bold" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/15 pt-6">
          <Button asChild className="h-12 w-full rounded-none bg-gold text-xs font-bold uppercase tracking-[0.16em] text-navy hover:bg-gold/90">
            <Link to="/request-quote">
              Request a Manufacturing Quote <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/20 bg-navy text-white">
      <div className="page-shell py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center border border-gold bg-white/5 font-serif font-bold text-gold">
                MI
              </div>
              <div>
                <strong className="block text-sm uppercase tracking-[0.16em] text-white">
                  Muthu International
                </strong>
                <span className="text-xs uppercase tracking-[0.14em] text-gold">Private Ltd</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Kids Apparel Manufacturing <span className="text-gold">|</span> OEM <span className="text-gold">|</span> Private Label.
              Dedicated to crafting contemporary kidswear collections for brands, retailers and sourcing partners.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="border border-white/15 px-2.5 py-1">T-Shirts</span>
              <span className="border border-white/15 px-2.5 py-1">Co-Ord Sets</span>
              <span className="border border-white/15 px-2.5 py-1">Printing</span>
              <span className="border border-white/15 px-2.5 py-1">Embroidery</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="label-track mb-5 text-gold">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {primaryNav.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <p className="label-track mb-5 text-gold">Capabilities</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/design-development" className="text-white/70 hover:text-gold">
                  Design & Development
                </Link>
              </li>
              <li>
                <Link to="/oem-private-label" className="text-white/70 hover:text-gold">
                  OEM Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-white/70 hover:text-gold">
                  Production Process
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-white/70 hover:text-gold">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-white/70 hover:text-gold">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-gold">
                  Factory & Product Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Enquiries */}
          <div>
            <p className="label-track mb-5 text-gold">Direct Enquiries</p>
            <p className="text-xs uppercase tracking-[0.14em] text-white/50">Factory & Office</p>
            <p className="mt-1 text-sm leading-relaxed text-white/80">
              Muthu International Private Ltd<br />
              Tamil Nadu, India<br />
              <span className="text-xs text-white/50">[ADD FACTORY LOCATION]</span>
            </p>
            <div className="mt-6 space-y-2 text-xs text-white/70">
              <p>Email: <span className="text-white">[ADD BUSINESS EMAIL]</span></p>
              <p>Phone / WhatsApp: <span className="text-white">[ADD PHONE NUMBER]</span></p>
            </div>
            <Button asChild className="mt-6 h-10 w-full rounded-none bg-gold text-xs font-bold uppercase tracking-[0.14em] text-navy hover:bg-gold/90">
              <Link to="/request-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Muthu International Private Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white/60">B2B Manufacturing</span>
            <span className="hover:text-white/60">OEM & Private Label</span>
            <span className="hover:text-white/60">Export Quality</span>
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
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reducedMotion.matches) {
        element.style.setProperty("--scroll-progress", "1");
        return;
      }
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
      element.style.setProperty("--scroll-progress", progress.toFixed(4));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
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
  image = images.hero,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[65vh] overflow-hidden bg-navy pt-24 text-white">
      <ScrollMedia className="absolute inset-0">
        <img
          src={image}
          width={1536}
          height={1024}
          className="size-full object-cover opacity-35"
          alt="Muthu International Kidswear Manufacturing"
        />
      </ScrollMedia>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
      <div className="page-shell relative flex min-h-[calc(65vh-6rem)] items-end pb-16">
        <div className="max-w-4xl">
          <p className="label-track mb-5 flex items-center gap-2 text-gold">
            <span className="inline-block h-px w-6 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="display-title text-4xl uppercase sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{text}</p>
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
      <p className="label-track mb-3 flex items-center gap-2 text-gold">
        <span className="inline-block h-px w-5 bg-gold" />
        {eyebrow}
      </p>
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <h2 className={cn("display-title text-3xl uppercase sm:text-5xl", light ? "text-white" : "text-navy")}>
          {title}
        </h2>
        {text && (
          <p className={cn("max-w-xl text-sm leading-relaxed", light ? "text-white/70" : "text-slate")}>
            {text}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col justify-between border border-border bg-white transition-all duration-300 hover:border-gold/60 hover:shadow-md">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block overflow-hidden">
        <div className="image-zoom relative aspect-[4/5] bg-beige">
          <img
            src={product.image}
            width={1024}
            height={1280}
            loading="lazy"
            className="size-full object-cover"
            alt={product.name}
          />
          <div className="absolute left-3 top-3 bg-navy/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
            {(product.category.split("·")[0] || product.category).trim()}
          </div>
        </div>
        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{product.category}</p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-navy transition-colors group-hover:text-gold sm:text-lg">
              {product.name}
            </h3>
            <ArrowRight className="size-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-slate">{product.description}</p>
          <div className="mt-4 border-t border-border/60 pt-3 text-[11px] text-slate">
            <span className="font-semibold text-navy">Fabric: </span>
            {product.fabric.slice(0, 36)}...
          </div>
        </div>
      </Link>
    </article>
  );
}

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="group grid border border-border bg-white transition-all duration-300 hover:border-gold/70 md:grid-cols-12 md:items-center">
      <div className="p-8 md:col-span-5">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{collection.season}</span>
        <h3 className="mt-2 text-2xl font-medium uppercase text-navy transition-colors group-hover:text-gold sm:text-3xl">
          {collection.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate">{collection.description}</p>
        <p className="mt-3 text-xs italic text-navy/80">{collection.highlight}</p>
        <div className="mt-6">
          <Button asChild variant="outline" className="h-9 rounded-none border-navy text-xs font-bold uppercase tracking-[0.12em] text-navy hover:bg-navy hover:text-white">
            <Link to="/collections/$slug" params={{ slug: collection.slug }}>
              Explore Collection ({collection.productCount} styles) <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="image-zoom aspect-[16/10] bg-beige md:col-span-7">
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
    <section className="bg-navy py-20 text-white sm:py-28">
      <div className="page-shell">
        <Reveal>
          <p className="label-track mb-5 flex items-center gap-2 text-gold">
            <span className="inline-block h-px w-6 bg-gold" />
            Start a Conversation
          </p>
          <h2 className="display-title max-w-4xl text-4xl uppercase sm:text-6xl lg:text-7xl">
            Let’s build your next kidswear collection.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Have a design sketch, reference sample, tech pack or bulk requirement? Talk to our manufacturing team about OEM, private-label and custom kidswear development.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-none bg-gold px-7 text-xs font-bold uppercase tracking-[0.16em] text-navy hover:bg-gold/90">
              <Link to="/request-quote">
                Request a Quote <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-none border-white/30 bg-transparent px-7 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-white/10"
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
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
      <div className="border border-gold bg-[#F1ECE3] p-8 sm:p-12 text-center">
        <div className="mx-auto flex size-14 items-center justify-center border border-gold bg-navy text-gold">
          <CheckCircle2 className="size-8" />
        </div>
        <p className="label-track mt-6 text-gold">Enquiry Received</p>
        <h3 className="mt-2 text-2xl font-semibold text-navy sm:text-3xl">
          Thank you for contacting Muthu International.
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate">
          Your manufacturing brief has been registered. Our merchandising team typically reviews technical specifications and responds within 1 business day.
        </p>
        <Button
          className="mt-8 rounded-none bg-navy text-xs font-bold uppercase tracking-widest text-white hover:bg-navy/90"
          onClick={() => {
            setSent(false);
            setFileName(null);
          }}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
        Full Name *
        <Input required className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. John Doe" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
        Company / Brand Name *
        <Input required className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. Acme Kidswear" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
        Business Email *
        <Input required type="email" className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="name@company.com" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
        Phone / WhatsApp *
        <Input required type="tel" className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="+1 234 567 8900" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
        Country / Market *
        <Input required className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. United Kingdom, USA, UAE" />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
        Product Category *
        <select
          defaultValue={initialProduct ? "Specific Style" : "Boys T-Shirts"}
          className="h-12 border border-border bg-white px-4 text-xs font-semibold text-navy tracking-normal focus:border-gold focus:outline-none"
        >
          {initialProduct && <option value="Specific Style">Product: {initialProduct}</option>}
          <option value="Boys T-Shirts">Boys’ T-Shirts</option>
          <option value="Girls T-Shirts">Girls’ T-Shirts</option>
          <option value="Co-Ord Sets">Co-Ord Sets & 2-Piece Sets</option>
          <option value="Cord Sets">Corduroy & Heavyweight Sets</option>
          <option value="Printed Apparel">All-Over & Placement Printed Apparel</option>
          <option value="Embroidered Apparel">Embroidered & Appliqué Apparel</option>
          <option value="Casualwear">Casualwear & Pullovers</option>
          <option value="Full Collection">Full Kidswear Collection / Mixed</option>
        </select>
      </label>

      {kind === "quote" && (
        <>
          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Estimated Order Quantity (Pieces) *
            <Input required className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. 500 pcs per style / 3,000 pcs total" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Fabric Requirement
            <Input className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. 100% Cotton 180 GSM, French Terry, etc." />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Printing Requirement
            <Input className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. Rotary AOP, Water-base screen, Digital" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Embroidery Requirement
            <Input className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. Multi-head satin stitch, Chenille, Appliqué" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Private Label Requirement
            <Input className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. Custom neck tags, care labels, barcodes" />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Target Delivery Date
            <Input className="h-12 rounded-none border-border bg-white px-4 tracking-normal" placeholder="e.g. Q3 2026 / 60 days after sample approval" />
          </label>
        </>
      )}

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy sm:col-span-2">
        Detailed Brief / Specifications *
        <Textarea
          required
          rows={4}
          className="rounded-none border-border bg-white p-4 tracking-normal"
          placeholder="Please describe your styles, artwork references, size breakdown, fabric weights, or any specific testing requirements..."
        />
      </label>

      {/* File upload */}
      <div className="sm:col-span-2">
        <label className="flex h-16 cursor-pointer items-center justify-between border border-dashed border-gold/70 bg-white px-4 text-xs text-slate transition-colors hover:border-gold hover:bg-[#F1ECE3]/40">
          <div className="flex items-center gap-3">
            <Upload className="size-5 text-gold" />
            <span>
              {fileName ? (
                <strong className="text-navy">{fileName}</strong>
              ) : (
                "Attach Tech Pack, Sketches or Reference Photos (.pdf, .jpg, .png, .zip up to 20MB)"
              )}
            </span>
          </div>
          <span className="border border-border bg-[#FAF9F6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-navy">
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
        <Button
          type="submit"
          className="h-12 rounded-none bg-navy px-8 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-navy/90 hover:text-gold"
        >
          {kind === "quote" ? "Submit Manufacturing Request" : "Send Enquiry"}
          <ArrowRight className="ml-2 size-4 text-gold" />
        </Button>
      </div>
    </form>
  );
}

export function ProcessList({ items }: { items: string[] }) {
  return (
    <div className="border-t border-border">
      {items.map((item, i) => (
        <Reveal key={item}>
          <div className="grid grid-cols-[3.5rem_1fr] items-center border-b border-border py-5 transition-colors hover:bg-[#F1ECE3]/50 sm:grid-cols-[5rem_1fr]">
            <span className="font-mono text-xs font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-medium uppercase text-navy sm:text-2xl">{item}</h3>
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
        <ScrollMedia className="image-zoom aspect-[4/5] max-h-[38rem] border border-border bg-beige">
          <img src={image} loading="lazy" width={1024} height={1280} className="size-full object-cover" alt={title} />
        </ScrollMedia>
        <Reveal className="lg:p-8">
          <p className="label-track mb-4 flex items-center gap-2 text-gold">
            <span className="inline-block h-px w-5 bg-gold" />
            Muthu International
          </p>
          <h2 className="display-title text-3xl uppercase sm:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">{text}</p>
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
    <section className="bg-white py-20 sm:py-28">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Manufacturing Story"
          title="Every garment has a process."
          text="A disciplined, synchronized journey built to translate approved product intent into consistent production."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Sticky visual preview on desktop */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            {(() => {
              const currentStage = (manufacturingStages[activeStage] ?? manufacturingStages[0])!;
              return (
                <div className="border border-border bg-beige p-2 shadow-sm">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={currentStage.image}
                      width={1024}
                      height={1280}
                      className="size-full object-cover transition-all duration-700"
                      alt={currentStage.title}
                    />
                  </div>
                  <div className="bg-navy p-5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-gold">
                        STAGE {currentStage.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/50">Muthu Production</span>
                    </div>
                    <h4 className="mt-2 text-lg font-semibold uppercase text-white">
                      {currentStage.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {currentStage.shortDesc}
                    </p>
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
                      ? "border-gold bg-[#F1ECE3]/70 shadow-sm"
                      : "border-border bg-transparent hover:border-gold/50 hover:bg-[#FAF9F6]"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className={cn("font-mono text-sm font-bold", isActive ? "text-gold" : "text-slate")}>
                        {stage.number}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold uppercase tracking-wide text-navy sm:text-xl">
                          {stage.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate">{stage.fullDesc}</p>
                        {isActive && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {stage.highlights.map((h) => (
                              <span
                                key={h}
                                className="border border-gold/40 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-navy"
                              >
                                ✓ {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight
                      className={cn("size-5 shrink-0 transition-transform", isActive ? "rotate-90 text-gold" : "text-slate/50")}
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
              "border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors",
              activeFilter === cat
                ? "border-navy bg-navy text-white"
                : "border-border bg-white text-navy hover:border-gold hover:text-gold"
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
              className="group relative cursor-pointer overflow-hidden border border-border bg-white transition-all duration-300 hover:border-gold/80 hover:shadow-md"
            >
              <div className="image-zoom relative aspect-[4/5] bg-beige">
                <img
                  src={item.image}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="size-full object-cover"
                  alt={item.title}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex size-10 items-center justify-center border border-gold bg-navy text-gold">
                    <Maximize2 className="size-5" />
                  </div>
                </div>
              </div>
              <figcaption className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{item.category}</span>
                <h4 className="mt-1 text-sm font-semibold uppercase text-navy transition-colors group-hover:text-gold">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-slate">{item.description}</p>
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
            className="relative max-h-[90vh] max-w-4xl overflow-hidden border border-gold/40 bg-navy p-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center border border-white/20 bg-navy/80 text-white hover:text-gold"
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
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                {selectedItem.category}
              </span>
              <h3 className="mt-1 text-xl font-medium uppercase text-white">{selectedItem.title}</h3>
              <p className="mt-1 text-sm text-white/70">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}