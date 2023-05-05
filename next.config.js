/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'korepetycje.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
