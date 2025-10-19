/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build as static export (creates the `out/` directory)
  output: 'export',

  // Avoid server-side image optimization on static hosts
  images: { unoptimized: true },

  // Optional: keep or remove these if you intentionally skip checks
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Optional: enable if you deploy under a subpath, e.g. /ap
  // basePath: '/ap',
  // trailingSlash: true, // sometimes helpful on static hosts
};

export default nextConfig;
