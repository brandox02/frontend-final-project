import React from "react";
import Head from "next/head";
import "../styles/global.sass";
import { Provider } from "react-redux";
import store from "../redux/store";
//import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import'../styles/slider.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amadis Store</title>
        <link
          href={"/favicon.ico"}
          rel="icon"
          type="image/vnd.microsoft.icon"
          sizes="48x48 256x256"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
