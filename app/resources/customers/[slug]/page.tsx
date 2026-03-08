import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { MarkdownBody } from "../../../components/MarkdownBody";
import { BlogHeroVisual } from "../../../components/BlogHeroVisual";
import { BlogToc } from "../../../components/BlogToc";
import { BookDemoCta } from "../../../components/BookDemoCta";
import { ResourceCardSmall, ResourceIcon } from "../../../components/ResourceCard";
import {
  getCustomerSlugs,
  getCustomerStory,
  getCustomerStories,
} from "@/lib/content";
import { getHeadingsFromMarkdown } from "@/lib/blog-utils";

export function generateStaticParams() {
  return getCustomerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getCustomerStory(slug);
  if (!story) return {};
  return {
    title: `${story.headline} | ${story.company} | AdviserGPT Customers`,
    description: story.description,
  };
}

export default async function CustomerStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getCustomerStory(slug);
  if (!story) notFound();

  const headings = getHeadingsFromMarkdown(story.body);
  const otherStories = getCustomerStories()
    .filter((s) => s.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <main
        style={{
          paddingTop: 88,
          background: "#fafaf9",
          minHeight: "100vh",
          overflow: "visible",
        }}
      >
        <Navbar />

        {/* Light header — back link, company, headline */}
        <header
          style={{
            background: "#fafaf9",
            padding: "64px 24px 40px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <Link
                href="/resources/customers"
                style={{
                  fontSize: 14,
                  color: "#555",
                  textDecoration: "none",
                }}
              >
                ← Customers
              </Link>
              <span
                style={{
                  fontSize: 14,
                  color: "#555",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {story.company}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#1a1a1a",
                marginBottom: 24,
                fontFamily:
                  "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              {story.headline}
            </h1>

            {/* Hero: full width 16:9 card */}
            <div style={{ marginTop: 40 }}>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #d4d4d1",
                  borderRadius: 12,
                  overflow: "hidden",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#f5f5f4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BlogHeroVisual />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article + sticky sidebar (TOC + CTA) */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 24px 64px",
            display: "flex",
            gap: 48,
            alignItems: "stretch",
            overflow: "visible",
          }}
          className="blog-article-layout"
        >
          <article style={{ flex: "1 1 0", minWidth: 0 }}>
            <MarkdownBody content={story.body} />
          </article>
          <aside style={{ flexShrink: 0, minHeight: 0, width: 220 }}>
            <div
              className="blog-sidebar-sticky"
              style={{
                position: "sticky",
                top: 104,
                width: 220,
                minWidth: 200,
              }}
            >
              {headings.length > 0 && <BlogToc headings={headings} />}
              <BookDemoCta />
            </div>
          </aside>
        </div>

        {/* Recommended */}
        {otherStories.length > 0 && (
          <section
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 24px 64px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                marginBottom: 24,
                fontFamily:
                  "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              More customer stories
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 24,
              }}
              className="blog-recommended-grid"
            >
              {otherStories.map((s) => (
                <ResourceCardSmall
                  key={s.slug}
                  title={s.headline}
                  description={s.description}
                  date="Customer story"
                  author={s.company}
                  icon={<ResourceIcon size={48} />}
                  href={`/resources/customers/${s.slug}`}
                />
              ))}
            </div>
          </section>
        )}

        <Footer />
      </main>
      <style>{`
        @media (max-width: 900px) {
          .blog-article-layout {
            flex-direction: column;
          }
          .blog-article-layout aside {
            order: -1;
            width: 100% !important;
            max-width: none;
          }
          .blog-article-layout aside .blog-sidebar-sticky {
            width: 100%;
            position: static !important;
          }
          .blog-article-layout aside .book-demo-cta {
            max-width: none;
          }
          .blog-article-layout aside .blog-toc-nav {
            position: static !important;
            max-width: none;
            display: flex;
            flex-wrap: wrap;
            gap: 8;
            border-left: none;
            padding-left: 0;
          }
          .blog-article-layout aside .blog-toc-nav > div {
            border-left: none;
            display: flex;
            flex-wrap: wrap;
            gap: 4;
          }
          .blog-article-layout aside .blog-toc-nav a {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 8px;
            background: #f5f5f4;
            border-left: none !important;
            margin: 0;
          }
          .blog-article-layout aside .blog-toc-nav a[data-active="true"] {
            background: #eeecea;
          }
          .blog-article-layout aside .book-demo-cta {
            max-width: none;
          }
        }
        @media (max-width: 640px) {
          .blog-recommended-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
