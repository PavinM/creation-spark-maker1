import hero from "@/assets/kidswear-hero.jpg";
import factory from "@/assets/factory-craft.jpg";
import editorial from "@/assets/kidswear-editorial.jpg";
import detail from "@/assets/garment-detail.jpg";
import boysTee from "@/assets/boys-tee.jpg";
import girlsTee from "@/assets/girls-tee.jpg";
import printedSet from "@/assets/printed-set.jpg";
import quality from "@/assets/quality-control.jpg";
import bloomHero from "@/assets/bloom-hero.jpg";
import bloomCraft from "@/assets/bloom-craft.jpg";
import muthuLogo from "@/assets/muthu-logo.png";
import muthuEmblem from "@/assets/muthu-emblem.png";
import muthuWordmark from "@/assets/muthu-wordmark.png";
import manufacturingVideo from "@/assets/manufacturing-hero.mp4";
import pageManufacturing from "@/assets/page-manufacturing.jpg";
import pageAbout from "@/assets/page-about.jpg";
import pageGallery from "@/assets/page-gallery.jpg";
import pageContact from "@/assets/page-contact.jpg";
import pageDesign from "@/assets/page-design.jpg";
import pageQuality from "@/assets/page-quality.jpg";

export const images = {
  hero,
  factory,
  editorial,
  detail,
  boysTee,
  girlsTee,
  printedSet,
  quality,
  bloomHero,
  bloomCraft,
  muthuLogo,
  muthuEmblem,
  muthuWordmark,
  manufacturingVideo,
  pageManufacturing,
  pageAbout,
  pageGallery,
  pageContact,
  pageDesign,
  pageQuality,
};

export interface Product {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  galleryImages: string[];
  fabric: string;
  colours: string;
  sizes: string;
  print: string;
  embroidery: string;
  customization: string;
  featured?: boolean;
  collectionSlug: string;
  specifications: [string, string][];
}

