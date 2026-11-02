import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { ConceptualProjectVisual } from "@/components/projects/ConceptualProjectVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { contactCta } from "@/components/layout/nav";
import {
  projects,
  projectsCta,
  type ConceptualProject,
} from "@/content/projects";

type ProjectDetailProps = {
  project: ConceptualProject;
};

function SimulatedMetricBlock({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-grey-200 pt-5">
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-display text-sm font-semibold tracking-wide text-navy-800 uppercase">
          {title}
        </p>
        <ContentStatusBadge variant="simulated" />
      </div>
      <p className="text-pretty text-base leading-relaxed text-grey-600">
        {value}
      </p>
    </div>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const heroVisual = project.visuals[0];
  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <>
      <Section id="proyek-detail-intro" tone="default">
        <Container>
          <div className="flex flex-col gap-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-grey-600">
                <li>
                  <TextLink href="/projects" className="no-underline hover:underline">
                    Proyek
                  </TextLink>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-navy-800" aria-current="page">
                  {project.title}
                </li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="flex flex-col gap-6 lg:col-span-5">
                <div className="flex flex-wrap items-center gap-3">
                  <ContentStatusBadge variant="conceptual" />
                  <p className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                    {project.categoryLabel}
                  </p>
                </div>

                <Heading level={1} className="gap-0">
                  {project.title}
                </Heading>

                <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
                  {project.summary}
                </p>

                <div
                  className="h-0.5 w-12 bg-orange-500"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-2">
                  <p className="font-display text-sm font-semibold tracking-wide text-navy-800 uppercase">
                    Lokasi
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <ContentStatusBadge variant="simulated" />
                    <p className="text-pretty text-base leading-relaxed text-grey-600">
                      {project.locationLabel}
                    </p>
                  </div>
                </div>
              </div>

              {heroVisual ? (
                <div className="lg:col-span-7">
                  <ConceptualProjectVisual
                    visual={heroVisual}
                    category={project.category}
                    className="aspect-[16/10] md:aspect-[16/11]"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="proyek-detail-cerita" tone="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex max-w-prose flex-col gap-5 lg:col-span-7">
              <Heading level={2}>Cerita & konsep desain</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {project.designConcept}
              </p>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {project.body}
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <Heading level={2} className="gap-0">
                Data proyek
              </Heading>
              <div className="flex flex-col gap-6">
                <SimulatedMetricBlock title="Luas" value={project.area.value} />
                <SimulatedMetricBlock
                  title="Anggaran"
                  value={project.budgetEstimate.value}
                />
                <SimulatedMetricBlock
                  title="Durasi"
                  value={project.duration.value}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="proyek-detail-tantangan" tone="default">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
              <Heading level={2} className="gap-0">
                Tantangan proyek
              </Heading>
              <p className="max-w-prose text-pretty text-base leading-relaxed text-grey-600">
                {project.challenge}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
              <Heading level={2} className="gap-0">
                Solusi desain
              </Heading>
              <p className="max-w-prose text-pretty text-base leading-relaxed text-grey-600">
                {project.solution}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="proyek-detail-lingkup" tone="muted">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-6">
              <div
                className="h-0.5 w-12 bg-orange-500"
                aria-hidden="true"
              />
              <Heading level={2} className="gap-0">
                Lingkup pekerjaan
              </Heading>
              <ul className="flex list-none flex-col gap-4 p-0">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-orange-500 pl-4 text-pretty text-base leading-relaxed text-grey-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="h-0.5 w-12 bg-orange-500"
                aria-hidden="true"
              />
              <Heading level={2} className="gap-0">
                Design highlights
              </Heading>
              <ul className="flex list-none flex-col gap-4 p-0">
                {project.highlights.map((item) => (
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

      <Section id="proyek-detail-spesifikasi" tone="default">
        <Container>
          <div className="flex flex-col gap-8">
            <Heading level={2}>Spesifikasi proyek</Heading>
            <dl className="grid gap-6 sm:grid-cols-2">
              {project.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-2 border-t border-grey-200 pt-4"
                >
                  <dt className="font-display text-sm font-semibold tracking-wide text-navy-800 uppercase">
                    {spec.label}
                  </dt>
                  <dd className="text-pretty text-base leading-relaxed text-grey-600">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section id="proyek-detail-galeri" tone="muted">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex max-w-prose flex-col gap-4">
              <Heading level={2}>Galeri konseptual</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                Tiga visual skematik untuk presentasi. Bukan fotografi proyek
                yang pernah dikerjakan.
              </p>
            </div>

            <ul className="grid list-none gap-10 p-0 md:grid-cols-3 md:gap-8">
              {project.visuals.map((visual) => (
                <li key={visual.id}>
                  <figure className="m-0 flex flex-col gap-4">
                    <ConceptualProjectVisual
                      visual={visual}
                      category={project.category}
                      hideCaption
                    />
                    <figcaption>
                      <p className="font-display text-sm font-semibold text-navy-800">
                        {visual.title}
                      </p>
                      <p className="mt-1 text-pretty text-sm leading-relaxed text-grey-600">
                        {visual.caption}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="proyek-detail-cta" tone="default">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            <Heading level={2}>{projectsCta.heading}</Heading>
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

      <Section id="proyek-detail-lainnya" tone="muted">
        <Container>
          <div className="flex flex-col gap-8">
            <Heading level={2}>Proyek konseptual lainnya</Heading>
            <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((item) => (
                <li key={item.slug}>
                  <TextLink
                    href={`/projects/${item.slug}`}
                    className="group flex min-h-11 flex-col gap-2 no-underline"
                  >
                    <span className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                      {item.categoryLabel}
                    </span>
                    <span className="font-display text-lg font-semibold text-navy-800 group-hover:underline">
                      {item.title}
                    </span>
                    <span className="text-pretty text-sm leading-relaxed text-grey-600">
                      {item.summary}
                    </span>
                  </TextLink>
                </li>
              ))}
            </ul>
            <div>
              <TextLink href="/projects">Kembali ke daftar proyek</TextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
