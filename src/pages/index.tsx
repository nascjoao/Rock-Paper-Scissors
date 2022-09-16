import type { NextPage } from 'next'
import Head from 'next/head'
import Game from '../components/Game'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Rock Paper Scissors - Jogo de Pedra Papel Tesoura!" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✊</text></svg>" />
      </Head>
      <Game />
    </>
  )
}

export default Home
