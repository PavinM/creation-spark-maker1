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
    description: "Clean modern silhouette for custom graphics, wash treatments and private-label programmes.",
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
      ["Dyeing", "OEKOTEX-compliant reactive"],
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
    customization: "Full OEM development from fabric to packaging",
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
    slug: "organic-baby-bodysuit",
    name: "Organic Cotton Baby Bodysuit",
    category: "Baby · Bodysuits · Essentials",
    tags: ["Baby", "Bodysuits", "Essentials", "Casualwear"],
    description: "Soft, easy-change babywear designed with smooth seams, gentle stretch and custom label options.",
    image: girlsTee,
    galleryImages: [girlsTee, detail, quality],
    fabric: "Organic Cotton Interlock or Cotton Elastane (180–220 GSM)",
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
    name: "Soft Cotton Sleepwear Set",
    category: "Unisex · Sleepwear · Essentials",
    tags: ["Unisex", "Sleepwear", "Essentials", "Autumn / Winter"],
    description: "A coordinated two-piece sleep set made for breathable comfort, soft waist finishes and custom prints.",
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
      ["Pack", "Folded set, size sticker and private-label option"],
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
    description: "Lightweight silhouettes, breathable jerseys, coordinated sets and botanical all-over prints.",
    image: hero,
    productCount: 7,
    highlight: "Cotton poplin, organic jerseys, soft pastels and vibrant prints.",
    details: [
      "Combed compact jersey tees with UV wash",
      "Poplin and slub co-ord matching sets",
      "Child-safe water-based printing",
      "Pastel and reactive garment dye programs",
    ],
  },
  {
    slug: "new-developments",
    name: "New Developments",
    season: "Innovations",
    description: "Technical explorations in multi-needle embroidery, specialty corduroy and innovative washes.",
    image: editorial,
    productCount: 1,
    highlight: "Multi-wale corduroy, chenille appliqués, oversized fits and eco-dyes.",
    details: [
      "Artisanal chain-stitch embellishments",
      "Garment-dyed vintage wash textures",
      "Zero-friction inner seam constructions",
      "Custom trims, heat-seals and luxury packaging",
    ],
  },
  {
    slug: "autumn-winter",
    name: "Autumn / Winter",
    season: "AW Warmth",
    description: "Layer-ready shapes, brushed fleece pullovers and rich earthy colour stories.",
    image: printedSet,
    productCount: 4,
    highlight: "Brushed French terry, thermal knits, jewel tones and storm rib cuffs.",
    details: [
      "Heavyweight 320+ GSM brushed fleece",
      "Reinforced knee patches and double-needle topstitching",
      "Child-safety compliant cords and closures",
      "Thermal retaining and moisture-wicking blends",
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
    title: "Fabric Selection",
    shortDesc: "Certified yarn, compact cotton and specialty blends.",
    fullDesc: "Rigorous yarn sourcing — combed compact cotton, organic fibers, French terry, babycord and elastane blends tailored to kidswear durability and skin safety.",
    image: detail,
    highlights: ["Combed Compact Cotton", "Bio-wash & Peach finishes", "Oeko-Tex Compliant", "Lab-dip matching"],
  },
  {
    step: "02",
    number: "02",
    title: "Design & Development",
    shortDesc: "Buyer briefs and tech packs into production patterns.",
    fullDesc: "Technical pattern makers convert design visions into graded CAD patterns, seam specs and tech packs engineered for mass production.",
    image: editorial,
    highlights: ["CAD pattern grading", "3D sample visualization", "Child ergonomic fits", "Complete bill of materials"],
  },
  {
    step: "03",
    number: "03",
    title: "Pattern & Cutting",
    shortDesc: "Computerized lay planning and precision cutting.",
    fullDesc: "CAD marker planning minimizes waste. Automated cutting ensures millimeter-exact panel accuracy across all size ranges.",
    image: factory,
    highlights: ["Computerized marker efficiency", "Zero-skew alignment", "Matched print cutting", "Strict batch bundling"],
  },
  {
    step: "04",
    number: "04",
    title: "Printing",
    shortDesc: "Water-based, plastisol, digital and all-over prints.",
    fullDesc: "Rotary all-over, flatbed screen and digital printing using non-toxic inks certified safe for children.",
    image: printedSet,
    highlights: ["Child-safe inks", "High-density & puff effects", "Discharge & water-base", "Rotary AOP"],
  },
  {
    step: "05",
    number: "05",
    title: "Embroidery",
    shortDesc: "Multi-head computerized embroidery with skin-safe backing.",
    fullDesc: "Multi-head machines create chenille patches, flat satin stitch, 3D threadwork and appliqué with soft tear-away backing.",
    image: detail,
    highlights: ["Multi-colour precision", "Appliqué & chenille", "Skin-friendly backing", "Pull-tested motifs"],
  },
  {
    step: "06",
    number: "06",
    title: "Stitching",
    shortDesc: "Modular assembly with specialized sewing machines.",
    fullDesc: "Specialized auto-feed machines, 4-thread overlockers, flatlock units and collar tape attachments deliver strong, chafe-free seams.",
    image: factory,
    highlights: ["Chafe-free flatlock", "Reinforced stress points", "Inline defect checks", "Ergonomic workflows"],
  },
  {
    step: "07",
    number: "07",
    title: "Finishing",
    shortDesc: "Enzyme washing, steam pressing and trim application.",
    fullDesc: "Eco-wash treatments, controlled drying, thread trimming, industrial pressing and brand label attachment per buyer specs.",
    image: boysTee,
    highlights: ["Pre-shrinkage steam tunnel", "Label insertion", "Thread cleaning", "Brand trim assembly"],
  },
  {
    step: "08",
    number: "08",
    title: "Quality Control",
    shortDesc: "4-point inspection and metal detection clearance.",
    fullDesc: "AQL 2.5/4.0 inspections covering dimensions, seam strength, colour fastness and 100% dual-head needle detection.",
    image: quality,
    highlights: ["AQL 2.5 standards", "100% Metal detection", "Button pull-tests", "Wash fastness tests"],
  },
  {
    step: "09",
    number: "09",
    title: "Packing",
    shortDesc: "Barcoded carton packing and export logistics.",
    fullDesc: "Moisture-barrier polybags, barcoding, ratio-packed export cartons and palletized freight dispatch.",
    image: girlsTee,
    highlights: ["Custom barcode hangtags", "Recycled polybags", "Moisture barrier packs", "Container loading"],
  },
];

