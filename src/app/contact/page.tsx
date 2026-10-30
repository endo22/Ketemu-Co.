import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi KETEMU & Co. untuk mendiskusikan rencana desain arsitektur dan konstruksi.",
};

export default function ContactPage() {
  return (
    <Section id="kontak" tone="default">
      <Container>
        <div className="flex max-w-prose flex-col gap-6">
          {/* DRAFT — PENDING OWNER APPROVAL */}
          <Heading level={1}>{contactPage.heading}</Heading>
          {/* DRAFT — PENDING OWNER APPROVAL */}
          <p className="text-pretty text-lg leading-relaxed text-grey-600">
            {contactPage.body}
          </p>
          {/* DRAFT — PENDING OWNER APPROVAL */}
          <p className="text-pretty text-base leading-relaxed text-grey-600">
            {contactPage.note}
          </p>
        </div>
      </Container>
    </Section>
  );
}
