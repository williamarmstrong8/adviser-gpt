"use client";

import * as React from "react";

export function ResourceCardSmall({
  title,
  description,
  date,
  author,
  icon,
  href = "/resources",
}: {
  title: string;
  description: string;
  date: string;
  author: string;
  icon: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
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
            fontFamily:
              "var(--font-playfair), Georgia, serif",
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

export function ResourceIcon({ size = 80 }: { size?: number }) {
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
