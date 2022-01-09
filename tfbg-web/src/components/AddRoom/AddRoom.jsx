import React, { useState } from "react";

import logo from "../../files/logo.png";

import { TextInput, Button, Loading, Link } from "carbon-components-react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";
import { useHistory } from "react-router-dom";

import API from "../../helpers/api";
import toast from "../../helpers/toast";

import styles from "./add-room.module.scss";

const AddRoom = (props) => {
  const { control, handleSubmit, setError } = useForm({
    mode: "all",
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  const [errors, setErrors] = useState({
    location: { message: "" },
    scheduleDate: { message: "" },
    description: { message: "" },
  });

  const isEmpty = (value) => {
    if (validator.isEmpty(value || "")) return "Information is required";
    return true;
  };

  const createRoom = (values) => {
    API.post("/rooms", { room: values }).then((resp) => {
      toast.success("Room created , waiting for others");
    });
  };

  return (
    <div className={styles.container}>
      <p>Create Room</p>
      <div className={styles.box}>
        <div className={`${styles.input} bx--row`}>
          <Controller
            name="scheduleDate"
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
                invalidText={errors ? errors.scheduleDate.message : ""}
                invalid={errors ? !!errors.scheduleDate : false}
              />
            )}
          />
        </div>{" "}
        <div className={`${styles.input} bx--row`}>
          <Controller
            name="location"
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
                invalidText={errors ? errors.location.message : ""}
                invalid={errors ? !!errors.location : false}
              />
            )}
          />
        </div>{" "}
        <div className={`${styles.input} bx--row`}>
          <Controller
            name="password"
            defaultValue=""
            rules={{ required: isEmpty() }}
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                type="description"
                onChange={onChange}
                id="login_password"
                placeholder="Password ..."
                size="lg"
                labelText=""
                invalidText={errors ? errors.description.message : ""}
                invalid={errors ? !!errors.description : false}
              />
            )}
          />
        </div>{" "}
      </div>
      <div className={styles.button}>
        <Button
          onClick={handleSubmit(createRoom())}
          kind="secondary"
          isExpressive
        >
          Start Room
        </Button>
      </div>
    </div>
  );
};

export default AddRoom;
