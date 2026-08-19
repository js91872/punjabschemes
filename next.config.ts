import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    useTypeScriptCli: false,
  },
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.punjabschemes.com" }],
      destination: "https://punjabschemes.com/:path*",
      permanent: true,
    }];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [{ key: "Strict-Transport-Security", value: "max-age=31536000" }],
    }];
  },
};

export default nextConfig;
