import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./uno.module.scss";
import uno from "../../files/uno.png";
import { Button } from "carbon-components-react";

const Uno = (props) => {
  const history = useHistory();

  const routeChangeGames = () => {
    let path = "/games";
    history.push(path);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={uno}
        alt={uno}
        onClick={routeChangeGames}
      />

      <div className={styles.box}>
        {/* <div>Data: 15.02.2022 Ora: 22:00 Locatie: Students pub</div> */}
        <p>Date: 15.02.2022</p>
        <p>Time: 19:00</p>
        <p>Location: Student's pub</p>
        <Button className={styles.button}>Join</Button>
      </div>

      <div className={styles.box}>
        {/* <div>Data: 15.02.2022 Ora: 22:00 Locatie: Students pub</div> */}
        <p>Date: 10.01.2022</p>
        <p>Time: 17:00</p>
        <p>Location: Napoleon</p>
        <Button className={styles.button}>Join</Button>
      </div>

      <div className={styles.box}>
        {/* <div>Data: 15.02.2022 Ora: 22:00 Locatie: Students pub</div> */}
        <p>Date: 05.02.2022</p>
        <p>Time: 18:00</p>
        <p>Location: Daliei street no. 187</p>
        <Button className={styles.button}>Join</Button>
      </div>

      <div className={styles.box}>
        {/* <div>Data: 15.02.2022 Ora: 22:00 Locatie: Students pub</div> */}
        <p>Date: 07.02.2022</p>
        <p>Time: 18:00</p>
        <p>Location: Like Pub</p>
        <Button className={styles.button}>Join</Button>
      </div>
    </div>
  );
};

export default Uno;
