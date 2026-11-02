import Link from "next/link";
import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { ConceptualProjectVisual } from "@/components/projects/ConceptualProjectVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { homeFeatured } from "@/content/home";
import { projectListingCtaLabel, projects } from "@/content/projects";

export function HomeFeaturedProjects() {
  return (
    <Section id="proyek-unggulan" tone="muted">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-prose flex-col gap-4">
              <Heading level={2}>{homeFeatured.heading}</Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {homeFeatured.lead}
              </p>
            </div>
            <Button href={homeFeatured.ctaHref} variant="ghost">
              {homeFeatured.ctaLabel}
            </Button>
          </div>

          <ul className="grid list-none gap-12 p-0 md:grid-cols-2">
            {projects.map((project, index) => {
              const cover = project.visuals[0];
              if (!cover) return null;

              return (
                <li
                  key={project.slug}
                  className={cn(
                    "flex flex-col gap-5",
                    index === 0 && "md:col-span-2 md:grid md:grid-cols-2 md:items-end md:gap-10",
                  )}
                >
                  <ConceptualProjectVisual
                    visual={cover}
                    category={project.category}
                    className={index === 0 ? "md:aspect-[16/10]" : undefined}
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <ContentStatusBadge variant="conceptual" />
                      <p className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                        {project.categoryLabel}
                      </p>
                    </div>
                    <Heading level={3} className="gap-0">
                      {project.title}
                    </Heading>
                    <p className="max-w-prose text-pretty text-base leading-relaxed text-grey-600">
                      {project.summary}
                    </p>
                    <div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className={cn(
                          "inline-flex min-h-11 items-center bg-navy-800 px-5 py-2.5 font-sans text-base font-medium text-white",
                          "hover:bg-navy-900",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
                        )}
                      >
                        {projectListingCtaLabel}
                        <span className="sr-only">{`: ${project.title}`}</span>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
