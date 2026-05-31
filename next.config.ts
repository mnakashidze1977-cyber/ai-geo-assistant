import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow MindStudio iframes from any subdomain
  async headers() {
    return [
      {
        source: "/dashboard/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
