import { Link } from "react-router-dom";
import type { Category } from "@/lib/types";
import { categoryCount } from "@/data/products";

export function CategoryCard({ category }: { category: Category }) {
  const count = categoryCount(category.slug);
  return (
    <Link
      to={`/categories/${category.slug}`}
      className="group relative block min-w-65 shrink-0 sm:min-w-0"
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-ink outline -outline-offset-1 outline-hairline">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1400 ease-expo group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-void/85 via-void/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold">
            {String(count).padStart(2, "0")} Objects
          </p>
          <h3 className="mt-2 font-display text-2xl text-ivory">{category.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-ivory/55 italic">
            {category.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}

