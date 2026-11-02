/**
 * Footer content for the demo website.
 */

import { demoLabels } from "./demo";
import { services } from "./services";

export const footerBrand = {
  name: "KETEMU & Co.",
  description:
    "Architecture & Design Build — menyatukan perencanaan arsitektur dan pelaksanaan konstruksi dalam satu pendekatan terkoordinasi.",
} as const;

export const footerNav = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Proyek", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Kontak", href: "/contact" },
] as const;

export const footerServices = services.map((service) => ({
  label: service.title,
  href: `/services#${service.hrefAnchor}`,
}));

export const footerProjects = {
  heading: "Proyek",
  links: [
    { label: "Semua proyek", href: "/projects" },
    { label: "Rumah Teras Angin", href: "/projects/rumah-teras-angin" },
    { label: "Selasar Rumah Warisan", href: "/projects/selasar-rumah-warisan" },
    {
      label: "Paviliun Kerja Lantai Dasar",
      href: "/projects/paviliun-kerja-lantai-dasar",
    },
    { label: "Studio Cahaya Tengah", href: "/projects/studio-cahaya-tengah" },
  ],
} as const;

export const footerContact = {
  heading: "Kontak",
  disclosure: demoLabels.simulated,
  lines: [
    "Jl. Menteng Raya No. 88, Jakarta Pusat",
    "+62 21 0000 0000",
    "hello@ketemu-co.example",
  ],
} as const;

export const footerSocial = {
  heading: "Media",
  note: "Tautan media bersifat placeholder demo dan tidak mengarah ke akun pihak lain.",
  items: [
    { label: "Instagram (demo)", href: "#footer-social-demo" },
    { label: "LinkedIn (demo)", href: "#footer-social-demo" },
  ],
} as const;

export const footerCopyright = {
  line: "© KETEMU & Co. — website demonstrasi. Konten portofolio dan kontak bersifat simulasi.",
} as const;
