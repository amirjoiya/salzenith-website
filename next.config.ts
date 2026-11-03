import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site builds to plain HTML/CSS/JS in /out,
  // deployable on any static host (Hostinger shared hosting included).
  output: "export",
  trailingSlash: true,
  images: {
    // No image-optimization server on static hosting; serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
