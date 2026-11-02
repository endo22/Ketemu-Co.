import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import {
  contactAltCta,
  contactFaq,
  contactInfo,
  contactPage,
} from "@/content/contact";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi KETEMU & Co. — formulir dan informasi kontak bersifat simulasi untuk demonstrasi website.",
};

export default function ContactPage() {
  return (
    <>
      <Section id="kontak-intro" tone="default">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
            <Heading level={1}>{contactPage.heading}</Heading>
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {contactPage.lead}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="kontak-info" tone="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="flex flex-wrap items-center gap-3">
                <Heading level={2} className="gap-0">
                  {contactInfo.heading}
                </Heading>
                <ContentStatusBadge variant="simulated" />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className="font-display text-sm font-semibold tracking-wide text-navy-800 uppercase">
                    {contactInfo.address.label}
                  </p>
                  {contactInfo.address.lines.map((line) => (
                    <p key={line} className="text-base text-grey-600">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-display text-sm font-semibold tracking-wide text-navy-800 uppercase">
                    {contactInfo.phone.label}
                  </p>
                  <p className="text-base text-grey-600">
                    {contactInfo.phone.display}
                  </p>
                  <p className="text-sm text-grey-600">{contactInfo.phone.note}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-display text-sm font-semibold tracking-wide text-navy-800 uppercase">
                    {contactInfo.email.label}
                  </p>
                  <p className="text-base text-grey-600">
                    {contactInfo.email.display}
                  </p>
                  <p className="text-sm text-grey-600">{contactInfo.email.note}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-display text-sm font-semibold tracking-wide text-navy-800 uppercase">
                    {contactInfo.hours.label}
                  </p>
                  {contactInfo.hours.lines.map((line) => (
                    <p key={line} className="text-base text-grey-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="kontak-faq" tone="default">
        <Container>
          <div className="flex flex-col gap-8">
            <Heading level={2}>{contactFaq.heading}</Heading>
            <dl className="flex max-w-3xl flex-col gap-8">
              {contactFaq.items.map((item) => (
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

      <Section id="kontak-alt" tone="muted">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            <Heading level={2}>{contactAltCta.heading}</Heading>
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {contactAltCta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/projects">Lihat proyek</Button>
              <TextLink href="/services">Jelajahi layanan</TextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
