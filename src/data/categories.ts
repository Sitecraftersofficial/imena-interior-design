import type { Category } from "@/lib/types";

// Generated + uploaded imagery
import dinerImg from "@/assets/category/diner.jpeg";
import doorsImg from "@/assets/category/doors.jpeg";
import furnitureImg from "@/assets/category/furniture.jpeg";
import kitchenImg from "@/assets/category/kitchen.jpeg";
import outdoorImg from "@/assets/category/outdoor.jpeg";
import staircaseImg from "@/assets/category/staircase.jpeg";
import wallPanelsImg from "@/assets/category/wall-panelspartitions.jpeg";
import wardrobeImg from "@/assets/category/wardrobe.jpeg";

// Categories are data. Add a new entry to introduce a new department; product
// pages/grids read the same source of truth. Order below is display order.
export const categories: Category[] = [
  {
    slug: "doors",
    name: "Doors",
    tagline: "The main entrance.",
    description:
      "Pivot, entrance and interior doors engineered from ebonized oak, walnut and architectural glass.",
    image: doorsImg,
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    tagline: "Outdoor spaces and features.",
    description: "Garden features, outdoor structures and landscape elements for your property.",
    image: outdoorImg,
  },
  {
    slug: "wall-panels",
    name: "Wall Panels/Partition",
    tagline: "Wall design.",
    description: "Fluted walnut, oak and acoustic panels for entrance halls, bedrooms and lounges.",
    image: wallPanelsImg,
  },
  {
    slug: "diner",
    name: "Diner",
    tagline: "Dining spaces.",
    description: "Elegant dining tables and furniture for sophisticated dining experiences.",
    image: dinerImg,
  },
  {
    slug: "staircase",
    name: "Staircase",
    tagline: "Custom staircases.",
    description: "Bespoke staircase designs combining functionality with architectural beauty.",
    image: staircaseImg,
  },
  {
    slug: "furniture",
    name: "Furniture",
    tagline: "Quality furniture.",
    description: "Sofas, tables and lounge chairs from independent European workshops.",
    image: furnitureImg,
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    tagline: "Custom kitchens.",
    description: "Bespoke kitchen systems in lacquered stone, brushed metal and warm timber.",
    image: kitchenImg,
  },
  {
    slug: "wardrobes",
    name: "Wardrobes",
    tagline: "Smart storage.",
    description: "Full-height wardrobes and dressing rooms in walnut, smoked glass and brass.",
    image: wardrobeImg,
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
