import React, { useState } from "react";

import logo from "../../files/logo.png";

import { TextInput, Button, Loading, Link } from "carbon-components-react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";
import { useHistory } from "react-router-dom";

// import API from "../../helpers/api";
// import toast from "../../helpers/toast";

import styles from "./firstPage.module.scss";

const FirstPage = (props) => {
  const history = useHistory();

  const routeChangeLogin = () => {
    let path = "/login";
    history.push(path);
  };

  const routeChangeRegister = () => {
    let path = "/register";
    history.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={` bx--row`}>
        <img className={styles.image} src={logo} alt={logo} />
      </div>

      <div className={styles.button}>
        <Button kind="secondary" onClick={routeChangeLogin}>
          Login
        </Button>
      </div>
      <div className={styles.button}>
        <Button kind="secondary" onClick={routeChangeRegister} isExpressive>
          Register
        </Button>
      </div>
    </div>
  );
};

export default FirstPage;
