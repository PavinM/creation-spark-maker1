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
  ArrowUpRight,
  Search,
  Heart,
  ShoppingBag,
  User,
  Star,
  Ruler,
  Eye,
  Check,
  Percent,
  Truck,
  RotateCcw,
  Package,
  ClipboardList,
  BookmarkCheck,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  COMPANY_OWNER_EMAIL,
  images,
  products,
  collections,
  manufacturingStages,
  whyMuthuPoints,
  oemSteps,
  brandsList,
  sizeCharts,
  calculateGstBreakdown,
  CartStore,
  WishlistStore,
  StockStore,
  type Product,
  type Collection,
  type GalleryItem,
  type Brand,
  type ProductVariant,
} from "@/lib/content";

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Browse Catalog", to: "/products" },
  { label: "New Arrivals", to: "/products", search: { filter: "new" } },
  { label: "Best Sellers", to: "/products", search: { filter: "bestseller" } },
  { label: "Wholesale & B2B", to: "/wholesale" },
  { label: "Our Story", to: "/about" },
  { label: "Manufacturing", to: "/manufacturing" },
] as const;

export const secondaryNav = [
  { label: "Kids Korner (Flagship)", to: "/brands/kids-korner" },
  { label: "X-Zone (Athleisure)", to: "/brands/x-zone" },
  { label: "H&D Club (Boutique)", to: "/brands/hd-club" },
  { label: "Boy Munna (Character)", to: "/brands/boy-munna" },
  { label: "Design & Development", to: "/design-development" },
  { label: "Quality Standards", to: "/quality" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
  { label: "My Bookings (Track by Email)", to: "/account" },
  { label: "Owner Admin Panel", to: "/admin" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const pathname = useLocation({ select: (s) => s.pathname });
  const brandDropdownRef = useRef<HTMLDivElement>(null);

  // Sync reactive cart and wishlist counts
  useEffect(() => {
    const updateCounts = () => {
      setCartCount(CartStore.getItemCount());
      setWishlistCount(WishlistStore.getWishlist().length);
    };

    updateCounts();

    const handleCartUpdate = () => updateCounts();
    const handleWishlistUpdate = () => updateCounts();

    window.addEventListener("cart-updated", handleCartUpdate);
    window.addEventListener("wishlist-updated", handleWishlistUpdate);

    return () => {
      window.removeEventListener("cart-updated", handleCartUpdate);
      window.removeEventListener("wishlist-updated", handleWishlistUpdate);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setBrandDropdownOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (open || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, searchOpen]);

  // Filtered search results
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())),
        )
        .slice(0, 5)
    : [];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          compact
            ? "border-b border-[#226192]/15 bg-[#EAE6DE]/95 py-2 shadow-[0_2px_12px_rgba(34,97,146,0.06)] backdrop-blur-md"
            : "border-b border-[#226192]/10 bg-[#EAE6DE]/90 py-2.5 backdrop-blur-sm",
        )}
      >
        <div className="page-shell flex items-center justify-between gap-3">
          {/* Brand Logo - Bloom Editorial Style */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
            aria-label="Kids Korner & Muthu International Home"
          >
            <span className="block h-9 w-11 sm:h-11 sm:w-13">
              <img
                src={images.muthuEmblem}
                alt=""
                aria-hidden="true"
                className="brand-blue-filter size-full object-contain"
                loading="eager"
              />
            </span>
            <div className="flex flex-col">
              <img
                src={images.muthuWordmark}
                alt="Muthu International"
                className="brand-blue-filter h-auto w-24 object-contain sm:w-32"
                loading="eager"
              />
              <span className="text-[9px] font-bold tracking-[0.18em] text-[#EF8557] uppercase">
                Kids Korner · 4 Brands
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary Navigation">
            <Link
              to="/"
              className="py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#226192]/80 transition-colors hover:text-[#226192]"
              activeProps={{ className: "text-[#226192] font-black" }}
            >
              Home
            </Link>

            <Link
              to="/products"
              className="py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#226192]/80 transition-colors hover:text-[#226192]"
              activeProps={{ className: "text-[#226192] font-black" }}
            >
              Browse Catalog
            </Link>

            {/* Our Brands Mega-Dropdown */}
            <div
              className="relative"
              ref={brandDropdownRef}
              onMouseEnter={() => setBrandDropdownOpen(true)}
              onMouseLeave={() => setBrandDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#226192] transition-colors hover:text-[#EF8557]"
                onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
                aria-expanded={brandDropdownOpen}
              >
                <span>Our Brands</span>
                <ChevronDown className="size-3 text-[#EF8557]" />
              </button>

              {brandDropdownOpen && (
                <div className="absolute left-0 top-full w-80 rounded-none border border-[#226192]/20 bg-[#FFFFFF] p-3 shadow-xl backdrop-blur-md animate-in fade-in-50 zoom-in-95">
                  <div className="border-b border-[#226192]/10 pb-2 mb-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#EF8557]">
                      Muthu International Portfolio
                    </p>
                    <p className="text-[11px] text-[#252525]/70">
                      Four brands · One unified stock booking list
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {brandsList.map((brand) => (
                      <Link
                        key={brand.id}
                        to="/brands/$slug"
                        params={{ slug: brand.slug }}
                        className="group flex items-start justify-between rounded-none border border-transparent p-2.5 transition-all hover:border-[#226192]/20 hover:bg-[#EAE6DE]/50"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#226192] group-hover:text-[#EF8557]">
                              {brand.name}
                            </span>
                            <span className="rounded-full bg-[#EF8557]/15 px-1.5 py-0.2 text-[8px] font-bold text-[#EF8557]">
                              {brand.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#252525]/70 line-clamp-1">
                            {brand.tagline}
                          </p>
                        </div>
                        <ArrowRight className="size-3 text-[#226192]/40 transition-transform group-hover:translate-x-1 group-hover:text-[#EF8557]" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2.5 border-t border-[#226192]/10 pt-2 text-center">
                    <Link
                      to="/brands"
                      className="text-[10px] font-bold uppercase tracking-wider text-[#226192] hover:text-[#EF8557]"
                    >
                      View All 4 Brand Stories →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/products"
              search={{ filter: "new" }}
              className="py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#226192]/80 transition-colors hover:text-[#226192]"
            >
              New Arrivals
            </Link>

            <Link
              to="/products"
              search={{ filter: "bestseller" }}
              className="py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#226192]/80 transition-colors hover:text-[#226192]"
            >
              Best Sellers
            </Link>

            <Link
              to="/wholesale"
              className="py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#EF8557] transition-colors hover:text-[#226192]"
            >
              Wholesale & B2B
            </Link>

            <Link
              to="/about"
              className="py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#226192]/80 transition-colors hover:text-[#226192]"
            >
              About
            </Link>
          </nav>

          {/* Right Action Icons: Search, Wishlist, Cart, Account */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex size-9 items-center justify-center border border-[#226192]/25 bg-[#FFFFFF] text-[#226192] transition-colors hover:border-[#EF8557] hover:text-[#EF8557]"
              aria-label="Open search"
            >
              <Search className="size-4" />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/account"
              search={{ tab: "wishlist" }}
              className="relative flex size-9 items-center justify-center border border-[#226192]/25 bg-[#FFFFFF] text-[#226192] transition-colors hover:border-[#EF8557] hover:text-[#EF8557]"
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <Heart className="size-4" />
              {wishlistCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-[#EF8557] text-[9px] font-bold text-[#FFFFFF]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Booking List Link */}
            <Link
              to="/cart"
              className="group relative flex h-9 items-center gap-2 border border-[#226192] bg-[#226192] px-2.5 sm:px-3 text-[#FFFFFF] transition-all hover:border-[#EF8557] hover:bg-[#EF8557]"
              aria-label={`Booking List (${cartCount} items)`}
            >
              <ClipboardList className="size-4" />
              <span className="hidden text-[11px] font-bold uppercase tracking-wider sm:inline">
                Booking List
              </span>
              <span className="flex size-5 items-center justify-center rounded-full bg-[#FFFFFF] text-[10px] font-extrabold text-[#226192] group-hover:text-[#EF8557]">
                {cartCount}
              </span>
            </Link>

            {/* Track Bookings by Email/ID (No login required) */}
            <Link
              to="/account"
              className="hidden sm:flex size-9 items-center justify-center border border-[#226192]/25 bg-[#FFFFFF] text-[#226192] transition-colors hover:border-[#EF8557] hover:text-[#EF8557]"
              title="Track Your Bookings by Email or Booking ID"
              aria-label="Track My Bookings"
            >
              <Package className="size-4" />
            </Link>

            <Link
              to="/admin"
              className="hidden xl:inline-flex items-center gap-1 border border-[#226192]/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#226192] hover:bg-[#226192] hover:text-[#FFFFFF] transition-colors"
              title="Owner Stock & Booking Admin Console"
            >
              <span>Owner Admin</span>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none border border-[#226192]/30 text-[#226192] hover:bg-[#226192]/10 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="size-5 text-[#EF8557]" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* ═══ LIVE SEARCH MODAL POPUP ═══ */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#252525]/70 p-4 pt-20 backdrop-blur-sm">
          <div className="w-full max-w-2xl border border-[#226192] bg-[#EAE6DE] p-6 shadow-2xl animate-in fade-in-50 zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#226192]/20 pb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="size-5 text-[#226192]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, brands (e.g. Dinosaur, Boy Munna, Shorts, Polo)..."
                  className="w-full bg-transparent text-base font-semibold text-[#252525] placeholder-[#252525]/50 outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 text-[#252525]/70 hover:text-[#EF8557]"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Quick Keyword Suggestions */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#252525]/60 font-semibold">Popular:</span>
              {[
                "Dinosaur Tee",
                "Boy Munna",
                "Corduroy Set",
                "Cotton Night Suit",
                "Athletic Jogger",
                "Polo",
              ].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setSearchQuery(term)}
                  className="border border-[#226192]/20 bg-[#FFFFFF] px-2.5 py-1 text-[11px] font-medium text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Search Results */}
            <div className="mt-4 max-h-80 overflow-y-auto divide-y divide-[#226192]/15">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <Link
                    key={item.slug}
                    to="/products/$slug"
                    params={{ slug: item.slug }}
                    className="flex items-center gap-3 p-3 transition-colors hover:bg-[#FFFFFF]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-12 object-cover border border-[#226192]/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                          {item.brandName}
                        </span>
                        <span className="text-[10px] text-[#252525]/60">· {item.gender}</span>
                      </div>
                      <p className="font-['Space_Grotesk'] text-sm font-bold text-[#226192]">
                        {item.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-[#226192]">₹{item.price}</span>
                      <span className="block text-[10px] text-[#252525]/60 line-through">
                        ₹{item.mrp}
                      </span>
                    </div>
                  </Link>
                ))
              ) : searchQuery.trim() ? (
                <div className="py-8 text-center text-sm text-[#252525]/70">
                  No styles found for &ldquo;{searchQuery}&rdquo;. Try another kidswear search.
                </div>
              ) : null}
            </div>

            <div className="mt-4 border-t border-[#226192]/15 pt-3 flex justify-between items-center text-xs text-[#252525]/70">
              <span>Showing direct products across all 4 brands</span>
              <Link to="/products" className="font-bold text-[#226192] hover:text-[#EF8557]">
                Browse Full Catalog →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ═══ MOBILE DRAWER ═══ */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-[#226192] px-6 pb-10 pt-20 text-[#EAE6DE] transition-all duration-300 lg:hidden",
          open ? "visible opacity-100 translate-x-0" : "invisible opacity-0 translate-x-full",
        )}
      >
        <div className="overflow-y-auto">
          {/* 4 Brands Section in Mobile Drawer */}
          <div className="mb-4 rounded-none border border-[#EAE6DE]/20 bg-[#FFFFFF]/5 p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557] mb-2">
              Our 4 Kidswear Brands
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {brandsList.map((b) => (
                <Link
                  key={b.id}
                  to="/brands/$slug"
                  params={{ slug: b.slug }}
                  className="border border-[#EAE6DE]/20 p-2 font-bold text-[#FFFFFF] hover:bg-[#EF8557] hover:border-[#EF8557] transition-colors"
                >
                  <span className="block">{b.name}</span>
                  <span className="block text-[9px] font-normal text-[#EAE6DE]/70">{b.badge}</span>
                </Link>
              ))}
            </div>
          </div>

          <nav
            className="flex flex-col divide-y divide-[#EAE6DE]/15"
            aria-label="Mobile Navigation"
          >
            {[...primaryNav, ...secondaryNav].map(
              ({
                label,
                to,
                search,
              }: {
                label: string;
                to: string;
                search?: { filter?: string | undefined } | undefined;
              }) => (
                <Link
                  key={label}
                  to={to}
                  {...(search ? { search } : {})}
                  className="py-3 text-sm font-semibold tracking-wide text-[#EAE6DE]/90 transition-colors hover:text-[#EF8557]"
                  activeProps={{ className: "text-[#EF8557] font-bold" }}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-6 space-y-2 border-t border-[#EAE6DE]/20 pt-4">
          <Link
            to="/cart"
            className="flex h-11 w-full items-center justify-center gap-2 border border-[#EF8557] bg-[#EF8557] text-xs font-bold uppercase tracking-wider text-[#FFFFFF]"
          >
            <ClipboardList className="size-4" />
            <span>Go to Booking List ({cartCount})</span>
          </Link>
          <Link
            to="/account"
            className="flex h-11 w-full items-center justify-center gap-2 border border-[#EAE6DE]/30 bg-transparent text-xs font-bold uppercase tracking-wider text-[#EAE6DE]"
          >
            <span>Track Bookings (By Email / ID)</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-[#226192]/20 bg-[#226192] text-[#EAE6DE]">
      {/* Promotional & Stock Reservation Banner */}
      <div className="border-b border-[#FFFFFF]/15 bg-[#1B4E75] py-4 text-xs">
        <div className="page-shell flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BookmarkCheck className="size-5 text-[#EF8557]" />
            <span>
              <strong>Promotional Catalogue & Direct Stock Booking:</strong> Select sizes, colours &
              quantities with transparent MRP + GST breakdown — reserve stock directly via email
              without online payment!
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold text-[#EAE6DE]/80">
            <span>✦ Tirupur Direct Warehouse</span>
            <span>✦ Transparent MRP & GST</span>
            <span>✦ Identified by Email & Booking ID</span>
          </div>
        </div>
      </div>

      <div className="page-shell py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Parent Business & Brand Heritage */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-14 w-18">
                <img
                  src={images.muthuEmblem}
                  alt="Muthu International Emblem"
                  className="size-full object-contain brightness-0 invert opacity-90"
                  loading="lazy"
                />
              </span>
              <img
                src={images.muthuWordmark}
                alt="Muthu International"
                className="h-auto w-32 object-contain brightness-0 invert opacity-80"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#EAE6DE]/80">
              Over 25 years of specialized kidswear manufacturing experience in Tirupur, Tamil Nadu.
              Established in 2000 with 2 operational factories, an in-house design studio, and over
              100 dedicated team members.
            </p>
            <div className="mt-5 border-t border-[#FFFFFF]/15 pt-4 text-xs">
              <span className="block font-bold text-[#EF8557] uppercase tracking-wider">
                Corporate & Owner Stock Desk:
              </span>
              <p className="text-[#EAE6DE]/75 mt-1">
                Muthu International Private Limited
                <br />
                Garment Hub, Tirupur – 641 602, Tamil Nadu, India.
              </p>
              <p className="mt-2 text-[#EAE6DE]/90 font-semibold break-all">
                Email: {COMPANY_OWNER_EMAIL}
              </p>
              <p className="mt-1 text-[#EAE6DE]/75">Phone: +91 98401 23456</p>
            </div>
          </div>

          {/* 2. Our 4 Brands Portfolio */}
          <div>
            <p className="label-track mb-4 text-[#EF8557]">Our 4 Brands</p>
            <ul className="space-y-3 text-xs">
              {brandsList.map((b) => (
                <li key={b.id} className="border-b border-[#FFFFFF]/10 pb-2">
                  <Link
                    to="/brands/$slug"
                    params={{ slug: b.slug }}
                    className="font-bold text-[#FFFFFF] hover:text-[#EF8557] transition-colors flex items-center justify-between"
                  >
                    <span>{b.name}</span>
                    <span className="text-[10px] text-[#EF8557]">{b.badge}</span>
                  </Link>
                  <p className="text-[11px] text-[#EAE6DE]/70 mt-0.5">{b.positioning}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Customer Care & Booking Links */}
          <div>
            <p className="label-track mb-4 text-[#EF8557]">Catalogue & Bookings</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Browse Available Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Booking List & Stock Reservation
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Track My Bookings (By Email / ID)
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Wholesale & Bulk Enquiries
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Garment Manufacturing Story
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Child Safety & Quality Audits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#EAE6DE]/80 hover:text-[#FFFFFF]">
                  Contact Owner Desk
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#EF8557] hover:underline font-semibold">
                  Owner Stock & Booking Console
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter & Guarantee */}
          <div>
            <p className="label-track mb-4 text-[#EF8557]">Stay In The Loop</p>
            <p className="text-xs text-[#EAE6DE]/80">
              Subscribe for new collection drops, festive promotional codes, and Boy Munna adventure
              stories.
            </p>
            {subscribed ? (
              <div className="mt-4 border border-[#EF8557] bg-[#EF8557]/20 p-3 text-xs text-[#FFFFFF]">
                ✓ Thank you for subscribing! Promotional code: <strong>WELCOME10</strong>.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2">
                <Input
                  required
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-none border-[#FFFFFF]/30 bg-[#FFFFFF]/10 text-xs text-[#FFFFFF] placeholder-[#EAE6DE]/50"
                />
                <Button
                  type="submit"
                  className="rounded-none border border-[#EF8557] bg-[#EF8557] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]/90"
                >
                  Join Promotional Club
                </Button>
              </form>
            )}

            <div className="mt-6 border-t border-[#FFFFFF]/15 pt-4">
              <div className="flex items-center gap-2 text-xs text-[#EAE6DE]/80">
                <ShieldCheck className="size-4 text-[#EF8557]" />
                <span>Direct Stock Reservation · No Payment Gateway Needed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-14 border-t border-[#FFFFFF]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE6DE]/70">
          <p>
            © {new Date().getFullYear()} Muthu International Private Limited. All rights reserved.
            Kids Korner, X-Zone, H&D Club, and Boy Munna are official garment brands.
          </p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-[#FFFFFF]">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-[#FFFFFF]">
              Terms of Service
            </Link>
            <Link to="/about" className="hover:text-[#FFFFFF]">
              Shipping Rules
            </Link>
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
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.style.setProperty("--scroll-progress", "1");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.style.setProperty("--scroll-progress", "1");
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
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
  variant = "split",
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  variant?: string;
}) {
  return (
    <section className={cn("page-hero", `page-hero--${variant}`)}>
      <div className="page-shell page-hero__shell">
        <div className="page-hero__layout">
          <div className="page-hero__copy">
            <p className="label-track page-hero__eyebrow mb-4 flex items-center gap-2 text-[#226192]">
              <span className="inline-block h-px w-6 bg-current" />
              {eyebrow}
            </p>
            <h1 className="page-hero__title font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-[#226192] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="page-hero__text mt-5 max-w-xl text-base leading-relaxed text-[#252525]/85">
              {text}
            </p>
          </div>
          <div className="page-hero__media">
            <div className="page-hero__media-backdrop" aria-hidden="true" />
            <div className="page-hero__media-frame">
              <img
                src={image}
                width={1200}
                height={800}
                className="page-hero__image size-full object-cover"
                alt={title}
              />
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
    <Reveal className="mb-10 sm:mb-12">
      <p className="label-track mb-3 flex items-center gap-2.5 text-[#EF8557]">
        <span className="size-1.5 rounded-full bg-[#EF8557]" />
        {eyebrow}
      </p>
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <h2
          className={cn(
            "font-['Space_Grotesk'] text-3xl font-extrabold uppercase tracking-tight sm:text-5xl",
            light ? "text-[#FFFFFF]" : "text-[#226192]",
          )}
        >
          {title}
        </h2>
        {text && (
          <p
            className={cn(
              "max-w-xl text-sm leading-relaxed",
              light ? "text-[#EAE6DE]/80" : "text-[#252525]/80",
            )}
          >
            {text}
          </p>
        )}
      </div>
    </Reveal>
  );
}

// ═════════════════════════════════════════════════════════════════
// UPGRADED E-COMMERCE PRODUCT CARD
// ═════════════════════════════════════════════════════════════════
export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    setIsWishlisted(WishlistStore.has(product.slug));
  }, [product.slug]);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowHas = WishlistStore.toggle(product.slug);
    setIsWishlisted(nowHas);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const firstInStock =
      product.variants?.find((v) => StockStore.getVariantStock(v.id, v.stock) > 0) ||
      product.variants?.[0];
    if (firstInStock) {
      const liveStock = StockStore.getVariantStock(firstInStock.id, firstInStock.stock);
      CartStore.addItem({
        productId: product.slug,
        productSlug: product.slug,
        productName: product.name,
        brandId: product.brandId,
        brandName: product.brandName,
        variantId: firstInStock.id,
        sku: firstInStock.sku,
        size: firstInStock.size,
        colour: firstInStock.colour,
        colourHex: firstInStock.colourHex,
        image: firstInStock.image || product.image,
        price: firstInStock.price || product.price,
        mrp: firstInStock.mrp || product.mrp,
        quantity: 1,
        maxStock: liveStock,
      });

      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2000);
    }
  };

  const uniqueSizes = Array.from(new Set(product.variants?.map((v) => v.size) || [])).slice(0, 4);

  return (
    <article className="group relative flex flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] transition-all duration-300 hover:border-[#EF8557] hover:shadow-[0_8px_24px_rgba(34,97,146,0.12)]">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block overflow-hidden">
        {/* Media Frame */}
        <div className="relative aspect-[4/5] bg-[#EAE6DE]/60 overflow-hidden">
          <img
            src={product.image}
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={product.name}
          />

          {/* Brand Tag Pill */}
          <div className="absolute left-2.5 top-2.5 z-10 flex flex-col gap-1 items-start">
            <span className="border border-[#226192] bg-[#226192] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFFFFF] shadow-sm">
              {product.brandName}
            </span>
            {product.isNewArrival && (
              <span className="border border-[#EF8557] bg-[#EF8557] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFFFFF] shadow-sm">
                New Arrival
              </span>
            )}
          </div>

          {/* Discount Pill */}
          {product.discountPercent > 0 && (
            <div className="absolute right-2.5 top-2.5 z-10 border border-[#EF8557] bg-[#FFFFFF] px-2 py-0.5 text-[10px] font-extrabold text-[#EF8557] shadow-sm">
              {product.discountPercent}% OFF
            </div>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleToggleWishlist}
            className={`absolute right-2.5 bottom-2.5 z-10 flex size-8 items-center justify-center rounded-full border transition-all ${
              isWishlisted
                ? "border-[#EF8557] bg-[#EF8557] text-[#FFFFFF]"
                : "border-[#226192]/30 bg-[#FFFFFF]/90 text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557]"
            }`}
            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            aria-label="Wishlist"
          >
            <Heart className={cn("size-4", isWishlisted && "fill-current")} />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-[#252525]/70">
              <span className="font-semibold text-[#EF8557]">{product.gender}</span>
              <div className="flex items-center gap-1 text-[#226192] font-semibold">
                <Star className="size-3 fill-[#EF8557] text-[#EF8557]" />
                <span>{product.rating}</span>
                <span className="text-[#252525]/50">({product.reviewCount})</span>
              </div>
            </div>

            <h3 className="mt-1 font-['Space_Grotesk'] text-sm sm:text-base font-bold uppercase tracking-tight text-[#226192] transition-colors group-hover:text-[#EF8557] line-clamp-1">
              {product.name}
            </h3>

            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#252525]/75">
              {product.description}
            </p>

            {/* Size Chips */}
            {uniqueSizes.length > 0 && (
              <div className="mt-2.5 flex flex-wrap items-center gap-1">
                <span className="text-[10px] text-[#252525]/60 mr-1">Sizes:</span>
                {uniqueSizes.map((size) => (
                  <span
                    key={size}
                    className="border border-[#226192]/20 bg-[#EAE6DE]/50 px-1.5 py-0.5 text-[9px] font-semibold text-[#226192]"
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Cart Action */}
          <div className="mt-4 border-t border-[#226192]/15 pt-3 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-extrabold text-[#226192]">₹{product.price}</span>
                {product.mrp > product.price && (
                  <span className="text-xs text-[#252525]/50 line-through">₹{product.mrp}</span>
                )}
              </div>
              <span className="block text-[9px] text-[#252525]/60">Inclusive of GST</span>
            </div>

            <div className="flex items-center gap-1.5">
              {onQuickView && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onQuickView(product);
                  }}
                  className="flex size-8 items-center justify-center border border-[#226192]/30 text-[#226192] hover:border-[#EF8557] hover:text-[#EF8557] transition-colors"
                  title="Quick View"
                >
                  <Eye className="size-3.5" />
                </button>
              )}

              <button
                type="button"
                onClick={handleQuickAdd}
                className="flex h-8 items-center gap-1 border border-[#226192] bg-[#226192] px-2.5 text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF] transition-all hover:border-[#EF8557] hover:bg-[#EF8557]"
              >
                {addedToast ? (
                  <>
                    <Check className="size-3 text-[#FFFFFF]" />
                    <span>Reserved</span>
                  </>
                ) : (
                  <>
                    <BookmarkCheck className="size-3" />
                    <span>Reserve</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// ═════════════════════════════════════════════════════════════════
// BRAND CARD FOR HOMEPAGE & BRAND DIRECTORY
// ═════════════════════════════════════════════════════════════════
export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="group flex flex-col justify-between border border-[#226192]/20 bg-[#FFFFFF] transition-all duration-300 hover:border-[#EF8557] hover:shadow-[0_12px_32px_rgba(34,97,146,0.12)]">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DE]">
          <img
            src={brand.bannerImage}
            alt={brand.name}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 border border-[#EF8557] bg-[#EF8557] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#FFFFFF]">
            {brand.badge}
          </div>
        </div>

        <div className="p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF8557]">
            {brand.role}
          </p>
          <h3 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192] group-hover:text-[#EF8557] transition-colors">
            {brand.name}
          </h3>
          <p className="mt-1 font-serif italic text-xs text-[#226192]">
            &ldquo;{brand.tagline}&rdquo;
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">{brand.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {brand.featuredCategories.map((cat) => (
              <span
                key={cat}
                className="border border-[#226192]/15 bg-[#EAE6DE]/60 px-2 py-0.5 text-[10px] font-medium text-[#226192]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#226192]/15 p-6 pt-4">
        <Link
          to="/brands/$slug"
          params={{ slug: brand.slug }}
          className="group/btn inline-flex w-full items-center justify-between border border-[#226192] bg-[#226192] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] transition-all hover:border-[#EF8557] hover:bg-[#EF8557]"
        >
          <span>Explore {brand.name}</span>
          <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

// ═════════════════════════════════════════════════════════════════
// SIZE GUIDE MODAL
// ═════════════════════════════════════════════════════════════════
export function SizeGuideModal({
  category = "tshirts",
  isOpen,
  onClose,
}: {
  category?: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [unit, setUnit] = useState<"inches" | "cm">("inches");

  if (!isOpen) return null;

  const chartData = sizeCharts[category] ?? sizeCharts["tshirts"] ?? [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#252525]/75 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl border border-[#226192] bg-[#EAE6DE] p-6 shadow-2xl animate-in fade-in-50 zoom-in-95">
        <div className="flex items-center justify-between border-b border-[#226192]/20 pb-4">
          <div className="flex items-center gap-2">
            <Ruler className="size-5 text-[#EF8557]" />
            <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
              Garment Size Guide & Measurements
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#252525]/70 hover:text-[#EF8557]"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-[#252525]/75">
            Measured flat across actual children&apos;s garment specs. Pre-shrunk cotton (&lt; 5%
            shrinkage).
          </p>
          <div className="flex border border-[#226192]/30">
            <button
              type="button"
              onClick={() => setUnit("inches")}
              className={`px-3 py-1 text-xs font-bold ${
                unit === "inches" ? "bg-[#226192] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#226192]"
              }`}
            >
              Inches
            </button>
            <button
              type="button"
              onClick={() => setUnit("cm")}
              className={`px-3 py-1 text-xs font-bold ${
                unit === "cm" ? "bg-[#226192] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#226192]"
              }`}
            >
              Centimeters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto border border-[#226192]/20 bg-[#FFFFFF]">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#226192]/20 bg-[#EAE6DE]/60 text-[10px] font-bold uppercase tracking-wider text-[#226192]">
              <tr>
                <th className="p-2.5">Size</th>
                <th className="p-2.5">Age Group</th>
                <th className="p-2.5">Chest</th>
                <th className="p-2.5">Waist</th>
                <th className="p-2.5">Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#226192]/10">
              {chartData.map((row) => (
                <tr key={row.size} className="hover:bg-[#EAE6DE]/30">
                  <td className="p-2.5 font-bold text-[#226192]">{row.size}</td>
                  <td className="p-2.5 text-[#252525]/80">{row.ageGroup}</td>
                  <td className="p-2.5 font-semibold text-[#252525]">
                    {unit === "inches" ? row.chestInches : row.chestCm}
                  </td>
                  <td className="p-2.5 font-semibold text-[#252525]">
                    {unit === "inches" ? row.waistInches : row.waistCm}
                  </td>
                  <td className="p-2.5 font-semibold text-[#252525]">
                    {unit === "inches" ? row.lengthInches : row.lengthCm}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 border-t border-[#226192]/15 pt-3 flex justify-between items-center text-xs text-[#252525]/70">
          <span>Tip: For rapid growing children, we recommend sizing one step up.</span>
          <Button
            size="sm"
            onClick={onClose}
            className="rounded-none bg-[#226192] font-bold text-[#FFFFFF] hover:bg-[#EF8557]"
          >
            Got It
          </Button>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════
// QUICK VIEW MODAL
// ═════════════════════════════════════════════════════════════════
export function QuickViewModal({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen || !product) return null;
  return <QuickViewModalInner product={product} onClose={onClose} />;
}

function QuickViewModalInner({ product, onClose }: { product: Product; onClose: () => void }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants?.[0] || {
      id: "v-default",
      sku: product.sku,
      size: "4–5Y",
      colour: "Default",
      colourHex: "#226192",
      stock: 10,
      price: product.price,
      mrp: product.mrp,
    },
  );
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const uniqueColours = Array.from(new Set(product.variants?.map((v) => v.colour) || []));
  const uniqueSizes = Array.from(new Set(product.variants?.map((v) => v.size) || []));
  const liveStock = StockStore.getVariantStock(selectedVariant.id, selectedVariant.stock);
  const gst = calculateGstBreakdown(selectedVariant.price, selectedVariant.mrp, qty);

  const handleAddToCart = () => {
    CartStore.addItem({
      productId: product.slug,
      productSlug: product.slug,
      productName: product.name,
      brandId: product.brandId,
      brandName: product.brandName,
      variantId: selectedVariant.id,
      sku: selectedVariant.sku,
      size: selectedVariant.size,
      colour: selectedVariant.colour,
      colourHex: selectedVariant.colourHex,
      image: selectedVariant.image || product.image,
      price: selectedVariant.price,
      mrp: selectedVariant.mrp,
      quantity: qty,
      maxStock: liveStock,
    });

    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#252525]/75 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl border border-[#226192] bg-[#EAE6DE] p-6 shadow-2xl animate-in fade-in-50 zoom-in-95">
        <div className="flex items-center justify-between border-b border-[#226192]/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
              {product.brandName}
            </span>
            <span className="text-xs text-[#252525]/60">· SKU: {selectedVariant.sku}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#252525]/70 hover:text-[#EF8557]"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {/* Left Image */}
          <div className="border border-[#226192]/20 bg-[#FFFFFF] p-2">
            <img
              src={selectedVariant.image || product.image}
              alt={product.name}
              className="aspect-[4/5] size-full object-cover"
            />
          </div>

          {/* Right Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#226192]">
                {product.name}
              </h3>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-[#226192]">
                  ₹{selectedVariant.price}
                </span>
                {selectedVariant.mrp > selectedVariant.price && (
                  <span className="text-sm text-[#252525]/50 line-through">
                    ₹{selectedVariant.mrp}
                  </span>
                )}
                <span className="text-xs font-bold text-[#EF8557]">
                  {Math.round(
                    ((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100,
                  )}
                  % OFF
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[#252525]/80">
                {product.description}
              </p>

              {/* Colour Picker */}
              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#226192]">
                  Colour: <strong className="text-[#EF8557]">{selectedVariant.colour}</strong>
                </span>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {uniqueColours.map((col) => {
                    const match = product.variants?.find((v) => v.colour === col);
                    return (
                      <button
                        key={col}
                        type="button"
                        onClick={() => match && setSelectedVariant(match)}
                        className={`border px-2.5 py-1 text-xs font-semibold ${
                          selectedVariant.colour === col
                            ? "border-[#EF8557] bg-[#FFFFFF] text-[#EF8557] ring-1 ring-[#EF8557]"
                            : "border-[#226192]/20 bg-[#FFFFFF]/70 text-[#252525] hover:border-[#226192]"
                        }`}
                      >
                        {col}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Picker */}
              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#226192]">
                  Size: <strong className="text-[#EF8557]">{selectedVariant.size}</strong>
                </span>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {uniqueSizes.map((s) => {
                    const match =
                      product.variants?.find(
                        (v) => v.size === s && v.colour === selectedVariant.colour,
                      ) || product.variants?.find((v) => v.size === s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => match && setSelectedVariant(match)}
                        className={`border px-2.5 py-1 text-xs font-semibold ${
                          selectedVariant.size === s
                            ? "border-[#226192] bg-[#226192] text-[#FFFFFF]"
                            : "border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557]"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Stock status */}
              <div className="mt-3 text-xs">
                {liveStock > 0 ? (
                  <span className="font-semibold text-emerald-700">
                    ✓ Available in Company Stock ({liveStock} units ready)
                  </span>
                ) : (
                  <span className="font-semibold text-rose-600">Out of Stock for this variant</span>
                )}
              </div>

              {/* Price & GST Tax Breakdown */}
              <div className="mt-3 border border-[#226192]/20 bg-[#FFFFFF] p-2.5 text-[11px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#252525]/70">
                    MRP ({qty}x ₹{gst.unitMrp}):
                  </span>
                  <span className="line-through text-[#252525]/60">₹{gst.totalMrp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#252525]/70">Base Price (Excl. GST):</span>
                  <span>₹{gst.taxableValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#252525]/70">GST ({gst.gstRate}% Tax):</span>
                  <span>₹{gst.gstAmount}</span>
                </div>
                <div className="flex justify-between font-bold text-[#226192] border-t border-[#226192]/10 pt-1">
                  <span>Final Price (Incl. GST):</span>
                  <span>₹{gst.totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 border-t border-[#226192]/15 pt-4 flex items-center gap-3">
              <div className="flex items-center border border-[#226192]/30 bg-[#FFFFFF]">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-2.5 py-1 text-sm font-bold text-[#226192]"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(Math.min(liveStock, qty + 1))}
                  className="px-2.5 py-1 text-sm font-bold text-[#226192]"
                >
                  +
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={liveStock === 0}
                className="flex-1 rounded-none bg-[#226192] font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557]"
              >
                {added ? "✓ Added to Booking List!" : "Add to Booking List"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="group grid border border-[#226192]/20 bg-[#FFFFFF] transition-all duration-300 hover:border-[#EF8557] md:grid-cols-12 md:items-center">
      <div className="p-8 md:col-span-5">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8557]">
          {collection.season}
        </span>
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
      <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full border border-[#FFFFFF]/10" />
      <div className="page-shell relative">
        <Reveal>
          <div className="flex items-center gap-2 text-[#EF8557]">
            <span className="size-2 rounded-full bg-[#EF8557]" />
            <p className="label-track text-[#EF8557]">Join Our Retail Network</p>
          </div>
          <h2 className="display-title mt-4 max-w-4xl text-4xl tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
            Stock <span className="text-outline-white">Kids Korner</span> In Your Stores.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#EAE6DE]/85 sm:text-lg">
            Whether you are a parent ordering everyday wardrobe staples or a retailer seeking
            wholesale distribution across our 4 brands, our Tirupur factories deliver dependable
            quality.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/wholesale"
              className="group inline-flex items-center gap-3 border border-[#EF8557] bg-[#EF8557] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] shadow-sm transition-all hover:bg-[#EF8557]/90"
            >
              <span>Wholesale Enquiries</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-[#FFFFFF]/25 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#FFFFFF] group-hover:text-[#EF8557]">
                <ArrowRight className="size-3" />
              </span>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-[#EAE6DE]/40 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#EAE6DE] transition-colors hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF]"
            >
              Shop Retail Collections
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InquiryForm({
  kind,
  initialProduct,
}: {
  kind: "contact" | "quote";
  initialProduct?: string;
}) {
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
          Your enquiry has been received. Our team from Muthu International will get in touch within
          24 hours.
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
        <Input
          required
          className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]"
          placeholder="e.g. Eleanor Vance"
        />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Company / Brand Name *
        <Input
          required
          className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]"
          placeholder="e.g. Bloom & Co. Kidswear"
        />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Business Email *
        <Input
          required
          type="email"
          className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]"
          placeholder="name@company.com"
        />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Phone / WhatsApp *
        <Input
          required
          type="tel"
          className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]"
          placeholder="+91 98401 23456"
        />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        City / State *
        <Input
          required
          className="h-12 rounded-none border-[#226192]/25 bg-[#FFFFFF] px-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]"
          placeholder="Your city and state"
        />
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192]">
        Interested Brand *
        <select
          defaultValue="Kids Korner"
          className="h-12 border border-[#226192]/25 bg-[#FFFFFF] px-4 text-xs font-semibold text-[#226192] focus:border-[#226192] focus:outline-none"
        >
          <option value="Kids Korner">Kids Korner (Flagship Kidswear)</option>
          <option value="X-Zone">X-Zone (Athleisure & Streetwear)</option>
          <option value="H&D Club">H&D Club (Boutique Tailoring)</option>
          <option value="Boy Munna">Boy Munna (Original Character Brand)</option>
          <option value="Private Label OEM">OEM / Private Label Production</option>
        </select>
      </label>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#226192] sm:col-span-2">
        Detailed Brief / Specifications *
        <Textarea
          required
          rows={4}
          className="rounded-none border-[#226192]/25 bg-[#FFFFFF] p-4 text-[#252525] focus:border-[#226192] focus:ring-1 focus:ring-[#226192]"
          placeholder="Please describe your requirements, volume targets, delivery locations, or specific garment questions..."
        />
      </label>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          className="h-12 w-full rounded-none border border-[#226192] bg-[#226192] text-xs font-bold uppercase tracking-[0.18em] text-[#FFFFFF] shadow-sm transition-colors hover:border-[#EF8557] hover:bg-[#EF8557]"
        >
          Submit Enquiry
        </Button>
      </div>
    </form>
  );
}

export function ProcessList({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, idx) => (
        <li key={idx} className="border border-[#226192]/20 bg-[#FFFFFF] p-5">
          <span className="text-xs font-bold text-[#EF8557]">STEP 0{idx + 1}</span>
          <p className="mt-2 text-xs font-semibold text-[#226192]">{it}</p>
        </li>
      ))}
    </ol>
  );
}

export function ContentBand({
  title,
  text,
  ctaText,
  ctaTo,
}: {
  title: string;
  text: string;
  ctaText?: string;
  ctaTo?: string;
}) {
  return (
    <section className="border-y border-[#226192]/20 bg-[#EAE6DE] py-14">
      <div className="page-shell flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#226192]">
            {title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#252525]/80">{text}</p>
        </div>
        {ctaText && ctaTo && (
          <Link
            to={ctaTo}
            className="shrink-0 border border-[#226192] bg-[#226192] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] hover:bg-[#EF8557] hover:border-[#EF8557] transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}

export function ManufacturingStorySection() {
  return (
    <section className="bg-[#EAE6DE] py-20 sm:py-28 border-t border-[#226192]/20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Genuine Manufacturing Heritage"
          title="From Yarn to Wardrobe Since 2000"
          text="Muthu International's two operational factories in Tirupur power all four brands with export-grade fabric knitting, bio-polishing, and precision cutting."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {whyMuthuPoints.slice(0, 3).map((pt) => (
            <div key={pt.number} className="border border-[#226192]/20 bg-[#FFFFFF] p-6">
              <span className="font-mono text-xs font-bold text-[#EF8557]">{pt.number}</span>
              <h4 className="mt-2 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                {pt.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#252525]/80">{pt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryWithLightbox({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(item)}
            className="group cursor-pointer border border-[#226192]/20 bg-[#FFFFFF] overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#EAE6DE]">
              <img
                src={item.image}
                alt={item.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                {item.category}
              </span>
              <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#226192]">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-[#252525]/75">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#252525]/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-2xl border border-[#226192] bg-[#EAE6DE] p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#EF8557]">{selected.category}</span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#226192]">
                  {selected.title}
                </h3>
              </div>
              <Button size="sm" onClick={() => setSelected(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
