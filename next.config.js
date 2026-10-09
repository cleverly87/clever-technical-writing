/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true // Keeps existing URLs (e.g. /about/) unchanged after the move from S3
};

module.exports = nextConfig;
