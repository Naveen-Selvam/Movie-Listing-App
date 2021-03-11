import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
