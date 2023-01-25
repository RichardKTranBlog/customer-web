/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
