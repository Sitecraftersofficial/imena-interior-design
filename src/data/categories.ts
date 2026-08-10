import type { Category } from "@/lib/types";

// Generated + uploaded imagery
import heroDoor from "@/assets/hero-door.jpg";

// Categories are data. Add a new entry to introduce a new department; product
// pages/grids read the same source of truth. Order below is display order.
export const categories: Category[] = [
  {
    slug: "doors",
    name: "Doors",
    tagline: "The main entrance.",
    description:
      "Pivot, entrance and interior doors engineered from ebonized oak, walnut and architectural glass.",
    image: heroDoor,
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    tagline: "Outdoor spaces and features.",
    description:
      "Garden features, outdoor structures and landscape elements for your property.",
    image: heroDoor,
  },
  {
    slug: "wall-panels",
    name: "Wall Panels/Partition",
    tagline: "Wall design.",
    description:
      "Fluted walnut, oak and acoustic panels for entrance halls, bedrooms and lounges.",
    image: heroDoor,
  },
  {
    slug: "furniture",
    name: "Furniture",
    tagline: "Quality furniture.",
    description:
      "Sofas, tables and lounge chairs from independent European workshops.",
    image: heroDoor,
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    tagline: "Custom kitchens.",
    description:
      "Bespoke kitchen systems in lacquered stone, brushed metal and warm timber.",
    image: heroDoor,
  },
  {
    slug: "wardrobes",
    name: "Wardrobes",
    tagline: "Smart storage.",
    description:
      "Full-height wardrobes and dressing rooms in walnut, smoked glass and brass.",
    image: heroDoor,
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