export const products: Product[] = [
  {
    slug: "signature-boys-tee",
    name: "Signature Boys' Crew Tee",
    category: "Boys · T-Shirts · Casualwear",
    tags: ["Boys", "T-Shirts", "Casualwear"],
    description: "A clean, modern T-shirt style for everyday children's wear.",
    image: boysTee,
    galleryImages: [boysTee, detail, factory],
    fabric: "100% Combed Compact Cotton Jersey (160–200 GSM)",
    colours: "Pantone-matched reactive dyed",
    sizes: "2Y–14Y (custom grading available)",
    print: "Water-base, Plastisol, Discharge, High-Density",
    embroidery: "Chest, sleeve & woven badging",
    customization: "Silhouette, neck rib, inner tape, care labels & polybags",
    featured: true,
    collectionSlug: "spring-summer",
    specifications: [
      ["Fabric", "100% Combed Cotton Single Jersey"],
      ["GSM Range", "160 / 180 / 200 GSM"],
      ["Dyeing", "Reactive dyeing options as specified for the style"],
      ["Shrinkage", "Pre-washed & stabilized (< 5%)"],
      ["Print Options", "Silkscreen, puff, heat transfer, discharge"],
      ["Trims", "Woven label, heat-seal, custom hangtags"],
    ],
  },
  {
    slug: "embroidered-girls-tee",
    name: "Embroidered Girls' Flutter Tee",
    category: "Girls · T-Shirts · Embroidered",
    tags: ["Girls", "T-Shirts", "Embroidered", "Casualwear"],
    description: "Refined jersey essential with multi-head embroidery, soft-touch fusing and premium neck finishing.",
    image: girlsTee,
    galleryImages: [girlsTee, detail, quality],
    fabric: "95% Cotton / 5% Elastane Stretch Jersey (170–190 GSM)",
    colours: "Seasonal pastel & vibrant palettes",
    sizes: "12M–12Y (baby to tween grading)",
    print: "Optional foil or water-base accents",
    embroidery: "Direct, 3D floral, metallic thread & appliqué",
    customization: "Custom sleeves, scalloped hems, keyhole closures",
    featured: true,
    collectionSlug: "spring-summer",
    specifications: [
      ["Fabric", "Cotton Elastane Jersey with peach finish"],
      ["Handfeel", "Bio-polished for sensitive skin"],
      ["Backing", "Skin-friendly soft tear-away"],
      ["Seams", "4-thread overlock, reinforced neckline"],
      ["Testing", "Colour fastness Grade 4+, saliva compliant"],
      ["Branding", "Satin loop label or printed neck transfer"],
    ],
  },
  {
    slug: "botanical-coord-set",
    name: "Botanical Co-Ord Set",
    category: "Girls · Co-Ord Sets · Printed",
    tags: ["Girls", "Co-Ord Sets", "Printed"],
    description: "Harmonized two-piece set with expressive botanical prints and comfortable modern silhouettes.",
    image: printedSet,
    galleryImages: [printedSet, detail, editorial],
    fabric: "100% Cotton Poplin or Viscose Cotton Blend",
    colours: "Rotary or digital reactive colourways",
    sizes: "18M–10Y",
    print: "AOP rotary reactive or digital print",
    embroidery: "Optional tonal embroidery at collar or pocket",
    customization: "Coordinated matching, button selection, elastic waistband",
    featured: true,
    collectionSlug: "spring-summer",
    specifications: [
      ["Type", "Matching top + relaxed shorts/trousers"],
      ["Print", "Rotary or digital reactive"],
      ["Fasteners", "Non-toxic shell buttons, child-safe snaps"],
      ["Waistband", "Enclosed elastic with cotton drawstring"],
      ["Packaging", "Hanger pack or branded belly band"],
      ["Compliance", "Zero-toxic, nickel-free trims"],
    ],
  },
  {
    slug: "atelier-embroidered-set",
    name: "Atelier Tailored Cord Set",
    category: "Co-Ord Sets · Cord Sets · Embroidered",
    tags: ["Co-Ord Sets", "Cord Sets", "Embroidered", "Boys", "Girls"],
    description: "Premium corduroy set with artisanal embroidery, exact proportion and luxury boutique finishing.",
    image: editorial,
    galleryImages: [editorial, detail, factory],
    fabric: "Baby Corduroy (21-wale) or Premium French Terry",
    colours: "Earthy tones, deep navy, champagne & sage",
    sizes: "2Y–12Y",
    print: "Subtle vintage wash or interior prints",
    embroidery: "Dense chain-stitch & chenille patches",
    customization: "Style details developed for the kidswear collection",
    featured: true,
    collectionSlug: "new-developments",
    specifications: [
      ["Fabric", "Fine-wale Babycord or Cotton French Terry"],
      ["Wash", "Garment enzyme wash for vintage drape"],
      ["Embroidery", "Multi-needle chain stitch & monogramming"],
      ["Pockets", "Slant pockets with bar-tack reinforcement"],
      ["Hardware", "Antique brass child-safe buttons"],
      ["Trims", "Embossed leather patch or woven damask label"],
    ],
  },
  {
    slug: "organic-everyday-pullover",
    name: "Heritage Fleece Pullover",
    category: "Boys · Casualwear · Embroidered",
    tags: ["Boys", "Casualwear", "Embroidered"],
    description: "Heavyweight brushed fleece with drop shoulders, ribbed cuffs and high-definition embroidery.",
    image: factory,
    galleryImages: [factory, detail, quality],
    fabric: "100% Cotton Brushed Fleece (280–340 GSM)",
    colours: "Deep forest, oatmeal, washed navy & charcoal",
    sizes: "3Y–14Y",
    print: "Flock or tonal high-density plastisol",
    embroidery: "Bouclé appliqué, badge patch or satin stitch",
    customization: "Custom ribbing, herringbone neck tape, drawcords",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Weight", "320 GSM Cotton Terry / Fleece"],
      ["Interior", "Super-soft brushed thermal back"],
      ["Seaming", "Flatlock on armholes and neck"],
      ["Safety", "Fixed drawcord per international codes"],
      ["Rib Trim", "2x2 Lycra rib on neck, cuffs & hem"],
      ["Packaging", "Recycled PE polybag with silica pack"],
    ],
  },
  {
    slug: "resort-printed-cabana-set",
    name: "Resort Cabana Set",
    category: "Boys · Co-Ord Sets · Printed",
    tags: ["Boys", "Co-Ord Sets", "Printed", "Casualwear"],
    description: "Cuban collar shirt paired with matching shorts. Vibrant summer prints, child-safe buttons.",
    image: printedSet,
    galleryImages: [printedSet, boysTee, detail],
    fabric: "100% Rayon Slub or Linen Cotton (120 GSM)",
    colours: "Bespoke digital art prints",
    sizes: "2Y–12Y",
    print: "High-definition reactive digital",
    embroidery: "Minimal tonal branding",
    customization: "Matching print alignment at placket & pockets",
    featured: false,
    collectionSlug: "spring-summer",
    specifications: [
      ["Collar", "Relaxed camp / Cuban collar"],
      ["Placket", "Clean fold-back with pattern matching"],
      ["Shorts", "Elasticated waist, faux fly, back pocket"],
      ["Finishing", "French seams for luxury interior"],
      ["Buttons", "4-hole faux horn, child-safe"],
      ["Lead Time", "Per order quantity"],
    ],
  },
  {
    slug: "cotton-baby-bodysuit",
    name: "Cotton Baby Bodysuit",
    category: "Baby · Bodysuits · Essentials",
    tags: ["Baby", "Bodysuits", "Essentials", "Casualwear"],
    description: "Soft, easy-change babywear designed with smooth seams, gentle stretch and custom label options.",
    image: girlsTee,
    galleryImages: [girlsTee, detail, quality],
    fabric: "Cotton fabric options selected for the style",
    colours: "Undyed natural, soft pastels and Pantone-matched shades",
    sizes: "Newborn–24M",
    print: "Water-based screen print or soft-hand transfer",
    embroidery: "Optional small-scale chest motif",
    customization: "Envelope neck, snap placement, binding and retail packaging",
    featured: false,
    collectionSlug: "spring-summer",
    specifications: [
      ["Construction", "Envelope shoulder with bound neckline"],
      ["Closure", "Nickel-free child-safe snap fasteners"],
      ["Fabric", "Soft cotton interlock with optional stretch"],
      ["Seams", "Smooth coverstitch finish for comfort"],
      ["Sizing", "Newborn to 24 months"],
      ["Branding", "Printed neck label and custom pack options"],
    ],
  },
  {
    slug: "classic-cotton-polo",
    name: "Classic Cotton Piqué Polo",
    category: "Boys · Polos · Casualwear",
    tags: ["Boys", "Polos", "Casualwear", "Embroidered"],
    description: "A polished everyday polo with a crisp collar, breathable cotton piqué and refined branding details.",
    image: boysTee,
    galleryImages: [boysTee, detail, factory],
    fabric: "100% Cotton Piqué (190–220 GSM)",
    colours: "Core solids, seasonal shades and custom Pantone colours",
    sizes: "2Y–14Y",
    print: "Optional chest or back screen print",
    embroidery: "Monogram, crest and badge embroidery options",
    customization: "Collar stripe, placket, buttons, labels and hem finish",
    featured: false,
    collectionSlug: "spring-summer",
    specifications: [
      ["Fabric", "Breathable cotton piqué"],
      ["Collar", "Self-fabric or contrast rib collar"],
      ["Placket", "Two- or three-button construction"],
      ["Fit", "Classic, relaxed or custom graded"],
      ["Decoration", "Embroidery, print or woven badge"],
      ["Finishing", "Side vents with reinforced bar tacks"],
    ],
  },
  {
    slug: "relaxed-cotton-jogger",
    name: "Relaxed Cotton Terry Jogger",
    category: "Unisex · Joggers · Casualwear",
    tags: ["Unisex", "Joggers", "Casualwear", "Autumn / Winter"],
    description: "A comfortable mix-and-match bottom with a soft terry handfeel, flexible waistband and durable knee finish.",
    image: factory,
    galleryImages: [factory, editorial, quality],
    fabric: "Cotton French Terry (240–300 GSM)",
    colours: "Melange neutrals, seasonal solids and custom dye shades",
    sizes: "2Y–14Y",
    print: "Optional side-leg graphic or tonal transfer",
    embroidery: "Small logo embroidery or woven side tab",
    customization: "Leg shape, pockets, waistband, drawcord and cuff rib",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Fabric", "Midweight cotton French terry"],
      ["Waist", "Comfort elastic with optional internal drawcord"],
      ["Pockets", "Side seam or patch pocket options"],
      ["Knee", "Optional reinforced panel"],
      ["Cuff", "Self-fabric or stretch rib finish"],
      ["Set pairing", "Coordinates with fleece and sweatshirt styles"],
    ],
  },
  {
    slug: "textured-overshirt",
    name: "Textured Cotton Overshirt",
    category: "Unisex · Overshirts · Layering",
    tags: ["Unisex", "Overshirts", "Layering", "Autumn / Winter"],
    description: "A versatile light layer in soft textured cotton, finished with considered pockets and child-safe fastenings.",
    image: editorial,
    galleryImages: [editorial, detail, factory],
    fabric: "Cotton Twill, Fine Corduroy or Brushed Cotton (180–260 GSM)",
    colours: "Earthy solids, checks and custom seasonal palettes",
    sizes: "2Y–14Y",
    print: "Optional garment print or custom woven check",
    embroidery: "Pocket, sleeve or back-yoke decoration",
    customization: "Collar shape, pocket layout, lining, buttons and labels",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Fabric", "Soft cotton twill, brushed cotton or fine cord"],
      ["Fit", "Easy layering shape with graded proportions"],
      ["Pockets", "Chest patch or welt pocket options"],
      ["Fastening", "Child-safe buttons or approved snaps"],
      ["Interior", "Clean bound seams or optional light lining"],
      ["Branding", "Custom woven labels and hangtags"],
    ],
  },
  {
    slug: "botanical-pinafore-dress",
    name: "Botanical Print Pinafore Dress",
    category: "Girls · Dresses · Printed",
    tags: ["Girls", "Dresses", "Printed", "Spring / Summer"],
    description: "A playful layering dress pairing an easy fit with coordinated botanical artwork and thoughtful finishing.",
    image: printedSet,
    galleryImages: [printedSet, girlsTee, detail],
    fabric: "Cotton Poplin or Lightweight Cotton Voile (110–140 GSM)",
    colours: "Custom botanical artwork and seasonal colour stories",
    sizes: "18M–12Y",
    print: "Reactive rotary or digital all-over print",
    embroidery: "Optional tonal pocket or yoke detail",
    customization: "Strap shape, skirt volume, pockets, lining and closures",
    featured: false,
    collectionSlug: "spring-summer",
    specifications: [
      ["Silhouette", "Easy pinafore with layered styling"],
      ["Fabric", "Lightweight woven cotton options"],
      ["Print", "Custom reactive all-over artwork"],
      ["Closure", "Adjustable shoulder and back fastening options"],
      ["Lining", "Optional soft cotton lining"],
      ["Finishing", "Neat enclosed seams and custom hem"],
    ],
  },
  {
    slug: "cotton-sleepwear-set",
    name: "Kids' Cotton Night Suit",
    category: "Kidswear · Night Suits · Sleepwear",
    tags: ["Kidswear", "Night Suits", "Sleepwear", "Essentials"],
    description: "A coordinated nightwear set designed for comfortable everyday sleepwear, available in styles for children.",
    image: hero,
    galleryImages: [hero, girlsTee, quality],
    fabric: "100% Cotton Jersey (150–180 GSM)",
    colours: "Soft solids, mini prints and custom seasonal artwork",
    sizes: "2Y–14Y",
    print: "Water-based print or all-over digital print",
    embroidery: "Minimal tonal branding on top",
    customization: "Neckline, sleeve length, waistband, print and packaging",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Set", "Long- or short-sleeve top with matching bottoms"],
      ["Fabric", "Breathable cotton jersey"],
      ["Waistband", "Soft enclosed elastic construction"],
      ["Print", "Custom water-based or all-over artwork"],
      ["Seams", "Smooth finishing for comfortable wear"],
      ["Pack", "Packaging details developed for the style"],
    ],
  },
  {
    slug: "girls-paijama",
    name: "Girls' Paijama",
    category: "Girls · Paijamas · Nightwear",
    tags: ["Girls", "Paijamas", "Nightwear", "Essentials"],
    description: "Comfortable, practical paijama bottomwear for girls, suitable for everyday use and nightwear.",
    image: girlsTee,
    galleryImages: [girlsTee, printedSet, detail],
    fabric: "Fabric options selected for the product and customer requirements",
    colours: "Colours and prints developed for the collection",
    sizes: "Children's size range as developed for each collection",
    print: "Print options as developed for the style",
    embroidery: "Decoration as specified for the collection",
    customization: "Style and finish developed to customer requirements",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Category", "Girls' paijama bottomwear"],
      ["Use", "Everyday wear and nightwear"],
      ["Design", "Developed by our in-house design team"],
      ["Fabric", "Selected to suit the style"],
      ["Sizes", "As developed for the collection"],
      ["Market", "Domestic kidswear"],
    ],
  },
  {
    slug: "everyday-kids-shorts",
    name: "Everyday Kids' Shorts",
    category: "Kidswear · Shorts · Casualwear",
    tags: ["Kidswear", "Shorts", "Casualwear", "Boys", "Girls"],
    description: "Casual children's shorts designed for comfort and ease of movement in everyday wear.",
    image: boysTee,
    galleryImages: [boysTee, printedSet, factory],
    fabric: "Fabric options selected for the product and customer requirements",
    colours: "Colours and prints developed for the collection",
    sizes: "Children's size range as developed for each collection",
    print: "Print options as developed for the style",
    embroidery: "Decoration as specified for the collection",
    customization: "Style and finish developed to customer requirements",
    featured: false,
    collectionSlug: "spring-summer",
    specifications: [
      ["Category", "Children's casual shorts"],
      ["Use", "Everyday and casual occasions"],
      ["Design", "Developed by our in-house design team"],
      ["Fabric", "Selected to suit the style"],
      ["Sizes", "As developed for the collection"],
      ["Market", "Domestic kidswear"],
    ],
  },
  {
    slug: "kids-seasonal-sweater",
    name: "Kids' Seasonal Sweater",
    category: "Kidswear · Sweaters · Seasonal",
    tags: ["Kidswear", "Sweaters", "Seasonal", "Boys", "Girls"],
    description: "Seasonal knitwear designed to provide children with warmth and comfort.",
    image: editorial,
    galleryImages: [editorial, factory, quality],
    fabric: "Material options selected for the seasonal style",
    colours: "Seasonal colours developed for the collection",
    sizes: "Children's size range as developed for each collection",
    print: "As specified for the style",
    embroidery: "As specified for the style",
    customization: "Style and finish developed to customer requirements",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Category", "Children's seasonal sweaters"],
      ["Use", "Seasonal wear"],
      ["Design", "Developed by our in-house design team"],
      ["Material", "Selected to suit the style"],
      ["Sizes", "As developed for the collection"],
      ["Market", "Domestic kidswear"],
    ],
  },
  {
    slug: "everyday-kids-hoodie",
    name: "Everyday Kids' Hoodie",
    category: "Kidswear · Hoodies · Casualwear",
    tags: ["Kidswear", "Hoodies", "Casualwear", "Boys", "Girls"],
    description: "A comfortable casual hoodie for children, suitable for everyday wear and cooler weather.",
    image: factory,
    galleryImages: [factory, boysTee, editorial],
    fabric: "Material options selected for the product and customer requirements",
    colours: "Colours developed for the collection",
    sizes: "Children's size range as developed for each collection",
    print: "Print options as developed for the style",
    embroidery: "Decoration as specified for the collection",
    customization: "Style and finish developed to customer requirements",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Category", "Children's casual hoodies"],
      ["Use", "Everyday wear and cooler weather"],
      ["Design", "Developed by our in-house design team"],
      ["Material", "Selected to suit the style"],
      ["Sizes", "As developed for the collection"],
      ["Market", "Domestic kidswear"],
    ],
  },
];

