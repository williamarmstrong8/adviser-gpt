import ReactMarkdown from "react-markdown";
import { slugifyHeading } from "@/lib/blog-utils";

const proseStyles: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.65,
  color: "#555",
};

function flattenChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children))
    return children.map(flattenChildren).join("");
  return "";
}

export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="markdown-body" style={proseStyles}>
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p style={{ marginBottom: 16 }}>{children}</p>
          ),
          h2: ({ children }) => {
            const text = flattenChildren(children);
            const id = slugifyHeading(text);
            return (
              <h2
                id={id}
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginTop: 28,
                  marginBottom: 12,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  scrollMarginTop: 100,
                }}
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => (
            <h3
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "#1a1a1a",
                marginTop: 20,
                marginBottom: 8,
              }}
            >
              {children}
            </h3>
          ),
          ul: ({ children }) => (
            <ul style={{ marginBottom: 16, paddingLeft: 24 }}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol style={{ marginBottom: 16, paddingLeft: 24 }}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: 6 }}>{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote
              style={{
                marginTop: 20,
                marginBottom: 20,
                paddingLeft: 20,
                borderLeft: "3px solid #e85d26",
                color: "#555",
                fontStyle: "italic",
              }}
            >
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              style={{ color: "#e85d26", textDecoration: "underline" }}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
