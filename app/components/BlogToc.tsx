"use client";

import * as React from "react";
import type { BlogHeading } from "@/lib/blog-utils";

export function BlogToc({ headings }: { headings: BlogHeading[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0% -70% 0%", threshold: 0 }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="blog-toc-nav"
      style={{
        minWidth: 200,
        maxWidth: 220,
      }}
    >
      <div
        style={{
          paddingLeft: 16,
          borderLeft: "1px solid #d4d4d1",
        }}
      >
        {headings.map(({ id, text }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              data-active={isActive ? "true" : undefined}
              style={{
                display: "block",
                padding: "8px 0 8px 12px",
                marginLeft: -1,
                borderLeft: isActive ? "3px solid #1a1a1a" : "3px solid transparent",
                fontSize: 14,
                lineHeight: 1.4,
                color: isActive ? "#1a1a1a" : "#555",
                textDecoration: "none",
                fontWeight: isActive ? 500 : 400,
                transition: "color 0.15s ease, font-weight 0.15s ease",
              }}
            >
              {text}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
