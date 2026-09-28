import hero from "@/assets/kidswear-hero.jpg";
import factory from "@/assets/factory-craft.jpg";
import editorial from "@/assets/kidswear-editorial.jpg";
import detail from "@/assets/garment-detail.jpg";
import boysTee from "@/assets/boys-tee.jpg";
import girlsTee from "@/assets/girls-tee.jpg";
import printedSet from "@/assets/printed-set.jpg";
import quality from "@/assets/quality-control.jpg";

export const images = { hero, factory, editorial, detail, boysTee, girlsTee, printedSet, quality };

export const products = [
  { slug: "signature-boys-tee", name: "Signature Boys’ Tee", category: "Boys · T-Shirts", tags: ["Boys", "T-Shirts", "Casualwear"], description: "A clean everyday silhouette developed for custom graphics, trims and brand programmes.", image: boysTee, fabric: "Customisable cotton jersey", colours: "Developed to buyer specification", sizes: "Custom size range", print: "Screen, transfer and placement print options", embroidery: "Placement embroidery available", customization: "Fit, colour, artwork, labels and packaging" },
  { slug: "embroidered-girls-tee", name: "Embroidered Girls’ Tee", category: "Girls · Embroidered", tags: ["Girls", "T-Shirts", "Embroidered"], description: "A refined jersey essential elevated with delicate, production-ready embroidery.", image: girlsTee, fabric: "Customisable cotton jersey", colours: "Developed to buyer specification", sizes: "Custom size range", print: "Optional", embroidery: "Custom motif, placement and thread colours", customization: "Fit, colour, trims, labels and packaging" },
  { slug: "botanical-coord-set", name: "Botanical Co-Ord Set", category: "Girls · Printed · Co-Ord Sets", tags: ["Girls", "Co-Ord Sets", "Printed"], description: "A coordinated set balancing expressive print development with an easy modern fit.", image: printedSet, fabric: "Woven cotton options", colours: "Custom print colourways", sizes: "Custom size range", print: "All-over print development", embroidery: "Optional accents", customization: "Silhouette, print, labels and packaging" },
  { slug: "atelier-embroidered-set", name: "Atelier Embroidered Set", category: "Girls · Cord Sets · Embroidered", tags: ["Girls", "Cord Sets", "Embroidered"], description: "An elevated set showcasing considered embroidery, proportion and finishing.", image: editorial, fabric: "Customisable woven cotton", colours: "Developed to buyer specification", sizes: "Custom size range", print: "Optional", embroidery: "Custom artwork and thread development", customization: "Full private-label development" },
];

export const processes = ["Fabric Selection", "Design Development", "Pattern & Cutting", "Printing", "Embroidery", "Stitching", "Finishing", "Quality Control", "Packing"];
export const qualitySteps = ["Material checking", "Measurement verification", "Print inspection", "Embroidery inspection", "Stitching inspection", "Finishing", "Final inspection", "Packing verification"];

export const collections = [
  { name: "Spring / Summer", description: "Lightweight silhouettes, coordinated separates and considered surface detail.", image: hero },
  { name: "New Developments", description: "Our latest explorations in print, embroidery, proportion and finishing.", image: editorial },
  { name: "Autumn / Winter", description: "Layer-ready shapes and adaptable fabric stories for cooler seasons.", image: printedSet },
];

export const gallery = [
  { category: "Kidswear", title: "Editorial collection", image: hero },
  { category: "Factory", title: "Stitching floor", image: factory },
  { category: "Products", title: "Atelier co-ord", image: editorial },
  { category: "Embroidery", title: "Handfeel and detail", image: detail },
  { category: "Quality", title: "Measurement verification", image: quality },
  { category: "Printing", title: "Botanical development", image: printedSet },
  { category: "Kidswear", title: "Boys’ essentials", image: boysTee },
  { category: "Products", title: "Girls’ essentials", image: girlsTee },
];