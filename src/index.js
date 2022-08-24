import React from "react";
import ReactDOM from "react-dom/client";
// import { createStore } from 'redux'
import { Provider } from "react-redux";
import App from "./App";
// import anecdoteReducer from './reducers/anecdoteReducer'
import store from "./store";

// const store = createStore(anecdoteReducer)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
