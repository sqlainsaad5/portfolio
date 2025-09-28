// next.config.js for local dev
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',   // ye ok hai
  // basePath: '/portfolio',   // comment out karo local ke liye
  // assetPrefix: '/portfolio/', // comment out karo local ke liye
}

export default nextConfig
