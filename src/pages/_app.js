import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/global.sass";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/slider.css";
import { test } from '../test'
import populateCategoriaAction from '../redux/actions/CategoriaActions/PopulateCategoriaAction'
import populateClienteAction from '../redux/actions/ClienteActions/PopulateClienteAction'
import populateProductoAction from '../redux/actions/ProductoActions/PopulateProductoAction'

function MyApp({ Component, pageProps }) {



  useEffect(() => {
    store.dispatch(populateCategoriaAction())
    store.dispatch(populateClienteAction())
    store.dispatch(populateProductoAction())
    
  }, [])
  


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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
