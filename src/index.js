import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ParallaxProvider } from "react-scroll-parallax";

import "./i18n.js";
//redux
import rootReducer from "./store/rootReducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ParallaxProvider style={{ margin: 0, padding: 0 }}>
      <App />
    </ParallaxProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
