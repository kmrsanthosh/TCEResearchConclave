/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  // basePath: "/TCEResearchConclave",
};

export default nextConfig;
