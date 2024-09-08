/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
      },
      {
        protocol: 'https',
        hostname: 'strapi.inoguez.com',
        // port: '1338',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // port: '1338',
      },
    ],
  },
};

export default nextConfig;
