import React from "react";
import Head from "next/head";
import '../styles/global.sass';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amadis Store</title>
        <link rel='shortcut icon' href={'/favicon.png'} type='image/x-icon' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp