import { createFileRoute, Link } from "@tanstack/react-router";

const services = [
  {
    n: "01",
    title: "Design Consultation",
    body: "Private one-to-one sessions with a senior designer to shape material, finish and hardware direction for your interior.",
  },
  {
    n: "02",
    title: "Bespoke Doors",
    body: "Custom door systems — pivot, sliding, entrance — in oak, walnut, glass and metal, fabricated to your opening.",
  },
  {
    n: "03",
    title: "Kitchen & Wardrobe Systems",
    body: "Full architectural kitchens and dressing rooms designed and installed by our workshop.",
  },
  {
    n: "04",
    title: "Hardware Specification",
    body: "Handle, knob and lock schedules coordinated across every door in the project, matched to a shared finish palette.",
  },
  {
    n: "05",
    title: "Lighting Design",
    body: "Architectural and decorative lighting layouts, dimming schedules and integrated warm-dim programming.",
  },
  {
    n: "06",
    title: "Project Concierge",
    body: "Dedicated project manager, on-site installation crews and post-installation care for large developments.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aurelian" },
      {
        name: "description",
        content:
          "Design, supply and installation services for architectural interiors — consultation, bespoke doors, hardware, kitchens and lighting.",
      },
      { property: "og:title", content: "Services — Aurelian" },
      {
        property: "og:description",
        content:
          "Design, supply and installation services for architectural interiors.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="container-x pb-16 pt-16 lg:pt-24">
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-7xl">
          A single studio, from
          <span className="italic text-gold"> sketch to installation</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base text-ivory/60">
          Our services are structured to carry a project from earliest
          conception through fabrication, delivery and installation on site.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.n}
              className="group flex min-h-[280px] flex-col justify-between bg-void p-8 transition-colors hover:bg-ink"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight text-ivory transition-colors group-hover:text-gold">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/55">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="border border-hairline bg-ivory p-12 text-void md:p-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-void/60">
            Ready to begin
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-void sm:text-5xl">
            Start with a private consultation.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-void px-8 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory hover:bg-ink"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
