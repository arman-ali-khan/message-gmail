/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Temporarily disable PWA to resolve chunk loading issues
module.exports = nextConfig;