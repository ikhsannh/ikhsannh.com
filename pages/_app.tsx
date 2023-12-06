import BaseLayout from '@/components/BaseLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <BaseLayout>
      <Head>
        <meta name="title" content="Ikhsan N. Huda — Dev."></meta>
        <meta name="description" content="Ikhsan N. Huda's personal website. A web developer based in Indonesia."></meta>
        <meta name="keywords" content="Ikhsan N. Huda, Ikhsan, Huda, Ikhsan Huda, Web Developer, Frontend Developer, React Developer, Next.js Developer, Indonesia"></meta>
        <meta name="author" content="Ikhsan N. Huda"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="theme-color" content="#000000"></meta>
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <link rel="shortcut icon" href='/favicon.ico' type="image/x-icon"></link>
      </Head>
      <Component {...pageProps}></Component>
    </BaseLayout>
  )
}
