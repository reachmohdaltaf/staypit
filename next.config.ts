import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images, API, or other resources from any URL
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
