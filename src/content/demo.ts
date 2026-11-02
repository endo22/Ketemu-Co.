/**
 * Demo-site disclosure labels for the presentation website.
 * Visible to visitors — intentional, not a draft marker.
 */

export type DemoBadgeVariant = "conceptual" | "simulated" | "author";

export const demoSiteBanner = {
  title: "DEMO WEBSITE",
  description:
    "Website demonstrasi KETEMU & Co. Seluruh portofolio dan informasi simulasi ditampilkan untuk kebutuhan presentasi.",
} as const;

export const demoLabels = {
  conceptual: "PROYEK KONSEPTUAL",
  simulated: "DATA SIMULASI",
  author: "PENULIS DEMO",
} as const satisfies Record<DemoBadgeVariant, string>;
