import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import SignUpForm from "./components/sign-up/SignUpForm";
import LoginForm from "./components/login/LoginForm";

const Routing = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up" component={SignUpForm} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
