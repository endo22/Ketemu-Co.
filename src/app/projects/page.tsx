import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";
import { contactCta } from "@/components/layout/nav";
import {
  projects,
  projectsCta,
  projectsIntro,
} from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyek",
  description:
    "Proyek dan portofolio KETEMU & Co. — Design & Build untuk desain arsitektur dan konstruksi.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section id="proyek-intro" tone="default">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            <div
              className="h-0.5 w-12 bg-orange-500"
              aria-hidden="true"
            />
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={1}>{projectsIntro.heading}</Heading>
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {projectsIntro.lead}
            </p>
          </div>
        </Container>
      </Section>

      <ProjectsIndex projects={projects} />

      <Section id="proyek-cta" tone="default">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <Heading level={2}>{projectsCta.heading}</Heading>
            {/* DRAFT — PENDING OWNER APPROVAL */}
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
              {projectsCta.body}
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
