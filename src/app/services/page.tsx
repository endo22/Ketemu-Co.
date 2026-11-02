import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contactCta } from "@/components/layout/nav";
import {
  services,
  servicesCta,
  servicesFaq,
  servicesIntro,
  servicesProcess,
} from "@/content/services";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan Architecture Design, Construction, Renovation, Interior, dan Design & Build dari KETEMU & Co.",
};

export default function ServicesPage() {
  return (
    <>
      <Section id="layanan-intro" tone="default">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
            <Heading level={1}>{servicesIntro.heading}</Heading>
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {servicesIntro.lead}
            </p>
          </div>
        </Container>
      </Section>

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.hrefAnchor}
          tone={index % 2 === 0 ? "muted" : "default"}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <p className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <Heading level={2} className="gap-0">
                  {service.title}
                </Heading>
                <p className="text-pretty text-lg leading-relaxed text-grey-600">
                  {service.summary}
                </p>
                <p className="text-pretty text-base leading-relaxed text-grey-600">
                  {service.description}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-grey-600">
                  <span className="font-semibold text-navy-800">Cocok untuk: </span>
                  {service.idealFor}
                </p>
              </div>

              <div className="flex flex-col gap-6 lg:col-span-7">
                <Heading level={3} className="gap-0">
                  Deliverables
                </Heading>
                <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-orange-500 pl-4 text-pretty text-base leading-relaxed text-grey-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <Button href="/contact" size="md">
                    Konsultasi {service.title}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section id="layanan-proses" tone="muted">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex max-w-prose flex-col gap-4">
              <Heading level={2}>{servicesProcess.heading}</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {servicesProcess.lead}
              </p>
            </div>
            <ol className="grid list-none gap-8 p-0 md:grid-cols-2 lg:grid-cols-3">
              {servicesProcess.steps.map((step, index) => (
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

      <Section id="layanan-faq" tone="default">
        <Container>
          <div className="flex flex-col gap-8">
            <Heading level={2}>{servicesFaq.heading}</Heading>
            <dl className="flex max-w-3xl flex-col gap-8">
              {servicesFaq.items.map((item) => (
                <div key={item.question} className="flex flex-col gap-2">
                  <dt className="font-display text-lg font-semibold text-navy-800">
                    {item.question}
                  </dt>
                  <dd className="text-pretty text-base leading-relaxed text-grey-600">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section id="layanan-cta" tone="muted">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            <Heading level={2}>{servicesCta.heading}</Heading>
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
              {servicesCta.body}
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