export const processes = manufacturingStages.map((s) => s.title);

export const qualitySteps = [
  "Material Checking — GSM, shade variation, dimensional stability",
  "Measurement Verification — Size spec audit against approved tech pack",
  "Print Inspection — Wash durability, rub fastness, registration clarity",
  "Embroidery Inspection — Tension, trims, skin-safe backing integrity",
  "Stitching Inspection — SPI count, seam elasticity, puckering control",
  "Finishing — Steam pressing, trim placement, hygiene check",
  "Final Inspection — AQL 2.5 statistical audit by independent QA",
  "Packing — 100% needle detection, barcode scan, carton ratios",
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
  { category: "Packaging", title: "Export Tagging", description: "Retail-ready packaging with buyer hangtags.", image: quality },
];

export const whyMuthuPoints = [
  {
    number: "01",
    title: "Quality",
    description: "Multi-tier checks, 100% needle detection and AQL standards — zero compromise on comfort and safety.",
  },
  {
    number: "02",
    title: "Design",
    description: "In-house technical team translating trends and tech packs into buyer-ready production patterns.",
  },
  {
    number: "03",
    title: "Customization",
    description: "Bespoke fabric, Pantone dyeing, tailored sizing, custom trims and retail packaging.",
  },
  {
    number: "04",
    title: "OEM",
    description: "End-to-end manufacturing for global labels with strict adherence to proprietary specifications.",
  },
  {
    number: "05",
    title: "Private Label",
    description: "Turnkey collections for retailers and brands seeking premium market-ready kidswear.",
  },
  {
    number: "06",
    title: "Reliability",
    description: "Disciplined scheduling, transparent tracking and dependable on-time delivery.",
  },
];

export const oemSteps = [
  { number: "01", title: "Share Your Idea", desc: "Tech pack, sample, sketch or moodboard." },
  { number: "02", title: "Development", desc: "Fabric sourcing, lab dips, pattern grading." },
  { number: "03", title: "Sampling", desc: "Proto and fit samples for review." },
  { number: "04", title: "Approval", desc: "Pre-production sample signed off for bulk." },
  { number: "05", title: "Production", desc: "Precision cutting, printing, embroidery, stitching." },
  { number: "06", title: "Quality Check", desc: "AQL 2.5, wash tests, 100% metal scan." },
  { number: "07", title: "Delivery", desc: "Custom packaged, barcoded, dispatched." },
];