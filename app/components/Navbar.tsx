"use client";

import { useState, useEffect, useRef } from "react";
import UINavbar from "@/components/ui/navbar";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y <= lastScrollY.current || y < 80);
      lastScrollY.current = y;
    };
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(250, 250, 249, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.25s ease-out",
      }}
    >
      <UINavbar
        auth={{
          login: { text: "Login", url: "https://app.advisergpt.ai/login" },
          signup: { text: "Request Demo", url: "/contact-sales" },
        }}
        showSearch={false}
        showCart={false}
      />
    </div>
  );
}
