import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contactCta } from "@/components/layout/nav";
import { homeCtaBand } from "@/content/home";

export function HomeCtaBand() {
  return (
    <Section id="kontak-cta" tone="muted">
      <Container>
        <div className="flex max-w-xl flex-col gap-6">
          {/* DRAFT — PENDING OWNER APPROVAL */}
          <Heading level={2}>{homeCtaBand.heading}</Heading>
          {/* DRAFT — PENDING OWNER APPROVAL */}
          <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
            {homeCtaBand.body}
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
  );
}
