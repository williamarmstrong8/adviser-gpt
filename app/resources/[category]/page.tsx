import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ResourceCardSmall, ResourceIcon } from "../../components/ResourceCard";
import {
  getBlogPosts,
  getEducationalPosts,
  getVideoPosts,
  type BlogPost,
  type ResourcePost,
} from "@/lib/content";

const CATEGORY_CONFIG = {
  blogs: {
    title: "Blogs",
    description:
      "Latest posts and insights from the AdviserGPT team.",
    basePath: "/resources/blogs",
  },
  educational: {
    title: "Educational tips",
    description:
      "Guides and learning resources to get the most from AdviserGPT.",
    basePath: "/resources/educational",
  },
  videos: {
    title: "Videos",
    description:
      "Walkthroughs, demos, and short guides from the AdviserGPT team.",
    basePath: "/resources/videos",
  },
} as const;

type CategorySegment = keyof typeof CATEGORY_CONFIG;

function getPostsForCategory(
  category: CategorySegment
): (BlogPost | ResourcePost)[] {
  switch (category) {
    case "blogs":
      return getBlogPosts();
    case "educational":
      return getEducationalPosts();
    case "videos":
      return getVideoPosts();
    default:
      return [];
  }
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: segment } = await params;
  const category = segment as CategorySegment;
  if (!CATEGORY_CONFIG[category]) {
    return (
      <>
        <main style={{ paddingTop: 88, background: "#fafaf9", minHeight: "100vh" }}>
          <Navbar />
          <section
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "80px 24px 48px",
            }}
          >
            <p style={{ color: "#555" }}>Page not found.</p>
          </section>
          <Footer />
        </main>
      </>
    );
  }

  const config = CATEGORY_CONFIG[category];
  const items = getPostsForCategory(category);
  const featured = items[0];
  const rest = items.slice(1);
  const basePath = config.basePath;

  return (
    <>
      <main
        style={{
          paddingTop: 88,
          background: "#fafaf9",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <section
          style={{
            background: "linear-gradient(to bottom, #fafaf9 0%, #f5f5f4 100%)",
            padding: "80px 24px 64px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <header style={{ marginBottom: 48 }}>
              <h1
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: "#1a1a1a",
                  marginBottom: 18,
                  fontFamily:
                    "var(--font-playfair), Georgia, 'Times New Roman', serif",
                }}
              >
                {config.title}
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#555",
                  maxWidth: 560,
                  fontWeight: 400,
                }}
              >
                {config.description}
              </p>
            </header>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#555",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              Featured
            </p>
            {featured && (
              <Link
                href={`${basePath}/${featured.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <article
                  style={{
                    background: "#ffffff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    display: "grid",
                    gridTemplateColumns: "minmax(200px, 1fr) 1.2fr",
                    minHeight: 320,
                  }}
                  className="resource-card"
                >
                  <div
                    style={{
                      background: `
                        radial-gradient(ellipse 80% 80% at 50% 50%, rgba(253, 244, 220, 0.9) 0%, rgba(250, 245, 230, 0.6) 50%, rgba(255,251,240,0.4) 100%),
                        linear-gradient(135deg, #fef9e8 0%, #faf5e8 100%)
                      `,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(210, 160, 90, 0.2) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0",
                      }}
                    />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <ResourceIcon />
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "40px 40px 32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "#555",
                        marginBottom: 12,
                        fontWeight: 400,
                      }}
                    >
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      • By {featured.author}
                    </p>
                    <h2
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 28px)",
                        fontWeight: 400,
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                        color: "#1a1a1a",
                        marginBottom: 0,
                        fontFamily:
                          "var(--font-playfair), Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {featured.title}
                    </h2>
                  </div>
                </article>
              </Link>
            )}
          </div>
        </section>

        {rest.length > 0 && (
          <section
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "64px 24px 48px",
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
              More {config.title.toLowerCase()}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
              className="resource-section-grid"
            >
              {rest.map((item) => (
                <ResourceCardSmall
                  key={item.slug}
                  title={item.title}
                  description={item.description}
                  date={new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  author={item.author}
                  icon={<ResourceIcon size={48} />}
                  href={`${basePath}/${item.slug}`}
                />
              ))}
            </div>
          </section>
        )}
        <Footer />
      </main>
      <style>{`
        @media (max-width: 640px) {
          .resource-card {
            grid-template-columns: 1fr !important;
          }
          .resource-section-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
