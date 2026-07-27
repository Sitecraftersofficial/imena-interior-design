import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";
import { productById } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export function WishlistPage() {
  const { wishlist, hydrated, toggleWish } = useStore();
  const items = wishlist
    .map((w) => productById(w.productId))
    .filter(Boolean) as NonNullable<ReturnType<typeof productById>>[];

  return (
    <>
      <Helmet>
        <title>Your Wishlist — Dimena</title>
        <meta
          name="description"
          content="Saved objects from the Dimena catalog."
        />
        <meta property="og:title" content="Your Wishlist — Dimena" />
        <meta
          property="og:description"
          content="Saved objects from the Dimena catalog."
        />
      </Helmet>

      <section className="container-x border-b border-hairline pb-10 pt-16 lg:pt-24">
        <p className="eyebrow">Your archive</p>
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h1 className="font-display text-4xl leading-tight text-ivory sm:text-6xl">
            Wishlist
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/50">
            {hydrated ? items.length : "—"} objects
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        {!hydrated ? null : items.length === 0 ? (
          <div className="border border-hairline bg-ink/40 px-6 py-20 text-center">
            <Heart className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <p className="mt-6 font-display text-2xl text-ivory">
              Your wishlist is empty.
            </p>
            <p className="mt-2 text-sm text-ivory/50">
              Save objects from the catalog by tapping the heart icon.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block border border-gold px-8 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-void"
            >
              Browse catalog
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8 flex justify-end">
              <button
                onClick={() => items.forEach((p) => toggleWish(p.id))}
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/50 hover:text-gold"
              >
                <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                Clear all
              </button>
            </div>
            <ProductGrid products={items} />
          </>
        )}
      </section>
    </>
  );
}

