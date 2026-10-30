import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeServicesTeaser } from "@/content/home";

export function HomeServicesTeaser() {
  return (
    <Section id="layanan" tone="muted">
      <Container>
        {/* DRAFT — PENDING OWNER APPROVAL — outline-only heading */}
        <h2 className="sr-only">{homeServicesTeaser.sectionHeading}</h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {homeServicesTeaser.pillars.map((pillar) => (
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
      </Container>
    </Section>
  );
}
