/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true } // keep static export friendly if needed
};

module.exports = nextConfig;