export interface Collection {
  slug: string;
  name: string;
  season: string;
  description: string;
  image: string;
  productCount: number;
  highlight: string;
  details: string[];
}

export const collections: Collection[] = [
  {
    slug: "spring-summer",
    name: "Spring / Summer",
    season: "SS Ready",
    description: "Children's T-shirts, co-ord sets, shorts and other kidswear for everyday and casual occasions.",
    image: hero,
    productCount: 8,
    highlight: "A varied kidswear range developed for changing customer preferences.",
    details: [
      "Boys' and girls' T-shirts",
      "Co-ord sets and shorts",
      "Everyday children's clothing",
      "Fresh styles from our in-house design team",
    ],
  },
  {
    slug: "new-developments",
    name: "New Developments",
    season: "Innovations",
     description: "New kidswear styles developed by our in-house design team.",
    image: editorial,
    productCount: 1,
    highlight: "Design development informed by trends and customer preferences.",
    details: [
      "New designs developed every day",
      "Styles across multiple kidswear categories",
      "Coordination between design and manufacturing",
      "A continuously evolving product range",
    ],
  },
  {
    slug: "autumn-winter",
    name: "Autumn / Winter",
    season: "AW Warmth",
    description: "Seasonal kidswear including night suits, paijamas, sweaters and hoodies.",
    image: printedSet,
    productCount: 7,
    highlight: "Comfortable styles for cooler weather and everyday wear.",
    details: [
       "Children's night suits and paijamas",
       "Seasonal sweaters and hoodies",
       "Everyday styles developed by our design team",
       "Designed for comfort and practical wear",
    ],
  },
];

