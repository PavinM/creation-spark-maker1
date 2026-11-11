// Multi-Brand Kidswear Promotional & Stock Reservation State
// Brands: Kids Korner (Flagship), X-Zone, H&D Club, Boy Munna
// Main Business: Muthu International Private Limited (Est. 2000, Tirupur)

export const COMPANY_OWNER_EMAIL = "MUTHUINTERNATIONALPVTLTD@GMAIL.COM";

export type BrandId = "kids-korner" | "x-zone" | "hd-club" | "boy-munna";

export interface Brand {
  id: BrandId;
  slug: string;
  name: string;
  tagline: string;
  role: string;
  positioning: string;
  description: string;
  story: string;
  accentColor: string;
  bannerImage: string;
  badge: string;
  featuredCategories: string[];
}

export interface ProductVariant {
  id: string;
  sku: string;
  size: string;
  colour: string;
  colourHex: string;
  stock: number;
  price: number;
  mrp: number;
  image?: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  author: string;
  city: string;
  rating: number; // 1 to 5
  title: string;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

export interface SizeChartMeasurement {
  size: string;
  ageGroup: string;
  chestInches: string;
  chestCm: string;
  waistInches: string;
  waistCm: string;
  lengthInches: string;
  lengthCm: string;
  shoulderInches?: string;
  shoulderCm?: string;
}

export interface GstTaxBreakdown {
  quantity: number;
  unitMrp: number;
  totalMrp: number;
  unitPrice: number;
  totalPrice: number;
  discountAmount: number;
  discountPercent: number;
  gstRate: number;
  taxableValue: number;
  gstAmount: number;
  cgstAmount: number;
  sgstAmount: number;
}

export function calculateGstBreakdown(
  unitPrice: number,
  unitMrp: number,
  quantity: number,
): GstTaxBreakdown {
  const safeQty = Math.max(1, quantity);
  const gstRate = unitPrice <= 1000 ? 5 : 12; // Indian Apparel GST: 5% up to ₹1000, 12% above ₹1000
  const totalMrp = Number((unitMrp * safeQty).toFixed(2));
  const totalPrice = Number((unitPrice * safeQty).toFixed(2));
  const discountAmount = Math.max(0, Number((totalMrp - totalPrice).toFixed(2)));
  const discountPercent = totalMrp > 0 ? Math.round((discountAmount / totalMrp) * 100) : 0;

  const taxableValue = Number((totalPrice / (1 + gstRate / 100)).toFixed(2));
  const gstAmount = Number((totalPrice - taxableValue).toFixed(2));
  const cgstAmount = Number((gstAmount / 2).toFixed(2));
  const sgstAmount = Number((gstAmount - cgstAmount).toFixed(2));

  return {
    quantity: safeQty,
    unitMrp,
    totalMrp,
    unitPrice,
    totalPrice,
    discountAmount,
    discountPercent,
    gstRate,
    taxableValue,
    gstAmount,
    cgstAmount,
    sgstAmount,
  };
}

export interface CartItem {
  id: string; // unique item key: `${productId}-${variantId}`
  productId: string;
  productSlug: string;
  productName: string;
  brandId: BrandId;
  brandName: string;
  variantId: string;
  sku: string;
  size: string;
  colour: string;
  colourHex: string;
  image: string;
  price: number;
  mrp: number;
  quantity: number;
  maxStock: number;
}

export type OrderStatus =
  | "Booking Placed"
  | "Stock Reserved"
  | "Confirmed"
  | "Processing"
  | "Packed"
  | "Shipped"
  | "Out for Delivery"
  | "Delivered"
  | "Cancelled"
  | "Return Requested";

export interface OrderItem {
  productId: string;
  productSlug: string;
  productName: string;
  brandName: string;
  sku: string;
  size: string;
  colour: string;
  image: string;
  price: number;
  mrp: number;
  quantity: number;
  gstRate?: number;
  taxableValue?: number;
  gstAmount?: number;
}

export interface CustomerAddress {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  addressType: "Home" | "Work" | "Other";
  isDefault?: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  totalMrp?: number;
  subtotal: number;
  discount: number;
  couponCode?: string | undefined;
  shippingFee: number;
  shippingZone: string;
  taxableValue?: number | undefined;
  tax: number;
  total: number;
  shippingAddress: CustomerAddress;
  paymentMethod: string;
  paymentStatus: string;
  emailDispatchedToOwner?: boolean | undefined;
  trackingNumber?: string | undefined;
  courierName?: string | undefined;
  notes?: string | undefined;
}

export interface ShippingZone {
  id: string;
  name: string;
  fee: number;
  estimatedDays: string;
  description: string;
}

export interface ShippingCalculationResult {
  zoneId: string;
  zoneName: string;
  baseFee: number;
  discountedFee: number;
  isFreeShipping: boolean;
  freeShippingThreshold: number;
  estimatedDays: string;
  pinCode: string;
  city: string;
  state: string;
}

export interface Coupon {
  code: string;
  description: string;
  discountType: "percentage" | "fixed" | "freeship";
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  expiresAt: string;
}

export interface WholesaleEnquiry {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  estimatedQuantity: string;
  interestedBrand: string;
  productCategory: string;
  message: string;
  status: "New" | "Contacted" | "Sample Requested" | "Order Finalized";
  createdAt: string;
}

// ═════════════════════════════════════════════════════════════════
// 1. BRAND PORTFOLIO CONFIGURATION
// ═════════════════════════════════════════════════════════════════

export const brandsList: Brand[] = [
  {
    id: "kids-korner",
    slug: "kids-korner",
    name: "Kids Korner",
    tagline: "Little Steps. Big Dreams.",
    role: "Flagship & Primary Brand",
    positioning: "Trendy everyday clothing, fast-moving fashion, soft cotton hosiery essentials.",
    description:
      "Kids Korner is our flagship kidswear brand, offering fashionable, ultra-comfortable daily clothing crafted from bio-polished combed cotton. Built for energetic play and peaceful sleep.",
    story:
      "Born from over 25 years of specialized kidswear manufacturing experience at Muthu International, Kids Korner brings cheerful colors, non-toxic water-based prints, and skin-safe cotton to children across India. Every garment is designed in-house and manufactured to high child-safety standards.",
    accentColor: "#226192",
    bannerImage: "/assets/bloom-hero.jpg",
    badge: "Flagship Brand",
    featuredCategories: ["Everyday T-Shirts", "Cotton Shorts", "Night Suits", "Casual Paijamas"],
  },
  {
    id: "x-zone",
    slug: "x-zone",
    name: "X-Zone",
    tagline: "Unstoppable Energy. Modern Motion.",
    role: "Independent Youth & Athleisure Brand",
    positioning:
      "Streetwear-inspired kidswear, high-motion activewear, athletic joggers, and structured polos.",
    description:
      "X-Zone is designed for kids who never sit still. High-motion French terry, durable knee reinforcements, and contemporary sports-luxe aesthetics.",
    story:
      "X-Zone brings athletic engineering to children’s daily wear. Drawing upon modern machinery and precision cutting from our factories, X-Zone balances heavyweight fleece, breathable piqués, and contemporary streetwear graphics.",
    accentColor: "#EF8557",
    bannerImage: "/assets/kidswear-editorial.jpg",
    badge: "Athleisure & Street",
    featuredCategories: ["Athletic Joggers", "Sport Polos", "Graphic Hoodies", "Urban Co-Ords"],
  },
  {
    id: "hd-club",
    slug: "hd-club",
    name: "H&D Club",
    tagline: "Refined Tailoring. Artisanal Charm.",
    role: "Independent Boutique & Coordinates Brand",
    positioning:
      "Artisanal corduroy sets, botanical floral dresses, Cuban-collar sets, and subtle luxury.",
    description:
      "H&D Club presents tailored elegance for special occasions and boutique dressing. Crafted with French seams, fine-wale baby corduroy, and multi-needle embroidery.",
    story:
      "H&D Club represents the pinnacle of our atelier's craftsmanship. Each piece features bespoke botanical artwork, antique child-safe fastenings, and intricate embroidery developed by our dedicated in-house design studio.",
    accentColor: "#252525",
    bannerImage: "/assets/printed-set.jpg",
    badge: "Boutique Collection",
    featuredCategories: [
      "Corduroy Sets",
      "Botanical Dresses",
      "Textured Overshirts",
      "Resort Sets",
    ],
  },
  {
    id: "boy-munna",
    slug: "boy-munna",
    name: "Boy Munna",
    tagline: "Adventures Begin with Munna!",
    role: "Original Registered Character-Led Clothing Brand",
    positioning:
      "Original character storytelling, playful themed T-shirts, coordinates, and cheerful illustrations.",
    description:
      "Boy Munna is our proprietary character brand. Featuring original, officially registered artwork of Munna — the curious, adventurous boy who loves exploring nature, space, and sports.",
    story:
      "Munna is an original character created by our business and legally registered. Through Boy Munna garments, we bring storytelling into children’s everyday wardrobes. Every graphic, illustration, and comic badge celebrates curiosity, friendship, and joyful childhood imagination.",
    accentColor: "#226192",
    bannerImage: "/assets/kidswear-hero.jpg",
    badge: "Original Character Brand",
    featuredCategories: [
      "Character Graphic Tees",
      "Munna Explorer Sets",
      "Comic Pajama Sets",
      "Adventure Shorts",
    ],
  },
];

export const getBrandById = (id: string): Brand | undefined => {
  return brandsList.find((b) => b.id === id || b.slug === id);
};

// ═════════════════════════════════════════════════════════════════
// 2. GEO-WISE SHIPPING ENGINE CONFIGURATION
// ═════════════════════════════════════════════════════════════════

export const defaultShippingZones: Record<string, ShippingZone> = {
  local: {
    id: "local",
    name: "Local Delivery (Tirupur / Coimbatore Region)",
    fee: 39,
    estimatedDays: "1–2 Business Days",
    description: "Fast local courier dispatch directly from our central manufacturing warehouse.",
  },
  "tamil-nadu": {
    id: "tamil-nadu",
    name: "Within Tamil Nadu",
    fee: 49,
    estimatedDays: "2–3 Business Days",
    description: "Intra-state direct line haul across Tamil Nadu districts.",
  },
  "south-india": {
    id: "south-india",
    name: "South India (Kerala, Karnataka, AP, Telangana, Puducherry)",
    fee: 59,
    estimatedDays: "3–4 Business Days",
    description: "Expedited surface transport across southern states.",
  },
  metro: {
    id: "metro",
    name: "Major Metro Destinations (Delhi NCR, Mumbai, Kolkata, Bengaluru, Hyderabad, Chennai)",
    fee: 69,
    estimatedDays: "3–5 Business Days",
    description: "Priority air & express surface connection to primary metropolitan hubs.",
  },
  "rest-of-india": {
    id: "rest-of-india",
    name: "Rest of India",
    fee: 79,
    estimatedDays: "4–6 Business Days",
    description: "Comprehensive nationwide express surface delivery.",
  },
  remote: {
    id: "remote",
    name: "Remote & Special Destinations (North-East, J&K, Island Territories)",
    fee: 99,
    estimatedDays: "6–9 Business Days",
    description: "Secure dedicated transport for regional and hilly destinations.",
  },
};

export const FREE_SHIPPING_THRESHOLD = 999; // In Rupees

export function calculateGeoShipping(
  pinCode: string,
  cartSubtotal: number,
): ShippingCalculationResult {
  const cleanPin = pinCode.replace(/\D/g, "").slice(0, 6);

  let zoneKey = "rest-of-india";
  let city = "India";
  let state = "India";

  if (cleanPin.length >= 2) {
    const prefix2 = cleanPin.slice(0, 2);
    const prefix3 = cleanPin.slice(0, 3);

    if (prefix3 === "641" || prefix3 === "638" || prefix3 === "642") {
      zoneKey = "local";
      city = "Tirupur / Coimbatore";
      state = "Tamil Nadu";
    } else if (["60", "61", "62", "63", "64"].includes(prefix2)) {
      if (prefix2 === "60" && ["600", "601", "602"].includes(prefix3)) {
        zoneKey = "metro";
        city = "Chennai";
        state = "Tamil Nadu";
      } else {
        zoneKey = "tamil-nadu";
        city = "Tamil Nadu Region";
        state = "Tamil Nadu";
      }
    } else if (prefix2 === "11") {
      zoneKey = "metro";
      city = "New Delhi NCR";
      state = "Delhi";
    } else if (prefix2 === "40") {
      zoneKey = "metro";
      city = "Mumbai";
      state = "Maharashtra";
    } else if (prefix2 === "70") {
      zoneKey = "metro";
      city = "Kolkata";
      state = "West Bengal";
    } else if (prefix3 === "560" || prefix3 === "561" || prefix3 === "562") {
      zoneKey = "metro";
      city = "Bengaluru";
      state = "Karnataka";
    } else if (prefix3 === "500" || prefix3 === "501") {
      zoneKey = "metro";
      city = "Hyderabad";
      state = "Telangana";
    } else if (
      (parseInt(prefix2) >= 50 && parseInt(prefix2) <= 59) ||
      (parseInt(prefix2) >= 67 && parseInt(prefix2) <= 69)
    ) {
      zoneKey = "south-india";
      city = "South India Hub";
      state = "South Region";
    } else if (prefix2 === "19" || prefix2 === "79" || prefix3 === "744") {
      zoneKey = "remote";
      city = "Special Delivery Sector";
      state = "Regional";
    }
  }

  const zone = defaultShippingZones[zoneKey] ??
    defaultShippingZones["rest-of-india"] ?? {
      id: "rest-of-india",
      name: "Pan-India Delivery",
      fee: 79,
      estimatedDays: "4-6 Days",
      description: "Standard surface & air express",
    };
  const isFree = cartSubtotal >= FREE_SHIPPING_THRESHOLD;
  const discountedFee = isFree ? 0 : zone.fee;

  return {
    zoneId: zone.id,
    zoneName: zone.name,
    baseFee: zone.fee,
    discountedFee,
    isFreeShipping: isFree,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    estimatedDays: zone.estimatedDays,
    pinCode: cleanPin,
    city,
    state,
  };
}

// ═════════════════════════════════════════════════════════════════
// 3. SIZE CHART SPECIFICATIONS
// ═════════════════════════════════════════════════════════════════

export const sizeCharts: Record<string, SizeChartMeasurement[]> = {
  tshirts: [
    {
      size: "12–18M",
      ageGroup: "1–1.5 Years",
      chestInches: "20 in",
      chestCm: "51 cm",
      waistInches: "19 in",
      waistCm: "48 cm",
      lengthInches: "14 in",
      lengthCm: "36 cm",
      shoulderInches: "8.5 in",
      shoulderCm: "22 cm",
    },
    {
      size: "2–3Y",
      ageGroup: "2–3 Years",
      chestInches: "22 in",
      chestCm: "56 cm",
      waistInches: "20 in",
      waistCm: "51 cm",
      lengthInches: "16 in",
      lengthCm: "41 cm",
      shoulderInches: "9.5 in",
      shoulderCm: "24 cm",
    },
    {
      size: "4–5Y",
      ageGroup: "4–5 Years",
      chestInches: "24 in",
      chestCm: "61 cm",
      waistInches: "22 in",
      waistCm: "56 cm",
      lengthInches: "18 in",
      lengthCm: "46 cm",
      shoulderInches: "10.5 in",
      shoulderCm: "27 cm",
    },
    {
      size: "6–7Y",
      ageGroup: "6–7 Years",
      chestInches: "26 in",
      chestCm: "66 cm",
      waistInches: "23 in",
      waistCm: "58 cm",
      lengthInches: "20 in",
      lengthCm: "51 cm",
      shoulderInches: "11.5 in",
      shoulderCm: "29 cm",
    },
    {
      size: "8–9Y",
      ageGroup: "8–9 Years",
      chestInches: "28 in",
      chestCm: "71 cm",
      waistInches: "24 in",
      waistCm: "61 cm",
      lengthInches: "22 in",
      lengthCm: "56 cm",
      shoulderInches: "12.5 in",
      shoulderCm: "32 cm",
    },
    {
      size: "10–12Y",
      ageGroup: "10–12 Years",
      chestInches: "30 in",
      chestCm: "76 cm",
      waistInches: "26 in",
      waistCm: "66 cm",
      lengthInches: "24 in",
      lengthCm: "61 cm",
      shoulderInches: "13.5 in",
      shoulderCm: "34 cm",
    },
    {
      size: "13–14Y",
      ageGroup: "13–14 Years",
      chestInches: "32 in",
      chestCm: "81 cm",
      waistInches: "28 in",
      waistCm: "71 cm",
      lengthInches: "26 in",
      lengthCm: "66 cm",
      shoulderInches: "14.5 in",
      shoulderCm: "37 cm",
    },
  ],
  coords: [
    {
      size: "18M–2Y",
      ageGroup: "1.5–2 Years",
      chestInches: "21 in",
      chestCm: "53 cm",
      waistInches: "19 in",
      waistCm: "48 cm",
      lengthInches: "15 in",
      lengthCm: "38 cm",
    },
    {
      size: "2–4Y",
      ageGroup: "2–4 Years",
      chestInches: "23 in",
      chestCm: "58 cm",
      waistInches: "21 in",
      waistCm: "53 cm",
      lengthInches: "17 in",
      lengthCm: "43 cm",
    },
    {
      size: "4–6Y",
      ageGroup: "4–6 Years",
      chestInches: "25 in",
      chestCm: "64 cm",
      waistInches: "22 in",
      waistCm: "56 cm",
      lengthInches: "19 in",
      lengthCm: "48 cm",
    },
    {
      size: "6–8Y",
      ageGroup: "6–8 Years",
      chestInches: "27 in",
      chestCm: "69 cm",
      waistInches: "24 in",
      waistCm: "61 cm",
      lengthInches: "21 in",
      lengthCm: "53 cm",
    },
    {
      size: "8–10Y",
      ageGroup: "8–10 Years",
      chestInches: "29 in",
      chestCm: "74 cm",
      waistInches: "25 in",
      waistCm: "64 cm",
      lengthInches: "23 in",
      lengthCm: "58 cm",
    },
    {
      size: "10–12Y",
      ageGroup: "10–12 Years",
      chestInches: "31 in",
      chestCm: "79 cm",
      waistInches: "27 in",
      waistCm: "69 cm",
      lengthInches: "25 in",
      lengthCm: "64 cm",
    },
  ],
  sleepwear: [
    {
      size: "2–3Y",
      ageGroup: "2–3 Years",
      chestInches: "23 in",
      chestCm: "58 cm",
      waistInches: "20 in",
      waistCm: "51 cm",
      lengthInches: "21 in (Pants)",
      lengthCm: "53 cm",
    },
    {
      size: "4–5Y",
      ageGroup: "4–5 Years",
      chestInches: "25 in",
      chestCm: "64 cm",
      waistInches: "22 in",
      waistCm: "56 cm",
      lengthInches: "24 in (Pants)",
      lengthCm: "61 cm",
    },
    {
      size: "6–7Y",
      ageGroup: "6–7 Years",
      chestInches: "27 in",
      chestCm: "69 cm",
      waistInches: "23 in",
      waistCm: "58 cm",
      lengthInches: "27 in (Pants)",
      lengthCm: "69 cm",
    },
    {
      size: "8–9Y",
      ageGroup: "8–9 Years",
      chestInches: "29 in",
      chestCm: "74 cm",
      waistInches: "25 in",
      waistCm: "64 cm",
      lengthInches: "30 in (Pants)",
      lengthCm: "76 cm",
    },
    {
      size: "10–12Y",
      ageGroup: "10–12 Years",
      chestInches: "31 in",
      chestCm: "79 cm",
      waistInches: "27 in",
      waistCm: "69 cm",
      lengthInches: "33 in (Pants)",
      lengthCm: "84 cm",
    },
  ],
  shorts: [
    {
      size: "2–3Y",
      ageGroup: "2–3 Years",
      chestInches: "-",
      chestCm: "-",
      waistInches: "19–21 in",
      waistCm: "48–53 cm",
      lengthInches: "10 in",
      lengthCm: "25 cm",
    },
    {
      size: "4–5Y",
      ageGroup: "4–5 Years",
      chestInches: "-",
      chestCm: "-",
      waistInches: "21–23 in",
      waistCm: "53–58 cm",
      lengthInches: "12 in",
      lengthCm: "30 cm",
    },
    {
      size: "6–7Y",
      ageGroup: "6–7 Years",
      chestInches: "-",
      chestCm: "-",
      waistInches: "22–24 in",
      waistCm: "56–61 cm",
      lengthInches: "14 in",
      lengthCm: "36 cm",
    },
    {
      size: "8–9Y",
      ageGroup: "8–9 Years",
      chestInches: "-",
      chestCm: "-",
      waistInches: "24–26 in",
      waistCm: "61–66 cm",
      lengthInches: "16 in",
      lengthCm: "41 cm",
    },
    {
      size: "10–12Y",
      ageGroup: "10–12 Years",
      chestInches: "-",
      chestCm: "-",
      waistInches: "26–28 in",
      waistCm: "66–71 cm",
      lengthInches: "18 in",
      lengthCm: "46 cm",
    },
  ],
};

// ═════════════════════════════════════════════════════════════════
// 4. PROMO CODES / COUPONS
// ═════════════════════════════════════════════════════════════════

export const activeCoupons: Coupon[] = [
  {
    code: "WELCOME10",
    description: "10% promotional discount on bookings above ₹499",
    discountType: "percentage",
    discountValue: 10,
    minOrderValue: 499,
    maxDiscount: 250,
    expiresAt: "2027-12-31",
  },
  {
    code: "KORNER20",
    description: "20% festive promotional savings on bookings above ₹1,499",
    discountType: "percentage",
    discountValue: 20,
    minOrderValue: 1499,
    maxDiscount: 600,
    expiresAt: "2027-12-31",
  },
  {
    code: "FREESHIP",
    description: "Zero shipping fee across all PIN codes in India",
    discountType: "freeship",
    discountValue: 100,
    minOrderValue: 399,
    expiresAt: "2027-12-31",
  },
  {
    code: "MUNNA15",
    description: "Special ₹150 promotional discount on Boy Munna collections",
    discountType: "fixed",
    discountValue: 150,
    minOrderValue: 799,
    expiresAt: "2027-12-31",
  },
];

export function applyCouponCode(
  code: string,
  subtotal: number,
  shippingFee: number,
): { success: boolean; discountAmount: number; message: string; coupon?: Coupon } {
  const normalized = code.trim().toUpperCase();
  const coupon = activeCoupons.find((c) => c.code === normalized);

  if (!coupon) {
    return {
      success: false,
      discountAmount: 0,
      message: "Invalid promo code. Please check and try again.",
    };
  }

  if (subtotal < coupon.minOrderValue) {
    return {
      success: false,
      discountAmount: 0,
      message: `Promo code ${coupon.code} requires a minimum booking value of ₹${coupon.minOrderValue}.`,
    };
  }

  let discount = 0;
  if (coupon.discountType === "percentage") {
    discount = Math.round((subtotal * coupon.discountValue) / 100);
    if (coupon.maxDiscount && discount > coupon.maxDiscount) {
      discount = coupon.maxDiscount;
    }
  } else if (coupon.discountType === "fixed") {
    discount = Math.min(coupon.discountValue, subtotal);
  } else if (coupon.discountType === "freeship") {
    discount = shippingFee;
  }

  return {
    success: true,
    discountAmount: discount,
    message: `Promo code ${coupon.code} applied successfully!`,
    coupon,
  };
}

// ═════════════════════════════════════════════════════════════════
// 5. CLIENT-SIDE PERSISTENT REPOSITORY (SSR SAFE)
// ═════════════════════════════════════════════════════════════════

const CART_STORAGE_KEY = "kids_korner_cart_v1";
const WISHLIST_STORAGE_KEY = "kids_korner_wishlist_v1";
const ORDERS_STORAGE_KEY = "kids_korner_orders_v1";
const WHOLESALE_STORAGE_KEY = "kids_korner_wholesale_v1";
const USER_STORAGE_KEY = "kids_korner_user_v1";
const REVIEWS_STORAGE_KEY = "kids_korner_reviews_v1";
const STOCK_STORAGE_KEY = "kids_korner_stock_overrides_v1";

const isBrowser = typeof window !== "undefined";

function safeGetJSON<T>(key: string, fallback: T): T {
  if (!isBrowser) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeSetJSON<T>(key: string, data: T): void {
  if (!isBrowser) return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`[storage] Could not write ${key}:`, err);
  }
}

