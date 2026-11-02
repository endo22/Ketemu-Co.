import type { Metadata } from "next";
import { InsightsIndex } from "@/components/insights/InsightsIndex";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contactCta } from "@/components/layout/nav";
import { articles, insightsCta, insightsIntro } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Artikel editorial demo KETEMU & Co. seputar desain tropis, konstruksi, renovasi, dan interior.",
};

export default function InsightsPage() {
  return (
    <>
      <Section id="insights-intro" tone="default">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
            <Heading level={1}>{insightsIntro.heading}</Heading>
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {insightsIntro.lead}
            </p>
          </div>
        </Container>
      </Section>

      <InsightsIndex articles={articles} />

      <Section id="insights-cta" tone="muted">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            <Heading level={2}>{insightsCta.heading}</Heading>
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
