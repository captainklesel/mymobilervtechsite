import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/pages/components/header.js'
import Marquee from '@/pages/components/marquee.js'
import Footer from '@/pages/components/footer.js'
import Card from '@/pages/components/card.js'
import { loadCards } from '@/lib/loadCards.js'
import { loadHeaders } from '@/lib/loadHeaders.js'

export async function getStaticProps() {
  const cards = await loadCards()
  const headers = await loadHeaders()
  return { props: { cards, headers } }
}

export default function Home({ cards, headers }) {
  if(!cards) {
    cards = [{title: 'Loading...', subtitle: 'Loading...', body1: 'Loading...', body2: 'Loading...'}, {title: 'Loading...', subtitle: 'Loading...', body1: 'Loading...', body2: 'Loading...'}, {title: 'Loading...', subtitle: 'Loading...', body1: 'Loading...', body2: 'Loading...'}]
  }
  if(!headers) {
    headers = [{title: 'Loading...', subtitle: 'Loading...', image1: 'Loading...', image1link: 'Loading...', image2: 'Loading...', image2link: 'Loading...', logoimage: 'Loading...', logolink: 'Loading...'}]
  }
  cards = cards.list
  headers = headers.list

  return (
    <>
      <Head>
        <title>test</title>
        <meta name="description" content="test" />
        <meta lang='en-us' charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.header}>
          <Header title={headers[0].title} subtitle={headers[0].subtitle}/>
        </div>

        <div className={styles.marquee}>
          <Marquee />
        </div>

        <div className={styles.cards}>
          <Card title={cards[0].title} subtitle={cards[0].subtitle} body1={cards[0].body1} body2={cards[0].body2} />
          <Card title={cards[1].title} subtitle={cards[1].subtitle} body1={cards[1].body1} body2={cards[1].body2} />
          <Card title={cards[2].title} subtitle={cards[2].subtitle} body1={cards[2].body1} body2={cards[2].body2} />
        </div>
      </main>
    </>
  )
}