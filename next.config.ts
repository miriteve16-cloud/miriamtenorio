import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["miriamtenorio.com", "masterclass.miriamtenorio.com"],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "masterclass.miriamtenorio.com" }],
          destination: "/masterclass",
        },
      ],
    };
  },
};

export default nextConfig;
