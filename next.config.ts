import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/contact-us", destination: "/kontakti", permanent: true }];
  },
};

export default nextConfig;
