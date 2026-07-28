import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, Search, X, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import { categories } from "@/data/categories";
import { useStore } from "@/lib/store";
import dimenaLogo from "@/assets/dimena-logo.png.asset.json";

const primaryLinks = [
  { to: "/products", label: "Collections" },
  { to: "/inspiration", label: "Inspiration" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Atelier" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { wishlist, project, hydrated } = useStore();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const wishCount = hydrated ? wishlist.length : 0;
  const projCount = hydrated ? project.length : 0;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${scrolled || open
          ? "border-hairline bg-void/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
          }`}
      >
        <div className="container-x grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-20">
          <Link
            to="/"
            className="flex items-center"
            aria-label="Imena — home"
          >
            <img
              src={dimenaLogo.url}
              alt="Imena Interior Design"
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
          </Link>

          <nav className="hidden justify-center gap-8 lg:flex" aria-label="Primary">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`gold-underline font-mono text-[10px] uppercase tracking-[0.28em] transition-colors ${location.pathname === l.to
                  ? "text-gold"
                  : "text-ivory/70 hover:text-ivory"
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3 justify-self-end">
            <Link
              to="/products"
              aria-label="Search catalog"
              className="hidden h-9 w-9 place-items-center text-ivory/70 transition-colors hover:text-gold sm:grid"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/wishlist"
              aria-label={`Wishlist (${wishCount})`}
              className="relative grid h-9 w-9 place-items-center text-ivory/70 transition-colors hover:text-gold"
            >
              <Heart className="h-4 w-4" strokeWidth={1.5} />
              {wishCount > 0 && (
                <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center bg-gold px-1 font-mono text-[9px] text-void">
                  {wishCount}
                </span>
              )}
            </Link>
            <Link
              to="/project-builder"
              className="group hidden h-10 items-center gap-2 border border-gold/40 px-4 font-mono text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-void sm:inline-flex"
            >
              <Layers className="h-3.5 w-3.5" strokeWidth={1.5} />
              Project
              {projCount > 0 && (
                <span className="ml-1 font-mono">({projCount})</span>
              )}
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center text-ivory lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-void transition-opacity duration-500 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <div className="container-x flex h-full flex-col overflow-y-auto pb-16 pt-24">
          <nav className="flex flex-col divide-y divide-hairline" aria-label="Mobile">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-5 font-display text-3xl text-ivory transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/project-builder"
              className="py-5 font-display text-3xl text-gold"
            >
              Project Builder
              {projCount > 0 ? ` (${projCount})` : ""}
            </Link>
            <Link
              to="/wishlist"
              className="py-5 font-display text-3xl text-ivory"
            >
              Wishlist{wishCount > 0 ? ` (${wishCount})` : ""}
            </Link>
          </nav>
          <div className="mt-8">
            <p className="eyebrow mb-4">Categories</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/categories/${c.slug}`}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

