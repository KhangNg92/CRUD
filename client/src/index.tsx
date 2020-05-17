import React from "react";
import { render } from "react-dom";
import App from "./App";

// redux packages
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddlware from "redux-promise";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddlware, thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
