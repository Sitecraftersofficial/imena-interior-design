import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { productBySlug } from "@/data/products";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Consultation — Dimena" },
      {
        name: "description",
        content:
          "Book a private consultation with the Dimena atelier — Milan, London, Dubai.",
      },
      { property: "og:title", content: "Consultation — Dimena" },
      {
        property: "og:description",
        content:
          "Private design consultations with the Dimena atelier — Milan, London, Dubai.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { product: productSlug } = Route.useSearch();
  const product = productSlug ? productBySlug(productSlug) : undefined;
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: product ? `I would like a quote for the "${product.name}".` : "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[Dimena] Consultation request", form);
    setSubmitted(true);
  };

  return (
    <>
      <section className="container-x pb-10 pt-16 lg:pt-24">
        <p className="eyebrow">Collaborate</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-7xl">
          Bring your project
          <br />
          <span className="italic text-gold">to the atelier</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base text-ivory/60">
          Every project begins with a conversation. Share a few details and a
          senior consultant will respond within one business day.
        </p>
      </section>

      <section className="container-x grid gap-16 py-16 lg:grid-cols-[1.4fr_1fr]">
        {submitted ? (
          <div className="border border-hairline bg-ink/40 p-12">
            <p className="eyebrow">Received</p>
            <h2 className="mt-6 font-display text-3xl text-ivory">
              Thank you, {form.name.split(" ")[0] || "friend"}.
            </h2>
            <p className="mt-4 text-sm text-ivory/60">
              Your request has arrived at the atelier. A senior consultant will
              reach you within one business day.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block border border-gold px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-void"
            >
              Continue browsing
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="Your name"
                value={form.name}
                required
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                required
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
              />
              <Field
                label="Project type"
                value={form.project}
                onChange={(v) => setForm((f) => ({ ...f, project: v }))}
                placeholder="Private residence, hospitality, retail…"
              />
            </div>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/50">
                Message <span className="text-gold">*</span>
              </span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full border border-hairline bg-void p-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
                placeholder="Tell us about your project…"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 items-center gap-2 bg-gold px-8 font-mono text-[10px] uppercase tracking-[0.3em] text-void hover:brightness-110"
            >
              <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
              Send Request
            </button>
          </form>
        )}

        <aside className="space-y-10">
          <ContactBlock icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />} title="Milan Atelier">
            Via Pontaccio 21<br />
            20121 Milano, Italy
          </ContactBlock>
          <ContactBlock icon={<Phone className="h-4 w-4" strokeWidth={1.5} />} title="Direct">
            +39 02 8080 8080
          </ContactBlock>
          <ContactBlock icon={<Mail className="h-4 w-4" strokeWidth={1.5} />} title="Correspondence">
            concierge@dimena.studio
          </ContactBlock>
          <div className="border-t border-hairline pt-8">
            <p className="eyebrow">Global Showrooms</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/60">
              <li>London · Marylebone</li>
              <li>Dubai · Alserkal Avenue</li>
              <li>New York · Tribeca (by appointment)</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/50">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-11 w-full border border-hairline bg-void px-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
      />
    </label>
  );
}

function ContactBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 text-gold">
        {icon}
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{title}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ivory/70">{children}</p>
    </div>
  );
}
