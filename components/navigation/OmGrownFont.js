import Head from "next/head"
import Link from "next/link"
function OmGrownFont() {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/brand/Brand.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body>OM-Grown</body>
    </div>
  )
}

export default OmGrownFont
