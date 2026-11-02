import Link from "next/link";
import type { ReactNode } from "react";
import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import {
  footerBrand,
  footerContact,
  footerCopyright,
  footerNav,
  footerProjects,
  footerServices,
  footerSocial,
} from "@/content/footer";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-grey-200 bg-grey-50">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-5 lg:col-span-4">
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
              <p className="text-pretty text-sm leading-relaxed text-grey-600">
                {footerBrand.description}
              </p>
            </div>
            <div className="h-0.5 w-10 bg-orange-500" aria-hidden="true" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterColumn title="Navigasi">
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
            </FooterColumn>

            <FooterColumn title="Layanan">
              <ul className="flex flex-col">
                {footerServices.map((item) => (
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
            </FooterColumn>

            <FooterColumn title={footerProjects.heading}>
              <ul className="flex flex-col">
                {footerProjects.links.map((item) => (
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
            </FooterColumn>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-sm font-semibold tracking-wide text-navy-800">
                  {footerContact.heading}
                </p>
                <ContentStatusBadge variant="simulated" />
              </div>
              <ul className="flex list-none flex-col gap-2 p-0">
                {footerContact.lines.map((line) => (
                  <li key={line} className="text-sm leading-relaxed text-grey-600">
                    {line}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 pt-2">
                <p className="font-display text-sm font-semibold tracking-wide text-navy-800">
                  {footerSocial.heading}
                </p>
                <p className="text-xs leading-relaxed text-grey-600">
                  {footerSocial.note}
                </p>
                <ul className="flex list-none flex-col p-0" id="footer-social-demo">
                  {footerSocial.items.map((item) => (
                    <li key={item.label}>
                      <span className="inline-flex min-h-11 items-center text-sm text-grey-600">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-grey-200 pt-6">
          <p className="text-sm text-grey-600">{footerCopyright.line}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-display text-sm font-semibold tracking-wide text-navy-800">
        {title}
      </p>
      {children}
    </div>
  );
}
