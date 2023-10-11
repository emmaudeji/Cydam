/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_URL: "/",
  },
  images: {
    domains: [
      "drive.google.com",
      "localhost",
      "cydamgroup.org",
      "cydamglobal.com",
      "127.0.0.1",
    ],
  },
}

module.exports = nextConfig