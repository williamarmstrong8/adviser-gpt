"use client";

import { useState } from "react";

const FOOTER_LINK_COLOR = "#e85d26";
const FOOTER_LINK_HOVER = "#d04e1a";

const FOOTER_SECTIONS = [
  {
    title: "Products",
    url: "/products",
    links: [
      { label: "Vault", href: "/products#vault" },
      { label: "Word add-in", href: "/products#word" },
      { label: "Excel add-in", href: "/products#excel" },
      { label: "Web app", href: "/products#webapp" },
    ],
  },
  {
    title: "Solutions",
    url: "/solutions",
    links: [
      { label: "Asset Managers", href: "/solutions/asset-managers" },
      { label: "Wealth Advisers", href: "/solutions/wealth-advisers" },
      { label: "Client Service Teams", href: "/solutions/client-service-teams" },
      { label: "Compliance Teams", href: "/solutions/compliance-teams" },
      { label: "RFP & DDQ Teams", href: "/solutions/rfp-teams" },
      { label: "Outsourced CIOs", href: "/solutions/outsourced-cios" },
    ],
  },
  {
    title: "Resources",
    url: "/resources",
    links: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Educational", href: "/resources/educational" },
      { label: "Videos", href: "/resources/videos" },
      { label: "Customers", href: "/resources/customers" },
      { label: "All resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    url: "#",
    links: [
      { label: "About", href: "#about" },
      { label: "People", href: "#people" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact sales", href: "/contact-sales" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* Footer */}
      <footer
        style={{
          background: "#0d0d0d",
          color: "#ffffff",
          padding: "56px 32px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* Top row: Brand + Newsletter | Section columns (Products, Solutions, …) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr repeat(4, minmax(0, 1fr))",
              gap: "32px 40px",
              marginBottom: 48,
            }}
            className="footer-grid"
          >
            {/* Left: Brand + Newsletter */}
            <div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: 16,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                AdviserGPT
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: 20,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                Curious to hear more? Sign up for our newsletter.
              </p>
              {submitted ? (
                <div
                  style={{
                    padding: "12px 0",
                    color: "#e85d26",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Thanks for signing up! We&apos;ll be in touch.
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  style={{ display: "flex", gap: 10, maxWidth: 360 }}
                  className="footer-newsletter-form"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontSize: 14,
                      color: "#1a1a1a",
                      background: "#ffffff",
                      outline: "none",
                      minWidth: 0,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "12px 22px",
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      background: "#2a2a2a",
                      color: "#ffffff",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Section columns: each page as header, dropdown items as links */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <a
                  href={section.url}
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: 14,
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = FOOTER_LINK_COLOR)}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  {section.title}
                </a>
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: "block",
                      fontSize: 14,
                      color: FOOTER_LINK_COLOR,
                      textDecoration: "none",
                      marginBottom: 8,
                      transition: "color 0.15s ease",
                      fontFamily: "var(--font-geist-sans), sans-serif",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = FOOTER_LINK_HOVER)}
                    onMouseOut={(e) => (e.currentTarget.style.color = FOOTER_LINK_COLOR)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom: Copyright + legal links | Website by */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 8,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                &copy; 2026 S2 Strategy, LLC. All rights reserved.
              </p>
              <div style={{ display: "flex", gap: 20 }}>
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                      fontFamily: "var(--font-geist-sans), sans-serif",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-geist-sans), sans-serif",
              }}
            >
              Website by AdviserGPT
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-grid > *:nth-child(2) {
          padding-left: 32px;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .footer-grid > *:nth-child(2) {
            padding-left: 0;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px 24px !important;
          }
          .footer-newsletter-form {
            flex-direction: column !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
