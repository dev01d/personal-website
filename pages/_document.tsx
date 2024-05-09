import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const RootDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a6a7248b5d034456acb540b14f6dc8f6"}'
          strategy="afterInteractive"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default RootDocument
