"use client";

import Link from "next/link";

/**
 * Simple graphic: single calendar with check to suggest "book a demo".
 */
function DemoGraphic() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 0",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.9 }}
      >
        <rect
          x="8"
          y="10"
          width="32"
          height="30"
          rx="4"
          stroke="#1a1a1a"
          strokeWidth="2"
          fill="none"
        />
        <path d="M8 18h32" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 6v8M30 6v8" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M20 28l4 4 8-10"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function BookDemoCta() {
  return (
    <div
      className="book-demo-cta"
      style={{
        marginTop: 24,
        padding: 20,
        background: "#ffffff",
        border: "1px solid #d4d4d1",
        borderRadius: 12,
        minWidth: 200,
        maxWidth: 220,
      }}
    >
      <DemoGraphic />
      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          lineHeight: 1.25,
          color: "#1a1a1a",
          marginBottom: 8,
          fontFamily: "var(--font-playfair), Georgia, serif",
        }}
      >
        Get started with AdviserGPT
      </h3>
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.45,
          color: "#555",
          marginBottom: 16,
        }}
      >
        Book a demo and see how teams use AI for RFPs and due diligence.
      </p>
      <Link
        href="/contact-sales"
        style={{
          display: "inline-block",
          padding: "10px 18px",
          background: "#1a1a1a",
          color: "#fff",
          fontSize: 14,
          fontWeight: 500,
          borderRadius: 8,
          textDecoration: "none",
          transition: "background 0.2s ease, transform 0.15s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "#333";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "#1a1a1a";
          e.currentTarget.style.transform = "none";
        }}
      >
        Book a demo
      </Link>
    </div>
  );
}