// Variant Stock Store (persists reservations and admin adjustments)
export const StockStore = {
  getOverrides(): Record<string, number> {
    return safeGetJSON<Record<string, number>>(STOCK_STORAGE_KEY, {});
  },
  getVariantStock(variantId: string, defaultStock: number): number {
    const overrides = this.getOverrides();
    const override = overrides[variantId];
    return override !== undefined ? Math.max(0, override) : defaultStock;
  },
  setVariantStock(variantId: string, newStock: number): void {
    const overrides = this.getOverrides();
    overrides[variantId] = Math.max(0, newStock);
    safeSetJSON(STOCK_STORAGE_KEY, overrides);
    if (isBrowser) {
      window.dispatchEvent(new CustomEvent("stock-updated", { detail: overrides }));
    }
  },
  reserveStock(variantId: string, defaultStock: number, qtyToReserve: number): number {
    const current = this.getVariantStock(variantId, defaultStock);
    const updated = Math.max(0, current - qtyToReserve);
    this.setVariantStock(variantId, updated);
    return updated;
  },
};

const SEED_ORDERS: Order[] = [
  {
    id: "bk_1001",
    orderNumber: "BK-2026-90412",
    date: "2026-11-06T10:30:00Z",
    status: "Stock Reserved",
    totalMrp: 2098,
    subtotal: 1298,
    discount: 130,
    couponCode: "WELCOME10",
    shippingFee: 0,
    shippingZone: "Local Delivery (Tirupur / Coimbatore Region)",
    taxableValue: 1236.19,
    tax: 61.81,
    total: 1168,
    shippingAddress: {
      id: "addr_1",
      fullName: "Karthik Subramanian",
      phone: "+91 98401 23456",
      email: "karthik.s@example.com",
      addressLine1: "42, Avinashi Road, Kangeyam Cross",
      city: "Tirupur",
      state: "Tamil Nadu",
      pinCode: "641602",
      addressType: "Home",
      isDefault: true,
    },
    paymentMethod: "Stock Reservation (No Online Payment)",
    paymentStatus: "Stock Reserved for Customer",
    emailDispatchedToOwner: true,
    trackingNumber: "RES-TRP-889012",
    courierName: "Muthu International Direct Hold",
    notes: "Please keep red/blue pieces reserved for store pickup or dispatch.",
    items: [
      {
        productId: "kids-korner-dinosaur-tee",
        productSlug: "kids-korner-dinosaur-tee",
        productName: "Kids Korner Dinosaur Printed T-Shirt",
        brandName: "Kids Korner",
        sku: "KK-DINO-RED-4Y",
        size: "4–5Y",
        colour: "Classic Red",
        image: "/assets/boys-tee.jpg",
        price: 499,
        mrp: 799,
        quantity: 1,
        gstRate: 5,
        taxableValue: 475.24,
        gstAmount: 23.76,
      },
      {
        productId: "boy-munna-character-set",
        productSlug: "boy-munna-character-set",
        productName: "Boy Munna Signature T-Shirt & Shorts Set",
        brandName: "Boy Munna",
        sku: "BM-SET-SIGN-YEL-4Y",
        size: "4–6Y",
        colour: "Sunshine Yellow",
        image: "/assets/printed-set.jpg",
        price: 799,
        mrp: 1299,
        quantity: 1,
        gstRate: 5,
        taxableValue: 760.95,
        gstAmount: 38.05,
      },
    ],
  },
];

