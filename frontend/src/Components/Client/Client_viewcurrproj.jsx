import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";




function Client_viewcurrproj() {
  const [data,setData]=useState([{}])
  const navigate = useNavigate();
  var Clicked=0
  const res= JSON.parse(localStorage.getItem("user"))
  
  const val=res.client_id
  console.log(val)
  const handleSubmit = (e) => {

    Axios.get('http://localhost:8000/projects-client/6').then(res=>{
      
      setData(res.data.data)
      Clicked=1
      console.log(res.data.data)
      
    })


  }
  
  return (
    <div>
      <button className="btn_nav" onClick={() => navigate("/clientdashboard")}>
        Home
      </button>
      <div className="signup_title">
        <h1>View project details</h1>
      </div>
      <div
        className="App mx-auto "
        style={{ width: "400px", backgroundColor: "white", marginTop: "15px" }}
      >
        <div className="signup_container mt-3">
          <div className="signup_inputs">
            <div className="add_project_inputs m-3 mb-0 w-50 add_project_container"></div>
            <h6>Click on the button to get the current project details</h6>
            <button onClick={handleSubmit}>here</button>
            

          </div>
          <div>

          </div>
          
        </div>
      
      </div>
      
    </div>
  )
}

export default Client_viewcurrproj