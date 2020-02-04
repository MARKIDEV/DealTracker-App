import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import requestReducer from "./reducer/requestReducer";
import quoteReducer from "./reducer/quoteReducer";
import clientReducer from "./reducer/clientReducer";
import transporterReducer from "./reducer/transporterReducer";
import "./index.css";
import { Provider } from "react-redux";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// combining two reducers into a single reducer
const reducer = combineReducers({
  requests: requestReducer,
  quotes: quoteReducer,
  clients: clientReducer,
  transporters: transporterReducer
});

ReactDOM.render(
  <Provider
    store={createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
