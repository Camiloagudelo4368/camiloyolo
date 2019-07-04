import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const history = {
    basename: process.env.PUBLIC_URL,
  };

ReactDOM.render(
    <Router>
        <App></App>
    </Router>
    , document.getElementById("root"));
