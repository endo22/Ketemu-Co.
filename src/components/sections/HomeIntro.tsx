import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeIntro } from "@/content/home";

export function HomeIntro() {
  return (
    <Section id="pengantar" tone="default">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <Heading level={2}>{homeIntro.heading}</Heading>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
              {homeIntro.body}
            </p>
            <ul className="flex list-none flex-col gap-3 p-0">
              {homeIntro.points.map((point) => (
                <li
                  key={point}
                  className="border-l-2 border-orange-500 pl-4 text-pretty text-base leading-relaxed text-grey-600"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
