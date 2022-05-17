import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import {useRef} from 'react'
import Axios from "axios";
import "./Signup_support.css";
import Signupform from "./Signupform";

function Signupsupport() {
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000/client/create";
  const [values, setValues] = useState({
    username: "",
    password: "",
    
    email: "",
    company:"",
  
    className: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage: "Username should be 3-10 characters long",
      placeholder: "Enter your username",
      label: "Username",
      // pattern:"^[a-zA-Z][a-zA-Z0-9]{3,15}$",
      required: true,
      className: "mb-2",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and it should include atleast 1 letter,1 number and 1 special character",
      placeholder: "Enter your password",
      // pattern:'^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      label: "Password",
      required: true,
      className: "mb-2",
    },

    {
      id: 3,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address",
      placeholder: "Enter your email",
      label: "E-mail",
      required: true,
      className: "mb-2",
    },

    {
      id: 4,
      name: "company",
      type: "text",

      placeholder: "Enter your company name",
      label: "company",

      required: true,
      className: "mb-2",
    },
  ];

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("helo2");
    Axios.post(url, {
      username: values.username,
      email: values.email,
      password: values.password,
      company: values.company,
    }).then((res) => {
      alert("signup successful");
      navigate("/signin");
    });
  };



  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="signup_page">
      <button className="btn_nav" onClick={() => navigate("/")}>
        Home
      </button>
      <div className="signup_title">
        <h1>Signup</h1>
      </div>
      <form onSubmit={handlesubmit}>
        <div className="signup_container">
          <div className="signup_inputs mx-0">
            <div className="signup_fields m-4">
              {inputs.map((input) => (
                <Signupform
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}

              <button
                type="submit"
                class="btn btn-primary submit w-25 mt-3 mx-0"
              >
                Submit
              </button>
              <div className="m-2">
                <label className="m-2">Already an user?</label>
                <button
                  type="button"
                  className="btn btn-primary p-0 mx-0"
                  onClick={() => navigate("/signin_support")}
                >
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signupsupport;
