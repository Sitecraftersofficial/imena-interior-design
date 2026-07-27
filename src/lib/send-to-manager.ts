/**
 * Builds a mailto: link from an existing Project (Object) without duplicating
 * data to any backend. The saved project (localStorage) remains the single
 * source of truth; we only format its current contents into an email body.
 */
import { BUSINESS_CONFIG } from "@/config/business";
import type { Product, ProjectItem } from "@/lib/types";
import { formatPrice } from "@/lib/format";

export interface SubmitMeta {
  name: string;
  email: string;
  projectName?: string;
}

export interface SubmitRow {
  item: ProjectItem;
  product: Product;
}

export function buildProjectMailto(rows: SubmitRow[], meta: SubmitMeta): string {
  const subject = `New Project Submission${
    meta.projectName ? ` — ${meta.projectName}` : ""
  } (${rows.length} object${rows.length === 1 ? "" : "s"})`;

  const lines: string[] = [];
  lines.push("NEW PROJECT SUBMISSION");
  lines.push("");
  if (meta.projectName) {
    lines.push(`Project: ${meta.projectName}`);
  }
  lines.push(`From: ${meta.name} <${meta.email}>`);
  lines.push(`Submitted: ${new Date().toLocaleString()}`);
  lines.push("");
  lines.push(`SELECTED OBJECTS (${rows.length})`);
  lines.push("—".repeat(40));

  for (const { item, product } of rows) {
    lines.push("");
    lines.push(`• ${product.name}`);
    lines.push(`  ID: ${product.id}`);
    lines.push(`  Category: ${product.category}`);
    lines.push(`  Quantity: ${item.quantity}`);
    lines.push(`  Price: ${formatPrice(product)}`);
    if (item.note?.trim()) {
      lines.push(`  Note: ${item.note.trim()}`);
    }
  }

  lines.push("");
  lines.push("—".repeat(40));
  lines.push("Sent from the Dimena Project Builder.");

  const body = lines.join("\n");
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams uses '+' for spaces; mail clients want %20.
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${BUSINESS_CONFIG.managerEmail}?${query}`;
}
