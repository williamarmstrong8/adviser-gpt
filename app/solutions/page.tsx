"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Briefcase,
  Building2,
  Users,
  Shield,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const SOLUTIONS = [
  {
    slug: "asset-managers",
    title: "Asset Managers",
    tagline: "Respond to RFPs and DDQs faster without compromising compliance.",
    description:
      "AdviserGPT helps asset management firms automate questionnaire responses, keep content consistent across products, and maintain your firm's voice in every submission.",
    icon: TrendingUp,
    accent: "#e85d26",
  },
  {
    slug: "wealth-advisers",
    title: "Wealth Advisers",
    tagline: "Spend more time with clients, less on paperwork.",
    description:
      "Draft client talking points, generate commentary, and answer ad hoc inquiries using your approved language—all from the tools you already use.",
    icon: UserCheck,
    accent: "#6A2E6B",
  },
  {
    slug: "client-service-teams",
    title: "Client Service Teams",
    tagline: "Answer every question with one consistent, compliant voice.",
    description:
      "Your team fields hundreds of questions a quarter. AdviserGPT gives every team member access to the same approved answers so nothing slips through the cracks.",
    icon: Users,
    accent: "#2563eb",
  },
  {
    slug: "compliance-teams",
    title: "Compliance Teams",
    tagline: "Stay in the driver's seat while your team moves faster.",
    description:
      "Every response is grounded in your Vault of approved content. Trust Score shows exactly how close each answer is to compliance-approved language.",
    icon: Shield,
    accent: "#2e7d32",
  },
  {
    slug: "rfp-teams",
    title: "RFP & DDQ Teams",
    tagline: "Cut turnaround from weeks to hours.",
    description:
      "Automate the repetitive work of RFPs, DDQs, and 15(c) questionnaires. Pull approved answers, update data elements, and generate first drafts in minutes.",
    icon: Briefcase,
    accent: "#6B6D45",
  },
  {
    slug: "outsourced-cios",
    title: "Outsourced CIOs",
    tagline: "Manage multiple strategies with a single source of truth.",
    description:
      "Serve multiple clients and strategies without duplicating effort. AdviserGPT keeps your Vault organized and your answers tailored to each mandate.",
    icon: Building2,
    accent: "#1e2340",
  },
];

export default function SolutionsPage() {
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
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#1a1a1a",
              marginBottom: 18,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            Solutions built for your role
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#555",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Whether you manage assets, advise clients, or keep your firm
            compliant—AdviserGPT is built to solve the problems you face every
            day.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "64px 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
          className="solutions-grid"
        >
          {SOLUTIONS.map((sol) => {
            const Icon = sol.icon;
            return (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article
                  className="solution-card"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #d4d4d1",
                    borderRadius: 12,
                    padding: 32,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition:
                      "box-shadow 0.2s ease, transform 0.2s ease, background 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#eeecea";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(0,0,0,0.08)";
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
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: `${sol.accent}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={24} style={{ color: sol.accent }} />
                  </div>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      lineHeight: 1.25,
                      color: "#1a1a1a",
                      marginBottom: 8,
                      fontFamily:
                        "var(--font-playfair), Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {sol.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: "#1a1a1a",
                      fontWeight: 500,
                      marginBottom: 12,
                    }}
                  >
                    {sol.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "#555",
                      flex: 1,
                    }}
                  >
                    {sol.description}
                  </p>
                  <span
                    style={{
                      marginTop: 20,
                      fontSize: 14,
                      fontWeight: 500,
                      color: sol.accent,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    Learn more →
                  </span>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "#fafaf9",
          borderTop: "1px solid #e0ddd8",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#1a1a1a",
              marginBottom: 16,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            Not sure where to start?
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#555",
              marginBottom: 28,
            }}
          >
            Book a demo and we'll show you exactly how AdviserGPT fits your team
            and workflow.
          </p>
          <a
            href="/contact-sales"
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
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#333";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#1a1a1a";
            }}
          >
            Request a demo
          </a>
        </div>
      </section>

      <Footer showDemoCta={false} />

      <style>{`
        @media (max-width: 700px) {
          .solutions-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
