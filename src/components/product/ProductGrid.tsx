import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/types";

export function ProductGrid({
  products,
  eagerFirst = 0,
}: {
  products: Product[];
  eagerFirst?: number;
}) {
  if (!products.length) {
    return (
      <div className="border border-hairline bg-ink/40 p-16 text-center">
        <p className="font-display text-2xl text-ivory">No products match.</p>
        <p className="mt-2 text-sm text-ivory/50">
          Try adjusting your filters or search.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-10">
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} eager={i < eagerFirst} />
      ))}
    </div>
  );
}
