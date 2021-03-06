import React, { useState } from "react";

import logo from "../../files/logo.png";

import { TextInput, Button, Loading } from "carbon-components-react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";
import { useHistory } from "react-router-dom";

import API from "../../helpers/api";
import toast from "../../helpers/toast";

import styles from "./login.module.scss";

const Login = (props) => {
  const { control, errors, handleSubmit, setError } = useForm({
    mode: "all",
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  const [loading, setLodaing] = useState(false);

  const onSubmit = (values, e) => {
    API.post("/login", { email: values.email, password: values.password }).then(
      (resp) => {
        props.history.push("./games");
        if (resp.status === 404) {
          toast.error("User not found");
          return;
        }
        if (resp.status === 406) {
          toast.error("Incorrect password");
          return;
        }
        toast.success("Succesfully logged in");
        localStorage.setItem("token", resp.token);
        localStorage.setItem("user", resp.user[0].email);
        props.refetch();
      }
    );
  };
  console.log(localStorage.getItem("user"));
  const history = useHistory();

  const routeChangeFirst = () => {
    let path = "/";
    history.push(path);
  };

  const isEmpty = (value) => {
    if (validator.isEmpty(value || "")) return "Information is required";
    return true;
  };

  return (
    <div className={styles.container}>
      <div className={` bx--row`}>
        <img
          className={styles.image}
          src={logo}
          alt={logo}
          onClick={routeChangeFirst}
        />
      </div>
      <div className={`${styles.input} bx--row`}>
        <Controller
          name="email"
          control={control}
          rules={{ required: isEmpty() }}
          defaultValue=""
          render={({ field: { onChange } }) => (
            <TextInput
              onChange={onChange}
              id="login_email"
              placeholder="Email ..."
              size="lg"
              labelText=""
              invalidText={errors ? errors.name.message : ""}
              invalid={errors ? !!errors : false}
            />
          )}
        />
      </div>
      <div className={`${styles.input} bx--row`}>
        <Controller
          name="password"
          defaultValue=""
          rules={{ required: isEmpty() }}
          control={control}
          render={({ field: { onChange } }) => (
            <TextInput
              type="password"
              onChange={onChange}
              id="login_password"
              placeholder="Password ..."
              size="lg"
              labelText=""
              invalidText={errors ? errors.password.message : ""}
              invalid={errors ? !!errors.password : false}
            />
          )}
        />
      </div>
      {!loading ? (
        <div className={styles.button}>
          <Button
            kind="secondary"
            onClick={handleSubmit(onSubmit, (errors) => {
              Object.keys(errors).forEach((key) => {
                setError(key, errors[key]);
              });
            })}
            isExpressive
          >
            Login
          </Button>
        </div>
      ) : (
        <div className="loading-container">
          <Loading withOverlay={false} />
        </div>
      )}
    </div>
  );
};

export default Login;
