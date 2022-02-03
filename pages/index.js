import Head from "next/head"
import MainHero from "../components/mainHero/MainHero"
import MainContent from "../components/mainContent/MainContent"
import NewestItems from "../components/newestItems/NewestItems"
import AboutUs from "../components/aboutUs/AboutUs"

export default function Home() {
  return (
    <>
      <Head>
        <title>Om-Grown</title>
        <meta name="description" content="Css Documentation and examples" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <MainHero />
      <NewestItems />
      <MainContent />
      <AboutUs />
    </>
  )
}
