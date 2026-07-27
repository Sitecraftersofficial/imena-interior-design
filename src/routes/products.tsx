import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { products, allMaterials, allFinishes } from "@/data/products";
import { categories, categoryBySlug } from "@/data/categories";
import { ProductGrid } from "@/components/product/ProductGrid";

const PAGE = 12;

const searchSchema = z.object({
  q: z.string().optional().default(""),
  category: z.string().optional(),
  material: z.string().optional(),
  finish: z.string().optional(),
  sort: z.enum(["featured", "az", "za", "price-asc", "price-desc"]).optional().default("featured"),
});

function parseSearchParams(params: URLSearchParams) {
  const q = params.get("q") ?? "";
  const category = params.get("category") ?? undefined;
  const material = params.get("material") ?? undefined;
  const finish = params.get("finish") ?? undefined;
  const sort = (params.get("sort") ?? "featured") as z.infer<typeof searchSchema>["sort"];
  return { q, category, material, finish, sort };
}

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(PAGE);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const search = parseSearchParams(searchParams);

  const filtered = useMemo(() => {
    const q = (search.q ?? "").trim().toLowerCase();
    let list = products.filter((p) => {
      if (search.category && p.category !== search.category) return false;
      if (search.material && p.material !== search.material) return false;
      if (search.finish && !(p.finishes ?? []).includes(search.finish)) return false;
      if (q) {
        const hay =
          `${p.name} ${p.shortDescription} ${p.category} ${p.material ?? ""} ${p.tags?.join(" ") ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    switch (search.sort) {
      case "az":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        list = [...list].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        list = [...list].sort((a, b) => (a.price ?? 1e9) - (b.price ?? 1e9));
        break;
      case "price-desc":
        list = [...list].sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
        break;
      default:
        list = [...list].sort(
          (a, b) => Number(b.featured) - Number(a.featured),
        );
    }
    return list;
  }, [search]);

  const visibleProducts = filtered.slice(0, visible);
  const activeCategory = search.category ? categoryBySlug(search.category) : null;

  const setSearch = (patch: Record<string, string | undefined>) => {
    setVisible(PAGE);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      for (const [key, value] of Object.entries(patch)) {
        if (value === undefined || value === "") {
          next.delete(key);
        } else {
          next.set(key, value);
        }
      }
      return next;
    }, { replace: true });
  };

  const materials = allMaterials();
  const finishes = allFinishes();
  const activeFilters = [
    search.category && { key: "category", label: categoryBySlug(search.category)?.name ?? search.category },
    search.material && { key: "material", label: search.material },
    search.finish && { key: "finish", label: search.finish },
    search.q && { key: "q", label: `"${search.q}"` },
  ].filter(Boolean) as { key: string; label: string }[];

  return (
    <>
      <Helmet>
        <title>The Catalog — Dimena</title>
        <meta
          name="description"
          content="Browse the complete Dimena catalog of architectural doors, hardware, lighting, kitchens, wardrobes and interior systems."
        />
        <meta property="og:title" content="The Catalog — Dimena" />
        <meta
          property="og:description"
          content="The complete Dimena catalog. Filter by category, material and finish."
        />
      </Helmet>

      {/* Page head */}
      <section className="container-x border-b border-hairline pb-10 pt-16 lg:pt-24">
        <p className="eyebrow">The Catalog</p>
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h1 className="font-display text-4xl leading-tight text-ivory sm:text-6xl">
            {activeCategory ? activeCategory.name : "Every object, one archive."}
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/50">
            {filtered.length} of {products.length} objects
          </p>
        </div>
        {activeCategory && (
          <p className="mt-4 max-w-xl text-sm text-ivory/50">
            {activeCategory.description}
          </p>
        )}
      </section>

      {/* Toolbar */}
      <section className="sticky top-16 z-30 border-b border-hairline bg-void/85 backdrop-blur-md lg:top-20">
        <div className="container-x grid grid-cols-[1fr_auto] items-center gap-3 py-4 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
          <label className="relative flex min-w-0 items-center">
            <Search
              className="pointer-events-none absolute left-3 h-4 w-4 text-ivory/40"
              strokeWidth={1.5}
            />
            <input
              type="search"
              value={search.q ?? ""}
              placeholder="Search the catalog"
              onChange={(e) => setSearch({ q: e.target.value })}
              className="h-10 w-full min-w-0 border border-hairline bg-transparent pl-9 pr-3 font-sans text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
            />
          </label>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex h-10 items-center gap-2 border border-hairline px-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory hover:border-gold hover:text-gold lg:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
            Filters
          </button>
          <div className="hidden lg:block">
            <select
              value={search.sort}
              onChange={(e) => setSearch({ sort: e.target.value })}
              className="h-10 border border-hairline bg-void px-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory focus:border-gold focus:outline-none"
            >
              <option value="featured">Sort · Featured</option>
              <option value="az">Sort · Name A→Z</option>
              <option value="za">Sort · Name Z→A</option>
              <option value="price-asc">Sort · Price ↑</option>
              <option value="price-desc">Sort · Price ↓</option>
            </select>
          </div>
        </div>
        {activeFilters.length > 0 && (
          <div className="container-x flex flex-wrap items-center gap-2 pb-4">
            {activeFilters.map((f) => (
              <button
                key={f.key + f.label}
                type="button"
                onClick={() => setSearch({ [f.key]: undefined })}
                className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:bg-gold/20"
              >
                {f.label}
                <X className="h-3 w-3" strokeWidth={1.5} />
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setSearchParams(new URLSearchParams(), { replace: true });
                setVisible(PAGE);
              }}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/50 hover:text-ivory"
            >
              Reset all
            </button>
          </div>
        )}
      </section>

      {/* Content: sidebar + grid */}
      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <FiltersPanel
              search={search}
              setSearch={setSearch}
              materials={materials}
              finishes={finishes}
            />
          </aside>

          <div>
            <ProductGrid products={visibleProducts} eagerFirst={8} />
            {visible < filtered.length && (
              <div className="mt-20 flex flex-col items-center gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/40">
                  Showing {visibleProducts.length} of {filtered.length}
                </p>
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE)}
                  className="inline-flex h-12 items-center border border-hairline px-10 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold"
                >
                  Load more objects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close filters"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-ink shadow-2xl">
            <div className="flex items-center justify-between border-b border-hairline p-5">
              <p className="eyebrow">Filters</p>
              <button
                aria-label="Close"
                onClick={() => setDrawerOpen(false)}
                className="text-ivory/60 hover:text-gold"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <FiltersPanel
                search={search}
                setSearch={(p) => {
                  setSearch(p);
                }}
                materials={materials}
                finishes={finishes}
              />
              <div className="mt-8">
                <label className="mb-2 block eyebrow">Sort</label>
                <select
                  value={search.sort}
                  onChange={(e) =>
                    setSearch({ sort: e.target.value })
                  }
                  className="h-10 w-full border border-hairline bg-void px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory"
                >
                  <option value="featured">Featured</option>
                  <option value="az">Name A→Z</option>
                  <option value="za">Name Z→A</option>
                  <option value="price-asc">Price ↑</option>
                  <option value="price-desc">Price ↓</option>
                </select>
              </div>
            </div>
            <div className="border-t border-hairline p-5">
              <button
                onClick={() => setDrawerOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center bg-gold font-mono text-[10px] uppercase tracking-[0.3em] text-void hover:brightness-110"
              >
                Show {filtered.length} objects
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FiltersPanel({
  search,
  setSearch,
  materials,
  finishes,
}: {
  search: ReturnType<typeof parseSearchParams>;
  setSearch: (p: Record<string, string | undefined>) => void;
  materials: string[];
  finishes: string[];
}) {
  return (
    <div className="space-y-10">
      <div>
        <p className="eyebrow mb-4">Category</p>
        <ul className="space-y-2.5">
          <li>
            <button
              onClick={() => setSearch({ category: undefined })}
              className={`text-left text-sm transition-colors ${!search.category ? "text-gold" : "text-ivory/60 hover:text-ivory"
                }`}
            >
              All departments
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <button
                onClick={() =>
                  setSearch({
                    category: search.category === c.slug ? undefined : c.slug,
                  })
                }
                className={`text-sm transition-colors ${search.category === c.slug
                    ? "text-gold"
                    : "text-ivory/60 hover:text-ivory"
                  }`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {materials.length > 0 && (
        <div>
          <p className="eyebrow mb-4">Material</p>
          <ul className="space-y-2.5">
            <li>
              <button
                onClick={() => setSearch({ material: undefined })}
                className={`text-left text-sm ${!search.material ? "text-gold" : "text-ivory/60 hover:text-ivory"
                  }`}
              >
                Any
              </button>
            </li>
            {materials.map((m) => (
              <li key={m}>
                <button
                  onClick={() =>
                    setSearch({ material: search.material === m ? undefined : m })
                  }
                  className={`text-left text-sm ${search.material === m
                      ? "text-gold"
                      : "text-ivory/60 hover:text-ivory"
                    }`}
                >
                  {m}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {finishes.length > 0 && (
        <div>
          <p className="eyebrow mb-4">Finish</p>
          <ul className="flex flex-wrap gap-2">
            {finishes.map((f) => (
              <li key={f}>
                <button
                  onClick={() =>
                    setSearch({ finish: search.finish === f ? undefined : f })
                  }
                  className={`border px-2.5 py-1 text-xs transition-colors ${search.finish === f
                      ? "border-gold text-gold"
                      : "border-hairline text-ivory/60 hover:border-ivory hover:text-ivory"
                    }`}
                >
                  {f}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

