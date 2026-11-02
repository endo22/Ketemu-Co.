import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { homeServicesTeaser } from "@/content/home";
import { services } from "@/content/services";

export function HomeServicesTeaser() {
  return (
    <Section id="layanan-ringkas" tone="muted">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-prose flex-col gap-4">
              <Heading level={2}>{homeServicesTeaser.sectionHeading}</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {homeServicesTeaser.lead}
              </p>
            </div>
            <Button href={homeServicesTeaser.ctaHref} variant="ghost">
              {homeServicesTeaser.ctaLabel}
            </Button>
          </div>

          <ul className="grid list-none gap-8 p-0 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.id} className="flex flex-col gap-3">
                <div className="h-0.5 w-10 bg-orange-500" aria-hidden="true" />
                <Heading level={3} className="gap-0">
                  {service.title}
                </Heading>
                <p className="text-pretty text-base leading-relaxed text-grey-600">
                  {service.summary}
                </p>
                <TextLink href={`/services#${service.hrefAnchor}`}>
                  Pelajari layanan
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
