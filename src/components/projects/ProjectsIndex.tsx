"use client";

import { useState } from "react";
import Link from "next/link";
import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { ConceptualProjectVisual } from "@/components/projects/ConceptualProjectVisual";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import {
  projectCategoryFilters,
  projectListingCtaLabel,
  projectsFilterEmpty,
  type ConceptualProject,
  type ProjectCategoryFilterId,
} from "@/content/projects";

type ProjectsIndexProps = {
  projects: readonly ConceptualProject[];
};

export function ProjectsIndex({ projects }: ProjectsIndexProps) {
  const [filter, setFilter] = useState<ProjectCategoryFilterId>("all");

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Section id="proyek-listing" tone="muted">
      <Container>
        <div className="flex flex-col gap-10">
          <div
            role="toolbar"
            aria-label="Filter kategori proyek"
            className="flex flex-wrap gap-2"
          >
            {projectCategoryFilters.map((item) => {
              const selected = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "min-h-11 px-4 py-2 font-sans text-sm font-medium transition-colors",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
                    selected
                      ? "bg-navy-800 text-white"
                      : "border border-grey-300 bg-white text-navy-800 hover:border-navy-800",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {visibleProjects.length === 0 ? (
            <div className="flex max-w-prose flex-col gap-4">
              <div
                className="h-0.5 w-12 bg-orange-500"
                aria-hidden="true"
              />
              <Heading level={2} className="gap-0">
                {projectsFilterEmpty.heading}
              </Heading>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                {projectsFilterEmpty.body}
              </p>
            </div>
          ) : (
            <ul className="grid list-none gap-12 p-0 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:gap-x-14">
              {visibleProjects.map((project, index) => {
                const cover = project.visuals[0];
                if (!cover) {
                  return null;
                }

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

                      <Heading level={2} className="gap-0">
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
                          <span className="sr-only">
                            {`: ${project.title}`}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Container>
    </Section>
  );
}
