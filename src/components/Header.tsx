import Head from 'next/head'
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import('./Sidebar'))

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
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./assets/favicon-16x16.png"
        />

        <link
          rel="mask-icon"
          href="./assets/safari-pinned-tab.svg"
          color="#595959"
        />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Menu />
    </div>
  )
}
