"use client";

import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SLIDE_DURATION_MS = 5000;
const PROGRESS_TICK_MS = 50;

const FEATURED_ITEMS = [
  { date: "February 23, 2026", author: "AdviserGPT Team", title: "Beyond RFPs: How AI is Transforming Due Diligence for Asset Managers" },
  { date: "February 20, 2026", author: "AdviserGPT Team", title: "Building a Compliance-First AI Strategy" },
  { date: "February 18, 2026", author: "AdviserGPT Team", title: "The State of RFP Response in 2026" },
  { date: "February 19, 2026", author: "AdviserGPT Team", title: "Writing better RFP responses" },
  { date: "February 22, 2026", author: "AdviserGPT Team", title: "AdviserGPT in 5 minutes" },
];

function ResourceCardSmall({
  title,
  description,
  date,
  author,
  icon,
}: {
  title: string;
  description: string;
  date: string;
  author: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href="/resources"
      style={{
        display: "block",
        background: "#ffffff",
        border: "1px solid #d4d4d1",
        borderRadius: 12,
        textDecoration: "none",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease, transform 0.2s ease, background 0.2s ease",
      }}
      className="resource-card-small"
      onMouseOver={(e) => {
        e.currentTarget.style.background = "#eeecea";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "#ffffff";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      {/* Same gradient + pattern + icon treatment as featured hero card */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/10",
          background: `
            radial-gradient(ellipse 80% 80% at 50% 50%, rgba(253, 244, 220, 0.9) 0%, rgba(250, 245, 230, 0.6) 50%, rgba(255,251,240,0.4) 100%),
            linear-gradient(135deg, #fef9e8 0%, #faf5e8 100%)
          `,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
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
        <div style={{ position: "relative", zIndex: 1 }}>{icon}</div>
      </div>
      <div style={{ padding: "24px" }}>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.5,
            color: "#555",
            marginBottom: 10,
          }}
        >
          {date} • By {author}
        </p>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.3,
            color: "#1a1a1a",
            marginBottom: 8,
            fontFamily: "var(--font-playfair), Georgia, serif",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "#555" }}>
          {description}
        </p>
      </div>
    </a>
  );
}

