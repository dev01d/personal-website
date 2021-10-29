import 'tailwindcss/tailwind.css'
import 'highlight.js/styles/monokai-sublime.css'
import '../src/styles/main.css'
import PlausibleProvider from 'next-plausible'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain="jasonbehnke.io"
      selfHosted={true}
      customDomain="https://analytics.jasonbehnke.io"
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
