export type ResourceCategory = "blog" | "educational" | "video";

export interface ResourceItem {
  category: ResourceCategory;
  title: string;
  description: string;
  date: string;
  author: string;
}

export const RESOURCES: ResourceItem[] = [
  // Blogs
  {
    category: "blog",
    title: "Beyond RFPs: How AI is Transforming Due Diligence",
    description:
      "Why asset managers are turning to AI for faster, compliant DDQ responses.",
    date: "February 18, 2026",
    author: "AdviserGPT Team",
  },
  {
    category: "blog",
    title: "Building a Compliance-First AI Strategy",
    description:
      "How to adopt AI tools while keeping your compliance team in the driver's seat.",
    date: "February 20, 2026",
    author: "AdviserGPT Team",
  },
  {
    category: "blog",
    title: "The State of RFP Response in 2026",
    description:
      "Benchmarks and trends from hundreds of investment firms.",
    date: "February 23, 2026",
    author: "AdviserGPT Team",
  },
  // Educational
  {
    category: "educational",
    title: "Getting started with your Vault",
    description:
      "How to upload, organize, and maintain your firm's approved content.",
    date: "February 15, 2026",
    author: "AdviserGPT Team",
  },
  {
    category: "educational",
    title: "Writing better RFP responses",
    description:
      "Best practices for structure, tone, and compliance-friendly language.",
    date: "February 19, 2026",
    author: "AdviserGPT Team",
  },
  // Videos
  {
    category: "video",
    title: "AdviserGPT in 5 minutes",
    description:
      "A quick walkthrough of the product for new users.",
    date: "February 22, 2026",
    author: "AdviserGPT Team",
  },
  {
    category: "video",
    title: "Vault and compliance: a practical guide",
    description:
      "See how to keep your content compliant and up to date.",
    date: "February 10, 2026",
    author: "AdviserGPT Team",
  },
  {
    category: "video",
    title: "RFP workflows that scale",
    description:
      "From first draft to final response with your team.",
    date: "February 5, 2026",
    author: "AdviserGPT Team",
  },
];

export function getResourcesByCategory(
  category: ResourceCategory
): ResourceItem[] {
  return RESOURCES.filter((r) => r.category === category);
}