function ResourceIcon({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.9 }}
    >
      <path
        d="M40 8L68 24v32L40 72 12 56V24L40 8z"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M40 24v48M12 24l28 16 28-16M40 72L12 56V24M40 72l28-16V24"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function ResourcesPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const progressRef = React.useRef(0);

  React.useEffect(() => {
    const advance = () => {
      setCurrentSlide((s) => (s + 1) % FEATURED_ITEMS.length);
      setProgress(0);
      progressRef.current = 0;
    };
    const interval = setInterval(() => {
      progressRef.current += PROGRESS_TICK_MS / SLIDE_DURATION_MS;
      if (progressRef.current >= 1) {
        advance();
      } else {
        setProgress(progressRef.current);
      }
    }, PROGRESS_TICK_MS);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    progressRef.current = 0;
    setProgress(0);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    progressRef.current = 0;
  };

  const featured = FEATURED_ITEMS[currentSlide];

  return (
    <>
      <main style={{ paddingTop: 88, background: "#fafaf9", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero section: title, description, featured card, dots */}
        <section
          style={{
            background: "linear-gradient(to bottom, #fafaf9 0%, #f5f5f4 100%)",
            padding: "80px 24px 64px",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            {/* Header — same font styles as home (Playfair for title, body for description) */}
            <header style={{ marginBottom: 48 }}>
              <h1
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: "#1a1a1a",
                  marginBottom: 18,
                  fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                }}
              >
                Resources
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
                Guides, videos, blogs, and product updates to help you get the most
                from AdviserGPT and build a stronger practice.
              </p>
            </header>

            {/* Featured resource card */}
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
            {/* Left: gradient + pattern + icon */}
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
              {/* Subtle dot pattern */}
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

            {/* Right: date, author, title */}
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
                {featured.date} • By {featured.author}
              </p>
              <h2
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: "#1a1a1a",
                  marginBottom: 0,
                  fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                }}
              >
                {featured.title}
              </h2>
            </div>
          </article>

          {/* Carousel dots: pill in flow so dots shift right as pill grows */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 28,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {FEATURED_ITEMS.map((_, i) =>
                i < currentSlide ? (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to resource ${i + 1}`}
                    onClick={() => goToSlide(i)}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      background: "#666666",
                      flexShrink: 0,
                    }}
                  />
                ) : null
              )}
              <div
                aria-hidden
                style={{
                  height: 10,
                  width: 30,
                  borderRadius: 5,
                  background: "#e5e5e5",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: 10,
                    width: 10 + 20 * progress,
                    borderRadius: 5,
                    background: "#666666",
                  }}
                />
              </div>
              {FEATURED_ITEMS.map((_, i) =>
                i > currentSlide ? (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to resource ${i + 1}`}
                    onClick={() => goToSlide(i)}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      background: "#e5e5e5",
                      flexShrink: 0,
                    }}
                  />
                ) : null
              )}
            </div>
          </div>
          </div>
        </section>

        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 24px 48px",
          }}
        >
          {/* Section: Blogs */}
          <section style={{ marginTop: 0 }}>
            <h2
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                marginBottom: 24,
                fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              Blogs
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "#555",
                marginBottom: 24,
                maxWidth: 560,
              }}
            >
              Latest posts and insights from the AdviserGPT team.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
              className="resource-section-grid"
            >
              {[
                {
                  title: "Beyond RFPs: How AI is Transforming Due Diligence",
                  description: "Why asset managers are turning to AI for faster, compliant DDQ responses.",
                  date: "February 18, 2026",
                  author: "AdviserGPT Team",
                },
                {
                  title: "Building a Compliance-First AI Strategy",
                  description: "How to adopt AI tools while keeping your compliance team in the driver's seat.",
                  date: "February 20, 2026",
                  author: "AdviserGPT Team",
                },
                {
                  title: "The State of RFP Response in 2026",
                  description: "Benchmarks and trends from hundreds of investment firms.",
                  date: "February 23, 2026",
                  author: "AdviserGPT Team",
                },
              ].map((item, i) => (
                <ResourceCardSmall
                  key={i}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  author={item.author}
                  icon={<ResourceIcon size={48} />}
                />
              ))}
            </div>
          </section>

          {/* Section: Educational tips */}
          <section style={{ marginTop: 72 }}>
            <h2
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                marginBottom: 24,
                fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              Educational tips
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "#555",
                marginBottom: 24,
                maxWidth: 560,
              }}
            >
              Guides and learning resources to get the most from AdviserGPT.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
              className="resource-section-grid"
            >
              {[
                {
                  title: "Getting started with your Vault",
                  description: "How to upload, organize, and maintain your firm's approved content.",
                  date: "February 15, 2026",
                  author: "AdviserGPT Team",
                },
                {
                  title: "Writing better RFP responses",
                  description: "Best practices for structure, tone, and compliance-friendly language.",
                  date: "February 19, 2026",
                  author: "AdviserGPT Team",
                },
                {
                  title: "AdviserGPT in 5 minutes",
                  description: "A quick walkthrough of the product for new users.",
                  date: "February 22, 2026",
                  author: "AdviserGPT Team",
                },
              ].map((item, i) => (
                <ResourceCardSmall
                  key={i}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  author={item.author}
                  icon={<ResourceIcon size={48} />}
                />
              ))}
            </div>
          </section>

          {/* Section: Asset management and RFP tools and practices */}
          <section style={{ marginTop: 72, paddingBottom: 48 }}>
            <h2
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                marginBottom: 24,
                fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              Asset management and RFP tools and practices
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "#555",
                marginBottom: 24,
                maxWidth: 560,
              }}
            >
              Tools, templates, and practices for RFPs, DDQs, and due diligence.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
              className="resource-section-grid"
            >
              {[
                {
                  title: "RFP response checklist",
                  description: "A step-by-step checklist to keep RFP responses consistent and complete.",
                  date: "February 12, 2026",
                  author: "AdviserGPT Team",
                },
                {
                  title: "DDQ update workflows",
                  description: "How to run efficient quarterly DDQ updates with your team.",
                  date: "February 17, 2026",
                  author: "AdviserGPT Team",
                },
                {
                  title: "15(c) questionnaire guide",
                  description: "Structure and best practices for 15(c) and similar questionnaires.",
                  date: "February 21, 2026",
                  author: "AdviserGPT Team",
                },
              ].map((item, i) => (
                <ResourceCardSmall
                  key={i}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  author={item.author}
                  icon={<ResourceIcon size={48} />}
                />
              ))}
            </div>
          </section>
        </section>

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
