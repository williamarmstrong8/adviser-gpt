import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CustomersGrid, type CustomerStoryWithLogo } from "./CustomersGrid";
import { getCustomerStories } from "@/lib/content";

const LOGO_LINES_BY_SLUG: Record<
  string,
  { text: string; size: number; weight: number; spacing: string; serif?: boolean }[]
> = {
  mainstreet: [
    { text: "MAINSTREET", size: 13, weight: 700, spacing: "0.12em" },
    { text: "ADVISORS", size: 10, weight: 500, spacing: "0.14em" },
  ],
  "logan-capital": [
    { text: "Logan Capital", size: 22, weight: 600, spacing: "-0.01em", serif: false },
  ],
  cornerstone: [
    { text: "CORNERSTONE", size: 18, weight: 700, spacing: "0.18em" },
    { text: "INVESTMENT PARTNERS, LLC", size: 9, weight: 400, spacing: "0.12em" },
  ],
};

function defaultLogoLines(company: string) {
  return [{ text: company, size: 16, weight: 600, spacing: "0.02em" as const }];
}

export default async function CustomersPage() {
  const stories = getCustomerStories();
  const storiesWithLogo: CustomerStoryWithLogo[] = stories.map((s) => ({
    ...s,
    logoLines: LOGO_LINES_BY_SLUG[s.slug] ?? defaultLogoLines(s.company),
  }));

  return (
    <>
      <main
        style={{
          paddingTop: 88,
          background: "#fafaf9",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <section
          style={{
            background: "#fafaf9",
            padding: "80px 24px 64px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <header style={{ marginBottom: 48 }}>
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
                Customers
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#555",
                  maxWidth: 560,
                  fontWeight: 400,
                }}
              >
                We help companies of all sizes around the world achieve measurable results.
              </p>
            </header>
          </div>
        </section>

        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          <CustomersGrid stories={storiesWithLogo} />
        </section>

        <Footer />
      </main>
      <style>{`
        @media (max-width: 640px) {
          .customer-card-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
