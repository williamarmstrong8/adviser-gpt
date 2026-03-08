import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentType = "blog" | "customers" | "educational" | "videos";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category?: string;
  heroImage?: string;
  body: string;
}

export interface CustomerStory {
  slug: string;
  company: string;
  headline: string;
  description: string;
  body: string;
  logoLines?: { text: string; size: number; weight: number; spacing: string; serif?: boolean }[];
}

export interface ResourcePost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  body: string;
}

function getSlugs(contentType: ContentType): string[] {
  const dir = path.join(CONTENT_DIR, contentType);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function readFile(contentType: ContentType, slug: string): { data: Record<string, unknown>; content: string } | null {
  const filePath = path.join(CONTENT_DIR, contentType, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data: data as Record<string, unknown>, content };
}

// ——— Blog ———
export function getBlogSlugs(): string[] {
  return getSlugs("blog");
}

export function getBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const file = readFile("blog", slug);
  if (!file) return null;
  const { data, content } = file;
  return {
    slug,
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    author: (data.author as string) ?? "",
    category: data.category as string | undefined,
    heroImage: data.heroImage as string | undefined,
    body: content.trim(),
  };
}

// ——— Customers ———
export function getCustomerSlugs(): string[] {
  return getSlugs("customers");
}

export function getCustomerStories(): CustomerStory[] {
  return getCustomerSlugs()
    .map((slug) => getCustomerStory(slug))
    .filter((s): s is CustomerStory => s !== null);
}

export function getCustomerStory(slug: string): CustomerStory | null {
  const file = readFile("customers", slug);
  if (!file) return null;
  const { data, content } = file;
  const logoLines = data.logoLines as CustomerStory["logoLines"] | undefined;
  return {
    slug,
    company: (data.company as string) ?? "",
    headline: (data.headline as string) ?? "",
    description: (data.description as string) ?? "",
    body: content.trim(),
    logoLines,
  };
}

// ——— Educational ———
export function getEducationalSlugs(): string[] {
  return getSlugs("educational");
}

export function getEducationalPosts(): ResourcePost[] {
  return getEducationalSlugs()
    .map((slug) => getEducationalPost(slug))
    .filter((p): p is ResourcePost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEducationalPost(slug: string): ResourcePost | null {
  const file = readFile("educational", slug);
  if (!file) return null;
  const { data, content } = file;
  return {
    slug,
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    author: (data.author as string) ?? "",
    body: content.trim(),
  };
}

// ——— Videos ———
export function getVideoSlugs(): string[] {
  return getSlugs("videos");
}

export function getVideoPosts(): ResourcePost[] {
  return getVideoSlugs()
    .map((slug) => getVideoPost(slug))
    .filter((p): p is ResourcePost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getVideoPost(slug: string): ResourcePost | null {
  const file = readFile("videos", slug);
  if (!file) return null;
  const { data, content } = file;
  return {
    slug,
    title: (data.title as string) ?? "",
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    author: (data.author as string) ?? "",
    body: content.trim(),
  };
}
