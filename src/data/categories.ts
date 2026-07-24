import type { Category } from "@/lib/types";

// Generated + uploaded imagery
import doorOakPivot from "@/assets/products/door-oak-pivot.jpg.asset.json";
import handleBrass from "@/assets/products/handle-brass-lever.jpg";
import lockBrass from "@/assets/products/lock-brass-mortise.jpg";
import panelWalnut from "@/assets/products/panel-walnut-fluted.jpg";
import floorMarble from "@/assets/products/floor-marble-ivory.jpg";
import pendant from "@/assets/products/pendant-apex.jpg";
import sofa from "@/assets/products/sofa-boucle.jpg.asset.json";
import kitchen from "@/assets/products/kitchen-modern.jpg.asset.json";
import wardrobe from "@/assets/products/wardrobe-walnut-glass.jpg";
import bath from "@/assets/products/bath-stone-tub.jpg";
import knob from "@/assets/products/knob-brass-round.jpg";
import table from "@/assets/products/table-stone-coffee.jpg";

// Categories are data. Add a new entry to introduce a new department; product
// pages/grids read the same source of truth. Order below is display order.
export const categories: Category[] = [
  {
    slug: "doors",
    name: "Doors",
    tagline: "The threshold, considered.",
    description:
      "Pivot, entrance and interior doors engineered from ebonized oak, walnut and architectural glass.",
    image: doorOakPivot.url,
  },
  {
    slug: "handles",
    name: "Handles",
    tagline: "Where the hand meets the house.",
    description:
      "Sculpted lever handles and pulls in solid brass, gunmetal and hand-brushed bronze.",
    image: handleBrass,
  },
  {
    slug: "knobs",
    name: "Knobs",
    tagline: "Quiet, tactile jewellery.",
    description:
      "Turned solid-brass knobs and cabinet pulls, machined to a jeweller's tolerance.",
    image: knob,
  },
  {
    slug: "locks",
    name: "Locks",
    tagline: "Discreet mechanical certainty.",
    description:
      "Mortise deadbolts, smart cylinders and architectural locking systems.",
    image: lockBrass,
  },
  {
    slug: "wall-panels",
    name: "Wall Panels",
    tagline: "Architecture as texture.",
    description:
      "Fluted walnut, oak and acoustic panels for entrance halls, bedrooms and lounges.",
    image: panelWalnut,
  },
  {
    slug: "flooring",
    name: "Flooring",
    tagline: "The ground beneath the room.",
    description:
      "Large-format stone, engineered wood and porcelain flooring in curated tones.",
    image: floorMarble,
  },
  {
    slug: "lighting",
    name: "Lighting",
    tagline: "The gesture of light.",
    description:
      "Sculptural pendants, sconces and architectural downlights with warm dim-to-black.",
    image: pendant,
  },
  {
    slug: "furniture",
    name: "Furniture",
    tagline: "Furnishing the silence.",
    description:
      "Sofas, tables and lounge chairs from independent European ateliers.",
    image: sofa.url,
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    tagline: "The heart, precisely built.",
    description:
      "Bespoke kitchen systems in lacquered stone, brushed metal and warm timber.",
    image: kitchen.url,
  },
  {
    slug: "wardrobes",
    name: "Wardrobes",
    tagline: "Storage as architecture.",
    description:
      "Full-height wardrobes and dressing rooms in walnut, smoked glass and brass.",
    image: wardrobe,
  },
  {
    slug: "bathrooms",
    name: "Bathrooms",
    tagline: "A private sanctuary.",
    description:
      "Freestanding tubs, brassware and stone vanities for the considered bathroom.",
    image: bath,
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "The final gesture.",
    description:
      "Vessels, sculptures and objects to complete the interior composition.",
    image: table,
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
