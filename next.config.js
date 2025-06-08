  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/vibrantvalleyhighschool',
    assetPrefix: '/vibrantvalleyhighschool/',
  };

  module.exports = nextConfig;
