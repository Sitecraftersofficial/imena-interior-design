import { createFileRoute, Link } from "@tanstack/react-router";
import livingForest from "@/assets/interiors/living-forest.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Aurelian" },
      {
        name: "description",
        content:
          "Founded in Milan in 1984, Aurelian is a design, supply and installation atelier for architectural interiors.",
      },
      { property: "og:title", content: "The Atelier — Aurelian" },
      {
        property: "og:description",
        content:
          "Founded in Milan in 1984, Aurelian is a design, supply and installation atelier for architectural interiors.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x pb-16 pt-16 lg:pt-24">
        <p className="eyebrow">The Atelier</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-ivory sm:text-7xl">
          Forty years of drawing the
          <span className="italic text-gold"> line</span> between architecture and object.
        </h1>
      </section>

      <section className="container-x grid gap-16 pb-24 lg:grid-cols-2">
        <img
          src={livingForest}
          alt="A cinematic interior with dark walnut wall paneling and a warm ivory sofa."
          loading="lazy"
          className="aspect-[4/5] w-full object-cover outline outline-1 -outline-offset-1 outline-hairline"
        />
        <div className="space-y-6 text-base leading-relaxed text-ivory/70">
          <p>
            Aurelian was founded in Milan in 1984 by a small collective of
            architects and cabinetmakers who believed the door, the handle and
            the panel deserved the same care as the building around them.
          </p>
          <p>
            Four decades later, that founding conviction remains. Our atelier
            designs, supplies and installs architectural doors, hardware,
            kitchens, wardrobes and complete interior systems for private
            residences, hotels and cultural institutions across Europe, the Gulf
            and North America.
          </p>
          <p>
            Every object in our catalog is engineered to be lived with — quietly,
            for a very long time.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-hairline pt-10">
            <Stat n="1984" l="Founded, Milan" />
            <Stat n="42" l="Countries served" />
            <Stat n="1,400+" l="Projects delivered" />
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-gold px-8 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-void"
          >
            Visit the atelier
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-ivory">{n}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/40">
        {l}
      </p>
    </div>
  );
}
