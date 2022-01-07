import React, { useState } from "react";
//import "./../../App.css";
import "./../login-register.css";

const LoginForm = (prop) => {
  const [fields, setFields] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const handleChange = (event) => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    setFields({
      ...fields,
      [name]: { value, error: "" },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
  };

  return (
    <div className="formCenter">
      <form className="formField" onSubmit={handleSubmit}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email..."
            name="email"
            value={fields.email.value}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password..."
            name="password"
            value={fields.password.value}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton">Login</button>{" "}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
