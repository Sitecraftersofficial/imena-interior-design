import type { Product } from "@/lib/types";

// User-uploaded photography — used as real products throughout the site.
// Note: Only using images that have actual files in assets

// Studio-generated product photography.
import gHandleBrass from "@/assets/products/handle-brass-lever.jpg";
import gKnobBrass from "@/assets/products/knob-brass-round.jpg";
import gLockBrass from "@/assets/products/lock-brass-mortise.jpg";
import gPanelWalnut from "@/assets/products/panel-walnut-fluted.jpg";
import gFloorMarble from "@/assets/products/floor-marble-ivory.jpg";
import gPendant from "@/assets/products/pendant-apex.jpg";
import gWardrobe from "@/assets/products/wardrobe-walnut-glass.jpg";
import gBath from "@/assets/products/bath-stone-tub.jpg";
import gTable from "@/assets/products/table-stone-coffee.jpg";
import dgof from "@/assets/products/src/assets/products/vp.jpg";
/**\
 * SINGLE SOURCE OF TRUTH for the product catalog.
 * To add a product: append a new object to this array. All pages, grids,
 * category counts, search, filters, wishlist and Project Builder will pick
 * it up automatically. No component code needs to change.
 *
 * When the catalog moves to a database, replace this export with a query —
 * component contracts stay the same because everything reads `Product`.
 */
