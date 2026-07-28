import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layers, Minus, Plus, Trash2, Send } from "lucide-react";
import { useStore } from "@/lib/store";
import { productById } from "@/data/products";
import { formatPrice } from "@/lib/format";
import {
  buildProjectMailto,
  validateClientInfo,
  type ClientInfo,
} from "@/lib/send-to-manager";

const CLIENT_KEY = "dimena.client.v1";

export function ProjectBuilder() {
  const {
    project,
    hydrated,
    updateProjectQty,
    updateProjectNote,
    removeFromProject,
    clearProject,
  } = useStore();

  const [meta, setMeta] = useState<ClientInfo>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [errorField, setErrorField] = useState<string | null>(null);

  // Reuse saved client info so returning visitors don't re-enter it.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(CLIENT_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<ClientInfo>;
        setMeta((m) => ({ ...m, ...saved }));
      }
    } catch {
      /* ignore */
    }
  }, []);

  const rows = project
    .map((p) => ({ item: p, product: productById(p.productId) }))
    .filter((r) => r.product) as {
      item: (typeof project)[number];
      product: NonNullable<ReturnType<typeof productById>>;
    }[];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    if (rows.length === 0) {
      setSendError("Your project is empty.");
      return;
    }
    const error = validateClientInfo(meta);
    if (error) {
      setSendError(error.message);
      setErrorField(error.field);
      return;
    }
    setSending(true);
    setSendError(null);
    setErrorField(null);
    try {
      window.localStorage.setItem(
        CLIENT_KEY,
        JSON.stringify({
          name: meta.name.trim(),
          email: meta.email.trim(),
          phone: meta.phone?.trim() ?? "",
          company: meta.company?.trim() ?? "",
        }),
      );
      const href = buildProjectMailto(rows, meta);
      window.location.href = href;
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("[Imena] Failed to open mail client", err);
      setSendError(
        "We couldn't send your object right now. Your object is still saved. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section className="container-x py-32 text-center">
        <p className="eyebrow">Received</p>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-6xl">
          Your project has been sent.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base text-ivory/60">
          The atelier will review your submission of {rows.length} object
          {rows.length === 1 ? "" : "s"} and may reach you at{" "}
          <span className="text-ivory">{meta.email}</span>
          {meta.phone?.trim() ? (
            <>
              {" "}
              or <span className="text-ivory">{meta.phone.trim()}</span>
            </>
          ) : null}
          .
        </p>
        <Link
          to="/products"
          className="mt-10 inline-block border border-gold px-8 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-void"
        >
          Continue browsing
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Project Builder — Imena</title>
        <meta
          name="description"
          content="Curate objects, add specification notes and submit as a consolidated quote request."
        />
        <meta property="og:title" content="Project Builder — Imena" />
        <meta
          property="og:description"
          content="Curate objects, add notes and submit as a consolidated quote request."
        />
      </Helmet>

      <section className="container-x border-b border-hairline pb-10 pt-16 lg:pt-24">
        <p className="eyebrow">Digital Concierge</p>
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h1 className="font-display text-4xl leading-tight text-ivory sm:text-6xl">
            Project Builder
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/50">
            {hydrated ? rows.length : "—"} objects
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-ivory/50">
          Curate a specification across categories, annotate each line with
          rooms, quantities and finish preferences, then submit for a
          consolidated quote from the atelier.
        </p>
      </section>

      {!hydrated ? null : rows.length === 0 ? (
        <section className="container-x py-16">
          <div className="border border-hairline bg-ink/40 px-6 py-20 text-center">
            <Layers className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <p className="mt-6 font-display text-2xl text-ivory">
              Your project is empty.
            </p>
            <p className="mt-2 text-sm text-ivory/50">
              Add objects from the catalog to begin composing your project.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block border border-gold px-8 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-void"
            >
              Browse catalog
            </Link>
          </div>
        </section>
      ) : (
        <form onSubmit={onSubmit} className="container-x py-16">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-6">
              {rows.map(({ item, product }) => (
                <article
                  key={product.id}
                  className="grid grid-cols-[96px_1fr] gap-4 border border-hairline bg-ink/40 p-4 sm:grid-cols-[140px_1fr_auto] sm:gap-6 sm:p-6"
                >
                  <Link
                    to={`/products/${product.slug}`}
                    className="block aspect-4/5 overflow-hidden bg-void"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                      {product.category.replace(/-/g, " ")}
                    </p>
                    <Link
                      to={`/products/${product.slug}`}
                      className="mt-1 block truncate font-display text-xl text-ivory hover:text-gold"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 line-clamp-1 text-xs text-ivory/50 italic">
                      {product.material ?? product.shortDescription}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                      {formatPrice(product)}
                    </p>

                    <label className="mt-3 block">
                      <span className="sr-only">Specification note</span>
                      <textarea
                        rows={2}
                        placeholder="Room, finish, dimensions or note…"
                        value={item.note ?? ""}
                        onChange={(e) => updateProjectNote(product.id, e.target.value)}
                        className="mt-1 w-full border border-hairline bg-void px-3 py-2 text-xs text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end sm:justify-between">
                    <div className="inline-flex items-center border border-hairline">
                      <button
                        type="button"
                        onClick={() =>
                          updateProjectQty(product.id, item.quantity - 1)
                        }
                        className="grid h-9 w-9 place-items-center text-ivory/70 hover:text-gold"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                      <span className="min-w-8 text-center font-mono text-sm text-ivory">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateProjectQty(product.id, item.quantity + 1)
                        }
                        className="grid h-9 w-9 place-items-center text-ivory/70 hover:text-gold"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromProject(product.id)}
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/50 hover:text-gold"
                    >
                      <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                      Remove
                    </button>
                  </div>
                </article>
              ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={clearProject}
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/40 hover:text-gold"
                >
                  Clear project
                </button>
              </div>
            </div>

            <aside className="h-fit border border-hairline bg-ink/40 p-6 lg:sticky lg:top-28">
              <p className="eyebrow">Your details</p>
              <p className="mt-2 text-xs text-ivory/40">
                So the atelier knows who you are and how to reply.
              </p>
              <div className="mt-6 space-y-4">
                <Field
                  label="Full name"
                  value={meta.name}
                  required
                  invalid={errorField === "name"}
                  onChange={(v) => setMeta((m) => ({ ...m, name: v }))}
                />
                <Field
                  label="Email"
                  type="email"
                  value={meta.email}
                  required
                  invalid={errorField === "email"}
                  onChange={(v) => setMeta((m) => ({ ...m, email: v }))}
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={meta.phone ?? ""}
                  invalid={errorField === "phone"}
                  onChange={(v) => setMeta((m) => ({ ...m, phone: v }))}
                />
                <Field
                  label="Company"
                  value={meta.company ?? ""}
                  invalid={errorField === "company"}
                  onChange={(v) => setMeta((m) => ({ ...m, company: v }))}
                />
                <Field
                  label="Project name"
                  value={meta.projectName ?? ""}
                  onChange={(v) => setMeta((m) => ({ ...m, projectName: v }))}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 bg-gold font-mono text-[10px] uppercase tracking-[0.3em] text-void hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
                {sending ? "Sending…" : `Send to Manager (${rows.length})`}
              </button>
              {sendError && (
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-red-400">
                  {sendError}
                </p>
              )}
              <p className="mt-4 text-xs text-ivory/40">
                Opens your mail app with the project pre-composed for the atelier.
                Your saved objects remain untouched.
              </p>
            </aside>
          </div>
        </form>
      )}
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  invalid = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  invalid?: boolean;
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
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 h-11 w-full border bg-void px-3 text-sm text-ivory focus:border-gold focus:outline-none ${invalid ? "border-red-400/70" : "border-hairline"
          }`}
      />
    </label>
  );
}

