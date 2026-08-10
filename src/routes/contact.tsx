import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { productBySlug } from "@/data/products";
import { BUSINESS_CONFIG } from "@/config/business";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export function Contact() {
  const [searchParams] = useSearchParams();
  const productSlug = searchParams.get("product");
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
    console.log("[Imena] Consultation request", form);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Consultation — Imena</title>
        <meta
          name="description"
          content="Book a private consultation with Imena — Kigali, Rwanda."
        />
        <meta property="og:title" content="Consultation — Imena" />
        <meta
          property="og:description"
          content="Private design consultations with Imena — Kigali, Rwanda."
        />
      </Helmet>

      <section className="container-x pb-10 pt-16 lg:pt-24">
        <Breadcrumbs items={[{ label: "Consultation" }]} />
        <p className="eyebrow mt-6">Collaborate</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-7xl">
          Bring your project
          <br />
          <span className="italic text-gold">to our studio</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base text-ivory/60">
          Every project starts with a conversation. Share a few details and a
          senior consultant will reply within one working day.
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
              Your request has arrived. A senior consultant will
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
          <ContactBlock icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />} title="Kigali Showroom">
            KG 7 Ave, Kacyiru<br />
            Kigali, Rwanda
          </ContactBlock>
          <ContactBlock icon={<Phone className="h-4 w-4" strokeWidth={1.5} />} title="Direct">
            <a href={`tel:${BUSINESS_CONFIG.managerPhone}`} className="hover:underline">
              +250 780 700 640
            </a>
          </ContactBlock>
          <ContactBlock icon={<Mail className="h-4 w-4" strokeWidth={1.5} />} title="Correspondence">
            <a href={`mailto:${BUSINESS_CONFIG.managerEmail}`} className="hover:underline">
              {BUSINESS_CONFIG.managerEmail}
            </a>
          </ContactBlock>
          <div className="border-t border-hairline pt-8">
            <p className="eyebrow">Showroom</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/60">
              <li>Kigali · Kacyiru</li>
              <li>By appointment only</li>
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

