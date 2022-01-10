import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../src/styles/app.scss";
import "../src/styles/index.scss";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/FirstPage/FirstPage";
import Games from "./components/Games/Games";
import Rooms from "./components/rooms/Rooms";
import AddRoom from "./components/AddRoom/AddRoom";

const instance = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
});

const Routing = () => {
  let [isLogged, setIsLogged] = useState(false);

  const checkIsLogged = () => {
    // instance
    //   .get("/isLogged")
    //   .then((resp) => {
    //     console.log(resp);
    //     if (resp.data === "Not logged") {
    //       setIsLogged(false);
    //     } else setIsLogged(true);
    //   })
    //   .catch(() => {
    //     setIsLogged(false);
    //   });
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else setIsLogged(false);
  };

  useEffect(() => {
    checkIsLogged();
  }, []);
  return (
    <Router history={createBrowserHistory()} forceRefresh={true}>
      <div className="container bx--grid">
        {isLogged ? (
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/games/:GAME/room/add" component={AddRoom} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/games/:GAME" component={Rooms} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="**"
              component={(props) => (
                <Login
                  {...props}
                  refetch={() => {
                    checkIsLogged();
                  }}
                />
              )}
            />
          </Switch>
        )}
        <ToastContainer position="bottom-right" closeButton={false} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));
