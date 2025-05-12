import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    qualities: [50, 60, 75, 100],
  },
};

export default nextConfig;
