import 'tailwindcss/tailwind.css'
import '../src/styles/main.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../src/components/Header'
import PlausibleProvider from 'next-plausible'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain="jasonbehnke.io"
      selfHosted={true}
      customDomain="https://analytics.jasonbehnke.io"
    >
      <Header />
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
