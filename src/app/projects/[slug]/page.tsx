import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { getProjectBySlug, projects } from "@/content/projects";

type ProjectSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyek tidak ditemukan",
    };
  }

  return {
    title: project.title,
    description: `${project.summary} Proyek konseptual untuk presentasi Design & Build KETEMU & Co.`,
  };
}

export default async function ProjectSlugPage({
  params,
}: ProjectSlugPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
