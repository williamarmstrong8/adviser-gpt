import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  turbopack: {
    root: process.cwd(),
  },
});

export default nextConfig;