export const products: Product[] = [
  // ── Doors ──────────────────────────────────────────────────────────
  {
    id: "door-001",
    slug: "monolith-ebonised-pivot",
    name: "Monolith Pivot",
    category: "doors",
    subcategory: "pivot",
    productType: "door",
    image: dgof,
    shortDescription: "Ebonised oak pivot door with satin brass pull.",
    description:
      "A single monolithic leaf on a concealed floor pivot. Solid ebonised oak with an ivory-lit reveal and a full-height satin brass pull, engineered for openings up to 3m.",
    material: "Ebonised Oak",
    color: "Charcoal",
    finishes: ["Ebonised", "Smoked Walnut", "Natural Oak"],
    dimensions: "1200 × 2700 × 60 mm",
    specifications: {
      "Core": "Engineered timber, honeycomb",
      "Hinge": "Concealed floor pivot",
      "Weight": "84 kg",
    },
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["entrance", "pivot", "oak"],
    relatedProducts: ["hw-001", "hw-004"],
  },
  {
    id: "door-002",
    slug: "veil-frosted-double",
    name: "Veil Double Door",
    category: "doors",
    subcategory: "entrance",
    productType: "door",
    image: "/placeholder-door.svg",
    shortDescription: "Walnut-framed double doors with etched frosted glass.",
    description:
      "Twin walnut-framed doors with etched frosted glass panels and slim polished pulls — a discreet, luminous entrance.",
    material: "American Walnut · Etched Glass",
    color: "Walnut",
    finishes: ["Natural Walnut", "Fumed Oak"],
    dimensions: "1600 × 2400 mm",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["entrance", "glass", "double"],
  },
  {
    id: "door-003",
    slug: "linear-slat-glass",
    name: "Linear Slat & Glass",
    category: "doors",
    subcategory: "entrance",
    productType: "door",
    image: "/placeholder-door.svg",
    shortDescription: "Slatted walnut entrance door with amber sidelights.",
    description:
      "Horizontally slatted walnut with flanking sidelights that borrow light from the interior. A warm, hospitable arrival.",
    material: "American Walnut",
    finishes: ["Natural Walnut", "Ebonised"],
    dimensions: "1000 × 2400 mm",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: false,
    tags: ["entrance", "slatted", "sidelight"],
  },
  {
    id: "door-004",
    slug: "atlas-double-walnut",
    name: "Atlas Double Walnut",
    category: "doors",
    subcategory: "entrance",
    productType: "door",
    image: "/placeholder-door.svg",
    shortDescription: "Twin walnut doors with blackened iron drop pulls.",
    description:
      "Solid walnut double doors with blackened iron drop pulls — architectural weight with quiet detailing.",
    material: "Solid Walnut",
    finishes: ["Natural Walnut", "Rosewood", "Ebonised"],
    dimensions: "1400 × 2400 mm",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["entrance", "double", "walnut"],
  },

  // ── Handles ────────────────────────────────────────────────────────
  {
    id: "hw-001",
    slug: "veloce-knurled-lever",
    name: "Veloce Knurled Lever",
    category: "handles",
    productType: "handle",
    image: gHandleBrass,
    shortDescription: "Knurled solid brass lever, satin champagne finish.",
    description:
      "A knurled cylindrical grip machined from solid brass, mounted on a slim disc rose. Precision-turned and hand-finished.",
    material: "Solid Brass",
    finishes: ["Satin Brass", "Polished Brass", "Gunmetal", "Bronze"],
    dimensions: "132 × 60 mm",
    specifications: {
      "Backset": "56 mm",
      "Spindle": "8 mm square",
      "Rose": "52 mm disc",
    },
    price: 340,
    priceType: "from",
    currency: "EUR",
    availability: "available",
    stockStatus: "in-stock",
    featured: true,
    tags: ["brass", "lever", "knurled"],
  },
  {
    id: "hw-002",
    slug: "linear-cabinet-grip",
    name: "Linear Cabinet Grip",
    category: "handles",
    subcategory: "cabinet",
    productType: "handle",
    image: gHandleBrass,
    shortDescription: "Slim linear cabinet grip in smoked nickel.",
    description:
      "A linear cabinet pull machined from a single billet, available in modular lengths from 128 to 640 mm.",
    material: "Machined Aluminium",
    finishes: ["Smoked Nickel", "Satin Brass", "Matte Black"],
    dimensions: "128–640 mm",
    price: 88,
    priceType: "from",
    currency: "EUR",
    availability: "available",
    stockStatus: "in-stock",
    featured: false,
    tags: ["cabinet", "linear"],
  },

  // ── Knobs ──────────────────────────────────────────────────────────
  {
    id: "hw-003",
    slug: "orb-brass-knob",
    name: "Orb Brass Knob",
    category: "knobs",
    productType: "knob",
    image: gKnobBrass,
    shortDescription: "Turned solid brass knob on a stepped rose.",
    description:
      "A hemispherical brass knob on a stepped rose. Weighted for a decisive close.",
    material: "Solid Brass",
    finishes: ["Satin Brass", "Antique Brass", "Polished Brass"],
    dimensions: "Ø 52 mm",
    price: 210,
    priceType: "from",
    currency: "EUR",
    availability: "available",
    stockStatus: "in-stock",
    featured: true,
    tags: ["brass", "knob"],
  },

  // ── Locks ──────────────────────────────────────────────────────────
  {
    id: "hw-004",
    slug: "mortise-solid-brass-deadbolt",
    name: "Mortise Solid Brass Deadbolt",
    category: "locks",
    productType: "lock",
    image: gLockBrass,
    shortDescription: "Full-brass mortise deadbolt with keyed cylinder.",
    description:
      "A full-brass mortise deadbolt with a keyed cylinder, matched to any Imena handle set.",
    material: "Solid Brass",
    finishes: ["Satin Brass", "Polished Brass", "Gunmetal"],
    dimensions: "165 × 22 mm backset",
    price: 420,
    priceType: "from",
    currency: "EUR",
    availability: "available",
    stockStatus: "in-stock",
    featured: false,
    tags: ["security", "brass"],
  },

  // ── Wall Panels ────────────────────────────────────────────────────
  {
    id: "sf-001",
    slug: "vertical-rift-walnut-panel",
    name: "Vertical Rift Walnut Panel",
    category: "wall-panels",
    productType: "panel",
    image: gPanelWalnut,
    shortDescription: "Warm walnut fluted panel with concealed LED grazing.",
    description:
      "Rift-cut walnut panels with vertical fins and an integrated LED reveal. Supplied in 2.7m sheets, custom cuts on request.",
    material: "American Walnut",
    finishes: ["Natural Walnut", "Fumed Oak", "Ebonised Oak"],
    dimensions: "2700 × 600 × 22 mm",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["panel", "acoustic"],
  },
  {
    id: "sf-002",
    slug: "showroom-panel-wall",
    name: "Atelier Feature Wall",
    category: "wall-panels",
    productType: "panel",
    image: gPanelWalnut,
    shortDescription: "Panelled feature wall system, atelier composition.",
    description:
      "A modular feature wall composed of raised panels, floating shelves and integrated warm lighting.",
    material: "Engineered Timber",
    finishes: ["Walnut", "Oak", "Rosewood"],
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: false,
    tags: ["panel", "millwork"],
  },

  // ── Flooring ───────────────────────────────────────────────────────
  {
    id: "sf-003",
    slug: "ivory-marble-large-format",
    name: "Ivory Marble, Large Format",
    category: "flooring",
    productType: "floor",
    image: gFloorMarble,
    shortDescription: "Large-format polished ivory marble with soft veining.",
    description:
      "Polished ivory marble in 1200 × 600 mm slabs with delicate grey veining. Suited to entrance halls, kitchens and bathrooms.",
    material: "Natural Marble",
    finishes: ["Polished", "Honed"],
    dimensions: "1200 × 600 × 20 mm",
    price: 240,
    priceType: "from",
    currency: "EUR",
    availability: "available",
    stockStatus: "in-stock",
    featured: true,
    tags: ["marble", "stone"],
  },

  // ── Lighting ───────────────────────────────────────────────────────
  {
    id: "li-001",
    slug: "apex-pendant",
    name: "Apex Pendant",
    category: "lighting",
    productType: "pendant",
    image: gPendant,
    shortDescription: "Sculptural matte-black pendant with warm interior wash.",
    description:
      "A tapered aluminium pendant with a warm brushed interior. Dimmable warm-to-white, integrated driver.",
    material: "Spun Aluminium",
    color: "Matte Black",
    finishes: ["Matte Black", "Bronze", "Ivory"],
    dimensions: "Ø 380 × H 520 mm",
    price: 890,
    priceType: "from",
    currency: "EUR",
    availability: "available",
    stockStatus: "in-stock",
    featured: true,
    tags: ["pendant", "kitchen", "dining"],
  },

  // ── Furniture ──────────────────────────────────────────────────────
  {
    id: "fn-001",
    slug: "nuvola-boucle-sofa",
    name: "Nuvola Bouclé Sofa",
    category: "furniture",
    subcategory: "seating",
    productType: "sofa",
    image: "/placeholder-furniture.svg",
    shortDescription: "Curved bouclé sofa with sculpted walnut legs.",
    description:
      "A generously proportioned bouclé sofa with hand-carved walnut legs. Modular configurations, custom fabrics available on request.",
    material: "Bouclé wool · Solid walnut",
    finishes: ["Ivory Bouclé", "Charcoal Bouclé", "Camel Leather"],
    dimensions: "2400 × 1000 × 780 mm",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["seating", "sofa", "boucle"],
  },
  {
    id: "fn-002",
    slug: "obsidian-stone-coffee-table",
    name: "Obsidian Stone Coffee Table",
    category: "furniture",
    subcategory: "tables",
    productType: "table",
    image: gTable,
    shortDescription: "Sculpted black marble coffee table with cast base.",
    description:
      "A single slab of black marble on a hand-cast sculptural base. Each piece is unique to the vein of the stone.",
    material: "Nero Marquina Marble",
    finishes: ["Polished", "Honed"],
    dimensions: "1400 × 700 × 340 mm",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: false,
    tags: ["table", "marble"],
  },

  // ── Kitchens ───────────────────────────────────────────────────────
  {
    id: "kt-001",
    slug: "atelier-open-kitchen",
    name: "Atelier Open Kitchen",
    category: "kitchens",
    productType: "kitchen",
    image: "/placeholder-kitchen.svg",
    shortDescription: "Full graphite kitchen system with island and pendants.",
    description:
      "A fully bespoke kitchen system in matte graphite with a quartz island, integrated appliances and a run of sculptural pendants.",
    material: "Lacquered MDF · Quartz",
    finishes: ["Graphite", "Ivory", "Bronze"],
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["kitchen", "island"],
  },
  {
    id: "kt-002",
    slug: "hearth-warm-kitchen",
    name: "Hearth Warm Kitchen",
    category: "kitchens",
    productType: "kitchen",
    image: "/placeholder-kitchen.svg",
    shortDescription: "Warm graphite kitchen with walnut framing and bar.",
    description:
      "A compact bespoke kitchen with a walnut opening, dropped pendants and a black stone breakfast bar.",
    material: "Lacquered Timber · Granite",
    finishes: ["Graphite", "Walnut", "Ebony"],
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: false,
    tags: ["kitchen", "bar"],
  },

  // ── Wardrobes ──────────────────────────────────────────────────────
  {
    id: "wr-001",
    slug: "smoked-glass-walnut-wardrobe",
    name: "Smoked Glass Walnut Wardrobe",
    category: "wardrobes",
    productType: "wardrobe",
    image: gWardrobe,
    shortDescription: "Full-height wardrobe with walnut frame and smoked glass.",
    description:
      "A modular full-height wardrobe with walnut framing, smoked glass panels and slim brushed brass pulls.",
    material: "American Walnut · Smoked Glass",
    finishes: ["Walnut · Smoked", "Ebonised · Bronze Glass"],
    dimensions: "Custom to opening",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["storage", "walnut"],
  },

  // ── Bathrooms ──────────────────────────────────────────────────────
  {
    id: "ba-001",
    slug: "monolith-stone-tub",
    name: "Monolith Stone Tub",
    category: "bathrooms",
    productType: "bath",
    image: gBath,
    shortDescription: "Freestanding matte stone tub with brass floor faucet.",
    description:
      "A freestanding cast stone tub in warm charcoal, paired with a brushed brass floor-mounted faucet.",
    material: "Cast Stone",
    finishes: ["Charcoal", "Ivory", "Slate"],
    dimensions: "1700 × 780 × 560 mm",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: true,
    tags: ["bath", "stone"],
  },

  // ── Accessories ────────────────────────────────────────────────────
  {
    id: "ac-001",
    slug: "atelier-vignette",
    name: "Showroom Vignette",
    category: "accessories",
    productType: "styling",
    image: "/placeholder-accessory.svg",
    shortDescription: "Curated styling composition from our Milan atelier.",
    description:
      "A styled composition of doors, panels and furniture from the Imena atelier — available to specify as a complete look.",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: false,
    tags: ["styling"],
  },
  {
    id: "ac-002",
    slug: "showroom-doors-composition",
    name: "Door Composition N°01",
    category: "accessories",
    productType: "styling",
    image: "/placeholder-accessory.svg",
    shortDescription: "A composition of Imena doors as showroom art.",
    description:
      "A curated showroom composition of door leaves and framing — commissioned as sculpture, lit as architecture.",
    priceType: "request-quote",
    price: null,
    availability: "made-to-order",
    stockStatus: "in-stock",
    featured: false,
    tags: ["installation"],
  },
];

// ── Selectors ─────────────────────────────────────────────────────────

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productById = (id: string) =>
  products.find((p) => p.id === id);

export const productsByCategory = (categorySlug: string) =>
  products.filter((p) => p.category === categorySlug);

export const featuredProducts = () => products.filter((p) => p.featured);

export const categoryCount = (categorySlug: string) =>
  productsByCategory(categorySlug).length;

export const searchProducts = (query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.material?.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
    );
  });
};

export const allMaterials = () =>
  Array.from(new Set(products.flatMap((p) => (p.material ? [p.material] : []))));

export const allFinishes = () =>
  Array.from(new Set(products.flatMap((p) => p.finishes ?? [])));
