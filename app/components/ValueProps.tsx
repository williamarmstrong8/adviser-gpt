"use client";

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", lineHeight: 0 }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

function MockupToneCompliant() {
  return (
    <div
      className="gradient-blob"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(135deg, #c85a1a 0%, #8b3a8f 45%, #1a2a5e 100%)",
        }}
      />
      <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
        {/* Prompt bubble */}
        <div
          style={{
            background: "white",
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            fontSize: 13,
            color: "#888",
          }}
        >
          Enter your prompt
        </div>
        {/* Arrow */}
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0L8 20M8 20L2 14M8 20L14 14" stroke="#ffffff88" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Response card */}
        <div
          style={{
            background: "white",
            borderRadius: 12,
            padding: "16px 18px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ fontSize: 12, color: "#aaa", marginBottom: 10 }}>Refined answer</div>
          {[80, 95, 70, 85].map((w, i) => (
            <div
              key={i}
              style={{
                height: 8,
                background: "#eeede9",
                borderRadius: 4,
                marginBottom: 8,
                width: `${w}%`,
              }}
            />
          ))}
          <div style={{ marginTop: 14 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#e8f5e9",
                color: "#2e7d32",
                fontSize: 12,
                fontWeight: 600,
                padding: "5px 12px",
                borderRadius: 6,
                border: "1px solid #c8e6c9",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Tone Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupIntegrations() {
  const icons = [
    { label: "Word", color: "#185abd", bg: "#e8f0fe" },
    { label: "Excel", color: "#1d6f42", bg: "#e8f5e9" },
    { label: "Outlook", color: "#0078d4", bg: "#e3f2fd" },
    { label: "Drive", color: "#fbbc04", bg: "#fff8e1" },
    { label: "PDF", color: "#e53935", bg: "#ffebee" },
    { label: "SharePoint", color: "#038387", bg: "#e0f7fa" },
  ];

  return (
    <div
      className="gradient-blob"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(135deg, #8b3a8f 0%, #c85a1a 50%, #1a2a5e 100%)",
        }}
      />
      <div style={{ position: "relative", width: "100%", maxWidth: 320 }}>
        {/* Center hub */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 0 }}>
          <div style={{ position: "relative", width: 280, height: 260 }}>
            {/* Center circle */}
            <div
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                borderRadius: 100,
                padding: "10px 18px",
                fontWeight: 700,
                fontSize: 14,
                color: "#1a1a1a",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                whiteSpace: "nowrap",
                zIndex: 2,
              }}
            >
              AdviserGPT
            </div>
            {/* Orbit icons */}
            {icons.map((icon, i) => {
              const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
              const r = 108;
              const x = 140 + r * Math.cos(angle);
              const y = 130 + r * Math.sin(angle);
              return (
                <div
                  key={icon.label}
                  style={{
                    position: "absolute",
                    left: x - 22,
                    top: y - 22,
                    width: 44,
                    height: 44,
                    background: "white",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: icon.color,
                  }}
                >
                  {icon.label.slice(0, 2)}
                </div>
              );
            })}
            {/* Dashed lines from center to icons */}
            <svg
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
              viewBox="0 0 280 260"
            >
              {icons.map((_, i) => {
                const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
                const r = 108;
                const x = 140 + r * Math.cos(angle);
                const y = 130 + r * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={140} y1={130}
                    x2={x} y2={y}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupTrustScore() {
  return (
    <div
      className="gradient-blob"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(135deg, #1a2a5e 0%, #8b3a8f 60%, #c85a1a 100%)",
        }}
      />
      <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
        {/* Trust Score badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#e8f5e9",
            color: "#2e7d32",
            fontSize: 14,
            fontWeight: 700,
            padding: "8px 16px",
            borderRadius: 100,
            marginBottom: 14,
            border: "1px solid #c8e6c9",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7L5.5 10.5L12 3" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          99% Trust Score
        </div>

        {/* Question card */}
        <div
          style={{
            background: "#1e2340",
            borderRadius: 10,
            padding: "12px 14px",
            marginBottom: 10,
            fontSize: 12,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.5,
          }}
        >
          What is your firm&apos;s investment philosophy or differentiation in making investment decisions?
        </div>

        {/* Answer card */}
        <div
          style={{
            background: "white",
            borderRadius: 10,
            padding: "14px 16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            fontSize: 12,
            color: "#444",
            lineHeight: 1.6,
          }}
        >
          Our investment philosophy is based on the belief that a company&apos;s valuation is a function of its future financial productivity adjusted for associated risk. Our process is derived from time-tested principles of fundamental value investing, and we evaluate opportunities from a long-term perspective as potential owners of the business.
        </div>
      </div>
    </div>
  );
}

function MockupNoTraining() {
  return (
    <div
      className="gradient-blob"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(135deg, #c85a1a 0%, #3a1a6e 100%)",
        }}
      />
      <div style={{ position: "relative", width: "100%", maxWidth: 320 }}>
        <div
          style={{
            background: "white",
            borderRadius: 14,
            padding: "20px 22px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 20 }}>
            <div style={{ textAlign: "center", opacity: 0.4 }}>
              <div
                style={{
                  width: 48, height: 48,
                  background: "#fafaf9",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="16" height="16" rx="2" stroke="#aaa" strokeWidth="1.5" />
                  <line x1="7" y1="9" x2="15" y2="9" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="7" y1="13" x2="12" y2="13" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="1" x2="10" y2="7" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="10" y1="1" x2="14" y2="7" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ fontSize: 11, color: "#aaa" }}>Look through files</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 48, height: 48,
                  background: "#1a1a1a",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>AGPT</span>
              </div>
              <div style={{ fontSize: 11, color: "#1a1a1a", fontWeight: 600 }}>Just ask</div>
            </div>
          </div>
          <div
            style={{
              background: "#1e2340",
              color: "white",
              borderRadius: 8,
              padding: "11px 14px",
              fontSize: 13,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            What&apos;s our Q3 performance summary?
          </div>
        </div>
      </div>
    </div>
  );
}

const blocks = [
  {
    headline: "Sales, Marketing, and Service Agents for investment advisers.",
    text: "AdviserGPT doesn't just generate text—it speaks your language. It learns your investment content, firm positioning, and compliance-approved messaging so every narrative response is compliant, on-point, and trustworthy.",
    mockup: <ImageCard src="/example_1.avif" alt="Tone compliant AI response" />,
    imageLeft: false,
  },
  {
    headline: "AdviserGPT works where you do, and how you do.",
    text: "No need to switch tools. With seamless Microsoft Word and Excel Add-ins, and Chrome and Edge Plug-ins that are an extension of your Vault, AdviserGPT fits right into your existing workflow—so you can deliver fast, compliant responses while collaborating in standard tools such as Microsoft 365.",
    mockup: <ImageCard src="/example_2.avif" alt="AdviserGPT integrations" />,
    imageLeft: true,
  },
  {
    headline: "Investment Management's first Trust Score.",
    text: "Compliance's best friend, ensuring compliance is always there to provide input, no matter the response. Each Trust Score evaluates how close a response is to your firm's compliance-approved language.",
    mockup: <ImageCard src="/example_3.avif" alt="Investment Management Trust Score" />,
    imageLeft: false,
  },
  {
    headline: "Your team asks. AdviserGPT answers. No special training needed.",
    text: "Built for investment professionals, not engineers. Your team gets precise, context aware answers and talking points instantly—without the need to learn how to 'talk to AI.' No more 'Control F' across many open tabs, and no more uploading, downloading, and reformatting documents.",
    mockup: <ImageCard src="/example_4.avif" alt="Your team asks, AdviserGPT answers" />,
    imageLeft: true,
  },
];

export default function ValueProps() {
  return (
    <section
      id="company"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 48px",
      }}
    >
      {blocks.map((block, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: block.imageLeft ? "7fr 5fr" : "5fr 7fr",
            gap: 80,
            alignItems: "center",
            marginBottom: i < blocks.length - 1 ? 80 : 0,
          }}
          className="value-prop-row"
        >
          {/* Text block */}
          <div style={{ order: block.imageLeft ? 2 : 1 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                marginBottom: 18,
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              {block.headline}
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.65,
                color: "#555",
                fontWeight: 400,
              }}
            >
              {block.text}
            </p>
          </div>

          {/* Mockup / image block */}
          <div style={{ order: block.imageLeft ? 1 : 2 }}>
            {block.mockup}
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .value-prop-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .value-prop-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
