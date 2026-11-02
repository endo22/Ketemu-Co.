import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeWhy } from "@/content/home";

export function HomeWhy() {
  return (
    <Section id="mengapa-kami" tone="default">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading level={2}>{homeWhy.heading}</Heading>
          <ul className="grid list-none gap-10 p-0 md:grid-cols-2">
            {homeWhy.items.map((item, index) => (
              <li key={item.title} className="flex flex-col gap-3">
                <p className="font-display text-sm font-semibold text-orange-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <Heading level={3} className="gap-0">
                  {item.title}
                </Heading>
                <p className="max-w-prose text-pretty text-base leading-relaxed text-grey-600">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
