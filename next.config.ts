import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
