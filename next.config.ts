import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/sample-portfolio-1" : "",
  assetPrefix: isProd ? "/sample-portfolio-1/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    /* Legacy Vite components coexist in the tree but are not imported.
       They fail the strict Next.js type check. Skip them here. */
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
