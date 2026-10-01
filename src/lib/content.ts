import hero from "@/assets/kidswear-hero.jpg";
import factory from "@/assets/factory-craft.jpg";
import editorial from "@/assets/kidswear-editorial.jpg";
import detail from "@/assets/garment-detail.jpg";
import boysTee from "@/assets/boys-tee.jpg";
import girlsTee from "@/assets/girls-tee.jpg";
import printedSet from "@/assets/printed-set.jpg";
import quality from "@/assets/quality-control.jpg";

export const images = {
  hero,
  factory,
  editorial,
  detail,
  boysTee,
  girlsTee,
  printedSet,
  quality,
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
    name: "Signature Boys’ Crew Tee",
    category: "Boys · T-Shirts · Casualwear",
    tags: ["Boys", "T-Shirts", "Casualwear"],
    description: "A clean, modern silhouette developed for custom graphics, specialized wash treatments and private-label retail programmes.",
    image: boysTee,
    galleryImages: [boysTee, detail, factory],
    fabric: "100% Combed Compact Cotton Jersey (160 - 200 GSM) or Organic Blends",
    colours: "Pantone-matched to buyer specification (reactive dyed)",
    sizes: "2Y - 14Y (custom sizing specs and graded charts available)",
    print: "Water-base, Plastisol, Discharge, High-Density and Pigment screen printing",
    embroidery: "Chest placement, sleeve embroidery and woven badging",
    customization: "Silhouette, neck rib, inner neck tape, custom care labels and barcoded polybags",
    featured: true,
    collectionSlug: "spring-summer",
    specifications: [
      ["Fabric Type", "100% Combed Cotton Single Jersey"],
      ["Available GSM", "160 GSM, 180 GSM, 200 GSM"],
      ["Dyeing Standard", "OEKOTEX compliant reactive dyeing"],
      ["Shrinkage Control", "Pre-washed & stabilized (< 5% residual shrinkage)"],
      ["Print Options", "Silkscreen, puff, heat transfer, discharge"],
      ["Custom Trims", "Woven brand label, heat-seal label, custom hangtags"],
    ],
  },
  {
    slug: "embroidered-girls-tee",
    name: "Embroidered Girls’ Flutter Tee",
    category: "Girls · T-Shirts · Embroidered",
    tags: ["Girls", "T-Shirts", "Embroidered", "Casualwear"],
    description: "A refined jersey essential elevated with delicate multi-head embroidery, soft-touch back fusing, and premium neck finishing.",
    image: girlsTee,
    galleryImages: [girlsTee, detail, quality],
    fabric: "95% Cotton / 5% Elastane Stretch Jersey (170 - 190 GSM)",
    colours: "Curated seasonal pastel and vibrant buyer palettes",
    sizes: "12M - 12Y (baby to tween custom grading)",
    print: "Optional placement foil or water-base accents",
    embroidery: "Direct embroidery, 3D floral threadwork, metallic thread and appliqué",
    customization: "Custom sleeve construction, scalloped hems, back keyhole closures",
    featured: true,
    collectionSlug: "spring-summer",
    specifications: [
      ["Fabric Type", "Cotton Elastane Single Jersey with peach finish"],
      ["Handfeel", "Ultra-soft bio-polished touch for sensitive skin"],
      ["Embroidery Backing", "Skin-friendly soft tear-away backing for comfort"],
      ["Seam Construction", "Soft 4-thread overlock with reinforced neckline"],
      ["Testing Parameters", "Colour fastness to washing (Grade 4+), saliva test compliance"],
      ["Branding", "Custom satin loop label or printed neck transfer"],
    ],
  },
  {
    slug: "botanical-coord-set",
    name: "Botanical Co-Ord Two-Piece Set",
    category: "Girls · Co-Ord Sets · Printed",
    tags: ["Girls", "Co-Ord Sets", "Printed"],
    description: "A harmonized two-piece coordinated set balancing expressive botanical all-over print development with comfortable modern silhouettes.",
    image: printedSet,
    galleryImages: [printedSet, detail, editorial],
    fabric: "100% Breathable Cotton Poplin or Viscose Cotton Blend",
    colours: "Rotary or digital reactive all-over print colourways",
    sizes: "18M - 10Y",
    print: "AOP (All Over Print) rotary reactive screen or high-resolution digital print",
    embroidery: "Optional tonal contrast embroidery at collar or pocket",
    customization: "Full coordinated set matching (top + bottom), button selection, elastic waistband",
    featured: true,
    collectionSlug: "spring-summer",
    specifications: [
      ["Garment Type", "Matching 2-piece top and relaxed shorts/trousers"],
      ["Print Method", "Rotary cylinder or digital reactive printing"],
      ["Fasteners", "Non-toxic shell buttons, certified child-safe snaps"],
      ["Waistband", "Enclosed soft elastic with decorative cotton drawstring"],
      ["Packaging", "Set hanger pack, branded belly band or zip lock pouch"],
      ["Compliance", "Zero toxic chemicals, nickel-free metal trims"],
    ],
  },
  {
    slug: "atelier-embroidered-set",
    name: "Atelier Tailored Cord Set",
    category: "Co-Ord Sets · Cord Sets · Embroidered",
    tags: ["Co-Ord Sets", "Cord Sets", "Embroidered", "Boys", "Girls"],
    description: "An elevated premium corduroy and textured cotton set showcasing considered artisanal embroidery, exact proportion and luxury boutique finishing.",
    image: editorial,
    galleryImages: [editorial, detail, factory],
    fabric: "Baby Corduroy (21-wale) or Premium Heavy French Terry",
    colours: "Earthy tones, deep navy, champagne beige and sage green",
    sizes: "2Y - 12Y",
    print: "Subtle vintage wash or interior pocket lining prints",
    embroidery: "Dense chain-stitch embroidery and chenille patches",
    customization: "Full OEM private label development from custom fabric weaving to packaging",
    featured: true,
    collectionSlug: "new-developments",
    specifications: [
      ["Fabric Type", "Fine-wale 100% Cotton Babycord or Cotton French Terry"],
      ["Washing Effect", "Garment enzyme wash for vintage drape and soft touch"],
      ["Embroidery", "Precision multi-needle chain stitch and monogramming"],
      ["Pockets", "Functional slant pockets with bar-tack reinforcement"],
      ["Hardware", "Antique brass finish child-safe buttons"],
      ["Custom Trims", "Embossed leather patch or high-definition woven damask label"],
    ],
  },
  {
    slug: "organic-everyday-pullover",
    name: "Heritage Fleece Pullover",
    category: "Boys · Casualwear · Embroidered",
    tags: ["Boys", "Casualwear", "Embroidered"],
    description: "Heavyweight brushed fleece sweatshirt engineered with drop shoulders, ribbed cuffs, and high-definition chest embroidery for winter drops.",
    image: factory,
    galleryImages: [factory, detail, quality],
    fabric: "100% Cotton Brushed Fleece (280 - 340 GSM)",
    colours: "Deep forest, oatmeal marl, washed navy and charcoal",
    sizes: "3Y - 14Y",
    print: "Flock print or tonal high-density plastisol",
    embroidery: "Bouclé appliqué, badge patch or flat satin embroidery",
    customization: "Custom dyed ribbing, herringbone inner neck tape, custom drawcords",
    featured: false,
    collectionSlug: "autumn-winter",
    specifications: [
      ["Fabric Weight", "320 GSM 100% Cotton Terry / Fleece"],
      ["Interior Finish", "Super-soft brushed thermal back"],
      ["Seaming", "Flatlock stitch on armholes and neck for zero chafe"],
      ["Drawcord Safety", "Fixed internal stitching compliant with international childrenswear safety codes"],
      ["Rib Trim", "2x2 Lycra rib knit on neck, cuffs, and hem"],
      ["Packaging", "Individual recycled PE polybag with silica gel pack"],
    ],
  },
  {
    slug: "resort-printed-cabana-set",
    name: "Resort Printed Cabana Set",
    category: "Boys · Co-Ord Sets · Printed",
    tags: ["Boys", "Co-Ord Sets", "Printed", "Casualwear"],
    description: "Relaxed Cuban collar shirt paired with matching easy shorts, designed with vibrant summer patterns and child-safe resin buttons.",
    image: printedSet,
    galleryImages: [printedSet, boysTee, detail],
    fabric: "100% Rayon Slub or Lightweight Linen Cotton (120 GSM)",
    colours: "Multi-colour bespoke digital art prints",
    sizes: "2Y - 12Y",
    print: "High definition reactive digital print",
    embroidery: "Minimal hem tonal branding",
    customization: "Custom matching print alignment at front placket and pockets",
    featured: false,
    collectionSlug: "spring-summer",
    specifications: [
      ["Collar Style", "Classic relaxed camp/Cuban collar"],
      ["Placket", "Clean fold-back front placket with pattern matching"],
      ["Shorts", "Elasticated waist with faux fly and back patch pocket"],
      ["Finishing", "French seams for clean interior luxury feel"],
      ["Buttons", "4-hole faux horn child-safe buttons (cross stitched)"],
      ["Lead Time", "Production scheduled per order quantity"],
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
    description: "Lightweight silhouettes, breathable cotton jerseys, coordinated two-piece sets and expressive botanical all-over prints.",
    image: hero,
    productCount: 4,
    highlight: "Airy cotton poplin, organic jerseys, soft sorbet pastels and vibrant tropical prints.",
    details: [
      "Combed compact jersey tees with UV protection wash",
      "Airy poplin and slub co-ord matching sets",
      "Child-safe water-based non-toxic printing",
      "Pastel and reactive garment dye programs",
    ],
  },
  {
    slug: "new-developments",
    name: "New Developments",
    season: "Innovations",
    description: "Our continuous technical explorations in multi-needle embroidery, specialty corduroy, innovative washes and tailored fits.",
    image: editorial,
    productCount: 3,
    highlight: "Multi-wale corduroy sets, chenille appliqués, structured oversized fits and eco-conscious dyes.",
    details: [
      "Artisanal chain-stitch and bouclé surface embellishments",
      "Garment-dyed and pigment vintage wash textures",
      "Premium zero-friction inner seam constructions",
      "Custom brand trims, heat-seals and luxury packaging",
    ],
  },
  {
    slug: "autumn-winter",
    name: "Autumn / Winter",
    season: "AW Warmth",
    description: "Layer-ready shapes, brushed cotton fleece pullovers, heavyweight joggers and rich earthy colour stories for cooler seasons.",
    image: printedSet,
    productCount: 2,
    highlight: "Brushed French terry, thermal waffle knits, deep jewel tones and protective storm rib cuffs.",
    details: [
      "Heavyweight 320+ GSM brushed cotton fleece",
      "Reinforced knee patches and double-needle topstitching",
      "International child safety compliant cords and closures",
      "Durable moisture-wicking and thermal retaining blends",
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
    shortDesc: "Curating certified yarn, compact cotton and specialty blends.",
    fullDesc: "We begin with rigorous yarn sourcing, choosing combed compact cotton, organic fibers, French terry, babycord, and elastane blends tailored to kidswear durability and ultra-soft skin contact.",
    image: detail,
    highlights: ["Combed Compact Cotton", "Bio-wash & Peach finishes", "Oeko-Tex Standard compliance", "Lab-dip colour matching"],
  },
  {
    step: "02",
    number: "02",
    title: "Design & Development",
    shortDesc: "Translating buyer briefs, tech packs and sketches into production patterns.",
    fullDesc: "Our technical pattern makers and designers convert design visions into precise graded CAD patterns, seam specifications, and tech packs engineered for high-efficiency mass production.",
    image: editorial,
    highlights: ["CAD pattern grading", "3D sample visualization", "Child ergonomic proportions", "Complete technical bill of materials"],
  },
  {
    step: "03",
    number: "03",
    title: "Pattern & Cutting",
    shortDesc: "Computerized lay planning and precision fabric cutting.",
    fullDesc: "High-precision CAD marker planning minimizes fabric waste before automated and semi-automated cutting systems ensure millimeter-exact panel cut accuracy across all size ranges.",
    image: factory,
    highlights: ["Computerized marker efficiency", "Zero bow-and-skew cut alignment", "Matched plaid & print cutting", "Strict batch bundling"],
  },
  {
    step: "04",
    number: "04",
    title: "Printing",
    shortDesc: "Eco-friendly water-based, plastisol, digital and all-over prints.",
    fullDesc: "Equipped for automated rotary all-over printing, high-precision flatbed screen printing, and pigment digital printing using non-toxic inks certified safe for infants and children.",
    image: printedSet,
    highlights: ["Child-safe non-toxic inks", "High-density & puff effects", "Discharge & water-base soft feel", "Rotary all-over printing"],
  },
  {
    step: "05",
    number: "05",
    title: "Embroidery",
    shortDesc: "Multi-head computerized embroidery with skin-safe backings.",
    fullDesc: "State-of-the-art multi-head embroidery machines create intricate chenille patches, flat satin stitch, 3D threadwork, and appliqué with soft tear-away backing that protects sensitive young skin.",
    image: detail,
    highlights: ["Multi-colour thread precision", "Appliqué & chenille work", "Skin-friendly soft backing", "Tensile pull tested motifs"],
  },
  {
    step: "06",
    number: "06",
    title: "Stitching",
    shortDesc: "Modular assembly lines with specialized sewing machines.",
    fullDesc: "Our sewing lines feature specialized automatic feed machines, 4-thread overlockers, flatlock units, and collar tape attachments to deliver strong, neat, chafe-free seams.",
    image: factory,
    highlights: ["Chafe-free flatlock seams", "Reinforced stress points & bar-tacks", "In-line inline defect checks", "Ergonomic operator workflows"],
  },
  {
    step: "07",
    number: "07",
    title: "Finishing",
    shortDesc: "Enzyme washing, steam tunnel press and trim application.",
    fullDesc: "Garments undergo eco-wash treatments, controlled tumble drying, thread trimming, industrial steam pressing, and brand label / swing tag attachment according to exact buyer manual specifications.",
    image: boysTee,
    highlights: ["Pre-shrinkage steam tunnel", "Tear-away & loop label insertion", "Thread suction & cleaning", "Accurate brand trim assembly"],
  },
  {
    step: "08",
    number: "08",
    title: "Quality Control",
    shortDesc: "4-point inspection system and metal detection clearance.",
    fullDesc: "Every single production batch passes comprehensive AQL 2.5/4.0 inspections covering dimensional measurements, seam strength, colour fastness, pull tests, and 100% dual-head needle detection.",
    image: quality,
    highlights: ["AQL 2.5 standards", "100% Needle / metal detection", "Pull-test on buttons & snaps", "Wash fastness lab tests"],
  },
  {
    step: "09",
    number: "09",
    title: "Packing",
    shortDesc: "Barcoded carton packing and international export logistics.",
    fullDesc: "Garments are folded in moisture-barrier polybags, barcoded, ratio-packed into heavy-duty export corrugated cartons, and palletized for smooth international freight dispatch.",
    image: girlsTee,
    highlights: ["Custom barcode hangtags", "Recycled biodegradable polybags", "Moisture barrier silica packs", "Export palletized container loading"],
  },
];

export const processes = manufacturingStages.map((s) => s.title);

export const qualitySteps = [
  "Material Checking (Yarn quality, GSM, shade variation, dimensional stability)",
  "Measurement Verification (Garment size spec audit against approved tech pack)",
  "Print Inspection (Wash durability, rub fastness, clarity and registration)",
  "Embroidery Inspection (Tension, thread trims, skin-safe backing integrity)",
  "Stitching Inspection (SPI count, seam elasticity, puckering prevention)",
  "Finishing (Steam pressing, trim placement and hygiene check)",
  "Final Inspection (AQL 2.5 statistical audit by independent QA team)",
  "Packing Verification (100% needle detection, barcode scan, carton ratios)",
];

export interface GalleryItem {
  category: "Factory" | "Products" | "Kidswear" | "Printing" | "Embroidery" | "Stitching" | "Quality" | "Packaging";
  title: string;
  description: string;
  image: string;
}

export const gallery: GalleryItem[] = [
  { category: "Kidswear", title: "Editorial Collection", description: "Seasonal kidswear range featuring layered coordination.", image: hero },
  { category: "Factory", title: "Stitching Floor Operations", description: "Modular assembly sewing floor organized for precision output.", image: factory },
  { category: "Products", title: "Atelier Corduroy Co-Ord", description: "Finished two-piece set with custom embroidery.", image: editorial },
  { category: "Embroidery", title: "High-Definition Threadwork", description: "Close-up handfeel inspection of multi-colour embroidery.", image: detail },
  { category: "Quality", title: "Measurement & Spec Audit", description: "Rigorous quality check on garment dimensions and stitching.", image: quality },
  { category: "Printing", title: "Botanical Reactive Print", description: "All-over pattern development on pure cotton substrate.", image: printedSet },
  { category: "Kidswear", title: "Boys’ Essentials Programme", description: "Crew neck tee developed for private label distribution.", image: boysTee },
  { category: "Products", title: "Girls’ Flutter Sleeve Tee", description: "Delicate embroidery on peach-finish single jersey.", image: girlsTee },
  { category: "Stitching", title: "Flatlock Seam Construction", description: "Precision seam elasticity designed for active kidswear.", image: factory },
  { category: "Packaging", title: "Export Barcode Tagging", description: "Ready-for-retail packaging with custom buyer hangtags.", image: quality },
];

export const whyMuthuPoints = [
  {
    number: "01",
    title: "Quality",
    description: "Stringent multi-tier quality checks, 100% needle detection, and AQL standards ensuring zero compromise for kids' comfort and safety.",
  },
  {
    number: "02",
    title: "Design Development",
    description: "In-house technical design team translating trends, tech packs and sketches into buyer-ready samples and production patterns.",
  },
  {
    number: "03",
    title: "Customization",
    description: "Bespoke fabric knitting, customized pantone dyeing, tailored sizing charts, custom trims, labels and retail packaging.",
  },
  {
    number: "04",
    title: "OEM",
    description: "Complete end-to-end manufacturing for global kidswear labels with strict adherence to client proprietary designs and specifications.",
  },
  {
    number: "05",
    title: "Private Label",
    description: "Turnkey private-label collections for retailers and emerging brands looking for premium market-ready kidswear lines.",
  },
  {
    number: "06",
    title: "Reliable Production",
    description: "Disciplined production scheduling, transparent progress tracking, and dependable on-time export delivery.",
  },
];

export const oemSteps = [
  { number: "01", title: "Share Your Idea", desc: "Send your tech pack, physical sample, sketches or inspirational moodboard." },
  { number: "02", title: "Product Development", desc: "We source fabrics, prepare lab dips, grade patterns and develop artwork." },
  { number: "03", title: "Sample Creation", desc: "Proto samples and fit samples crafted for your tactile review and testing." },
  { number: "04", title: "Approval & Fit Sign-off", desc: "Refinements confirmed, pre-production sample (PPS) approved for bulk." },
  { number: "05", title: "Bulk Production", desc: "Precision cutting, printing, embroidery and stitching on dedicated lines." },
  { number: "06", title: "Quality & Needle Check", desc: "AQL 2.5 inspection, wash tests, button pull tests and 100% metal scan." },
  { number: "07", title: "Delivery & Export", desc: "Custom packaged, barcoded and dispatched via air or sea freight." },
];