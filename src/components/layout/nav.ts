export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: readonly NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Proyek", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Kontak", href: "/contact" },
] as const;

export const contactCta = {
  label: "Hubungi Kami",
  href: "/contact",
} as const;

/** Home matches only exact `/`; other items match path or nested segments. */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
