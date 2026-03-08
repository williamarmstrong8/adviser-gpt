"use client";

/**
 * Default hero visual for blog posts — integration-style: two rounded panels
 * with icons. Used inside a standard image card on light background.
 */
export function BlogHeroVisual() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: "48px 24px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 20,
          background: "#ffffff",
          border: "1px solid #d4d4d1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
        </svg>
      </div>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#eeecea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 600,
          color: "#1a1a1a",
        }}
      >
        &
      </div>
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 20,
          background: "#ffffff",
          border: "1px solid #d4d4d1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8" />
          <path d="M8 11h6" />
        </svg>
      </div>
    </div>
  );
}
