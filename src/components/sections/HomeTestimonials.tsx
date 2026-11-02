import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeTestimonials } from "@/content/home";

export function HomeTestimonials() {
  return (
    <Section id="testimoni" tone="default">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex max-w-prose flex-col gap-4">
            <Heading level={2}>{homeTestimonials.heading}</Heading>
            <p className="text-pretty text-base leading-relaxed text-grey-600">
              {homeTestimonials.lead}
            </p>
          </div>
          <ul className="grid list-none gap-8 p-0 lg:grid-cols-3">
            {homeTestimonials.items.map((item) => (
              <li
                key={item.name}
                className="flex flex-col gap-5 border-t border-grey-200 pt-6"
              >
                <ContentStatusBadge variant="simulated" />
                <blockquote className="text-pretty text-base leading-relaxed text-grey-600">
                  “{item.quote}”
                </blockquote>
                <footer className="flex flex-col gap-1">
                  <cite className="font-display text-base font-semibold not-italic text-navy-800">
                    {item.name}
                  </cite>
                  <p className="text-sm text-grey-600">{item.role}</p>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