export const SEED_REVIEWS: ProductReview[] = [
  {
    id: "rev_1",
    productId: "kids-korner-dinosaur-tee",
    author: "Deepa Narayanan",
    city: "Chennai",
    rating: 5,
    title: "Incredible fabric softness & wash durability",
    comment:
      "Booked the red and blue tees for my 4-year-old son. Even after five machine washes, the dinosaur print has zero cracking and the collar hasn't lost its shape. Truly export grade quality from Tirupur!",
    date: "2026-10-18",
    verifiedPurchase: true,
  },
  {
    id: "rev_2",
    productId: "kids-korner-dinosaur-tee",
    author: "Ramesh Kumar",
    city: "Bengaluru",
    rating: 5,
    title: "True to size and breathable cotton",
    comment:
      "The size chart is accurate. Combed cotton feels feather-light in summer. Great value.",
    date: "2026-10-22",
    verifiedPurchase: true,
  },
  {
    id: "rev_3",
    productId: "boy-munna-character-set",
    author: "Ananya Sengupta",
    city: "Kolkata",
    rating: 5,
    title: "My nephew loves the Munna character!",
    comment:
      "Munna's illustration is so charming and playful. The matching shorts have smooth enclosed elastic that doesn't leave marks on my child's skin. Will reserve more from Boy Munna.",
    date: "2026-10-29",
    verifiedPurchase: true,
  },
  {
    id: "rev_4",
    productId: "atelier-embroidered-set",
    author: "Pooja Varma",
    city: "Mumbai",
    rating: 5,
    title: "Pure boutique luxury finishing",
    comment:
      "The baby corduroy is buttery soft and the embroidery is high-end. Looks twice its price.",
    date: "2026-11-02",
    verifiedPurchase: true,
  },
];

