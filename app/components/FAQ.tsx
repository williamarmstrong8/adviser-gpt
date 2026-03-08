"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is AdviserGPT?",
    answer:
      "AdviserGPT is an advanced AI assistant built for investment managers. It streamlines RFPs, DDQs, and client inquiries with intelligent automation while ensuring compliance and preserving your firm's distinct voice and expertise.",
  },
  {
    question: "How does AdviserGPT use Large Language Models (LLMs) and which ones do you use?",
    answer:
      "AdviserGPT leverages leading LLMs (including models from OpenAI and Anthropic) as the underlying reasoning engine, but every response is grounded in your firm's own approved content stored in your Vault. This retrieval-augmented approach ensures outputs are accurate, on-brand, and compliant—rather than relying on general web knowledge.",
  },
  {
    question: "Will our data be used to train your LLM(s)?",
    answer:
      "No. Your data is never used to train any LLM. AdviserGPT operates under strict data isolation protocols—your Vault content is used solely to generate responses for your firm and is never shared with or used to improve models for any other customer.",
  },
  {
    question: "How does AdviserGPT secure customer data?",
    answer:
      "AdviserGPT offers both public and private cloud deployment options. All data is protected with row-level encryption and strict data tenant segregation, ensuring your content is accessible only to your authorized team members. We are SOC 2 compliant and undergo regular third-party security audits.",
  },
  {
    question: "How long does it take to onboard?",
    answer:
      "Most firms are fully operational within a single business day. Upload your existing marketing materials, DDQs, RFP prior art, and approved messaging—AdviserGPT ingests and indexes your content automatically. No complex IT integration or lengthy training sessions required.",
  },
  {
    question: "What kind of questionnaires can you handle?",
    answer:
      "AdviserGPT is designed to handle the full spectrum of investment industry documents: RFPs, DDQs, 15(c) questionnaires, consultant database updates, ad hoc investor inquiries, and more. The system can process both new questionnaires and update existing ones with fresh data.",
  },
  {
    question: "Do you backup our content?",
    answer:
      "Yes. All Vault content is automatically backed up with redundant storage across multiple availability zones. Your content is versioned so you can restore previous states, and we perform regular backup verification to ensure data integrity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      style={{
        padding: "96px 24px",
        background: "#fafaf9",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "#1a1a1a",
            fontFamily: "var(--font-playfair), Georgia, serif",
            textAlign: "center",
            marginBottom: 48,
            lineHeight: 1.2,
          }}
        >
          You probably have questions. Great.
        </h2>

        {/* Card-based accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? "#eeecea" : "#fafaf9",
                  border: "1px solid #d8d5d0",
                  borderRadius: 10,
                  overflow: "hidden",
                  transition: "background 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "32px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#1a1a1a",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: 18,
                      color: "#666",
                      lineHeight: 1,
                      fontWeight: 300,
                    }}
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#555",
                      padding: "0 24px 24px",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
