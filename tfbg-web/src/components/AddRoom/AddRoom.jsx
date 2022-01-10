import React, { useState } from "react";

import logo from "../../files/logo.png";

import { TextInput, Button } from "carbon-components-react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";

import API from "../../helpers/api";
import toast from "../../helpers/toast";

import styles from "./add-room.module.scss";

const AddRoom = (props) => {
  const { control, handleSubmit } = useForm({
    mode: "all",
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  const [errors, setErrors] = useState({
    location: { message: "" },
    scheduleDate: { message: "" },
    description: { message: "" },
    hour: { message: "" },
  });

  const isEmpty = (value) => {
    if (validator.isEmpty(value || "")) return "Information is required";
    return true;
  };

  const createRoom = (values) => {
    API.post("/rooms", {
      room: {
        ...values,
        user: localStorage.getItem("user"),
        game: props.match.params.GAME,
      },
    }).then((resp) => {
      toast.success("Room created , waiting for others");
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Create a Room</p>
      <div className={styles.box}>
        <div className={`bx--row`}>
          <Controller
            name="scheduleDate"
            defaultValue=""
            rules={{
              required: isEmpty(),
            }}
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                onChange={onChange}
                id="add-date"
                placeholder="Date ..."
                size="lg"
                labelText=""
                invalidText={
                  errors.scheduleDate ? errors.scheduleDate.message : ""
                }
                invalid={
                  errors.scheduleDate ? !!errors.scheduleDate.message : false
                }
              />
            )}
          />
        </div>{" "}
        <div className={`${styles.input} bx--row`}>
          <Controller
            name="hour"
            defaultValue=""
            rules={{
              required: isEmpty(),
            }}
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                onChange={onChange}
                id="add-hour"
                placeholder="Hour ..."
                size="lg"
                labelText=""
                invalidText={errors.hour ? errors.hour.message : ""}
                invalid={errors.hour ? !!errors.hour.message : false}
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
                onChange={onChange}
                id="add-location"
                placeholder="Location ..."
                size="lg"
                labelText=""
                invalidText={errors.location ? errors.location.message : ""}
                invalid={errors.location ? !!errors.location.message : false}
              />
            )}
          />
        </div>{" "}
        <div className={`${styles.input} bx--row`}>
          <Controller
            name="description"
            defaultValue=""
            rules={{ required: isEmpty() }}
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                type="description"
                onChange={onChange}
                id="add-description"
                placeholder="Description ..."
                size="lg"
                labelText=""
                invalidText={
                  errors.description ? errors.description.message : ""
                }
                invalid={
                  errors.description ? !!errors.description.message : false
                }
              />
            )}
          />
        </div>{" "}
      </div>
      <div className={styles.button}>
        <Button
          onClick={handleSubmit(createRoom, (err) => {
            setErrors(err);
          })}
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
