/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.weatherunion.com",
      "t3.ftcdn.net",
      "www.shareicon.net",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
