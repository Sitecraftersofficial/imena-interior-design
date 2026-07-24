export type PriceType = "fixed" | "request-quote" | "from";
export type Availability = "available" | "made-to-order" | "discontinued";
export type StockStatus = "in-stock" | "out-of-stock" | "low-stock";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string; // category slug
  subcategory?: string;
  productType: string;
  image: string; // primary image url
  images?: string[];
  shortDescription: string;
  description: string;
  material?: string;
  color?: string;
  finishes?: string[];
  dimensions?: string;
  specifications?: Record<string, string>;
  price?: number | null;
  priceType: PriceType;
  currency?: string;
  availability: Availability;
  stockStatus: StockStatus;
  featured: boolean;
  tags?: string[];
  relatedProducts?: string[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export interface ProjectItem {
  productId: string;
  quantity: number;
  note?: string;
  addedAt: number;
}
