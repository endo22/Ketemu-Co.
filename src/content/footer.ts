/**
 * Footer content for KETEMU & Co.
 * Brand description: DRAFT — PENDING OWNER APPROVAL
 * Contact channels and copyright year: not available — do not render placeholders.
 */

export const footerBrand = {
  name: "KETEMU & Co.",
  /** DRAFT — PENDING OWNER APPROVAL */
  description:
    "KETEMU & Co. menyediakan jasa desain arsitektur dan konstruksi dalam satu pendekatan Design & Build.",
} as const;

/** Footer nav — only routes that exist today. Do not use primaryNav. */
export const footerNav = [
  { label: "Beranda", href: "/" },
  { label: "Kontak", href: "/contact" },
] as const;
