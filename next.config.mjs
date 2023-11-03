import withImages from 'next-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'dnafamilia.blob.core.windows.net',
      'luminifirekeeper01.blob.core.windows.net',
      'i.ytimg.com',
    ],
  },
}

export default withImages(nextConfig)
