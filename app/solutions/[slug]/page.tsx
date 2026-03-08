"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Briefcase,
  Building2,
  Users,
  Shield,
  TrendingUp,
  UserCheck,
  Check,
} from "lucide-react";

interface SolutionData {
  title: string;
  tagline: string;
  heroDescription: string;
  accent: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  painPoints: { title: string; description: string }[];
  howWeHelp: { title: string; description: string }[];
  quote?: { text: string; author: string; role: string };
}

const SOLUTIONS: Record<string, SolutionData> = {
  "asset-managers": {
    title: "Asset Managers",
    tagline: "Respond to RFPs and DDQs faster without compromising compliance.",
    heroDescription:
      "Asset managers field hundreds of questionnaires a year—RFPs, DDQs, 15(c)s, and ad hoc inquiries. AdviserGPT automates the repetitive work so your team can focus on winning mandates.",
    accent: "#e85d26",
    icon: TrendingUp,
    painPoints: [
      {
        title: "Questionnaire overload",
        description:
          "Your team spends weeks on each RFP cycle, copying answers from old documents and hoping nothing is outdated.",
      },
      {
        title: "Inconsistent language across products",
        description:
          "Different team members describe the same strategy differently. Compliance catches it, and cycles slow down.",
      },
      {
        title: "Quarterly update treadmill",
        description:
          "Every quarter means updating DDQ data across dozens of documents. One missed number creates cascading problems.",
      },
    ],
    howWeHelp: [
      {
        title: "Generate first drafts in minutes",
        description:
          "Pull approved answers from your Vault and generate complete questionnaire drafts. Review and submit instead of starting from scratch.",
      },
      {
        title: "One voice across every product",
        description:
          "Your Vault holds a single source of approved language. Every answer AdviserGPT produces is grounded in that content.",
      },
      {
        title: "Automate quarterly data updates",
        description:
          "Connect your data platforms and push updated numbers into DDQs and narrative documents without manual re-keying.",
      },
      {
        title: "Trust Score for every response",
        description:
          "See exactly how close each generated answer is to your compliance-approved language before you submit.",
      },
    ],
    quote: {
      text: "AdviserGPT has cut our RFP turnaround from weeks to days. The quality is better because every answer comes from our approved content.",
      author: "Managing Director",
      role: "Mid-cap equity manager",
    },
  },
  "wealth-advisers": {
    title: "Wealth Advisers",
    tagline: "Spend more time with clients, less on paperwork.",
    heroDescription:
      "Your clients expect personalized, timely communication. AdviserGPT helps you draft talking points, commentary, and responses using your firm's approved messaging—so you stay compliant and responsive.",
    accent: "#6A2E6B",
    icon: UserCheck,
    painPoints: [
      {
        title: "Client communication takes too long",
        description:
          "Drafting quarterly letters, market updates, and ad hoc responses eats into time you should spend advising clients.",
      },
      {
        title: "Staying on-message is hard",
        description:
          "Your firm has approved messaging, but finding the right language for each client situation means digging through old documents.",
      },
      {
        title: "Scaling personal touch",
        description:
          "As your book grows, maintaining the quality and personalization of each communication becomes impossible.",
      },
    ],
    howWeHelp: [
      {
        title: "Draft client communications instantly",
        description:
          "Generate market recaps, quarterly commentary, and client talking points grounded in your firm's approved content.",
      },
      {
        title: "Answer questions on the spot",
        description:
          "Use AdviserGPT from Word, Excel, or the web app to pull approved answers to client questions in seconds.",
      },
      {
        title: "Personalize at scale",
        description:
          "Tailor tone and detail level for each client segment while keeping every communication compliant.",
      },
      {
        title: "No training required",
        description:
          "Built for advisers, not engineers. Start using it in the tools you already work in—Word and Excel.",
      },
    ],
    quote: {
      text: "I used to spend half my Monday drafting client updates. Now I generate a first draft in five minutes and spend the rest of the time on the phone with clients.",
      author: "Senior Wealth Adviser",
      role: "Independent RIA",
    },
  },
  "client-service-teams": {
    title: "Client Service Teams",
    tagline: "Answer every question with one consistent, compliant voice.",
    heroDescription:
      "Client service teams are the front line. Whether it's a consultant follow-up, an investor inquiry, or an internal request, AdviserGPT makes sure every response is accurate, fast, and on-brand.",
    accent: "#2563eb",
    icon: Users,
    painPoints: [
      {
        title: "Too many requests, not enough time",
        description:
          "Your team juggles questionnaires, ad hoc inquiries, and internal requests. Something always falls behind.",
      },
      {
        title: "Knowledge silos",
        description:
          "The best answers live in one person's head or buried in last year's RFP. New team members struggle to find the right content.",
      },
      {
        title: "Inconsistency across team members",
        description:
          "Different people answer the same question differently. Consultants and investors notice.",
      },
    ],
    howWeHelp: [
      {
        title: "Instant access to approved answers",
        description:
          "Every team member searches the same Vault. The newest, most accurate content surfaces first.",
      },
      {
        title: "Consistent voice across the team",
        description:
          "AdviserGPT generates answers using your firm's tone and approved language—no matter who asks.",
      },
      {
        title: "Reduce onboarding time",
        description:
          "New hires are productive from day one. They don't need to memorize the Vault—they just search it.",
      },
      {
        title: "Track and audit responses",
        description:
          "See what questions are being asked, which answers are being used, and where content gaps exist.",
      },
    ],
    quote: {
      text: "We went from 'ask Sarah, she knows where that answer is' to the whole team having the same answers at their fingertips.",
      author: "Sales Analyst",
      role: "Outsourced CIO firm",
    },
  },
  "compliance-teams": {
    title: "Compliance Teams",
    tagline: "Stay in the driver's seat while your team moves faster.",
    heroDescription:
      "AdviserGPT doesn't replace compliance—it enforces it. Every answer is grounded in your approved Vault, and Trust Score gives you visibility into how closely each response matches your standards.",
    accent: "#2e7d32",
    icon: Shield,
    painPoints: [
      {
        title: "Reviewing every response is a bottleneck",
        description:
          "Your team needs to review outgoing language, but the volume of questionnaires makes thorough review nearly impossible.",
      },
      {
        title: "Off-script language slips through",
        description:
          "Team members paraphrase or improvise. By the time compliance catches it, it's already been sent.",
      },
      {
        title: "Audit trail gaps",
        description:
          "When a regulator or consultant asks why something was said a certain way, tracing the answer back to approved content is manual work.",
      },
    ],
    howWeHelp: [
      {
        title: "Trust Score on every response",
        description:
          "See a clear score showing how closely each generated answer matches your compliance-approved content. Flag outliers before they leave the firm.",
      },
      {
        title: "Vault-grounded answers only",
        description:
          "AdviserGPT only pulls from your Vault—not the open web. If it's not in the Vault, it doesn't get suggested.",
      },
      {
        title: "Tone and language controls",
        description:
          "Set firm-wide tone guidelines. AdviserGPT adjusts output to match your approved style automatically.",
      },
      {
        title: "SOC 2 compliant infrastructure",
        description:
          "Row-level encryption, segregated tenants, and public or private cloud options so your data stays yours.",
      },
    ],
    quote: {
      text: "Trust Score is a game-changer. I can review a batch of DDQ answers in minutes instead of hours because I know which ones need my attention.",
      author: "Chief Compliance Officer",
      role: "Multi-strategy asset manager",
    },
  },
  "rfp-teams": {
    title: "RFP & DDQ Teams",
    tagline: "Cut turnaround from weeks to hours.",
    heroDescription:
      "RFP and DDQ teams handle the most repetitive, high-stakes work in the firm. AdviserGPT automates first drafts, keeps answers current, and lets your team focus on the questions that actually need human judgment.",
    accent: "#6B6D45",
    icon: Briefcase,
    painPoints: [
      {
        title: "Starting from scratch every time",
        description:
          "Each new questionnaire means hunting for the last time you answered a similar question and updating it manually.",
      },
      {
        title: "Data and narrative out of sync",
        description:
          "Numbers in the spreadsheet don't match the narrative in the document. Catching mismatches is tedious and error-prone.",
      },
      {
        title: "Version control chaos",
        description:
          "Multiple people editing the same document means conflicting versions, lost edits, and last-minute scrambles.",
      },
    ],
    howWeHelp: [
      {
        title: "Auto-draft full questionnaires",
        description:
          "Upload a blank questionnaire and AdviserGPT fills it in using your Vault. Review and refine instead of writing from zero.",
      },
      {
        title: "Keep data and narrative in sync",
        description:
          "The Excel add-in links data to narrative. Update a number once and it flows into every document that references it.",
      },
      {
        title: "Work inside Word and Excel",
        description:
          "No new tools to learn. AdviserGPT lives in the documents your team already uses.",
      },
      {
        title: "Up and running in a day",
        description:
          "Upload your Vault, install the add-ins, and start drafting. No months-long implementation.",
      },
    ],
    quote: {
      text: "We used to dread RFP season. Now we actually look forward to it because we know we can turn things around fast.",
      author: "Partner, Client Service",
      role: "Large-cap equity manager",
    },
  },
  "outsourced-cios": {
    title: "Outsourced CIOs",
    tagline: "Manage multiple strategies with a single source of truth.",
    heroDescription:
      "Outsourced CIOs serve multiple clients and strategies. AdviserGPT keeps your content organized, your answers consistent, and your team efficient—no matter how many mandates you manage.",
    accent: "#1e2340",
    icon: Building2,
    painPoints: [
      {
        title: "Content sprawl across mandates",
        description:
          "Every client has slightly different requirements. Keeping approved language straight across mandates is a full-time job.",
      },
      {
        title: "Scaling the team without scaling headcount",
        description:
          "More clients means more questionnaires. Hiring more people for repetitive work doesn't scale.",
      },
      {
        title: "Consultant expectations keep rising",
        description:
          "Consultants expect faster turnarounds, more data, and higher-quality responses every cycle.",
      },
    ],
    howWeHelp: [
      {
        title: "Organized Vault per mandate",
        description:
          "Keep approved content separated by client or strategy. AdviserGPT pulls from the right Vault for each response.",
      },
      {
        title: "Scale without adding headcount",
        description:
          "Automate the repetitive parts of questionnaires and reporting. Your team focuses on the advisory work that matters.",
      },
      {
        title: "Consistent quality at speed",
        description:
          "Every response uses approved language. Trust Score confirms quality before anything goes out the door.",
      },
      {
        title: "Integrations with your data platforms",
        description:
          "Connect to common data sources and push updated numbers into your documents automatically.",
      },
    ],
    quote: {
      text: "Managing eight strategies used to mean eight times the work. With AdviserGPT, it's eight times the efficiency.",
      author: "Managing Director",
      role: "Outsourced CIO firm",
    },
  },
};

