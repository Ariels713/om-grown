import Head from "next/head"
import MainHero from "../components/mainHero/MainHero"
import MainContent from "../components/mainContent/MainContent"
import NewestItems from "../components/newestItems/NewestItems"
import AboutUs from "../components/aboutUs/AboutUs"
import Products from "../components/products/Products"

export default function Home() {
  return (
    <>
      <Head>
        <title>Om-Grown</title>
        <meta name="description" content="Om-Grown Ecommerce Store" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <MainHero />
      <NewestItems />
      <MainContent />
      <Products />
      <AboutUs />
    </>
  )
}
