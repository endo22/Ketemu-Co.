import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeStats } from "@/content/home";

export function HomeStats() {
  return (
    <Section id="statistik" tone="default">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex max-w-prose flex-col gap-4">
            <Heading level={2}>{homeStats.heading}</Heading>
            <p className="text-pretty text-base leading-relaxed text-grey-600">
              {homeStats.lead}
            </p>
          </div>
          <ul className="grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.items.map((item) => (
              <li
                key={item.label}
                className="flex flex-col gap-3 border-t border-grey-200 pt-5"
              >
                <ContentStatusBadge variant="simulated" />
                <p className="font-display text-3xl font-semibold text-navy-800">
                  {item.value}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-grey-600">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
