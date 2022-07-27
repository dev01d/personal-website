import 'tailwindcss/tailwind.css'
import '../src/styles/main.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../src/components/Layout'
import PlausibleProvider from 'next-plausible'

export default function MyApp({ Component, pageProps }) {
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
