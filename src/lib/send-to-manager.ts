/**
 * Builds a mailto: link from an existing Project (Object) without duplicating
 * data to any backend. The saved project (localStorage) remains the single
 * source of truth; we only format its current contents into an email body.
 *
 * The client's email is set as the mailto Reply-To (via `?cc=` fallback so the
 * manager can simply Reply-All to reach the client). Full client contact info
 * is placed at the very top of the body for at-a-glance triage.
 */
import { BUSINESS_CONFIG } from "@/config/business";
import type { Product, ProjectItem } from "@/lib/types";
import { formatPrice } from "@/lib/format";

export interface ClientInfo {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectName?: string;
  projectDetails?: string;
}

export interface SubmitRow {
  item: ProjectItem;
  product: Product;
}

export interface ValidationError {
  field: keyof ClientInfo;
  message: string;
}

/** Client-side validation. Returns null if valid. */
export function validateClientInfo(info: ClientInfo): ValidationError | null {
  const name = info.name.trim();
  const email = info.email.trim();
  if (!name) return { field: "name", message: "Please add your full name before submitting." };
  if (name.length > 100) return { field: "name", message: "Name must be under 100 characters." };
  if (!email)
    return { field: "email", message: "Please add your email address before submitting." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { field: "email", message: "That email address doesn't look valid." };
  if (email.length > 255) return { field: "email", message: "Email must be under 255 characters." };
  if (info.phone && info.phone.length > 40)
    return { field: "phone", message: "Phone number is too long." };
  if (info.company && info.company.length > 120)
    return { field: "company", message: "Company name is too long." };
  return null;
}

export function buildProjectMailto(rows: SubmitRow[], info: ClientInfo): string {
  const subject = `New Project Submission — ${info.name.trim()}${
    info.projectName?.trim() ? ` (${info.projectName.trim()})` : ""
  } · ${rows.length} object${rows.length === 1 ? "" : "s"}`;

  const line = "—".repeat(40);
  const lines: string[] = [];
  lines.push("NEW PROJECT SUBMISSION");
  lines.push("");
  lines.push("CLIENT INFORMATION");
  lines.push(line);
  lines.push(`Name:    ${info.name.trim()}`);
  lines.push(`Email:   ${info.email.trim()}`);
  if (info.phone?.trim()) lines.push(`Phone:   ${info.phone.trim()}`);
  if (info.company?.trim()) lines.push(`Company: ${info.company.trim()}`);
  lines.push("");
  lines.push("OBJECT INFORMATION");
  lines.push(line);
  if (info.projectName?.trim()) lines.push(`Project:   ${info.projectName.trim()}`);
  lines.push(`Submitted: ${new Date().toLocaleString()}`);
  lines.push(`Objects:   ${rows.length}`);
  lines.push("");
  lines.push(`SELECTED PRODUCTS (${rows.length})`);
  lines.push(line);
  for (const { item, product } of rows) {
    lines.push("");
    lines.push(`• ${product.name}`);
    lines.push(`  ID:       ${product.id}`);
    lines.push(`  Category: ${product.category}`);
    lines.push(`  Quantity: ${item.quantity}`);
    lines.push(`  Price:    ${formatPrice(product)}`);
    if (item.note?.trim()) lines.push(`  Note:     ${item.note.trim()}`);
  }
  if (info.projectDetails?.trim()) {
    lines.push("");
    lines.push("PROJECT DETAILS");
    lines.push(line);
    lines.push(info.projectDetails.trim());
  }
  lines.push("");
  lines.push(line);
  lines.push(`Reply directly to ${info.email.trim()} to reach the client.`);

  const params = new URLSearchParams({ subject, body: lines.join("\n") });
  // Cc the client so the manager can Reply-All to reach them.
  params.append("cc", info.email.trim());
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${BUSINESS_CONFIG.managerEmail}?${query}`;
}
