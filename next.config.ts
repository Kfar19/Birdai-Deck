import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  // Prevent Next from inferring a parent workspace root when multiple lockfiles exist.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
