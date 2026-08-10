import { Link } from "react-router-dom";
import type { Category } from "@/lib/types";
import { categoryCount } from "@/data/products";

export function CategoryCard({ category }: { category: Category }) {
  const count = categoryCount(category.slug);
  return (
    <Link
      to={`/categories/${category.slug}`}
      className="group relative block w-70 shrink-0 sm:w-auto sm:min-w-0"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden bg-ink outline -outline-offset-1 outline-hairline">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1400 ease-expo group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-void/85 via-void/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-gold">
            {String(count).padStart(2, "0")} Objects
          </p>
          <h3 className="mt-1 font-display text-lg sm:text-xl text-ivory transition-colors group-hover:text-gold">
            {category.name}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-[11px] text-ivory/55 italic">
            {category.tagline}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
            View collection
          </span>
        </div>
      </div>
    </Link>
  );
}

