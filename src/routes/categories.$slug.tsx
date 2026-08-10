import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categoryBySlug, categories } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { NotFound } from "./not-found";

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryBySlug(slug) : undefined;

  if (!category) {
    return <NotFound />;
  }

  const items = productsByCategory(category.slug);
  const otherCats = categories.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{category.name} — Imena</title>
        <meta name="description" content={category.description} />
        <meta property="og:title" content={`${category.name} — Imena`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:image" content={category.image} />
        <meta name="twitter:image" content={category.image} />
      </Helmet>

      {/* Category hero */}
      <section className="relative h-[60vh] min-h-105 w-full overflow-hidden border-b border-hairline">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-t from-void via-void/60 to-void/20" />
        <div className="container-x relative z-10 flex h-full flex-col justify-end pb-12">
          <Breadcrumbs
            items={[{ label: "Collections", to: "/products" }, { label: category.name }]}
          />
          <p className="eyebrow mt-4">
            Department · {String(items.length).padStart(2, "0")} objects
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] text-ivory sm:text-7xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg italic text-ivory/60">{category.tagline}</p>
        </div>
      </section>

      <section className="container-x py-16">
        <p className="max-w-2xl text-base leading-relaxed text-ivory/60">{category.description}</p>
      </section>

      <section className="container-x pb-24">
        <ProductGrid products={items} eagerFirst={8} />
      </section>

      {/* Explore other departments */}
      <section className="border-t border-hairline bg-ink/30 py-24">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">Continue exploring</p>
              <h2 className="mt-4 font-display text-3xl text-ivory">Other departments.</h2>
            </div>
            <Link
              to="/products"
              className="gold-underline hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold sm:inline-flex"
            >
              Full catalog
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {otherCats.map((c) => (
              <Link key={c.slug} to={`/categories/${c.slug}`} className="group block">
                <div className="aspect-4/5 overflow-hidden bg-ink outline-1 -outline-offset-1 outline-hairline">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1200 group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-3 font-display text-lg text-ivory group-hover:text-gold">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
