/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1338',
      },
      {
        protocol: 'https',
        hostname: 'strapi-production-1be7.up.railway.app',
        // port: '1338',
      },
    ],
  },
};

export default nextConfig;
