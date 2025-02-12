const withPWA = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: () => ({
    "/": { page: "/editor" },
  }),
  compiler: {
    styledComponents: true,
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    fallbacks: {
      document: "/editor",
    },
  },
};

module.exports = withPWA(nextConfig);
