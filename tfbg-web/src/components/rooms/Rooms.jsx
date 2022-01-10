import React, { useState, useEffect } from "react";
import styles from "./activity.module.scss";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import activity from "../../files/activity.jpeg";
import remi from "../../files/remi.png";
import catan from "../../files/catan.png";
import uno from "../../files/uno.png";
import { Button } from "carbon-components-react";
import API from "../../helpers/api";

const Rooms = (props) => {
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    API.get(`/rooms?filter=${props.match.params.GAME}`).then((resp) => {
      setRooms(resp.rooms);
    });
  };

  useEffect(() => {
    getRooms();
  }, []);

  const routeChangeGames = () => {
    let path = "/games";
    props.history.push(path);
  };

  const selectGamePicture = () => {
    switch (props.match.params.GAME) {
      case "activity":
        return activity;
      case "catan":
        return catan;
      case "remi":
        return remi;
      case "uno":
        return uno;
      default:
        return activity;
    }
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={selectGamePicture()}
        alt={selectGamePicture()}
        onClick={routeChangeGames}
      />
      {rooms.length &&
        rooms.map((room) => (
          <div className={styles.box}>
            <p>{`Date: ${room.scheduleDate}`}</p>
            <p>{`Time: ${room.hour}`}</p>
            <p>{`Location: ${room.location}`}</p>
            <Button className={styles.button}>Join</Button>
          </div>
        ))}
      {!rooms.length && <p>No rooms yet</p>}
      <div className={styles.but}>
        <Button
          onClick={() => {
            props.history.push(`/games/${props.match.params.GAME}/room/add`);
          }}
          className={styles.button}
        >
          CreateRoom
        </Button>
      </div>
    </div>
  );
};

export default Rooms;
