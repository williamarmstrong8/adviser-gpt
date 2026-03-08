"use client";

import Link from "next/link";
import type { CustomerStory } from "@/lib/content";

type LogoLine = {
  text: string;
  size: number;
  weight: number;
  spacing: string;
  serif?: boolean;
};

function CustomerLogo({ lines }: { lines: LogoLine[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: "block",
            fontSize: line.size,
            fontWeight: line.weight,
            letterSpacing: line.spacing,
            color: "#333",
            lineHeight: 1.25,
            fontFamily:
              line.serif === false
                ? "var(--font-geist-sans), sans-serif"
                : "var(--font-geist-sans), sans-serif",
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  );
}

export interface CustomerStoryWithLogo extends CustomerStory {
  logoLines: LogoLine[];
}

export function CustomersGrid({ stories }: { stories: CustomerStoryWithLogo[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
      }}
      className="customer-card-grid"
    >
      {stories.map((story) => (
        <Link
          key={story.slug}
          href={`/resources/customers/${story.slug}`}
          style={{
            display: "block",
            background: "#ffffff",
            border: "1px solid #d4d4d1",
            borderRadius: 12,
            textDecoration: "none",
            overflow: "hidden",
            transition:
              "box-shadow 0.2s ease, transform 0.2s ease, background 0.2s ease",
          }}
          className="customer-card"
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
          <div
            style={{
              width: "100%",
              aspectRatio: "16/10",
              background: "#f5f5f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <CustomerLogo lines={story.logoLines} />
          </div>
          <div style={{ padding: "24px" }}>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.3,
                color: "#1a1a1a",
                marginBottom: 10,
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              {story.headline}
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: "#555",
                marginBottom: 14,
              }}
            >
              {story.description}
            </p>
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#e85d26",
              }}
            >
              Read more
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
