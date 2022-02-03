import Head from 'next/head'
import MainHero from '../components/mainHero/MainHero'
import MainContent from '../components/mainContent/MainContent'
import NewestItems from '../components/newestItems/NewestItems'

export default function Home() {
  return (
    <>
      <Head>
        <title>OM-GROWN</title>
        <meta name='description' content='Css Documentation and examples' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainHero />
      <NewestItems />
      <MainContent />
    </>
  )
}
