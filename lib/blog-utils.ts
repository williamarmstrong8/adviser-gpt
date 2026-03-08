export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export interface BlogHeading {
  id: string;
  text: string;
}

export function getHeadingsFromMarkdown(body: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const regex = /^## (.+)$/gm;
  let match;
  while ((match = regex.exec(body)) !== null) {
    const text = match[1].trim();
    headings.push({ id: slugifyHeading(text), text });
  }
  return headings;
}
