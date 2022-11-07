import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Aos from 'aos';
import '../src/index.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 300, once: true });
  }, []);
  return (
    <>
      <Head>
        <title>Ronaldo Reis | Front End & Web Designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/icone.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
