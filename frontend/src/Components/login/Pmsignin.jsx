import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import ManagerDashboard from "../Project_Manager/ManagerDashboard";

function Pmsignin() {
  const navigate = useNavigate();
  const url = "http://localhost:8000/user/pm";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [signindata, setsignindata] = useState([{}])

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log("hello");
      
      if (res.data.status==='ok'){
        setsignindata(res.data.data);
        alert("Login Successful");
        localStorage.setItem("user", JSON.stringify(res.data.data));
        <ManagerDashboard data={res.data.data} />
        navigate("/managerdashboard");
      }
      else{
        alert("Login Failed, check your credentials");
        navigate("/Whoru");
      }

    });
  }
  

  return (
    <div className="signin_page">
      <button className="btn_nav" onClick={() => navigate("/")}>
        Home
      </button>
      <div className="signin_title">
        <h1>Sign-In</h1>
      </div>
      <form onSubmit={(e) => submit(e)}>
        <div className="signin_container">
          <div className="select m-2">
            <select
              className="form-select select-form"
              aria-label="Default select example"
            >
              <option selected>Project Manager</option>
              
            </select>
          </div>
          <div className="signin_inputs">
            <div className="signin_fields m-4">
              <label>email</label>
              <input
                onChange={(e) => handle(e)}
                id="email"
                value={data.email}
                placeholder="Enter email"
                type="text"
                className="m-3 mt-0"
              />
              <label>Password</label>
              <input
                onChange={(e) => handle(e)}
                id="password"
                value={data.password}
                placeholder="Enter Password"
                type="password"
                className="m-3 mt-0"
              />
              <button
                type="submit"
                class="btn btn-primary submit w-25 m-0 mt-3"
              >
                Submit
              </button>
              
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Pmsignin;