import type { Product } from "./types";

export function formatPrice(p: Product): string {
  if (p.priceType === "request-quote" || p.price == null) return "Request quote";
  const currency = p.currency ?? "RWF";
  const formatted = new Intl.NumberFormat("en-RW", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(p.price);
  return p.priceType === "from" ? `From ${formatted}` : formatted;
}
