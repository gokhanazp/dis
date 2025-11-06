import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dentince.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dentaklinik.com.tr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.emident.com.tr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dentakademi.com.tr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kutayortodonticom.b-cdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'www.dentbe.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
