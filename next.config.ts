import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site builds to plain files in /out, no server needed.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
