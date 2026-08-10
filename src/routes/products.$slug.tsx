import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Heart, Plus } from "lucide-react";
import { productBySlug, productsByCategory, productById } from "@/data/products";
import { categoryBySlug } from "@/data/categories";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { NotFound } from "./not-found";

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productBySlug(slug) : undefined;

  const { isWished, toggleWish, addToProject } = useStore();

  if (!product) {
    return <NotFound />;
  }

  const wished = isWished(product.id);
  const category = categoryBySlug(product.category);
  type P = NonNullable<ReturnType<typeof productById>>;
  const relatedIds: string[] = product.relatedProducts ?? [];
  const relatedFromIds: P[] = relatedIds
    .map((id: string): P | undefined => productById(id))
    .filter((p: P | undefined): p is P => Boolean(p));
  const relatedFromCategory: P[] = productsByCategory(product.category).filter(
    (p) => p.id !== product.id,
  );
  const related: P[] = [...relatedFromIds, ...relatedFromCategory]
    .filter((p, i, a) => a.findIndex((x) => x.id === p.id) === i)
    .slice(0, 4);

  const specs: [string, string][] = [];
  if (product.material) specs.push(["Material", product.material]);
  if (product.dimensions) specs.push(["Dimensions", product.dimensions]);
  if (product.color) specs.push(["Colour", product.color]);
  if (product.finishes?.length) specs.push(["Finishes", product.finishes.join(", ")]);
  if (product.availability) specs.push(["Availability", product.availability.replace("-", " ")]);
  if (product.specifications) {
    for (const [k, v] of Object.entries(product.specifications) as [string, string][])
      specs.push([k, v]);
  }

  return (
    <>
      <Helmet>
        <title>{product.name} — Imena</title>
        <meta name="description" content={product.shortDescription} />
        <meta property="og:title" content={`${product.name} — Imena`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.image} />
        <meta name="twitter:image" content={product.image} />
      </Helmet>

      <section className="container-x pt-10">
        <Breadcrumbs
          items={[
            { label: "Collections", to: "/products" },
            ...(category ? [{ label: category.name, to: `/categories/${category.slug}` }] : []),
            { label: product.name },
          ]}
        />
      </section>

      <section className="container-x mt-8 grid gap-12 pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="relative bg-ink outline-1 -outline-offset-1 outline-hairline">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-4/5 w-full object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="flex flex-col">
          {category && (
            <Link to={`/categories/${category.slug}`} className="eyebrow">
              {category.name}
            </Link>
          )}
          <h1 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-ivory/60">{product.shortDescription}</p>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.25em] text-gold">
            {formatPrice(product)}
          </p>

          <div className="mt-8 grid grid-cols-[1fr_auto_auto] gap-3">
            <button
              type="button"
              onClick={() => addToProject(product.id)}
              className="inline-flex h-12 items-center justify-center gap-2 bg-gold px-6 font-mono text-[10px] uppercase tracking-[0.28em] text-void hover:brightness-110"
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
              Add to Project
            </button>
            <button
              type="button"
              onClick={() => toggleWish(product.id)}
              aria-pressed={wished}
              className={`grid h-12 w-12 place-items-center border transition-colors ${
                wished
                  ? "border-gold text-gold"
                  : "border-hairline text-ivory hover:border-gold hover:text-gold"
              }`}
              aria-label={wished ? "Remove from wishlist" : "Save to wishlist"}
            >
              <Heart className={`h-4 w-4 ${wished ? "fill-gold" : ""}`} strokeWidth={1.5} />
            </button>
            <Link
              to={`/contact?product=${product.slug}`}
              className="inline-flex h-12 items-center border border-hairline px-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory hover:border-gold hover:text-gold"
            >
              Request Quote
            </Link>
          </div>

          <div className="mt-12 border-t border-hairline pt-8">
            <p className="eyebrow mb-4">Description</p>
            <p className="text-sm leading-relaxed text-ivory/70">{product.description}</p>
          </div>

          {specs.length > 0 && (
            <div className="mt-10 border-t border-hairline pt-8">
              <p className="eyebrow mb-4">Specifications</p>
              <dl className="grid grid-cols-1 divide-y divide-hairline">
                {specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                      {k}
                    </dt>
                    <dd className="text-sm text-ivory/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-hairline bg-ink/30 py-24">
          <div className="container-x">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Related</p>
                <h2 className="mt-4 font-display text-3xl text-ivory">From the same shelf.</h2>
              </div>
              {category && (
                <Link
                  to={`/categories/${category.slug}`}
                  className="gold-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
                >
                  All {category.name}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              )}
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </>
  );
}
