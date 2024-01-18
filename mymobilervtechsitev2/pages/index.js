import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/pages/components/header.js'
import Footer from '@/pages/components/footer.js'
import Card from '@/pages/interfaces/card.js'
import Content from '@/public/card-content.json'

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
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.cards}>
          {renderCards()}
        </div>

        <Footer />
      </main>
    </>
  )
}

function renderCards() {
  return Content.map((card) => {
    return (
      <Card key={card.id} type={card.type} data={card.data} />
    )
  })
}