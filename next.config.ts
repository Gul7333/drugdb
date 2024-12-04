import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // Disables type checking at build time
  },
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export to handle images
  },
};

export default nextConfig;
