import type { Metadata } from "next";
import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contactCta } from "@/components/layout/nav";
import {
  aboutCta,
  aboutDesignPhilosophy,
  aboutIntro,
  aboutMission,
  aboutOverview,
  aboutStory,
  aboutTeam,
  aboutValues,
  aboutVision,
  aboutWorkingPhilosophy,
} from "@/content/about";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Profil, visi, misi, nilai, dan tim simulasi KETEMU & Co. — Architecture & Design Build.",
};

function TeamAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="relative flex aspect-square w-full items-end justify-start overflow-hidden bg-navy-800 p-4"
      aria-hidden="true"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-[40%] bg-navy-950/50" />
        <div className="absolute right-0 bottom-0 h-[45%] w-[50%] bg-navy-700/40" />
        <div className="absolute top-[22%] left-[38%] h-[48%] w-0.5 bg-orange-500" />
        <div className="absolute top-[22%] left-[38%] h-0.5 w-16 bg-orange-500" />
      </div>
      <p className="relative font-display text-3xl font-semibold text-white">
        {initials}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Section id="tentang-intro" tone="default">
        <Container>
          <div className="flex max-w-prose flex-col gap-5">
            <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
            <Heading level={1}>{aboutIntro.heading}</Heading>
            <p className="text-pretty text-lg leading-relaxed text-grey-600">
              {aboutIntro.lead}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="profil" tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-5 lg:col-span-5">
              <Heading level={2}>{aboutOverview.heading}</Heading>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
                {aboutOverview.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cerita" tone="default">
        <Container>
          <div className="flex max-w-3xl flex-col gap-6">
            <Heading level={2}>{aboutStory.heading}</Heading>
            {aboutStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-pretty text-base leading-relaxed text-grey-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="visi-misi" tone="muted">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
              <Heading level={2} className="gap-0">
                {aboutVision.heading}
              </Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {aboutVision.body}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
              <Heading level={2} className="gap-0">
                {aboutMission.heading}
              </Heading>
              <ul className="flex list-none flex-col gap-3 p-0">
                {aboutMission.items.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-navy-800 pl-4 text-pretty text-base leading-relaxed text-grey-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="nilai" tone="default">
        <Container>
          <div className="flex flex-col gap-10">
            <Heading level={2}>{aboutValues.heading}</Heading>
            <ul className="grid list-none gap-10 p-0 sm:grid-cols-2">
              {aboutValues.items.map((item) => (
                <li key={item.title} className="flex flex-col gap-3">
                  <div className="h-0.5 w-10 bg-orange-500" aria-hidden="true" />
                  <Heading level={3} className="gap-0">
                    {item.title}
                  </Heading>
                  <p className="text-pretty text-base leading-relaxed text-grey-600">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="filosofi" tone="muted">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-4">
              <Heading level={2}>{aboutDesignPhilosophy.heading}</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {aboutDesignPhilosophy.body}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Heading level={2}>{aboutWorkingPhilosophy.heading}</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {aboutWorkingPhilosophy.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="tim" tone="default">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex max-w-prose flex-col gap-4">
              <Heading level={2}>{aboutTeam.heading}</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {aboutTeam.lead}
              </p>
            </div>
            <ul className="grid list-none gap-10 p-0 md:grid-cols-3">
              {aboutTeam.members.map((member) => (
                <li key={member.id} className="flex flex-col gap-5">
                  <TeamAvatar name={member.name} />
                  <div className="flex flex-wrap items-center gap-3">
                    <ContentStatusBadge variant="simulated" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Heading level={3} className="gap-0">
                      {member.name}
                    </Heading>
                    <p className="font-sans text-sm font-medium tracking-wide text-grey-600 uppercase">
                      {member.role}
                    </p>
                    <p className="text-pretty text-base leading-relaxed text-grey-600">
                      {member.bio}
                    </p>
                  </div>
                  <ul className="flex list-none flex-wrap gap-2 p-0">
                    {member.skills.map((skill) => (
                      <li
                        key={skill}
                        className="border border-grey-300 px-2 py-1 font-sans text-xs text-navy-800"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="tentang-cta" tone="muted">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            <Heading level={2}>{aboutCta.heading}</Heading>
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
              {aboutCta.body}
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
