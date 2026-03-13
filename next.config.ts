import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/inquiry",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
