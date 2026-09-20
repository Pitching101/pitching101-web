import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so Vercel serves files even if framework detect is sticky from the old static site
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
