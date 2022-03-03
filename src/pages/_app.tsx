import { AppProps } from 'next/app';
import '../styles/global.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>prizeDoor</Head>
    </>
  )
}

export default MyApp
