import { createFileRoute, Link } from "@tanstack/react-router";
import livingForest from "@/assets/interiors/living-forest.jpg";
import bedroomSuite from "@/assets/interiors/bedroom-suite.jpg";
import kitchen from "@/assets/products/kitchen-modern.jpg.asset.json";
import kitchen2 from "@/assets/products/kitchen-warm.jpg.asset.json";

const projects = [
  {
    slug: "villa-aosta",
    title: "Villa Aosta",
    year: "2025",
    scope: "Full interior · 620 m²",
    location: "Aosta Valley, Italy",
    image: livingForest,
  },
  {
    slug: "casa-milano",
    title: "Casa Milano",
    year: "2024",
    scope: "Kitchen & bedroom suite",
    location: "Milan, Italy",
    image: bedroomSuite,
  },
  {
    slug: "residence-mayfair",
    title: "Residence Mayfair",
    year: "2024",
    scope: "Doors & hardware · 42 openings",
    location: "London, UK",
    image: kitchen.url,
  },
  {
    slug: "hearth-house",
    title: "Hearth House",
    year: "2023",
    scope: "Kitchen & wardrobe systems",
    location: "Kandy, Sri Lanka",
    image: kitchen2.url,
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aurelian" },
      {
        name: "description",
        content:
          "Selected residential and commercial projects designed and installed by the Aurelian atelier.",
      },
      { property: "og:title", content: "Projects — Aurelian" },
      {
        property: "og:description",
        content:
          "Selected residential and commercial projects designed and installed by the Aurelian atelier.",
      },
      { property: "og:image", content: livingForest },
      { name: "twitter:image", content: livingForest },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <section className="container-x pb-16 pt-16 lg:pt-24">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-7xl">
          Selected work,
          <span className="italic text-gold"> quietly delivered</span>.
        </h1>
      </section>

      <section className="container-x space-y-24 pb-24">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div
              className={`relative aspect-[4/5] overflow-hidden bg-ink outline outline-1 -outline-offset-1 outline-hairline ${
                i % 2 ? "lg:order-2" : ""
              }`}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                N°{String(i + 1).padStart(2, "0")} · {p.year}
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                {p.title}
              </h2>
              <p className="mt-4 text-sm italic text-ivory/60">{p.location}</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">
                {p.scope}
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-block border border-hairline px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory hover:border-gold hover:text-gold"
              >
                Discuss a similar project
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
