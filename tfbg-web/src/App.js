import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./components/sign-up/SignUpForm";
import LoginForm from "./components/login/LoginForm";
import "./styles.css";
import FirstPage from "./components/FirstPage";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        {/* <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div> */}

        <Route path="/first" exact component={FirstPage} />
        <Route path="/sign-up" exact component={SignUpForm} />
        <Route path="/login" exact component={LoginForm} />
        {/* /</div> */}
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
