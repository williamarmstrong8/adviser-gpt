"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "advisergpt_gate_unlocked";
const CODE = "1357";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      setUnlocked(stored === "true");
    }
    setChecked(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password === CODE) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(STORAGE_KEY, "true");
      }
      setUnlocked(true);
      setPassword("");
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  if (!checked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafaf9",
        }}
      />
    );
  }

  if (!unlocked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafaf9",
          padding: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            background: "#ffffff",
            border: "1px solid #d4d4d1",
            borderRadius: 16,
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#1a1a1a",
              marginBottom: 8,
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            AdviserGPT
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "#555",
              marginBottom: 28,
            }}
          >
            Enter the code to continue
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Code"
              autoComplete="off"
              autoFocus
              style={{
                width: "100%",
                padding: "14px 18px",
                fontSize: 16,
                border: "1px solid #d4d4d1",
                borderRadius: 8,
                outline: "none",
                marginBottom: 12,
                boxSizing: "border-box",
              }}
            />
            {error && (
              <p
                style={{
                  fontSize: 13,
                  color: "#dc2626",
                  marginBottom: 12,
                }}
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px 24px",
                fontSize: 15,
                fontWeight: 500,
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
                borderRadius: 100,
                cursor: "pointer",
              }}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
