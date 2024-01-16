import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/pages/components/header.js'
import Banner from '@/pages/components/banner.js'
import Footer from '@/pages/components/footer.js'
import Card from '@/pages/interfaces/card.js'
import Content from '@/public/content.json'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>test</title>
        <meta name="description" content="test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.menu}>
          <Header />
          <Banner />
          <Card title={Content[0].title} description={Content[0].description} price={Content[0].price} />
          <Footer />
        </div>
      </main>
    </>
  )
}
