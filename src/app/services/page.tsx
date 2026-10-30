import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contactCta } from "@/components/layout/nav";
import {
  servicesCta,
  servicesIntro,
  servicesPillars,
} from "@/content/services";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan desain arsitektur dan konstruksi Design & Build dari KETEMU & Co.",
};

export default function ServicesPage() {
  return (
    <>
      <Section id="layanan-intro" tone="default">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={1}>{servicesIntro.heading}</Heading>
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {servicesIntro.lead}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="pilar-layanan" tone="muted">
        <Container>
          <div className="flex flex-col gap-10">
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={2}>{servicesPillars.heading}</Heading>

            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {servicesPillars.pillars.map((pillar) => (
                <div key={pillar.heading} className="flex flex-col gap-4">
                  <div
                    className="h-0.5 w-12 bg-orange-500"
                    aria-hidden="true"
                  />
                  {/* DRAFT — PENDING OWNER APPROVAL */}
                  <Heading level={3} className="gap-0">
                    {pillar.heading}
                  </Heading>
                  {/* DRAFT — PENDING OWNER APPROVAL */}
                  <p className="max-w-prose text-pretty text-base leading-relaxed text-grey-600">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="layanan-cta" tone="muted">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={2}>{servicesCta.heading}</Heading>
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
              {servicesCta.body}
            </p>
            <div>
              <Button
                href={contactCta.href}
                size="lg"
                className="min-h-11 w-full sm:w-auto"
              >
                {contactCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
