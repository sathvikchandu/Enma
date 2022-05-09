import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Devsignin() {
  const navigate = useNavigate();
  const [Signindata, setSignindata] = useState([{}])
  const url = "http://localhost:8000/user/developer";
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  

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
        setSignindata(res.data.data);
        console.log(res.data.data);
        navigate("/devdashboard");
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
              <option selected>Developer</option>
              
            </select>
          </div>
          <div className="select m-2">
            
          </div>
          <div className="signin_inputs">
            <div className="signin_fields m-4">
              <label>Email</label>
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

export default Devsignin;