export interface ManufacturingStage {
  step: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
}

export const manufacturingStages: ManufacturingStage[] = [
  {
    step: "01",
    number: "01",
    title: "Product Requirements",
    shortDesc: "Understand the needs of each kidswear style.",
    fullDesc: "We consider the product type, customer requirements and intended use as part of our garment manufacturing work.",
    image: detail,
    highlights: ["Kidswear focus", "Customer requirements", "Product range", "Domestic market"],
  },
  {
    step: "02",
    number: "02",
    title: "Design & Development",
    shortDesc: "An in-house team develops new designs every day.",
    fullDesc: "Our dedicated design team continuously develops new kidswear styles to keep collections fresh and responsive to customer preferences.",
    image: editorial,
    highlights: ["In-house design team", "Fresh styles", "Trend awareness", "Customer preferences"],
  },
  {
    step: "03",
    number: "03",
    title: "Pattern & Cutting",
    shortDesc: "Two operational factories with modern machinery.",
    fullDesc: "Our established manufacturing facilities use modern machinery to support organized garment production.",
    image: factory,
    highlights: ["Two factories", "Modern machinery", "Organized workflows", "Established facilities"],
  },
  {
    step: "04",
    number: "04",
    title: "Product Development",
    shortDesc: "Designs coordinated with manufacturing operations.",
    fullDesc: "We bring design and manufacturing together to develop children's garments that balance comfort, style and quality.",
    image: printedSet,
    highlights: ["Design and manufacturing", "Kidswear styles", "Customer preferences", "Product development"],
  },
  {
    step: "05",
    number: "05",
    title: "Garment Manufacturing",
    shortDesc: "A varied range made across our production facilities.",
    fullDesc: "Our factories support production across the kidswear range, from everyday T-shirts and co-ord sets to nightwear and seasonal garments.",
    image: detail,
    highlights: ["T-shirts", "Co-ord sets", "Nightwear", "Seasonal clothing"],
  },
  {
    step: "06",
    number: "06",
    title: "Experienced Workforce",
    shortDesc: "A dedicated team supports manufacturing operations.",
    fullDesc: "More than 100 employees contribute to our manufacturing and business operations through teamwork and garment industry experience.",
    image: factory,
    highlights: ["100+ employees", "Teamwork", "Industry experience", "Manufacturing support"],
  },
  {
    step: "07",
    number: "07",
    title: "Quality Commitment",
    shortDesc: "Focused on consistent product quality.",
    fullDesc: "We coordinate our design and manufacturing processes and work to maintain appropriate product standards and meet customer requirements.",
    image: boysTee,
    highlights: ["Customer requirements", "Manufacturing standards", "Product quality", "Applicable regulations"],
  },
  {
    step: "08",
    number: "08",
    title: "Warehouse & Supply",
    shortDesc: "Organized storage supports domestic supply operations.",
    fullDesc: "Our dedicated warehouse supports storage and inventory management, helping coordinate manufacturing and supply to customers across India.",
    image: quality,
    highlights: ["Dedicated warehouse", "Organized storage", "Inventory management", "Pan-India supply"],
  },
  {
    step: "09",
    number: "09",
    title: "Customer Relationships",
    shortDesc: "Long-term partnerships built on reliable business relationships.",
    fullDesc: "We value lasting relationships with customers and work to serve the evolving needs of the domestic kidswear market.",
    image: girlsTee,
    highlights: ["Customer partnership", "Domestic market", "Kidswear focus", "Since 2000"],
  },
];

