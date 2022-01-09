import React, { useState } from "react";
import { Login20 } from "@carbon/icons-react";
import { withRouter } from "react-router-dom";

import logo from "../../files/logo.png";

import { TextInput, Button, Loading } from "carbon-components-react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";
import { useHistory } from "react-router-dom";

import API from "../../helpers/api";
import toast from "../../helpers/toast";

import styles from "./register.module.scss";

const Register = (props) => {
  const { control, handleSubmit, setError } = useForm({
    mode: "all",
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  const [errors, setErrors] = useState({
    name: { message: "" },
    password: { message: "" },
    phone: { message: "" },
    email: { message: "" },
  });
  const [loading, setLodaing] = useState(false);

  const onSubmit = (values, e) => {
    console.log("mare logare", values, e);
    API.post("/users", { user: values })
      .then(() => {
        toast.success("Succesfully created an account");
        props.history.push("./login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const history = useHistory();

  const routeChangeFirst = () => {
    let path = "/";
    history.push(path);
  };

  const isEmpty = (value) => {
    if (validator.isEmpty(value || "")) return "Information is required";
    return true;
  };

  console.log(errors);
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
              invalidText={errors.name ? errors.name.message : ""}
              invalid={errors.name ? !!errors.name.message : false}
            />
          )}
        />
      </div>
      <div className={`${styles.input} bx--row`}>
        <Controller
          name="email"
          defaultValue=""
          rules={{
            required: isEmpty(),
            validate: (value) => {
              if (validator.isEmail(value)) return true;
              return "Invalid email";
            },
          }}
          control={control}
          render={({ field: { onChange } }) => (
            <TextInput
              onChange={onChange}
              id="login_email"
              placeholder="Email ..."
              size="lg"
              labelText=""
              invalidText={errors.email ? errors.email.message : ""}
              invalid={errors.email ? !!errors.email.message : false}
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
              invalidText={errors.password ? errors.password.message : ""}
              invalid={errors.password ? !!errors.password.message : false}
            />
          )}
        />
      </div>
      <div className={`${styles.input} bx--row`}>
        <Controller
          name="phone"
          defaultValue=""
          rules={{
            required: isEmpty(),
            validate: (value) => {
              if (validator.isNumeric(value)) return true;
              return "Invalid phone number";
            },
          }}
          control={control}
          render={({ field: { onChange } }) => (
            <TextInput
              onChange={onChange}
              id="login_phone"
              placeholder="Phone ..."
              size="lg"
              labelText=""
              invalidText={errors.phone ? errors.phone.message : ""}
              invalid={errors.phone ? !!errors.phone.message : false}
            />
          )}
        />
      </div>
      {!loading ? (
        <div className={styles.button}>
          <Button
            kind="secondary"
            onClick={handleSubmit(onSubmit, (errors) => {
              setErrors(errors);
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
