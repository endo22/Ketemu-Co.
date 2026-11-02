"use client";

import { useState } from "react";
import Link from "next/link";
import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { ConceptualArticleVisual } from "@/components/insights/ConceptualArticleVisual";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import {
  insightCategoryFilters,
  type InsightArticle,
  type InsightCategoryFilterId,
} from "@/content/insights";

type InsightsIndexProps = {
  articles: readonly InsightArticle[];
};

export function InsightsIndex({ articles }: InsightsIndexProps) {
  const [filter, setFilter] = useState<InsightCategoryFilterId>("all");
  const featured = articles[0];
  const visible =
    filter === "all"
      ? articles
      : articles.filter((article) => article.category === filter);

  return (
    <>
      {featured ? (
        <Section id="insights-featured" tone="muted">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-7">
                <ConceptualArticleVisual
                  kind={featured.coverKind}
                  title={featured.title}
                  caption={featured.coverCaption}
                />
              </div>
              <div className="flex flex-col gap-5 lg:col-span-5">
                <p className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                  Artikel unggulan
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <ContentStatusBadge variant="author" />
                  <p className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                    {featured.categoryLabel}
                  </p>
                </div>
                <Heading level={2} className="gap-0">
                  {featured.title}
                </Heading>
                <p className="text-pretty text-base leading-relaxed text-grey-600">
                  {featured.summary}
                </p>
                <div>
                  <Link
                    href={`/insights/${featured.slug}`}
                    className={cn(
                      "inline-flex min-h-11 items-center bg-navy-800 px-5 py-2.5 font-sans text-base font-medium text-white",
                      "hover:bg-navy-900",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
                    )}
                  >
                    Baca artikel
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section id="insights-listing" tone="default">
        <Container>
          <div className="flex flex-col gap-10">
            <div
              role="toolbar"
              aria-label="Filter kategori artikel"
              className="flex flex-wrap gap-2"
            >
              {insightCategoryFilters.map((item) => {
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

            {visible.length === 0 ? (
              <p className="text-pretty text-base text-grey-600">
                Tidak ada artikel pada kategori ini.
              </p>
            ) : (
              <ul className="grid list-none gap-12 p-0 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((article) => (
                  <li key={article.slug} className="flex flex-col gap-4">
                    <ConceptualArticleVisual
                      kind={article.coverKind}
                      title={article.title}
                      caption={article.coverCaption}
                      className="aspect-[4/3]"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <ContentStatusBadge variant="author" />
                      <p className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                        {article.categoryLabel}
                      </p>
                    </div>
                    <Heading level={3} className="gap-0">
                      {article.title}
                    </Heading>
                    <p className="text-pretty text-sm leading-relaxed text-grey-600">
                      {article.summary}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-grey-600">
                      <span className="inline-flex items-center gap-2">
                        <ContentStatusBadge variant="simulated" />
                        {article.publishedAt}
                      </span>
                      <span>{article.readingTime}</span>
                    </div>
                    <div>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="font-sans text-sm font-medium text-navy-800 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
                      >
                        Baca selengkapnya
                        <span className="sr-only">{`: ${article.title}`}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
