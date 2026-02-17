/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://erp.escalamais.com',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
