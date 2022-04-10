import React, { useState } from "react";
import contStyle from "../component/css/Contact.module.css";
import NavBar from "./Navbar";
import api from "../api/contact"; // axios
import { v4 as uuidv4 } from "uuid";

export default function Contact() {
  // Form Validation
  const initialFormValue = { name: "", mobile: "", email: "", query: "" };
  const [formValues, setformValues] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    let [name, value] = [e.target.name, e.target.value];
    setformValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const formApi = async () => {
    const request = {
      id: uuidv4(),
      ...formValues,
    };
    await api.post("/testing", request);
    // console.log("Form Submitted.....");
    handleReset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };
  const handleReset = () => {
    setformValues({ name: "", mobile: "", email: "", query: "" });
    setFormErrors({});
    // console.clear();
  };
  const enterKeyHandle = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const validate = (value) => {
    const errors = {};
    parseInt(value.mobile);
    const emailpattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!value.name) {
      errors.name = "Name is required!";
    }
    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!emailpattern.test(value.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!value.mobile) {
      errors.mobile = "Mobile No. is required!";
    } else if (value.mobile) {
    }
    if (!value.query) {
      errors.query = "Please type your query!";
    }
    if (Object.keys(errors).length === 0) {
      formApi();
      // console.log("form api call");
    }
    return errors;
  };

  return (
    <div className={`${contStyle.contactDiv}`}>
      <NavBar />
      <div className={`${contStyle.formDiv} container-fluid`}>
        <h1>Contact Form</h1>
        <div className={`${contStyle.colCenter} `}>
          <form
            onReset={handleReset}
            onSubmit={handleSubmit}
            onKeyDown={enterKeyHandle}
            action="/testing"
            method="get"
            className={`${contStyle.form}`}
          >
            <label htmlFor="name">Name:</label>
            <input
              className={`${contStyle.inputField}`}
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              placeholder="Enter Your Name..."
              onChange={handleChange}
            />
            <p className={`${contStyle.errorMsg}`}>{formErrors.name}</p>

            <label htmlFor="mobile">Mob no:</label>

            <input
              className={`${contStyle.inputField}`}
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Enter Your Number..."
              value={formValues.mobile}
              onChange={handleChange}
            />
            <p className={`${contStyle.errorMsg}`}>{formErrors.mobile}</p>

            <label htmlFor="email">Email:</label>
            <input
              className={`${contStyle.inputField}`}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your Email..."
              value={formValues.email}
              onChange={handleChange}
            />
            <p className={`${contStyle.errorMsg}`}>{formErrors.email}</p>

            <label htmlFor="query">Query:</label>
            <textarea
              className={`${contStyle.inputField}`}
              name="query"
              id="query"
              cols="30"
              rows="5"
              placeholder="Type your query......"
              value={formValues.query}
              onChange={handleChange}
            ></textarea>
            <p className={`${contStyle.errorMsg}`}>{formErrors.query}</p>

            <div
              style={{ clear: "both" }}
              className={`d-flex flex-row justify-content-center align-item-center `}
            >
              <input
                className={`btn-warning p-2 m-2 ${contStyle.btnWarning}`}
                type="submit"
                value="Submit"
              />
              <input
                className={`btn-warning p-2 m-2 ${contStyle.btnWarning}`}
                type="reset"
                value="Reset"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
