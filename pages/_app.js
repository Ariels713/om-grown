import "../styles/globals.css"
import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout/layout"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/brand/Brand.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
