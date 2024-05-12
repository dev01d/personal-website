import 'tailwindcss/tailwind.css'
import '@/styles/main.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '@/components/Layout'

export default function Root({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