export const processes = manufacturingStages.map((s) => s.title);

export const qualitySteps = [
  "Product Requirements — Understand the garment style and customer needs",
  "Design Development — Create fresh styles with our in-house design team",
  "Production Planning — Coordinate work across our operational factories",
  "Garment Manufacturing — Use modern machinery and experienced people",
  "Quality Focus — Work toward consistent product quality",
  "Applicable Requirements — Follow relevant statutory and industry requirements",
  "Warehouse — Organize storage and inventory management",
  "Domestic Supply — Coordinate supply to customers across India",
];

export interface GalleryItem {
  category: "Factory" | "Products" | "Kidswear" | "Printing" | "Embroidery" | "Stitching" | "Quality" | "Packaging";
  title: string;
  description: string;
  image: string;
}

export const gallery: GalleryItem[] = [
  { category: "Kidswear", title: "Editorial Collection", description: "Seasonal range with layered coordination.", image: hero },
  { category: "Factory", title: "Stitching Floor", description: "Modular assembly for precision output.", image: factory },
  { category: "Products", title: "Atelier Cord Set", description: "Finished two-piece with custom embroidery.", image: editorial },
  { category: "Embroidery", title: "High-Definition Threadwork", description: "Multi-colour embroidery close-up.", image: detail },
  { category: "Quality", title: "Spec Audit", description: "Dimensional and stitching quality check.", image: quality },
  { category: "Printing", title: "Botanical Print", description: "All-over pattern on pure cotton.", image: printedSet },
  { category: "Kidswear", title: "Boys' Essentials", description: "Crew neck for private-label distribution.", image: boysTee },
  { category: "Products", title: "Girls' Flutter Tee", description: "Embroidery on peach-finish jersey.", image: girlsTee },
  { category: "Stitching", title: "Flatlock Construction", description: "Precision seams for active kidswear.", image: factory },
  { category: "Packaging", title: "Product Presentation", description: "A look at kidswear product presentation.", image: quality },
];

