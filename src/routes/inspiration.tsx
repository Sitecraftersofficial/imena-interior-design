import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import livingForest from "@/assets/interiors/living-forest.jpg";
import bedroomSuite from "@/assets/interiors/bedroom-suite.jpg";
import kitchen from "@/assets/products/kitchen-modern.jpg.asset.json";
import kitchen2 from "@/assets/products/kitchen-warm.jpg.asset.json";
import showroom from "@/assets/products/showroom-yellow.jpg.asset.json";
import showroomDoors from "@/assets/products/showroom-doors.jpg.asset.json";

const rooms = [
  {
    slug: "living-forest",
    title: "The Forest House",
    location: "Aosta Valley, Italy",
    tag: "Living",
    image: livingForest,
  },
  {
    slug: "bedroom-suite",
    title: "The Ivory Suite",
    location: "Milan, Italy",
    tag: "Bedroom",
    image: bedroomSuite,
  },
  {
    slug: "kitchen-graphite",
    title: "The Graphite Kitchen",
    location: "London, UK",
    tag: "Kitchen",
    image: kitchen.url,
  },
  {
    slug: "kitchen-warm",
    title: "The Hearth Kitchen",
    location: "Kandy, Sri Lanka",
    tag: "Kitchen",
    image: kitchen2.url,
  },
  {
    slug: "atelier-composition",
    title: "Atelier Composition N°01",
    location: "Milan Showroom",
    tag: "Styling",
    image: showroom.url,
  },
  {
    slug: "door-composition",
    title: "Door Composition N°01",
    location: "Milan Showroom",
    tag: "Doors",
    image: showroomDoors.url,
  },
];

export function Inspiration() {
  return (
    <>
      <Helmet>
        <title>Inspiration — Imena</title>
        <meta
          name="description"
          content="Rooms and installations designed and installed by the Imena atelier. Shop the look."
        />
        <meta property="og:title" content="Inspiration — Imena" />
        <meta
          property="og:description"
          content="Rooms and installations designed and installed by the Imena atelier."
        />
        <meta property="og:image" content={livingForest} />
        <meta name="twitter:image" content={livingForest} />
      </Helmet>

      <section className="container-x pb-16 pt-16 lg:pt-24">
        <p className="eyebrow">Inspiration</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-7xl">
          Rooms, quietly composed.
        </h1>
        <p className="mt-6 max-w-xl text-base text-ivory/60">
          A rotating archive of interiors designed and installed by the atelier.
          Each room can be shopped as a composition.
        </p>
      </section>

      <section className="container-x grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((r, i) => (
          <Link
            key={r.slug}
            to="/products"
            className={`group relative block overflow-hidden bg-ink outline -outline-offset-1 outline-hairline ${i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-4/5" : "aspect-4/5"
              }`}
          >
            <img
              src={r.image}
              alt={r.title}
              loading={i < 2 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-1400 group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-void/90 via-void/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold">
                {r.tag} · {r.location}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ivory group-hover:text-gold">
                {r.title}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                Shop the look →
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

