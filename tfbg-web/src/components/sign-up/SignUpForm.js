import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../login-register.css";

const SignUpForm = (prop) => {
  const [fields, setFields] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    name: { value: "", error: "" },
    hasAgreed: { value: Boolean, error: "" },
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
      <form className="formFields" onSubmit={handleSubmit}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your full name"
            name="name"
            value={fields.name.value}
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
            placeholder="Enter your password"
            name="password"
            value={fields.password.value}
            onChange={handleChange}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={fields.email.value}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formFieldCheckboxLabel">
            <input
              className="formFieldCheckbox"
              type="checkbox"
              name="hasAgreed"
              value={fields.hasAgreed.hasAgreed}
              onChange={handleChange}
            />{" "}
            I agree all statements in{" "}
            <a href="null" className="formFieldTermsLink">
              terms of service
            </a>
          </label>
        </div>

        <div className="formField">
          <button className="formFieldButton">Sign Up</button>{" "}
          <Link to="/login" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
