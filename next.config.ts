import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'seamont.rdhuae.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
