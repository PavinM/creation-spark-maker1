import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, Upload, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { images, products, type gallery } from "@/lib/content";

const nav = [
  ["Home", "/"], ["About", "/about"], ["Products", "/products"],
  ["Manufacturing", "/manufacturing"], ["OEM / Private Label", "/oem-private-label"],
  ["Collections", "/collections"], ["Quality", "/quality"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = useLocation({ select: (s) => s.pathname });
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 28);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-500", compact ? "border-border/70 bg-ivory/95 py-2 shadow-sm backdrop-blur-xl" : "border-transparent bg-ivory/90 py-3 backdrop-blur-md")}>
      <div className="page-shell flex h-14 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3 text-navy" aria-label="Muthu International home">
          <span className="grid size-9 place-items-center border border-gold text-sm font-bold">MI</span>
          <span className="hidden max-w-44 text-[10px] font-bold uppercase leading-tight tracking-[.16em] sm:block">Muthu International<br/><span className="font-medium text-slate">Private Ltd</span></span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {nav.map(([label, to]) => <Link key={to} to={to} className="text-[11px] font-bold uppercase tracking-[.1em] text-navy/75 transition-colors hover:text-gold" activeProps={{ className: "text-gold" }}>{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact" className="text-xs font-bold uppercase tracking-[.12em] text-navy hover:text-gold">Contact</Link>
          <Button asChild className="h-10 rounded-none px-5 text-xs font-bold uppercase tracking-[.12em]"><Link to="/request-quote">Get a quote <ArrowRight /></Link></Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</Button>
      </div>
    </header>
    <div className={cn("fixed inset-0 z-40 bg-navy px-6 pt-28 text-primary-foreground transition-transform duration-500 md:hidden", open ? "translate-x-0" : "translate-x-full")}>
      <nav className="flex flex-col" aria-label="Mobile navigation">
        {[...nav, ["Design & Development", "/design-development"], ["Sustainability", "/sustainability"], ["Gallery", "/gallery"], ["Contact", "/contact"]] .map(([label,to]) => <Link key={to} to={to} className="border-b border-primary-foreground/15 py-4 text-xl font-medium">{label}</Link>)}
        <Button asChild variant="secondary" className="mt-8 h-12 rounded-none"><Link to="/request-quote">Request a quote <ArrowRight/></Link></Button>
      </nav>
    </div>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-navy py-16 text-primary-foreground">
    <div className="page-shell grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
      <div><div className="mb-6 flex items-center gap-3"><span className="grid size-10 place-items-center border border-gold font-bold">MI</span><strong className="text-sm uppercase tracking-[.12em]">Muthu International Private Ltd</strong></div><p className="max-w-sm text-sm leading-7 text-primary-foreground/65">Kids Apparel Manufacturing <span className="text-gold">|</span> OEM <span className="text-gold">|</span> Private Label</p></div>
      <div><p className="label-track mb-5 text-gold">Explore</p><div className="grid grid-cols-2 gap-3 text-sm">{nav.slice(1).map(([l,t])=><Link key={t} to={t} className="text-primary-foreground/70 hover:text-gold">{l}</Link>)}<Link to="/contact">Contact</Link></div></div>
      <div><p className="label-track mb-5 text-gold">Contact</p><p className="text-sm leading-7 text-primary-foreground/65">Contact details are ready to be added.<br/>Tamil Nadu, India</p><Button asChild variant="secondary" className="mt-5 rounded-none"><Link to="/contact">Contact our team</Link></Button></div>
    </div>
    <div className="page-shell mt-14 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/45">© Muthu International Private Ltd. All Rights Reserved.</div>
  </footer>;
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = ref.current; if (!el) return; const obs = new IntersectionObserver((entries) => { const entry = entries[0]; if (entry?.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } }, { threshold: .14 }); obs.observe(el); return () => obs.disconnect(); }, []);
  return <div ref={ref} className={cn("reveal", className)}>{children}</div>;
}

export function PageHero({ eyebrow, title, text, image = images.hero }: { eyebrow: string; title: string; text: string; image?: string }) {
  return <section className="relative min-h-[72vh] overflow-hidden bg-navy pt-20 text-primary-foreground">
    <img src={image} width={1536} height={1024} className="absolute inset-0 size-full object-cover opacity-45" alt="Muthu International kidswear and manufacturing" />
    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/65 to-transparent"/>
    <div className="page-shell relative flex min-h-[calc(72vh-5rem)] items-end pb-16"><div className="max-w-4xl"><p className="label-track mb-6 text-gold">{eyebrow}</p><h1 className="display-title text-5xl uppercase sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-primary-foreground/75 sm:text-lg">{text}</p></div></div>
  </section>;
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <Reveal className="mb-12"><p className="label-track mb-4 text-gold">{eyebrow}</p><div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr] lg:items-end"><h2 className={cn("display-title text-4xl uppercase sm:text-6xl", light && "text-primary-foreground")}>{title}</h2>{text && <p className={cn("max-w-xl text-sm leading-7 text-slate", light && "text-primary-foreground/65")}>{text}</p>}</div></Reveal>;
}

