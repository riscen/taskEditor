/**
 * Task editor
 * you can:
 *  Upload a task
 *  Update a task
 *  Remove a task
 *  See all tasks
 *  Show task information
 * All these actions are handle with Redux
 * Add action table
 * When a Redux action is made, show it in a table
 * to keep record of all the actions that has been made.
 * An action has action type and time of execution.
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
