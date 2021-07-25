import Head from 'next/head'
import Menu from './Sidebar'

export default function Header() {
  return (
    <div id="outer-container">
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
          href="https://use.fontawesome.com/releases/v5.0.4/css/all.css"
          integrity="sha384-DmABxgPhJN5jlTwituIyzIUk6oqyzf3+XuP7q3VfcWA2unxgim7OSSZKKf0KSsnh"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  )
}
