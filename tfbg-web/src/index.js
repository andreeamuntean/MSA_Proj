import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/app.scss";
import "../src/styles/index.scss";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/FirstPage/FirstPage";
import Games from "./components/Games/Games";
import Activity from "./components/rooms/Activity";
import Catan from "./components/rooms/Catan";
import Remi from "./components/rooms/Remi";
import Uno from "./components/rooms/Uno";

const Routing = () => {
  return (
    <Router history={createBrowserHistory()}>
      <div className="container bx--grid">
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/catan" component={Catan} />
          <Route exact path="/remi" component={Remi} />
          <Route exact path="/uno" component={Uno} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
