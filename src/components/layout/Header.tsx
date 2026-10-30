import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLink } from "@/components/layout/NavLink";
import { contactCta, primaryNav } from "@/components/layout/nav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-grey-200 bg-white">
      <Container>
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 py-3 lg:min-h-[5rem]">
          <Link
            href="/"
            aria-label="KETEMU & Co."
            className="inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
          >
            <Logo
              alt=""
              priority
              className="h-12 max-h-14 w-auto lg:h-14"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <nav aria-label="Navigasi utama">
              <ul className="flex items-center gap-8">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Button href={contactCta.href} size="md">
              {contactCta.label}
            </Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
