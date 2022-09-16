import type { AppProps } from 'next/app'
import '@fontsource/inter/variable-full.css'
import '../styles.global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