// Booking List (Cart) Store API
export const CartStore = {
  getCart(): CartItem[] {
    return safeGetJSON<CartItem[]>(CART_STORAGE_KEY, []);
  },
  saveCart(items: CartItem[]): void {
    safeSetJSON(CART_STORAGE_KEY, items);
    if (isBrowser) {
      window.dispatchEvent(new CustomEvent("cart-updated", { detail: items }));
    }
  },
  addItem(item: Omit<CartItem, "id">): CartItem[] {
    const current = this.getCart();
    const uniqueKey = `${item.productId}-${item.variantId}`;
    const existingIndex = current.findIndex((i) => i.id === uniqueKey);
    const liveMaxStock = StockStore.getVariantStock(item.variantId, item.maxStock);

    const existing = existingIndex > -1 ? current[existingIndex] : undefined;
    if (existing) {
      const newQty = Math.min(existing.quantity + item.quantity, liveMaxStock);
      current[existingIndex] = { ...existing, quantity: newQty, maxStock: liveMaxStock };
    } else {
      current.push({
        ...item,
        id: uniqueKey,
        maxStock: liveMaxStock,
        quantity: Math.min(item.quantity, liveMaxStock),
      });
    }

    this.saveCart(current);
    return current;
  },
  updateQty(itemId: string, qty: number): CartItem[] {
    const current = this.getCart();
    const updated = current
      .map((item) => {
        if (item.id === itemId) {
          const validQty = Math.max(1, Math.min(qty, item.maxStock));
          return { ...item, quantity: validQty };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    this.saveCart(updated);
    return updated;
  },
  removeItem(itemId: string): CartItem[] {
    const current = this.getCart();
    const filtered = current.filter((i) => i.id !== itemId);
    this.saveCart(filtered);
    return filtered;
  },
  clearCart(): void {
    this.saveCart([]);
  },
  getSubtotal(): number {
    return this.getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
  getTotalSavings(): number {
    return this.getCart().reduce(
      (sum, item) => sum + Math.max(0, item.mrp - item.price) * item.quantity,
      0,
    );
  },
  getItemCount(): number {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  },
};

// Wishlist Store API
export const WishlistStore = {
  getWishlist(): string[] {
    return safeGetJSON<string[]>(WISHLIST_STORAGE_KEY, ["kids-korner-dinosaur-tee"]);
  },
  saveWishlist(list: string[]): void {
    safeSetJSON(WISHLIST_STORAGE_KEY, list);
    if (isBrowser) {
      window.dispatchEvent(new CustomEvent("wishlist-updated", { detail: list }));
    }
  },
  toggle(productSlug: string): boolean {
    const current = this.getWishlist();
    const exists = current.includes(productSlug);
    const updated = exists ? current.filter((s) => s !== productSlug) : [...current, productSlug];
    this.saveWishlist(updated);
    return !exists;
  },
  has(productSlug: string): boolean {
    return this.getWishlist().includes(productSlug);
  },
};

// Stock Bookings (Orders) Store API
export const OrdersStore = {
  getOrders(): Order[] {
    return safeGetJSON<Order[]>(ORDERS_STORAGE_KEY, SEED_ORDERS);
  },
  saveOrders(orders: Order[]): void {
    safeSetJSON(ORDERS_STORAGE_KEY, orders);
    if (isBrowser) {
      window.dispatchEvent(new CustomEvent("orders-updated", { detail: orders }));
    }
  },
  getOrderById(id: string): Order | undefined {
    return this.getOrders().find((o) => o.id === id || o.orderNumber === id);
  },
  createOrder(
    orderData: Omit<Order, "id" | "orderNumber" | "date">,
    variantStockMap?: Array<{ variantId: string; defaultStock: number; qty: number }>,
  ): Order {
    const current = this.getOrders();
    const orderNumber = `BK-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: Order = {
      ...orderData,
      id: `bk_${Date.now()}`,
      orderNumber,
      date: new Date().toISOString(),
    };

    // Reserve stock for every booked variant
    if (variantStockMap) {
      variantStockMap.forEach((v) => {
        StockStore.reserveStock(v.variantId, v.defaultStock, v.qty);
      });
    }

    const updated = [newOrder, ...current];
    this.saveOrders(updated);
    CartStore.clearCart();
    return newOrder;
  },
  updateStatus(
    orderId: string,
    status: OrderStatus,
    trackingNumber?: string,
    courierName?: string,
  ): Order | undefined {
    const current = this.getOrders();
    let updatedOrder: Order | undefined;
    const updated = current.map((o) => {
      if (o.id === orderId || o.orderNumber === orderId) {
        updatedOrder = {
          ...o,
          status,
          ...(trackingNumber ? { trackingNumber } : {}),
          ...(courierName ? { courierName } : {}),
        };
        return updatedOrder;
      }
      return o;
    });
    this.saveOrders(updated);
    return updatedOrder;
  },
};

export function formatBookingEmailBody(order: Order): string {
  const itemLines = order.items
    .map((item, idx) => {
      const gst = calculateGstBreakdown(item.price, item.mrp, item.quantity);
      return `${idx + 1}. ${item.productName} (${item.brandName})
   - Variant: Colour: ${item.colour} | Size: ${item.size} | SKU: ${item.sku}
   - Quantity: ${item.quantity} pcs
   - MRP: Rs.${gst.totalMrp} | Offer Price: Rs.${gst.totalPrice} (Saved Rs.${gst.discountAmount})
   - Tax Breakdown: Base Value Rs.${gst.taxableValue} + ${gst.gstRate}% GST (Rs.${gst.gstAmount})`;
    })
    .join("\n\n");

  return `NEW STOCK RESERVATION / BOOKING REQUEST
============================================================
Booking Reference ID : ${order.orderNumber}
Customer Email ID    : ${order.shippingAddress.email} (Use this email to identify booking)
Booking Date         : ${new Date(order.date).toLocaleString("en-IN")}
Booking Mode         : ${order.paymentMethod}

CUSTOMER CONTACT & DELIVERY DETAILS
------------------------------------------------------------
Name     : ${order.shippingAddress.fullName}
Mobile   : ${order.shippingAddress.phone}
Email    : ${order.shippingAddress.email}
Address  : ${order.shippingAddress.addressLine1}${order.shippingAddress.addressLine2 ? `, ${order.shippingAddress.addressLine2}` : ""}
City/PIN : ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pinCode}
Type     : ${order.shippingAddress.addressType}
Notes    : ${order.notes || "None"}

BOOKED ITEMS TO RESERVE IN STOCK
------------------------------------------------------------
${itemLines}

FINAL PRICE & GST TAX SUMMARY
------------------------------------------------------------
Total MRP Value           : Rs.${order.totalMrp ?? order.subtotal}
Promo / Offer Subtotal    : Rs.${order.subtotal}
Coupon Discount           : -Rs.${order.discount}${order.couponCode ? ` (${order.couponCode})` : ""}
Taxable Base Value        : Rs.${order.taxableValue ?? Number((order.subtotal / 1.05).toFixed(2))}
Total GST (CGST + SGST)   : Rs.${order.tax}
Estimated Shipping Fee    : ${order.shippingFee === 0 ? "FREE" : `Rs.${order.shippingFee}`} (${order.shippingZone})
FINAL BOOKING TOTAL       : Rs.${order.total} (Inclusive of all GST & Taxes)

ACTION FOR OWNER (${COMPANY_OWNER_EMAIL}):
Please hold / reserve the above stock in Tirupur warehouse for ${order.shippingAddress.fullName} (${order.shippingAddress.email}) and confirm stock availability.`;
}

export function getBookingMailtoUrl(order: Order): string {
  const subject = encodeURIComponent(
    `[Stock Booking ${order.orderNumber}] ${order.shippingAddress.fullName} (${order.shippingAddress.email}) - Reserve ${order.items.reduce((s, i) => s + i.quantity, 0)} Item(s)`,
  );
  const body = encodeURIComponent(formatBookingEmailBody(order));
  return `mailto:${COMPANY_OWNER_EMAIL}?subject=${subject}&body=${body}`;
}

// Wholesale Enquiries Store API
export const WholesaleStore = {
  getEnquiries(): WholesaleEnquiry[] {
    return safeGetJSON<WholesaleEnquiry[]>(WHOLESALE_STORAGE_KEY, [
      {
        id: "wh_1",
        companyName: "Little Trends Retail Ltd",
        contactPerson: "Suresh Menon",
        phone: "+91 94470 11223",
        email: "suresh@littletrends.in",
        city: "Kochi",
        state: "Kerala",
        estimatedQuantity: "2,500 pcs",
        interestedBrand: "Kids Korner",
        productCategory: "Boys & Girls Combed T-Shirts",
        message: "Looking for customized regional distributor supply for 12 stores in Kerala.",
        status: "Sample Requested",
        createdAt: "2026-11-04T11:20:00Z",
      },
    ]);
  },
  saveEnquiries(items: WholesaleEnquiry[]): void {
    safeSetJSON(WHOLESALE_STORAGE_KEY, items);
  },
  submit(enquiry: Omit<WholesaleEnquiry, "id" | "status" | "createdAt">): WholesaleEnquiry {
    const current = this.getEnquiries();
    const newEnquiry: WholesaleEnquiry = {
      ...enquiry,
      id: `wh_${Date.now()}`,
      status: "New",
      createdAt: new Date().toISOString(),
    };
    this.saveEnquiries([newEnquiry, ...current]);
    return newEnquiry;
  },
  updateStatus(id: string, status: WholesaleEnquiry["status"]): void {
    const current = this.getEnquiries();
    const updated = current.map((e) => (e.id === id ? { ...e, status } : e));
    this.saveEnquiries(updated);
  },
};

// Reviews Store API
export const ReviewsStore = {
  getReviews(productId?: string): ProductReview[] {
    const all = safeGetJSON<ProductReview[]>(REVIEWS_STORAGE_KEY, SEED_REVIEWS);
    return productId ? all.filter((r) => r.productId === productId) : all;
  },
  addReview(review: Omit<ProductReview, "id" | "date">): ProductReview {
    const current = safeGetJSON<ProductReview[]>(REVIEWS_STORAGE_KEY, SEED_REVIEWS);
    const newRev: ProductReview = {
      ...review,
      id: `rev_${Date.now()}`,
      date: new Date().toISOString().split("T")[0] ?? "",
    };
    safeSetJSON(REVIEWS_STORAGE_KEY, [newRev, ...current]);
    return newRev;
  },
};

// Visitor Contact Preferences (No multiple logins or password walls required)
export interface CustomerUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: CustomerAddress[];
}

export const UserStore = {
  getUser(): CustomerUser {
    return safeGetJSON<CustomerUser>(USER_STORAGE_KEY, {
      id: "visitor",
      name: "",
      email: "",
      phone: "",
      addresses: [],
    });
  },
  saveUser(user: CustomerUser): void {
    safeSetJSON(USER_STORAGE_KEY, user);
  },
  saveContactFromBooking(address: CustomerAddress): void {
    const current = this.getUser();
    const updatedAddresses = [
      address,
      ...current.addresses.filter((a) => a.addressLine1 !== address.addressLine1),
    ].slice(0, 5);
    this.saveUser({
      id: "visitor",
      name: address.fullName,
      email: address.email,
      phone: address.phone,
      addresses: updatedAddresses,
    });
  },
  addAddress(address: Omit<CustomerAddress, "id">): CustomerAddress {
    const user = this.getUser();
    const newAddr: CustomerAddress = { ...address, id: `addr_${Date.now()}` };
    if (newAddr.isDefault) {
      user.addresses = user.addresses.map((a) => ({ ...a, isDefault: false }));
    }
    user.addresses.push(newAddr);
    this.saveUser(user);
    return newAddr;
  },
};
