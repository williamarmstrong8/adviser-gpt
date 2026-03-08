"use client";

import { useState } from "react";

type Testimonial = {
  logoLines: { text: string; size: number; weight: number; spacing: string; serif?: boolean }[];
  quote: string;
  attribution: string;
};

const testimonials: Testimonial[] = [
  {
    logoLines: [
      { text: "MAINSTREET", size: 13, weight: 700, spacing: "0.12em" },
      { text: "ADVISORS", size: 10, weight: 500, spacing: "0.14em" },
    ],
    quote: "\"I like to have a high level of efficiency in our AdviserGPT Vault. All of our Q/A pairs are relevant and applicable so I can be confident our answers are valid. As an Outsourced CIO, we answer the same investor questions frequently. I often use AdviserGPT to update and improve our content.\"",
    attribution: "— Sales Analyst, Mainstreet Advisors",
  },
  {
    logoLines: [
      { text: "Logan Capital", size: 22, weight: 600, spacing: "-0.01em", serif: false },
    ],
    quote: "\"AdviserGPT enables me to begin a Questionnaire closer to the finish line versus staring at an empty document. It can be 50%+ complete before I start working on it.\"",
    attribution: "— Managing Director, Client Service & Analytics, Logan Capital",
  },
  {
    logoLines: [
      { text: "CORNERSTONE", size: 18, weight: 700, spacing: "0.18em" },
      { text: "INVESTMENT PARTNERS, LLC", size: 9, weight: 400, spacing: "0.12em" },
    ],
    quote: "\"I am using far more of AdviserGPT than my prior tools. It's been a huge time saver for us the last year in completing RFPs to DDQs to editing write-ups for buys and sells in our consultant databases, always in our tone of voice.\"",
    attribution: "— Partner/Senior Director, Marketing, Consultant Relations and Client Service, Cornerstone Investment Partners",
  },
];

function LogoDisplay({ lines }: { lines: Testimonial["logoLines"] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
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
            fontFamily: line.serif === false ? "var(--font-geist-sans), sans-serif" : "var(--font-geist-sans), sans-serif",
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      style={{
        padding: "96px 0",
        background: "#fafaf9",
        textAlign: "center",
      }}
    >
      {/* Headline */}
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 46px)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: "#1a1a1a",
          fontFamily: "var(--font-playfair), Georgia, serif",
          lineHeight: 1.2,
          marginBottom: 56,
          padding: "0 24px",
        }}
      >
        Firms like yours say AdviserGPT made the difference
      </h2>

      {/* Full-width carousel row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 0,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Prev button */}
        <button
          onClick={prev}
          className="carousel-btn"
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          aria-label="Previous testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Fixed-height content area */}
        <div
          style={{
            flex: 1,
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 48px",
          }}
        >
          {/* Logo */}
          <div style={{ marginBottom: 28 }}>
            <LogoDisplay lines={t.logoLines} />
          </div>

          {/* Quote */}
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 17px)",
              lineHeight: 1.75,
              color: "#333",
              maxWidth: 700,
              margin: "0 auto 18px",
              fontWeight: 400,
            }}
          >
            {t.quote}
          </p>

          {/* Attribution */}
          <p
            style={{
              fontSize: 14,
              color: "#888",
              fontWeight: 400,
            }}
          >
            {t.attribution}
          </p>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="carousel-btn"
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          aria-label="Next testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 32,
        }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: i === current ? "#e85d26" : "#d0ceca",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.2s ease",
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
