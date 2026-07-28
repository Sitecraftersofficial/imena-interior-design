import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { featuredProducts, products } from "@/data/products";
import { CategoryCard } from "@/components/category/CategoryCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import heroDoor from "@/assets/hero-door.jpg";
import livingForest from "@/assets/interiors/living-forest.jpg";
import bedroomSuite from "@/assets/interiors/bedroom-suite.jpg";

export function Home() {
  const featured = featuredProducts().slice(0, 8);
  const total = products.length;

  return (
    <>
      <Helmet>
        <title>Imena — The Architecture of Interiors</title>
        <meta
          name="description"
          content="Cinematic architectural doors, hardware, kitchens, lighting and interior systems from the Imena atelier."
        />
        <meta property="og:title" content="Imena — The Architecture of Interiors" />
        <meta
          property="og:description"
          content="Cinematic architectural doors, hardware, kitchens and interior systems."
        />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative h-[92vh] min-h-160 w-full overflow-hidden">
        <img
          src={heroDoor}
          alt="An ebonised oak pivot door slightly ajar, warm light spilling from an ivory interior."
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          fetchPriority="high"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-linear-to-r from-void via-void/70 to-void/10" />
        <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-void/40" />

        <div className="container-x relative z-10 flex h-full items-end pb-20 lg:items-center lg:pb-0">
          <div className="max-w-2xl reveal">
            <p className="eyebrow">Est. Milan · An architectural atelier</p>
            <h1 className="mt-8 font-display text-5xl leading-[0.95] text-ivory sm:text-6xl lg:text-8xl">
              The silent{" "}
              <span className="italic text-gold">language</span> of&nbsp;form.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg">
              Precision-engineered doors, architectural hardware and interior
              systems for the world's most considered residences.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="group inline-flex h-12 items-center gap-3 bg-gold px-8 font-mono text-[10px] uppercase tracking-[0.28em] text-void transition-all hover:brightness-110"
              >
                Explore Catalog
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
              <Link
                to="/project-builder"
                className="inline-flex h-12 items-center border border-hairline px-8 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-10">
          <div className="h-16 w-px bg-linear-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ─── DISCIPLINES / CATEGORIES ─── */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-8 border-b border-hairline pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">Disciplines</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
              {categories.length} departments, one architectural language.
            </h2>
          </div>
          <Link
            to="/products"
            className="gold-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
          >
            Browse all {total} objects
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-12 -mr-5 flex gap-4 overflow-x-auto pb-4 sm:mr-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="border-y border-hairline bg-ink/40 py-24 lg:py-32">
        <div className="container-x">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">The Selection</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                Objects, currently featured.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-ivory/50">
                A rotating selection curated by our design team. Every object in the
                Imena catalog is available to specify, sample or commission.
              </p>
            </div>
            <Link
              to="/products"
              className="gold-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
            >
              View entire catalog
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          <ProductGrid products={featured} eagerFirst={4} />
        </div>
      </section>

      {/* ─── EDITORIAL ─── */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <img
              src={livingForest}
              alt="Cinematic living room with dark walnut wall paneling and floor-to-ceiling windows overlooking a pine forest."
              loading="lazy"
              className="aspect-4/5 w-full object-cover outline -outline-offset-1 outline-hairline"
              width={1600}
              height={1200}
            />
            <img
              src={bedroomSuite}
              alt="Master bedroom with dark oak wall paneling, ivory linen headboard and brushed brass sconces."
              loading="lazy"
              className="absolute -bottom-12 -right-6 hidden aspect-4/5 w-2/5 object-cover outline -outline-offset-1 outline-hairline sm:block"
              width={1600}
              height={1200}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Inspiration N°01</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl">
              Curating <br />
              <span className="italic text-gold">atmosphere</span>.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/60">
              Design is not merely how a room looks. It is how the door meets
              the hand; how the light falls across the floor at dusk; how the
              cabinet closes on a whispered detent. We supply the essential
              elements that define these moments.
            </p>
            <div className="mt-12 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-2">
              <div>
                <p className="font-display text-xl italic text-ivory">
                  Bespoke Finishes
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/50">
                  Custom colour and material matching for hardware and paneling.
                </p>
              </div>
              <div>
                <p className="font-display text-xl italic text-ivory">
                  Project Concierge
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/50">
                  Dedicated architectural consultants for large-scale developments.
                </p>
              </div>
            </div>
            <Link
              to="/inspiration"
              className="mt-12 inline-flex items-center gap-3 border-b border-gold pb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
            >
              Enter the inspiration room
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONSULTATION CTA ─── */}
      <section className="container-x pb-24 lg:pb-32">
        <div className="grid gap-10 border border-hairline bg-ivory px-8 py-20 text-void md:grid-cols-[1.4fr_1fr] md:items-end md:px-16 lg:px-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-void/70">
              Collaborate
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-void sm:text-6xl">
              Bring architectural
              <br />
              <span className="italic">precision</span> to your next project.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-void/70">
              Book a private consultation with our design team, or visit the
              atelier in Milan to experience the quality of Imena in person.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center bg-void px-8 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory hover:bg-ink"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center border border-void/20 px-8 font-mono text-[10px] uppercase tracking-[0.28em] text-void hover:border-void"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

