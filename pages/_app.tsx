import 'tailwindcss/tailwind.css'
import '../src/styles/main.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../src/components/Layout'
import PlausibleProvider from 'next-plausible'

export default function Root({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain="jasonbehnke.io"
      selfHosted={true}
      customDomain="https://analytics.jasonbehnke.io"
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}
