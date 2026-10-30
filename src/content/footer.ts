/**
 * Footer content for KETEMU & Co.
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

export const footerContact = {
  // DUMMY — REPLACE BEFORE PRODUCTION
  email: "[EMAIL DUMMY]",
  // DUMMY — REPLACE BEFORE PRODUCTION
  whatsapp: "[NOMOR WHATSAPP DUMMY]",
  // DUMMY — REPLACE BEFORE PRODUCTION
  address: "[ALAMAT KANTOR DUMMY]",
} as const;

export const footerCopyright = {
  // DUMMY — REPLACE BEFORE PRODUCTION
  year: "[TAHUN COPYRIGHT DUMMY]",
  line: "© [TAHUN COPYRIGHT DUMMY] KETEMU & Co.",
} as const;
