import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="DNA - Igreja Familia" />
        <meta charSet="UTF-8" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:image"
          content="https://luminifirekeeper01.blob.core.windows.net/familiaead/BLACK-YELLOW%20HORIZONTAL-100.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://luminifirekeeper01.blob.core.windows.net/familiaead/BLACK-YELLOW%20HORIZONTAL-100.jpg"
        />
        <meta
          name="keywords"
          content="Igreja, Igreja Familia, Família, DNA, EBD"
        />
        <meta name="author" content="Lumini Tecnologia" />
        <meta name="copyright" content="@ 2023 Igreja Família" />
        <meta
          property="og:description"
          content="Plataforma de ensino do DNA da Igreja Família"
        />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body id="page">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
