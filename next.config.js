module.exports = {
  output: "standalone",

    "navigationFallback": {
        "rewrite": "index.html",
        "exclude": ["/static/images/*.{png,jpg,gif}", "/static/css/*"]
    },
    "mimeTypes": {
        ".json": "text/json",
        ".css": "text/css",
        ".html": "text/html"
    }
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
