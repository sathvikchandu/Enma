import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect,useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";



function Client_viewcurrproj() {
  const [data,setData]=useState([{}])
  const navigate = useNavigate();
  const res= JSON.parse(localStorage.getItem("user"))
  
  const val=res.client_id
  console.log(val)
  const handleSubmit = (e) => {

    Axios.get('http://localhost:8000/project/34').then(res=>{
      console.log(res.data)
      setData(res.data)

    })
  }
  
  return (
    <div>
      <button className="btn_nav" onClick={() => navigate("/clientdashboard")}>
        Home
      </button>
      <div className="signup_title">
        <h1>Add a new project</h1>
      </div>
      <div
        className="App mx-auto "
        style={{ width: "400px", backgroundColor: "white", marginTop: "15px" }}
      >
        <div className="signup_container mt-3">
          <div className="signup_inputs">
            <div className="add_project_inputs m-3 mb-0 w-50 add_project_container"></div>
            <h3>Click on the button to get the current project details</h3>
            <button onClick={handleSubmit}>here</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Client_viewcurrproj