import { Link } from "react-router-dom";
import { Heart, Plus } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

interface Props {
  product: Product;
  eager?: boolean;
}

export function ProductCard({ product, eager = false }: Props) {
  const { isWished, toggleWish, addToProject } = useStore();
  const wished = isWished(product.id);

  return (
    <article className="group relative flex flex-col">
      <Link
        to={`/products/${product.slug}`}
        className="relative block overflow-hidden bg-ink outline-1 -outline-offset-1 outline-hairline"
        aria-label={product.name}
      >
        <div className="aspect-4/5 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-1200 ease-expo group-hover:scale-[1.04]"
          />
        </div>
        {product.featured && (
          <span className="pointer-events-none absolute left-3 top-3 border border-gold/40 bg-void/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
            Featured
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWish(product.id);
          }}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center border border-hairline bg-void/50 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-gold text-gold" : ""}`} strokeWidth={1.5} />
        </button>
      </Link>

      <div className="mt-4 flex min-w-0 flex-col gap-1.5">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
          {product.category.replace(/-/g, " ")}
        </p>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <Link to={`/products/${product.slug}`} className="min-w-0">
            <h3 className="truncate font-display text-lg leading-tight text-ivory transition-colors group-hover:text-gold">
              {product.name}
            </h3>
          </Link>
          <button
            type="button"
            onClick={() => addToProject(product.id)}
            aria-label="Add to project"
            className="shrink-0 grid h-8 w-8 place-items-center border border-hairline text-ivory/70 transition-colors hover:border-gold hover:text-gold"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </div>
        <p className="mt-1 line-clamp-1 text-xs text-ivory/45 italic">
          {product.material ?? product.shortDescription}
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gold/80">
          {formatPrice(product)}
        </p>
      </div>
    </article>
  );
}
