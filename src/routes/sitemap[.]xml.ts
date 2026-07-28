import { categories } from "@/data/categories";
import { products } from "@/data/products";

const BASE_URL = "https://imena-interior-design.com";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "daily";
  priority?: string;
}

export function Sitemap() {
  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/products", changefreq: "weekly", priority: "0.9" },
    { path: "/inspiration", changefreq: "monthly", priority: "0.7" },
    { path: "/projects", changefreq: "monthly", priority: "0.7" },
    { path: "/services", changefreq: "monthly", priority: "0.7" },
    { path: "/about", changefreq: "monthly", priority: "0.5" },
    { path: "/contact", changefreq: "monthly", priority: "0.5" },
    ...categories.map((c) => ({
      path: `/categories/${c.slug}`,
      changefreq: "weekly" as const,
      priority: "0.8",
    })),
    ...products.map((p) => ({
      path: `/products/${p.slug}`,
      changefreq: "monthly" as const,
      priority: "0.6",
    })),
  ];

  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");

  return xml;
}
