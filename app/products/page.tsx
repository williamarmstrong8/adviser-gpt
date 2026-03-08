"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, Table, Globe } from "lucide-react";

const PRODUCTS = [
  {
    id: "word",
    name: "Word add-in",
    tagline: "Draft and refine in the document you already use.",
    description:
      "Generate RFP and DDQ responses, client memos, and commentary directly inside Microsoft Word. AdviserGPT’s Word add-in pulls from your Vault so every suggestion uses your firm’s approved language and tone—no copy-paste, no switching tools.",
    details: [
      "Insert compliant answers and narrative blocks with one click, formatted for your document.",
      "Refine tone and length in-place; changes stay aligned with your approved content.",
      "Work in the same Word files you use for RFPs and DDQs—no exporting or re-formatting.",
    ],
    icon: FileText,
    accent: "#e85d26",
    background: "linear-gradient(135deg, rgba(232, 93, 38, 0.08) 0%, rgba(200, 90, 26, 0.05) 50%, rgba(250, 245, 240, 0.9) 100%)",
  },
  {
    id: "excel",
    name: "Excel add-in",
    tagline: "Keep data and narrative in sync.",
    description:
      "Update DDQ data elements and tables without leaving Excel. The Excel add-in connects your spreadsheets to AdviserGPT so numbers and narrative stay aligned, and you can push updates into your documents with one click.",
    details: [
      "Link cells and ranges to DDQ data points; updates flow from Excel into your narrative answers.",
      "Bulk-edit data elements across questionnaires while keeping a single source of truth.",
      "Reduce manual re-keying and version drift between spreadsheets and Word documents.",
    ],
    icon: Table,
    accent: "#6B6D45",
    background: "linear-gradient(135deg, rgba(107, 109, 69, 0.1) 0%, rgba(90, 110, 80, 0.06) 50%, rgba(240, 245, 238, 0.95) 100%)",
  },
  {
    id: "webapp",
    name: "Web app",
    tagline: "Your team’s AI command center.",
    description:
      "Search your Vault, run Q&A, and manage content from one place. The AdviserGPT web app is where your team asks questions, gets compliance-approved answers, and keeps every response consistent with your firm’s voice—whether they’re in Word, Excel, or the browser.",
    details: [
      "Search and browse all approved content; get answers with citations back to your Vault.",
      "Use the same experience from any device—no desktop install required for quick lookups.",
      "Keep Word, Excel, and the web app in sync so updates in one place reflect everywhere.",
    ],
    icon: Globe,
    accent: "#6A2E6B",
    background: "linear-gradient(135deg, rgba(139, 58, 143, 0.08) 0%, rgba(58, 26, 110, 0.06) 50%, rgba(245, 238, 250, 0.95) 100%)",
  },
];

export default function ProductsPage() {
  return (
    <main style={{ paddingTop: 88, minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <section
        style={{
          background: "#fafaf9",
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
              fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            AdviserGPT products
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#555",
              maxWidth: 560,
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            Word, Excel, and the web app—each built to fit how your team already works.
          </p>
        </div>
      </section>

      {/* Product sections with dedicated backgrounds */}
      {PRODUCTS.map((product) => {
        const Icon = product.icon;
        return (
          <section
            id={product.id}
            key={product.id}
            style={{
              background: product.background,
              padding: "72px 24px 80px",
            }}
            className="product-section"
          >
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
                  gap: 48,
                  alignItems: "start",
                }}
                className="product-section-grid"
              >
                {/* Left: icon + title + tagline */}
                <div>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.9)",
                      border: "1px solid #d4d4d1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <Icon style={{ width: 32, height: 32, color: product.accent }} strokeWidth={1.5} />
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(26px, 3vw, 36px)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                      color: "#1a1a1a",
                      marginBottom: 12,
                      fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {product.name}
                  </h2>
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 500,
                      color: "#1a1a1a",
                      lineHeight: 1.4,
                    }}
                  >
                    {product.tagline}
                  </p>
                </div>

                {/* Right: description + details */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid #d4d4d1",
                    borderRadius: 16,
                    padding: "36px 40px 32px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "#555",
                      marginBottom: 24,
                    }}
                  >
                    {product.description}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 20, listStyle: "disc" }}>
                    {product.details.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "#555",
                          marginBottom: 10,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact-sales"
                    style={{
                      display: "inline-block",
                      marginTop: 28,
                      padding: "12px 24px",
                      borderRadius: 100,
                      fontSize: 14,
                      fontWeight: 500,
                      textDecoration: "none",
                      background: "transparent",
                      color: product.accent,
                      border: `2px solid ${product.accent}`,
                      transition: "background 0.15s ease, color 0.15s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = product.accent;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = product.accent;
                    }}
                  >
                    Take a tour
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .product-section-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
