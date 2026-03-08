"use client";

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="2" width="13" height="16" rx="2" stroke="#e85d26" strokeWidth="1.5" />
        <line x1="7" y1="7" x2="13" y2="7" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="10" x2="13" y2="10" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="13" x2="10" y2="13" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14l4 4" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Works across all your docs",
    description:
      "RFPs, DDQs, 15(c)s, ad hoc inquiries — AdviserGPT bulk answers them all with your 'prior art' and without having to \"put Humpty Dumpty back together\" (reformatting) when complete.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#e85d26" strokeWidth="1.5" />
        <path d="M11 7v4l3 2" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automates DDQ updates",
    description:
      "No more manual updating data elements field by field — we automatically ingest your quarterly numbers from your most common data platforms, and apply updates to your latest DDQs. It's too good to be true.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#e85d26" strokeWidth="1.5" />
        <line x1="11" y1="7" x2="11" y2="11" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="14" r="1" fill="#e85d26" />
      </svg>
    ),
    title: "Generate frequent insights",
    description:
      "Whether you're writing market recaps, quarterly commentary, or client talking points — we make it easy to defeat a blank sheet of paper with your content, and your narrative and tone of voice always in mind.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#e85d26" strokeWidth="1.5" />
        <path d="M7 9l2 2 4-4" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Up and running in 1 day",
    description:
      "AdviserGPT doesn't require complex onboarding and training. Upload your materials and go — it's ready for use as long as your team knows Word and Excel.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14M11 4l7 7-7 7" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "The right integrations",
    description:
      "Why move files around manually; stop the copy/paste madness. We integrate with your most common data sets from the platforms you use most often.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="9" width="12" height="10" rx="2" stroke="#e85d26" strokeWidth="1.5" />
        <path d="M8 9V7a3 3 0 016 0v2" stroke="#e85d26" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="14" r="1.5" fill="#e85d26" />
      </svg>
    ),
    title: "Your data is secure",
    description:
      "Run in our public cloud or your private cloud. Row-level encryption and segregated data tenants ensures your data stays your data.",
  },
];

export default function Features() {
  return (
    <section
      style={{
        background: "#fafaf9",
        padding: "96px 32px",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 54px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              lineHeight: 1.15,
              maxWidth: 640,
              margin: "0 auto",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Strategic AI built for how your team works.
          </h2>
        </div>

        {/* 3x2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="features-grid"
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "#fafaf9",
                borderRadius: 12,
                padding: "28px 28px 32px",
                border: "1px solid #d4d4d1",
                cursor: "default",
              }}
            >
              {/* Bare icon — no background box */}
              <div style={{ marginBottom: 20 }}>
                {f.icon}
              </div>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "#666",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
