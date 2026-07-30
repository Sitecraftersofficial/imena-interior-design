import { Link } from "react-router-dom";
import { categories } from "@/data/categories";
import imenaLogo from "@/assets/Imena-Logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline bg-void">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <img
              src={imenaLogo}
              alt="Imena Interior Design"
              className="h-16 w-auto"
            />
            <p className="mt-6 text-sm leading-relaxed text-ivory/50">
              A design, supply and installation atelier for architectural
              hardware, doors, kitchens and complete interior systems. Kigali, Rwanda.
            </p>
            <p className="eyebrow mt-8">Correspondence</p>
            <a
              href="mailto:concierge@dimena.studio"
              className="mt-2 inline-block text-sm text-gold hover:underline"
            >
              concierge@dimena.studio
            </a>
          </div>

          <FooterColumn
            title="Catalog"
            links={categories.slice(0, 6).map((c) => ({
              to: `/categories/${c.slug}`,
              label: c.name,
            }))}
          />
          <FooterColumn
            title="Studio"
            links={[
              { to: "/about", label: "Atelier" },
              { to: "/services", label: "Services" },
              { to: "/inspiration", label: "Inspiration" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Consultation" },
            ]}
          />
          <FooterColumn
            title="Account"
            links={[
              { to: "/wishlist", label: "Wishlist" },
              { to: "/project-builder", label: "Project Builder" },
              { to: "/products", label: "All Products" },
            ]}
          />
        </div>

        <div className="mt-20 hairline" />
        <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/30">
            &copy; {new Date().getFullYear()} Imena Architectural. All rights reserved.
          </p>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/30">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ to: string; label: string }>;
}) {
  return (
    <div>
      <p className="eyebrow mb-6">{title}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={`${l.to}-${l.label}`}>
            <Link
              to={l.to}
              className="text-sm text-ivory/60 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

