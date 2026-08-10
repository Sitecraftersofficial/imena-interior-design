import type { Product } from "@/lib/types";

// User-uploaded photography — used as real products throughout the site.
// Note: Only using images that have actual files in assets

/**\
 * SINGLE SOURCE OF TRUTH for the product catalog.
 * To add a product: append a new object to this array. All pages, grids,
 * category counts, search, filters, wishlist and Project Builder will pick
 * it up automatically. No component code needs to change.
 *
 * When the catalog moves to a database, replace this export with a query —
 * component contracts stay the same because everything reads `Product`.
 */
export const products: Product[] = [];

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
