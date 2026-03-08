"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check } from "lucide-react";

export default function ContactSalesPage() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [howHear, setHowHear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Sales inquiry from AdviserGPT website");
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${workEmail}\nCompany: ${company}\nHow did you hear about us: ${howHear}`
    );
    window.location.href = `mailto:sales@advisergpt.com?subject=${subject}&body=${body}`;
  };

  return (
    <main style={{ paddingTop: 88, minHeight: "100vh", background: "#fafaf9" }}>
      <Navbar />

      <section
        style={{
          padding: "80px 24px 96px",
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 64,
            alignItems: "start",
          }}
          className="contact-sales-grid"
        >
          {/* Left: intro, offerings, testimonial */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#555",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contact sales
            </p>
            <h1
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                marginBottom: 20,
                fontFamily:
                  "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              Talk to our Sales team
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#555",
                marginBottom: 32,
              }}
            >
              Connect with our sales team to explore how we can support your use
              case.
            </p>

            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                "Demo of the AdviserGPT platform",
                "Custom walkthrough for your team",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 14,
                    fontSize: 15,
                    color: "#1a1a1a",
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(46, 125, 50, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} style={{ color: "#2e7d32" }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <div style={{ marginTop: 48 }}>
              <blockquote
                style={{
                  fontSize: 24,
                  lineHeight: 1.5,
                  color: "#555",
                  fontStyle: "italic",
                  marginBottom: 20,
                  marginTop: 0,
                }}
              >
                &ldquo;AdviserGPT has cut our RFP turnaround from weeks to days. The
                quality is better because every answer comes from our approved
                content.&rdquo;
              </blockquote>
              <p
                style={{
                  fontSize: 14,
                  color: "#555",
                  fontWeight: 500,
                }}
              >
                Managing Director, Client Service
              </p>
              <p style={{ fontSize: 14, color: "#555", marginTop: 2 }}>
                Mid-cap equity manager
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d4d4d1",
              borderRadius: 16,
              padding: "40px 36px",
            }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 500,
                color: "#1a1a1a",
                marginBottom: 28,
                fontFamily:
                  "var(--font-playfair), Georgia, 'Times New Roman', serif",
              }}
            >
              How can we help?
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="fullName"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: 8,
                  }}
                >
                  Full name <span style={{ color: "#e85d26" }}>*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: 15,
                    color: "#1a1a1a",
                    background: "#fafaf9",
                    border: "1px solid #d4d4d1",
                    borderRadius: 8,
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="workEmail"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: 8,
                  }}
                >
                  Work email <span style={{ color: "#e85d26" }}>*</span>
                </label>
                <input
                  id="workEmail"
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="you@company.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: 15,
                    color: "#1a1a1a",
                    background: "#fafaf9",
                    border: "1px solid #d4d4d1",
                    borderRadius: 8,
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="company"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: 8,
                  }}
                >
                  Company <span style={{ color: "#e85d26" }}>*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: 15,
                    color: "#1a1a1a",
                    background: "#fafaf9",
                    border: "1px solid #d4d4d1",
                    borderRadius: 8,
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="howHear"
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: 8,
                  }}
                >
                  How did you hear about AdviserGPT?{" "}
                  <span style={{ color: "#e85d26" }}>*</span>
                </label>
                <textarea
                  id="howHear"
                  required
                  value={howHear}
                  onChange={(e) => setHowHear(e.target.value)}
                  placeholder="e.g. referral, search, conference"
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: 15,
                    color: "#1a1a1a",
                    background: "#fafaf9",
                    border: "1px solid #d4d4d1",
                    borderRadius: 8,
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "14px 28px",
                  background: "#1a1a1a",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 100,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#333";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#1a1a1a";
                }}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* The teams we empower */}
      <section
        style={{
          padding: "64px 24px 80px",
          borderTop: "1px solid #e0ddd8",
          background: "#fafaf9",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 28px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: "#1a1a1a",
              textAlign: "center",
              marginBottom: 48,
              fontFamily:
                "var(--font-playfair), Georgia, 'Times New Roman', serif",
            }}
          >
            The teams we empower
          </h2>
          <div
            className="contact-sales-logos"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              maxWidth: 960,
              margin: "0 auto",
            }}
          >
            {[
              { name: "The London Company", src: "/logos/tlc.png" },
              { name: "Vulcan Value Partners", src: "/logos/vulcan.avif" },
              { name: "Cornerstone", src: "/logos/cornerstone.png" },
              { name: "Kennedy Capital Management", src: "/logos/kennedy%20capital.png" },
              { name: "Logan Capital", src: "/logos/logan-capital.avif" },
              { name: "Mainstreet Advisors", src: "/logos/mainstreet.png" },
              { name: "Prime Buchholz", src: "/logos/prime.avif" },
              { name: "SCP", src: "/logos/scp.avif" },
            ].map(({ name, src }) => (
              <div
                key={name}
                style={{
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={src}
                  alt={name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 80,
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contact-sales-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-sales-logos {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
}
