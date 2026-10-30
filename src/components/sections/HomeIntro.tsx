import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeIntro } from "@/content/home";

export function HomeIntro() {
  return (
    <Section id="positioning" tone="default">
      <Container>
        <div className="flex max-w-prose flex-col gap-5">
          {/* DRAFT — PENDING OWNER APPROVAL */}
          <Heading level={2}>{homeIntro.heading}</Heading>
          {/* DRAFT — PENDING OWNER APPROVAL */}
          <p className="text-pretty text-lg leading-relaxed text-grey-600">
            {homeIntro.body}
          </p>
        </div>
      </Container>
    </Section>
  );
}
