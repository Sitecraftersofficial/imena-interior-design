# Imena — Architectural Interiors

**The Architecture of Interiors** — A luxury design, supply and installation atelier founded in Milan in 1984.

Imena is a cinematic e-commerce and brand website for an architectural hardware and interiors atelier. It serves as both a **product catalog** and a **project collaboration platform**, allowing architects, designers, and private clients to browse precision-engineered doors, hardware, kitchens, lighting, wardrobes, and complete interior systems, curate project specifications, and submit consolidated quote requests directly to the atelier.

---

## Table of Contents

- [About the Atelier](#about-the-atelier)
- [Features & Functionalities](#features--functionalities)
- [Routes / Pages](#routes--pages)
- [Product Catalog](#product-catalog)
- [Categories](#categories)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Project Structure](#project-structure)
- [Development](#development)
- [Business Configuration](#business-configuration)
- [Data Architecture](#data-architecture)
- [State Management](#state-management)
- [SEO & Metadata](#seo--metadata)
- [License](#license)

---

## About the Atelier

Imena was founded in Milan in 1984 by a collective of architects and cabinetmakers who believed every architectural element — the door, the handle, the panel — deserves the same care as the building around it.

**Locations:**

- 🇮🇹 Milan (Atelier & Showroom) — Via Pontaccio 21, 20121 Milano
- 🇬🇧 London — Marylebone
- 🇦🇪 Dubai — Alserkal Avenue
- 🇺🇸 New York — Tribeca (by appointment)

**Key Stats:**

- Founded: 1984
- Countries served: 42
- Projects delivered: 1,400+

---

## Features & Functionalities

### 1. Product Catalog (`/products`)

- Complete archive of all **22+ architectural objects** across 12 categories
- **Full-text search** across product names, descriptions, materials, and tags
- **Multi-dimensional filtering**:
  - By category (12 departments)
  - By material (e.g., Solid Brass, American Walnut, Natural Marble)
  - By finish (e.g., Satin Brass, Gunmetal, Ebonised)
- **Sorting options**: Featured, Name (A–Z / Z–A), Price (ascending / descending)
- **"Load more" pagination** (12 items per page) with count display
- **Mobile filter drawer** with slide-out panel
- **Active filter chips** with individual/global reset
- Product count per view (e.g., "8 of 22 objects")

### 2. Product Detail (`/products/:slug`)

- Full product imagery with aspect-ratio-preserved display
- Category breadcrumb linking
- Rich product metadata:
  - Material, colour, dimensions
  - Available finishes
  - Availability status (available, made-to-order, discontinued)
  - Stock status (in-stock, out-of-stock, low-stock)
  - Technical specifications
- **Pricing display**: Fixed price, "From" pricing, or "Request quote"
- **Add to Project Builder** — one-click addition to project specification
- **Wishlist toggle** — save/remove with heart icon
- **Request Quote** — direct link to contact form pre-filled with product context
- **Related products** — auto-generated from explicit relations and same-category products

### 3. Category Pages (`/categories/:slug`)

- Hero section with category imagery and **Ken Burns cinematic animation**
- Category tagline, description, and object count
- Full product grid for the category
- Cross-linking to other departments for continued exploration

### 4. Project Builder (`/project-builder`)

A powerful **digital concierge tool** for architects and designers:

- **Multi-product specification**: Add products with quantities and custom notes
- **Per-line annotations**: Specify room, finish, dimensions, or any custom note for each product
- **Quantity controls**: Increment/decrement with minimum enforcement
- **Remove items** or **clear entire project**
- **Client information form**: Name, email, phone, company, project name
- **Form validation**: Client-side validation with inline error feedback
- **localStorage persistence**: Project and client info survive page refreshes
- **One-click submission**: Opens the user's default mail client with a pre-composed email containing:
  - Full client contact information
  - Complete product list with IDs, categories, quantities, pricing, and notes
  - CC'd to the client for easy reply-all communication
  - Sent directly to the atelier manager (`concierge@dimena.studio`)
- **Returning visitor support**: Saved client info auto-fills on subsequent visits
- **Loading states**: Visual disabled state during submission
- **Error handling**: Empty project validation, email client failure recovery

### 5. Wishlist (`/wishlist`)

- **Persistent storage** via localStorage (survives browser sessions)
- Saved products displayed in the product grid layout
- **Object count display** in header badge and page header
- **Remove individual items** or **clear all** with confirmation-like UX
- Empty state with call-to-action to browse catalog
- Header badge shows count across all pages
- Mobile navigation includes wishlist with count

### 6. Inspiration Gallery (`/inspiration`)

- Curated interior compositions and installations by the atelier
- **6 editorial room features** with cinematic photography
- Each room includes: title, location, tag, and "Shop the look" CTA
- **Responsive masonry-like grid** with featured hero item spanning 2 columns
- **Hover zoom transitions** on imagery

### 7. Projects Portfolio (`/projects`)

- Showcase of **4 selected residential and commercial projects**
- Each project includes: title, year, scope of work, location, photography
- Alternating image/text layout for visual rhythm
- **"Discuss a similar project"** CTA linking to contact form
- Projects displayed chronologically (2025 → 2023)

### 8. Services (`/services`)

- **6 core services** offered by the atelier:
  1. **Design Consultation** — Private one-to-one sessions with senior designers
  2. **Bespoke Doors** — Custom pivot, sliding, and entrance door systems
  3. **Kitchen & Wardrobe Systems** — Full architectural kitchens and dressing rooms
  4. **Hardware Specification** — Handle, knob, and lock schedules across projects
  5. **Lighting Design** — Architectural lighting layouts and dimming schedules
  6. **Project Concierge** — Dedicated project management and on-site installation
- Grid layout with hover state transitions
- CTA footer for consultation booking

### 9. About / The Atelier (`/about`)

- Brand storytelling and founding philosophy
- Company history since 1984
- Key statistics: founded year, countries served, projects delivered
- Link to schedule a visit

### 10. Contact / Consultation (`/contact`)

- **Consultation request form** with fields: name, email, phone, project type, message
- **Pre-filled context**: When arriving from a product page, the message auto-populates with quote request context
- **Form submission** with success state and personalized greeting
- **Atelier contact information**:
  - Milan address
  - Phone: +39 02 8080 8080
  - Email: concierge@dimena.studio
- **Global showroom locations**: Milan, London, Dubai, New York

### 11. Home Page (`/`)

- **Cinematic full-viewport hero** with Ken Burns animated background
- Brand tagline: "The silent language of form."
- Dual CTA buttons: "Explore Catalog" and "Start a Project"
- **Disciplines section**: All 12 categories displayed as interactive cards
- **Featured products**: Rotating selection of 8 featured objects
- **Editorial section**: Dual-image composition with brand philosophy
- **Consultation CTA**: Light-themed call-to-action block

### 12. Navigation & Header

- **Sticky header** with backdrop blur on scroll detection
- **Logo** with link to home
- **Desktop navigation**: Collections, Inspiration, Services, Atelier, Contact
- **Search icon** linking to catalog
- **Wishlist badge** with real-time object count
- **Project Builder link** with current item count
- **Mobile hamburger menu** with full-screen overlay drawer including:
  - Primary navigation links
  - Quick access to Project Builder and Wishlist with counts
  - All category links for direct browsing

### 13. Footer

- Brand description with locations
- Quick links to: Catalog (6 categories), Studio pages, Account tools
- Email contact link
- Copyright and legal links

### 14. 404 Page (`/*`)

- Custom "Not Found" page with error code
- Clean, centered layout with "Return home" CTA

### 15. Dynamic Sitemap (`/sitemap.xml`)

- Auto-generated XML sitemap
- Includes all static pages, category pages, and product detail pages
- Configurable change frequencies and priorities
- Accessible at `/sitemap.xml`

---

## Routes / Pages

| Route               | Page Component   | Description                                                           |
| ------------------- | ---------------- | --------------------------------------------------------------------- |
| `/`                 | `Home`           | Landing page with hero, categories, featured products, editorial, CTA |
| `/products`         | `Catalog`        | Full product catalog with search, filters, sorting, pagination        |
| `/products/:slug`   | `ProductDetail`  | Individual product detail with specs and actions                      |
| `/categories/:slug` | `CategoryPage`   | Category landing with hero and product grid                           |
| `/inspiration`      | `Inspiration`    | Curated interior compositions gallery                                 |
| `/projects`         | `Projects`       | Portfolio of completed projects                                       |
| `/project-builder`  | `ProjectBuilder` | Multi-product specification and quote request tool                    |
| `/services`         | `Services`       | Atelier services overview                                             |
| `/about`            | `About`          | Atelier history and philosophy                                        |
| `/contact`          | `Contact`        | Consultation booking form                                             |
| `/wishlist`         | `WishlistPage`   | User's saved products                                                 |
| `/sitemap.xml`      | `Sitemap`        | Dynamic XML sitemap                                                   |
| `/*`                | `NotFound`       | Custom 404 error page                                                 |

---

## Product Catalog

### Data Model

```typescript
interface Product {
  id: string; // Unique identifier (e.g., "door-001")
  slug: string; // URL-friendly name (e.g., "monolith-ebonised-pivot")
  name: string; // Display name (e.g., "Monolith Pivot")
  category: string; // Category slug reference
  subcategory?: string; // Optional subcategory
  productType: string; // Type classification
  image: string; // Primary image path
  images?: string[]; // Additional images
  shortDescription: string; // Brief descriptor
  description: string; // Full product narrative
  material?: string; // Primary material
  color?: string; // Colour variant
  finishes?: string[]; // Available finish options
  dimensions?: string; // Physical dimensions
  specifications?: Record<string, string>; // Technical specs
  price?: number | null; // Base price
  priceType: PriceType; // "fixed" | "request-quote" | "from"
  currency?: string; // Currency code (default: EUR)
  availability: Availability; // "available" | "made-to-order" | "discontinued"
  stockStatus: StockStatus; // "in-stock" | "out-of-stock" | "low-stock"
  featured: boolean; // Featured flag for home page
  tags?: string[]; // Search/filter tags
  relatedProducts?: string[]; // Explicit related product IDs
}
```

### Pricing Types

- **Fixed price** — Displayed as currency amount (e.g., €340)
- **From price** — Displayed with "From" prefix (e.g., From €210)
- **Request quote** — Custom pricing for bespoke/made-to-order items

### Current Inventory

| Category    | Products | Key Materials                                   |
| ----------- | -------- | ----------------------------------------------- |
| Doors       | 4        | Ebonised Oak, American Walnut, Etched Glass     |
| Handles     | 2        | Solid Brass, Machined Aluminium                 |
| Knobs       | 1        | Solid Brass                                     |
| Locks       | 1        | Solid Brass                                     |
| Wall Panels | 2        | American Walnut, Engineered Timber              |
| Flooring    | 1        | Natural Marble                                  |
| Lighting    | 1        | Spun Aluminium                                  |
| Furniture   | 2        | Bouclé Wool, Solid Walnut, Nero Marquina Marble |
| Kitchens    | 2        | Lacquered MDF, Quartz, Granite                  |
| Wardrobes   | 1        | American Walnut, Smoked Glass                   |
| Bathrooms   | 1        | Cast Stone                                      |
| Accessories | 2        | Styling Compositions                            |

---

## Categories

12 departments, each with a unique visual identity:

| Slug          | Name        | Tagline                           | Object Count |
| ------------- | ----------- | --------------------------------- | ------------ |
| `doors`       | Doors       | "The threshold, considered."      | 4            |
| `handles`     | Handles     | "Where the hand meets the house." | 2            |
| `knobs`       | Knobs       | "Quiet, tactile jewellery."       | 1            |
| `locks`       | Locks       | "Discreet mechanical certainty."  | 1            |
| `wall-panels` | Wall Panels | "Architecture as texture."        | 2            |
| `flooring`    | Flooring    | "The ground beneath the room."    | 1            |
| `lighting`    | Lighting    | "The gesture of light."           | 1            |
| `furniture`   | Furniture   | "Furnishing the silence."         | 2            |
| `kitchens`    | Kitchens    | "The heart, precisely built."     | 2            |
| `wardrobes`   | Wardrobes   | "Storage as architecture."        | 1            |
| `bathrooms`   | Bathrooms   | "A private sanctuary."            | 1            |
| `accessories` | Accessories | "The final gesture."              | 2            |

---

## Tech Stack

### Core Framework

- **React 19** — UI library
- **TypeScript** — Type safety across the codebase
- **Vite 8** — Build tool and dev server

### Routing & Data

- **React Router DOM v7** — Client-side routing
- **TanStack React Query v5** — Server state management
- **React Helmet Async** — Document head management (SEO, meta tags)

### Styling

- **Tailwind CSS v4** — Utility-first CSS framework with custom theme
- **Custom CSS** — Animations, keyframes, brand utilities
- **tw-animate-css** — Animation utilities

### UI Components

- **shadcn/ui** — Component library built on Radix UI primitives
- **30+ Radix UI primitives**: Accordion, Dialog, Dropdown Menu, Navigation Menu, Select, Tabs, Tooltip, and more
- **Lucide React** — Icon library
- **Embla Carousel** — Carousel component
- **Recharts** — Chart components
- **Vaul** — Drawer component
- **Sonner** — Toast notifications
- **CMDK** — Command palette

### Forms & Validation

- **React Hook Form** — Form state management
- **Zod** — Schema validation
- **@hookform/resolvers** — Zod resolver integration
- **Input OTP** — OTP input component
- **React Day Picker** — Date picker

### Development Tools

- **ESLint** — Code linting
- **Prettier** — Code formatting
- **Vite TSConfig Paths** — Path alias resolution

---

## Design System

### Brand Palette

| Token         | Value                   | Usage                                |
| ------------- | ----------------------- | ------------------------------------ |
| `void`        | `oklch(0.14 0 0)`       | Primary background, dark elements    |
| `ink`         | `oklch(0.19 0 0)`       | Card backgrounds, elevated surfaces  |
| `char`        | `oklch(0.24 0 0)`       | Secondary/muted backgrounds          |
| `ivory`       | `oklch(0.955 0.012 85)` | Text, light elements, CTAs           |
| `gold`        | `oklch(0.74 0.11 82)`   | Accents, links, interactive elements |
| `gold-bright` | `oklch(0.85 0.11 85)`   | Highlighted accents                  |
| `hairline`    | `oklch(1 0 0 / 0.08)`   | Borders, dividers, outlines          |

### Typography

| Font                 | Usage                  | Stack                                           |
| -------------------- | ---------------------- | ----------------------------------------------- |
| **Playfair Display** | Display headings       | `"Playfair Display", ui-serif, Georgia, serif`  |
| **Inter**            | Body text              | `"Inter", ui-sans-serif, system-ui, sans-serif` |
| **JetBrains Mono**   | Monospace / UI accents | `"JetBrains Mono", ui-monospace, monospace`     |

### Custom CSS Utilities

- **`eyebrow`** — Gold, uppercase, monospace label text
- **`hairline`** — Subtle 1px divider line
- **`gold-underline`** — Animated underline on hover (scaleX transition)
- **`container-x`** — Responsive horizontal padding scale
- **`reveal`** — Fade-up entrance animation
- **`ken-burns`** — Slow zoom cinematic effect for hero imagery
- **`ease-expo`** — Custom cubic-bezier easing curve `(0.19, 1, 0.22, 1)`

### Animation Specifications

- Hover transitions: 1200ms–1400ms duration with `ease-expo` easing
- Ken Burns hero: 14s slow zoom
- Reveal animations: 900ms fade-up
- Gold underline: 600ms scaleX transition

---

## Project Structure

```
src/
├── assets/
│   ├── hero-door.jpg                    # Hero background image
│   ├── Imena-Logo.png                   # Brand logo
│   ├── Imena-Logo.jpeg                  # Brand logo (alternate format)
│   ├── interiors/                       # Interior photography
│   │   ├── bedroom-suite.jpg
│   │   └── living-forest.jpg
│   └── products/                        # Product photography
│       ├── *.jpg                        # Product images
│       └── *.json                       # Asset metadata (future use)
├── components/
│   ├── category/
│   │   └── CategoryCard.tsx             # Category card component
│   ├── product/
│   │   ├── ProductCard.tsx              # Product card component
│   │   └── ProductGrid.tsx              # Responsive product grid
│   ├── site/
│   │   ├── Footer.tsx                   # Site footer
│   │   ├── Header.tsx                   # Navigation header
│   │   └── RootLayout.tsx               # Layout wrapper (Header + Outlet + Footer)
│   └── ui/                              # shadcn/ui component library
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── navigation-menu.tsx
│       ├── tabs.tsx
│       └── ... (30+ components)
├── config/
│   └── business.ts                      # Business configuration (brand name, manager email)
├── data/
│   ├── categories.ts                    # Category catalog data
│   └── products.ts                      # Product catalog data + selectors
├── hooks/
│   └── use-mobile.tsx                   # Mobile detection hook
├── lib/
│   ├── format.ts                        # Price formatting utility
│   ├── send-to-manager.ts               # Email composition and validation
│   ├── store.tsx                        # Global state (wishlist + project)
│   ├── types.ts                         # TypeScript type definitions
│   └── utils.ts                         # General utilities (shadcn)
├── routes/
│   ├── about.tsx                        # About / Atelier page
│   ├── categories.$slug.tsx             # Category page
│   ├── contact.tsx                      # Contact / Consultation page
│   ├── index.tsx                        # Home page
│   ├── inspiration.tsx                  # Inspiration gallery
│   ├── not-found.tsx                    # 404 page
│   ├── products.$slug.tsx               # Product detail page
│   ├── products.tsx                     # Product catalog page
│   ├── project-builder.tsx              # Project Builder tool
│   ├── projects.tsx                     # Projects portfolio
│   ├── services.tsx                     # Services page
│   ├── sitemap[.]xml.ts                # Dynamic XML sitemap
│   └── wishlist.tsx                     # Wishlist page
├── App.tsx                              # App root with routing configuration
├── main.tsx                             # Entry point
└── styles.css                           # Global styles, design tokens, utilities
```

---

## Development

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Setup

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

### Environment Variables

No environment variables are required for development. Business configuration (manager email, brand name) is managed in `src/config/business.ts`.

---

## Business Configuration

All business-level configuration is centralized in `src/config/business.ts`:

```typescript
export const BUSINESS_CONFIG = {
  managerEmail: "concierge@dimena.studio", // Project submission recipient
  brandName: "Imena", // Brand name used across the site
};
```

Changing the `managerEmail` redirects all Project Builder submissions to a new recipient.

---

## Data Architecture

### Single Source of Truth

Both `categories.ts` and `products.ts` serve as the **single source of truth** for all content. All pages, grids, category counts, search, filters, wishlist, and the Project Builder read from these arrays. Adding a new product or category automatically propagates throughout the entire site without any component code changes.

### Data Selectors (products.ts)

| Function                   | Description                      |
| -------------------------- | -------------------------------- |
| `productBySlug(slug)`      | Lookup product by URL slug       |
| `productById(id)`          | Lookup product by ID             |
| `productsByCategory(slug)` | Filter products by category      |
| `featuredProducts()`       | Get all featured products        |
| `categoryCount(slug)`      | Count products in a category     |
| `searchProducts(query)`    | Full-text search across products |
| `allMaterials()`           | Get all unique materials         |
| `allFinishes()`            | Get all unique finishes          |

### Migration Path

Comments in the data files indicate the intended migration path:

> _"When the catalog moves to a database, replace this export with a query — component contracts stay the same because everything reads `Product`."_

---

## State Management

### Global Store (`src/lib/store.tsx`)

A custom React Context-based store manages two pieces of persistent client state:

**Wishlist:**

- `wishlist` — Array of `{ productId, addedAt }`
- `isWished(id)` — Check if product is saved
- `toggleWish(id)` — Add/remove from wishlist

**Project Builder:**

- `project` — Array of `{ productId, quantity, note, addedAt }`
- `addToProject(id, qty?)` — Add product to project
- `removeFromProject(id)` — Remove product from project
- `updateProjectQty(id, qty)` — Update quantity
- `updateProjectNote(id, note)` — Update specification note
- `clearProject()` — Reset entire project

**Persistence:**

- Both wishlist and project state are persisted to `localStorage` under keys `dimena.wishlist.v1` and `dimena.project.v1`
- A `hydrated` flag ensures UI doesn't render stale empty states before localStorage is read
- Client info (name, email, phone, company) is separately persisted under `dimena.client.v1`

---

## SEO & Metadata

- **React Helmet Async** manages per-page `<title>` and `<meta>` tags
- Each route sets its own title, description, Open Graph (og:) and Twitter card meta tags
- **Dynamic XML sitemap** at `/sitemap.xml` with all static pages, categories, and product URLs
- **robots.txt** at `/robots.txt`
- 404 page sets `<meta name="robots" content="noindex" />`
- Product detail pages include `og:image` and `twitter:image` for social sharing

---

## Responsive Design

The site is fully responsive across device sizes:

| Breakpoint  | Width         | Layout Adjustments                           |
| ----------- | ------------- | -------------------------------------------- |
| **Mobile**  | < 640px       | Single column, hamburger menu, filter drawer |
| **Tablet**  | 640px–1023px  | 2-column grids, persistent footer            |
| **Desktop** | 1024px–1439px | Multi-column layouts, sidebar filters        |
| **Wide**    | ≥ 1440px      | Expanded horizontal padding                  |

Key responsive features:

- Category grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop) → 4 cols (wide)
- Product grid: 2 cols (mobile) → 3 cols (tablet) → 4 cols (desktop)
- Catalog filters: Drawer on mobile, persistent sidebar on desktop
- Hero content: Bottom-aligned on mobile, center-aligned on desktop

---

## Performance Considerations

- **Lazy loading** for all images below the fold (`loading="lazy"`)
- **Eager loading** for above-fold images and first N products in grids (`eagerFirst` prop)
- **Ken Burns animation** uses CSS transforms only (GPU-accelerated)
- **Sticky header** uses `backdrop-filter: blur()` for visual depth
- **Efficient re-renders** via `useMemo`, `useCallback` in store and catalog filtering
- **No runtime CSS-in-JS** — pure Tailwind CSS v4 with static extraction

---

## License

© Imena Architectural. All rights reserved.

---

_Built with React, TypeScript, Tailwind CSS, and shadcn/ui. Designed and engineered with architectural precision._
