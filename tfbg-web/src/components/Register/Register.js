import React, { useState } from "react";
import { Login20 } from "@carbon/icons-react";
import { withRouter } from "react-router-dom";

import logo from "../../files/logo.png";

import { TextInput, Button, Loading } from "carbon-components-react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";

import API from "../../helpers/api";
import toast from "../../helpers/toast";

import styles from "./register.module.scss";

const Register = (props) => {
  const { control, errors, handleSubmit, setError } = useForm({
    mode: "all",
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  const [loading, setLodaing] = useState(false);

  const onSubmit = (values, e) => {
    console.log("mare logare", values, e);
    API.post("/users", { user: values }).then(() => {
      toast.success("Succesfully created an account");
      props.history.push("./login");
    });
  };

  const isEmpty = (value) => {
    if (validator.isEmpty(value || "")) return "Information is required";
    return true;
  };

  console.log(errors);
  return (
    <div className={styles.container}>
      <div className={` bx--row`}>
        <img className={styles.image} src={logo} alt={logo} />
      </div>
      <div className={`${styles.input} bx--row`}>
        <Controller
          name="name"
          control={control}
          rules={{ required: isEmpty() }}
          defaultValue=""
          render={({ field: { onChange } }) => (
            <TextInput
              onChange={onChange}
              id="login_email"
              placeholder="Name ..."
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
          name="email"
          defaultValue=""
          rules={{ required: isEmpty() }}
          control={control}
          render={({ field: { onChange } }) => (
            <TextInput
              onChange={onChange}
              id="login_email"
              placeholder="Email ..."
              size="lg"
              labelText=""
              invalidText={errors ? errors.email.message : ""}
              invalid={errors ? !!errors.email : false}
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
      <div className={`${styles.input} bx--row`}>
        <Controller
          name="phone"
          defaultValue=""
          rules={{ required: isEmpty() }}
          control={control}
          render={({ field: { onChange } }) => (
            <TextInput
              onChange={onChange}
              id="login_phone"
              placeholder="Phone ..."
              size="lg"
              labelText=""
              invalidText={errors ? errors.phone.message : ""}
              invalid={errors ? !!errors.phone : false}
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
            Register
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

export default Register;
