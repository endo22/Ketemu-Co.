import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { ConceptualArticleVisual } from "@/components/insights/ConceptualArticleVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { contactCta } from "@/components/layout/nav";
import {
  getRelatedArticles,
  insightsCta,
  type InsightArticle,
} from "@/content/insights";

type ArticleDetailProps = {
  article: InsightArticle;
};

export function ArticleDetail({ article }: ArticleDetailProps) {
  const related = getRelatedArticles(article.slug);

  return (
    <>
      <Section id="artikel-intro" tone="default">
        <Container>
          <div className="flex flex-col gap-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-grey-600">
                <li>
                  <TextLink
                    href="/insights"
                    className="no-underline hover:underline"
                  >
                    Insights
                  </TextLink>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-navy-800" aria-current="page">
                  {article.title}
                </li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="flex flex-wrap items-center gap-3">
                  <ContentStatusBadge variant="author" />
                  <p className="font-sans text-xs font-medium tracking-wide text-grey-600 uppercase">
                    {article.categoryLabel}
                  </p>
                </div>
                <Heading level={1} className="gap-0">
                  {article.title}
                </Heading>
                <p className="text-pretty text-lg leading-relaxed text-grey-600">
                  {article.summary}
                </p>
                <div className="flex flex-col gap-3 border-t border-grey-200 pt-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-sans text-sm text-navy-800">
                      {article.author.name}
                    </p>
                    <ContentStatusBadge variant="author" />
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-grey-600">
                    <ContentStatusBadge variant="simulated" />
                    <span>{article.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readingTime}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ConceptualArticleVisual
                  kind={article.coverKind}
                  title={article.title}
                  caption={article.coverCaption}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="artikel-isi" tone="muted">
        <Container>
          <article className="mx-auto flex max-w-3xl flex-col gap-12">
            {article.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <Heading level={2}>{section.heading}</Heading>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-pretty text-base leading-relaxed text-grey-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </Container>
      </Section>

      <Section id="artikel-terkait" tone="default">
        <Container>
          <div className="flex flex-col gap-8">
            <Heading level={2}>Artikel terkait</Heading>
            <ul className="grid list-none gap-8 p-0 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <TextLink
                    href={`/insights/${item.slug}`}
                    className="group flex flex-col gap-2 no-underline"
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
          </div>
        </Container>
      </Section>

      <Section id="artikel-cta" tone="muted">
        <Container>
          <div className="flex max-w-xl flex-col gap-6">
            <Heading level={2}>{insightsCta.heading}</Heading>
            <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
              {insightsCta.body}
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
