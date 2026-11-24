import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["miriamtenorio.com.mx", "masterclass.miriamtenorio.com.mx"],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "masterclass.miriamtenorio.com.mx" }],
          destination: "/masterclass",
        },
      ],
    };
  },
};

export default nextConfig;
