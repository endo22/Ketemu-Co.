import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/insights/ArticleDetail";
import { articles, getArticleBySlug } from "@/content/insights";

type InsightSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel tidak ditemukan" };
  }

  return {
    title: article.title,
    description: `${article.summary} Artikel editorial demo KETEMU & Co.`,
  };
}

export default async function InsightSlugPage({
  params,
}: InsightSlugPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
