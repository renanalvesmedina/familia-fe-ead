module.exports = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dnafamilia.blob.core.windows.net',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'luminifirekeeper01.blob.core.windows.net',
        port: '',
        pathname: '**',
      },
    ],
  },
}
// import withImages from 'next-images'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   reactStrictMode: true,
//   images: {
//     domains: [
//       'dnafamilia.blob.core.windows.net',
//       'luminifirekeeper01.blob.core.windows.net',
//       'i.ytimg.com',
//     ],
//   },
// }

// export default withImages(nextConfig)
