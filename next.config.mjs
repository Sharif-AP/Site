/** @type {import('next').NextConfig} */
const nextConfig = {
  // Make a static export into the `out/` directory
  output: 'export',

  // Disable server-side image optimization for static hosts
  images: { unoptimized: true },

  // Optional: keep these if you really want to skip checks
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Optional: enable when deploying under a subpath
  // basePath: '/ap',
  // trailingSlash: true,
};

export default nextConfig;
