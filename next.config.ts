import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
};

export default nextConfig;
