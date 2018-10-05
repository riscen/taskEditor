/**
 * Task editor
 * you can:
 *  Upload a task
 *  Update a task
 *  Remove a task
 *  See all tasks
 *  Show task information
 * All these actions are handle with Redux
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./components/App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