export function CTASection() { return <section className="bg-navy py-20 text-primary-foreground sm:py-28"><div className="page-shell"><Reveal><p className="label-track mb-6 text-gold">Start a conversation</p><h2 className="display-title max-w-5xl text-5xl uppercase sm:text-7xl">Let’s build your next kidswear collection.</h2><p className="mt-7 max-w-2xl leading-8 text-primary-foreground/65">Have a design, reference sample or product requirement? Talk to our team about OEM, private-label and custom kidswear manufacturing.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="secondary" className="h-12 rounded-none px-6"><Link to="/request-quote">Request a quote <ArrowRight/></Link></Button><Button asChild variant="outline" className="h-12 rounded-none border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10"><Link to="/contact">Contact our team</Link></Button></div></Reveal></div></section>; }

export function ProductCard({ product }: { product: (typeof products)[number] }) { return <article className="group min-w-0"><Link to="/products/$slug" params={{ slug: product.slug }} className="block"><div className="image-zoom aspect-[4/5] bg-beige"><img src={product.image} width={1024} height={1280} loading="lazy" className="size-full object-cover" alt={product.name}/></div><div className="border-b border-border py-5"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-gold">{product.category}</p><div className="mt-2 flex items-center justify-between gap-3"><h3 className="text-lg font-semibold text-navy">{product.name}</h3><ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1"/></div><p className="mt-2 text-sm leading-6 text-slate">{product.description}</p></div></Link></article>; }

type FormKind = "contact" | "quote";
export function InquiryForm({ kind }: { kind: FormKind }) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); if (e.currentTarget.checkValidity()) setSent(true); };
  if (sent) return <div className="border border-gold bg-beige p-10"><p className="label-track text-gold">Enquiry received</p><h2 className="mt-4 text-3xl font-semibold text-navy">Thank you for reaching out.</h2><p className="mt-4 leading-7 text-slate">Your details have been captured in this preview. Connect the final recipient before launch to deliver enquiries to your team.</p><Button className="mt-6 rounded-none" onClick={() => setSent(false)}>Send another enquiry</Button></div>;
  const fields = kind === "quote" ? ["Full Name", "Company Name", "Business Email", "Phone / WhatsApp", "Country", "Product Category", "Estimated Quantity", "Fabric Requirement", "Printing Requirement", "Embroidery Requirement", "Private Label Requirement", "Target Delivery"] : ["Name", "Company", "Email", "Phone", "Country", "Product Category", "Quantity"];
  return <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">{fields.map((field, i) => <label key={field} className="grid gap-2 text-xs font-bold uppercase tracking-[.1em] text-navy">{field}<Input required={i < (kind === "quote" ? 7 : 6)} type={field.includes("Email") || field === "Email" ? "email" : "text"} className="h-12 rounded-none bg-paper px-4 normal-case tracking-normal" placeholder={`Enter ${field.toLowerCase()}`}/></label>)}<label className="grid gap-2 text-xs font-bold uppercase tracking-[.1em] text-navy sm:col-span-2">Message<Textarea required className="min-h-36 rounded-none bg-paper p-4 normal-case tracking-normal" placeholder="Tell us about your product, quantity, timeline and customization needs"/></label><label className="flex h-14 cursor-pointer items-center gap-3 border border-dashed border-gold bg-paper px-4 text-sm text-slate sm:col-span-2"><Upload className="size-4 text-gold"/> Upload reference / design<input type="file" className="sr-only" accept="image/*,.pdf"/></label><Button type="submit" className="h-13 rounded-none px-7 sm:col-span-2 sm:justify-self-start">{kind === "quote" ? "Submit request" : "Send enquiry"}<ArrowRight/></Button></form>;
}

export function ProcessList({ items }: { items: string[] }) { return <div className="border-t border-border">{items.map((item,i)=><Reveal key={item}><div className="grid grid-cols-[3.5rem_1fr_auto] items-center border-b border-border py-6 sm:grid-cols-[6rem_1fr_auto]"><span className="font-mono text-xs text-gold">{String(i+1).padStart(2,"0")}</span><h3 className="text-xl font-medium uppercase text-navy sm:text-3xl">{item}</h3><ChevronDown className="size-4 text-slate"/></div></Reveal>)}</div>; }

export function ContentBand({ title, text, image, reverse = false }: { title: string; text: string; image: string; reverse?: boolean }) { return <section className="py-16 sm:py-24"><div className={cn("page-shell grid items-center gap-10 lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2")}><Reveal className="image-zoom aspect-[4/5] max-h-[42rem]"><img src={image} loading="lazy" width={1024} height={1280} className="size-full object-cover" alt={title}/></Reveal><Reveal className="lg:p-12"><p className="label-track mb-5 text-gold">Muthu International</p><h2 className="display-title text-4xl uppercase sm:text-6xl">{title}</h2><p className="mt-7 max-w-xl leading-8 text-slate">{text}</p></Reveal></div></section>; }

export type GalleryItem = (typeof gallery)[number];