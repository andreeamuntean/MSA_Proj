import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/app.scss";
import "../src/styles/index.scss";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

const Routing = () => {
  return (
    <Router history={createBrowserHistory()}>
      <div className="container bx--grid">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
