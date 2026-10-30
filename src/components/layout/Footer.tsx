import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import {
  footerBrand,
  footerContact,
  footerCopyright,
  footerNav,
} from "@/content/footer";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-grey-200 bg-grey-50">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="KETEMU & Co."
              className="inline-flex w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
            >
              <Logo
                alt=""
                className="h-14 w-auto max-h-16 object-contain object-left sm:h-16"
              />
            </Link>
            <div className="flex max-w-sm flex-col gap-2">
              <p className="font-display text-base font-semibold text-navy-800">
                {footerBrand.name}
              </p>
              {/* DRAFT — PENDING OWNER APPROVAL */}
              <p className="text-pretty text-sm leading-relaxed text-grey-600">
                {footerBrand.description}
              </p>
            </div>
            <div
              className="h-0.5 w-10 bg-orange-500"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-display text-sm font-semibold tracking-wide text-navy-800">
              Navigasi
            </p>
            <nav aria-label="Navigasi footer">
              <ul className="flex flex-col">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <TextLink
                      href={item.href}
                      className="inline-flex min-h-11 items-center no-underline hover:underline"
                    >
                      {item.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-display text-sm font-semibold tracking-wide text-navy-800">
              Kontak
            </p>
            <ul className="flex flex-col gap-3 text-sm leading-relaxed text-grey-600">
              {/* DUMMY — REPLACE BEFORE PRODUCTION */}
              <li>{footerContact.email}</li>
              {/* DUMMY — REPLACE BEFORE PRODUCTION */}
              <li>{footerContact.whatsapp}</li>
              {/* DUMMY — REPLACE BEFORE PRODUCTION */}
              <li>{footerContact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-grey-200 pt-6">
          {/* DUMMY — REPLACE BEFORE PRODUCTION */}
          <p className="text-sm text-grey-600">{footerCopyright.line}</p>
        </div>
      </Container>
    </footer>
  );
}
