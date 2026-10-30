import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contactCta } from "@/components/layout/nav";
import {
  insightsCta,
  insightsEmpty,
  insightsIntro,
} from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights dari KETEMU & Co. seputar desain arsitektur dan konstruksi Design & Build.",
};

export default function InsightsPage() {
  return (
    <>
      <Section id="insights-intro" tone="default">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={1}>{insightsIntro.heading}</Heading>
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {insightsIntro.lead}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="insights-empty" tone="muted">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            <div
              className="h-0.5 w-12 bg-orange-500"
              aria-hidden="true"
            />
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={2} className="gap-0">
              {insightsEmpty.heading}
            </Heading>
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {insightsEmpty.body}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="insights-cta" tone="muted">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={2}>{insightsCta.heading}</Heading>
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
              {insightsCta.body}
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
