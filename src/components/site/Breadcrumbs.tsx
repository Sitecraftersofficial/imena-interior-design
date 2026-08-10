import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/50"
    >
      <Link to="/" className="transition-colors hover:text-gold">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronRight className="h-3 w-3 text-ivory/30" strokeWidth={1.5} />
          {item.to ? (
            <Link to={item.to} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          ) : (
            <span className="text-ivory/70">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
