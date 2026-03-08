"use client";

type Firm = {
  name: string;
  sub?: string;
  icon?: string;
  style?: "serif" | "sans" | "badge";
};

const firms: Firm[] = [
  { name: "The London", sub: "Company", icon: "4", style: "badge" },
  { name: "VULCAN", sub: "VALUE PARTNERS", icon: "V", style: "badge" },
  { name: "ALTRINSIC", style: "serif" },
  { name: "CORNERSTONE", sub: "INVESTMENT ADVISORS, LLC", style: "sans" },
  { name: "Kennedy Capital Management", style: "serif" },
  { name: "Logan Capital", icon: "LC", style: "badge" },
  { name: "MAINSTREET", sub: "ADVISORS", icon: "🌳", style: "badge" },
  { name: "Prime Buchholz", style: "sans" },
  { name: "Riverbridge", style: "serif" },
  { name: "Reynders McVeigh", sub: "CAPITAL MANAGEMENT, LLC", style: "sans" },
];

function FirmLogo({ firm }: { firm: Firm }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 64px",
        height: 96,
        whiteSpace: "nowrap",
        flexShrink: 0,
        opacity: 0.75,
      }}
    >
      {firm.icon && (
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 9,
            border: "1px solid #bbb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: firm.icon.length > 1 ? 13 : 22,
            fontWeight: 700,
            color: "#555",
            flexShrink: 0,
          }}
        >
          {firm.icon}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span
          style={{
            fontSize: firm.style === "serif" ? 22 : 17,
            fontWeight: firm.style === "serif" ? 500 : 700,
            color: "#333",
            letterSpacing: firm.style === "sans" ? "0.06em" : firm.style === "serif" ? "0" : "0.03em",
            fontFamily:
              firm.style === "serif"
                ? "Georgia, 'Times New Roman', serif"
                : "var(--font-geist-sans), sans-serif",
            lineHeight: 1.2,
            textTransform: firm.style === "sans" ? "uppercase" : "none",
          }}
        >
          {firm.name}
        </span>
        {firm.sub && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#888",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-sans), sans-serif",
              lineHeight: 1.2,
            }}
          >
            {firm.sub}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const duplicated = [...firms, ...firms];

  return (
    <section
      id="product"
      style={{
        paddingTop: 80,
        paddingBottom: 0,
        textAlign: "center",
        background: "#fafaf9",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px" }}>
        {/* Giant serif H1 — "Adviser Class AI" */}
        <h1
          style={{
            fontSize: "clamp(52px, 8vw, 88px)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#1a1a1a",
            marginBottom: 20,
            fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
          }}
        >
          Adviser Class AI
        </h1>

        {/* H2 — same font as ValueProps section 2 headline (Playfair) */}
        <h2
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#1a1a1a",
            marginBottom: 18,
            fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
            maxWidth: 560,
            margin: "0 auto 18px",
          }}
        >
          AI Agents for asset managers, wealth advisers,
          <br />
          and financial services firms.
        </h2>

        {/* Body subtext */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "#555",
            maxWidth: 520,
            margin: "0 auto 32px",
            fontWeight: 400,
          }}
        >
          Automate RFP and DDQ responses, draft insights and client talking points,
          <br />
          all using compliance-approved language in your firm&apos;s tone of voice.
        </p>

        {/* CTA — Request Demo + self guided tour */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 52,
          }}
        >
          <a
            href="#demo"
            style={{
              display: "inline-block",
              padding: "13px 30px",
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              background: "#1a1a1a",
              color: "#ffffff",
              letterSpacing: "-0.01em",
              transition: "background 0.15s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#333")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          >
            Request Demo
          </a>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "13px 24px",
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              color: "#1a1a1a",
              background: "#ffffff",
              border: "1px solid #d4d4d1",
              letterSpacing: "-0.01em",
              transition: "background 0.15s ease, border-color 0.15s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#f5f5f4";
              e.currentTarget.style.borderColor = "#bbb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.borderColor = "#d4d4d1";
            }}
          >
            Take a self guided tour
          </a>
        </div>
      </div>

      {/* Trusted by firms marquee */}
      <div style={{ marginBottom: 0 }}>
        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#1a1a1a",
            marginBottom: 16,
            fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
          }}
        >
          Trusted by leading firms
        </p>

        <div className="marquee-wrapper" style={{ width: "100%" }}>
          <div className="marquee-track">
            {duplicated.map((firm, i) => (
              <FirmLogo key={`${firm.name}-${i}`} firm={firm} />
            ))}
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div
        style={{
          maxWidth: 1200,
          margin: "48px auto 0",
          padding: "0 24px",
        }}
      >
        <img
          src="/hero.avif"
          alt="AdviserGPT product screenshot"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 20,
          }}
        />
      </div>
    </section>
  );
}
