import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to a named home section when arriving with a hash (e.g. from a nav link).
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Wait briefly for images/layout to settle before scrolling.
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }, 60);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Imena — The Architecture of Interiors</title>
        <meta
          name="description"
          content="Cinematic architectural doors, hardware, kitchens, lighting and interior systems from Imena."
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
            <p className="eyebrow">Est. Kigali · Architectural design studio</p>
            <h1 className="mt-8 font-display text-5xl leading-[0.95] text-ivory sm:text-6xl lg:text-8xl">
              The silent <span className="italic text-gold">language</span> of&nbsp;form.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg">
              Quality doors, hardware and complete interiors for modern homes and businesses.
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

      {/* ─── CATEGORIES ─── */}
      <section id="departments" className="container-x py-24 lg:py-32">
        <div className="grid gap-8 border-b border-hairline pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">Categories</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
              {categories.length} product categories.
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

        <div className="relative mt-12">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {categories.map((c) => (
                  <div key={c.slug} className="w-full shrink-0 px-4">
                    <CategoryCard category={c} />
                  </div>
                ))}
              </div>
            </div>
            {categories.length > 1 && (
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : categories.length - 1))
                  }
                  className="flex h-10 w-10 items-center justify-center border border-hairline bg-void text-ivory transition-colors hover:border-gold hover:text-gold"
                  aria-label="Previous category"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <div className="flex gap-2">
                  {categories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        idx === currentSlide ? "bg-gold w-6" : "bg-ivory/40 hover:bg-ivory/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev < categories.length - 1 ? prev + 1 : 0))
                  }
                  className="flex h-10 w-10 items-center justify-center border border-hairline bg-void text-ivory transition-colors hover:border-gold hover:text-gold"
                  aria-label="Next category"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
            )}
          </div>

          {/* Desktop Grid - 3 columns */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section id="selection" className="border-y border-hairline bg-ink/40 py-24 lg:py-32">
        <div className="container-x">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">Featured</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                Featured products.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-ivory/50">
                A selection chosen by our design team. Every product is available to order, sample
                or request a quote.
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
      <section id="inspiration" className="container-x py-24 lg:py-32">
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
            <p className="eyebrow">Ideas N°01</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl">
              Creating <br />
              <span className="italic text-gold">mood</span>.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/60">
              Design is about how a room feels and works every day. We supply the doors, handles,
              cabinets and lighting that make an interior beautiful, comfortable and long-lasting.
            </p>
            <div className="mt-12 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-2">
              <div>
                <p className="font-display text-xl italic text-ivory">Custom Finishes</p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/50">
                  Custom colour and material matching for hardware and paneling.
                </p>
              </div>
              <div>
                <p className="font-display text-xl italic text-ivory">Project Help</p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/50">
                  Extra support for big projects.
                </p>
              </div>
            </div>
            <Link
              to="/inspiration"
              className="mt-12 inline-flex items-center gap-3 border-b border-gold pb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
            >
              Browse ideas
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONSULTATION CTA ─── */}
      <section id="consultation" className="container-x pb-24 lg:pb-32">
        <div className="grid gap-10 border border-hairline bg-ivory px-8 py-20 text-void md:grid-cols-[1.4fr_1fr] md:items-end md:px-16 lg:px-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-void/70">
              Collaborate
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-void sm:text-6xl">
              Bring architectural
              <br />
              <span className="italic">quality</span> to your next project.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-void/70">
              Book a consultation with our design team, or visit us in Kigali to see the quality of
              Imena for yourself.
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
