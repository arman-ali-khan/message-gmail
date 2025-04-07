/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable proper chunk loading and optimization
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    // Ensure proper chunk loading
    config.output = {
      ...config.output,
      webassemblyModuleFilename: 'static/wasm/[modulehash].wasm',
      chunkFilename: 'static/chunks/[name].[contenthash].js',
    };
    return config;
  }
};

module.exports = nextConfig;