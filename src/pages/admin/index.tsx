import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Categoria from "./categorias";

export default function Index() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Categoria />
      </div>
    </Provider>
  );
}