export const whyMuthuPoints = [
  {
    number: "01",
    title: "Kidswear expertise",
    description: "Children's clothing is our primary specialization, with a diverse range for everyday and seasonal needs.",
  },
  {
    number: "02",
    title: "New designs every day",
    description: "Our in-house design team develops fresh styles to keep our collection aligned with changing preferences.",
  },
  {
    number: "03",
    title: "Modern facilities",
    description: "Two operational factories equipped with modern machinery support our garment manufacturing processes.",
  },
  {
    number: "04",
    title: "Experienced workforce",
    description: "More than 100 employees support our manufacturing and business operations.",
  },
  {
    number: "05",
    title: "Dedicated warehouse",
    description: "Organized storage and inventory management help coordinate manufacturing and supply operations.",
  },
  {
    number: "06",
    title: "Pan-India supply",
    description: "We serve the domestic kidswear market and customers across India.",
  },
];

export const oemSteps = [
  { number: "01", title: "Understand Requirements", desc: "Discuss the product and customer needs." },
  { number: "02", title: "Design Development", desc: "Our in-house team develops new kidswear styles." },
  { number: "03", title: "Product Planning", desc: "Coordinate the design with manufacturing operations." },
  { number: "04", title: "Production Planning", desc: "Organize work across our operational facilities." },
  { number: "05", title: "Manufacturing", desc: "Produce garments using modern machinery." },
  { number: "06", title: "Quality Focus", desc: "Work toward consistent product quality and standards." },
  { number: "07", title: "Domestic Supply", desc: "Coordinate warehousing and supply across India." },
];