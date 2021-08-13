import React from "react";
import Head from "next/head";
import '../styles/global.sass';
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Amadis Store</title>
        <link rel='shortcut icon' href={'/favicon.png'} type='image/x-icon' />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp