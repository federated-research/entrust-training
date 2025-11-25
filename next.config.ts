import type { NextConfig } from "next";
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH, // TODO: fix when custom domain mapping
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
};

export default withNextra(nextConfig);
