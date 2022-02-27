import Head from 'next/head'
import Script from 'next/script'
import Menu from './Sidebar'

export default function Header() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Jason Behnke</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="photography, web design, web development, software development, devops"
        />
        <meta
          name="description"
          content="Jason Behnke is a Seattle based SRE and Photographer."
        />
        <meta name="robots" content="index, follow" />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />

        <link
          rel="mask-icon"
          href="./assets/safari-pinned-tab.svg"
          color="#595959"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
    </div>
  )
}
