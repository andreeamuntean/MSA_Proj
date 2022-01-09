import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./games.module.scss";

import catan from "../../files/catan.png";
import remi from "../../files/remi.png";
import uno from "../../files/uno.png";
import activity from "../../files/activity.jpeg";
import suggest from "../../files/suggest.png";

const Games = (props) => {
  const history = useHistory();

  const routeChangeActivity = () => {
    let path = "/activity";
    history.push(path);
  };

  const routeChangeCatan = () => {
    let path = "/catan";
    history.push(path);
  };

  const routeChangeRemi = () => {
    let path = "/remi";
    history.push(path);
  };

  const routeChangeUno = () => {
    let path = "/uno";
    history.push(path);
  };

  //   const routeChangeSuggest = () => {
  //     let path = "/uno";
  //     history.push(path);
  //   };

  return (
    <div className={styles.container}>
      <div className="row">
        <div className={styles.box}>Pick a game</div>
        <img
          className={styles.image}
          src={uno}
          alt={uno}
          onClick={routeChangeUno}
        />
        <img
          className={styles.image}
          src={remi}
          alt={remi}
          onClick={routeChangeRemi}
        />
        <img
          className={styles.image}
          src={catan}
          alt={catan}
          onClick={routeChangeCatan}
        />
        <img
          className={styles.image}
          src={activity}
          alt={activity}
          onClick={routeChangeActivity}
        />
        <img
          className={styles.image}
          src={suggest}
          alt={suggest}
          //onClick={routeChangeActivity}
        />
      </div>
    </div>
  );
};

export default Games;
