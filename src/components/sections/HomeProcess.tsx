import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeProcess } from "@/content/home";

export function HomeProcess() {
  return (
    <Section id="proses-kerja" tone="muted">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading level={2}>{homeProcess.heading}</Heading>
          <ol className="grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {homeProcess.steps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-3">
                <p className="font-display text-sm font-semibold text-orange-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <Heading level={3} className="gap-0">
                  {step.title}
                </Heading>
                <p className="text-pretty text-base leading-relaxed text-grey-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
