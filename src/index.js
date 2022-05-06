import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import results from "/src/Components/pages/results";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/results" component={results} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
