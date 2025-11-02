/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // Required for static export
  output: 'export', // Enable static export for S3 hosting
  trailingSlash: true, // Optional: ensures clean URLs on S3
  distDir: 'out' // Output directory for static files
};

module.exports = nextConfig;