const SOLUTION_SLUGS = Object.keys(SOLUTIONS);

export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>();
  const sol = SOLUTIONS[slug];
  if (!sol) return null;

  const Icon = sol.icon;

  const otherSolutions = SOLUTION_SLUGS.filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => ({ slug: s, ...SOLUTIONS[s] }));

  return (
    <main style={{ paddingTop: 88, minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(to bottom, #fafaf9 0%, #f5f5f4 100%)",
          padding: "80px 24px 64px",
          borderBottom: "1px solid #e0ddd8",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link
            href="/solutions"
            style={{
              fontSize: 14,
              color: "#555",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 28,
            }}
          >
            ← All solutions
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: `${sol.accent}12`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={26} style={{ color: sol.accent }} />
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: sol.accent,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Solutions
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: 20,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            {sol.title}
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "#555",
              maxWidth: 640,
            }}
          >
            {sol.heroDescription}
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 24,
            }}
          >
            <a
              href="/#demo"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "#1a1a1a",
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 100,
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#333")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#1a1a1a")}
            >
              Request a demo
            </a>
            <a
              href="/products"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#555",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#1a1a1a";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#555";
              }}
            >
              Take self-guided tour
            </a>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section
        style={{
          background: "#ffffff",
          padding: "72px 24px",
          borderBottom: "1px solid #e0ddd8",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#1a1a1a",
              marginBottom: 12,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            The challenge
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#555",
              marginBottom: 40,
              maxWidth: 560,
            }}
          >
            Common problems {sol.title.toLowerCase()} face every day.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {sol.painPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  background: "#fafaf9",
                  border: "1px solid #d4d4d1",
                  borderRadius: 12,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: 8,
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "#555",
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section
        style={{
          background: "#fafaf9",
          padding: "72px 24px",
          borderBottom: "1px solid #e0ddd8",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#1a1a1a",
              marginBottom: 12,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            How AdviserGPT helps
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#555",
              marginBottom: 40,
              maxWidth: 560,
            }}
          >
            Features and workflows designed for {sol.title.toLowerCase()}.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
            className="how-we-help-grid"
          >
            {sol.howWeHelp.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 28px",
                  background: "#ffffff",
                  border: "1px solid #d4d4d1",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: `${sol.accent}14`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} style={{ color: sol.accent }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#1a1a1a",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "#555",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      {sol.quote && (
        <section
          style={{
            background: "#ffffff",
            padding: "72px 24px",
            borderBottom: "1px solid #e0ddd8",
          }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                fontSize: 40,
                lineHeight: 1,
                color: sol.accent,
                marginBottom: 20,
                fontFamily:
                  "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: "clamp(18px, 2.2vw, 22px)",
                lineHeight: 1.5,
                color: "#1a1a1a",
                fontStyle: "italic",
                marginBottom: 24,
                fontFamily:
                  "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              {sol.quote.text}
            </blockquote>
            <p style={{ fontSize: 15, color: "#555" }}>
              <strong style={{ color: "#1a1a1a" }}>{sol.quote.author}</strong>
              {" — "}
              {sol.quote.role}
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        style={{
          background: "#fafaf9",
          padding: "64px 24px",
          textAlign: "center",
          borderBottom: "1px solid #e0ddd8",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#1a1a1a",
              marginBottom: 14,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            Ready to see it in action?
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#555",
              marginBottom: 28,
            }}
          >
            Book a demo tailored to how {sol.title.toLowerCase()} use
            AdviserGPT.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <a
              href="/#demo"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "#1a1a1a",
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 100,
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#333")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#1a1a1a")}
            >
              Request a demo
            </a>
            <a
              href="/products"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "transparent",
                color: "#1a1a1a",
                border: "2px solid #d4d4d1",
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 100,
                textDecoration: "none",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f5f5f4";
                e.currentTarget.style.borderColor = "#1a1a1a";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#d4d4d1";
              }}
            >
              Take self-guided tour
            </a>
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section
        style={{
          background: "#ffffff",
          padding: "64px 24px 72px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 2vw, 26px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#1a1a1a",
              marginBottom: 24,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            Explore other solutions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
            }}
            className="other-solutions-grid"
          >
            {otherSolutions.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/solutions/${other.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="other-solution-card"
                    style={{
                      padding: 24,
                      background: "#fafaf9",
                      border: "1px solid #d4d4d1",
                      borderRadius: 12,
                      transition:
                        "background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#eeecea";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(0,0,0,0.06)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#fafaf9";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: `${other.accent}12`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                      }}
                    >
                      <OtherIcon
                        size={18}
                        style={{ color: other.accent }}
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#1a1a1a",
                        marginBottom: 6,
                      }}
                    >
                      {other.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.45,
                        color: "#555",
                      }}
                    >
                      {other.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer showDemoCta={false} />

      <style>{`
        @media (max-width: 700px) {
          .how-we-help-grid {
            grid-template-columns: 1fr !important;
          }
          .other-solutions-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
