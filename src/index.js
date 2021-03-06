import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/component/App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import allReducers from "./reducer";
import { createStore } from "redux";

const stores = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
