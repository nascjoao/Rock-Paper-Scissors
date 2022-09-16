import type { NextPage } from 'next'
import Head from 'next/head'
import Game from '../components/Game'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Rock Paper Scissors Game!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game />
    </>
  )
}

export default Home
