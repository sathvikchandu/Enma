import React from 'react'
import {useNavigate} from 'react-router-dom'
function ManagerProfile() {
    const navigate = useNavigate()
    const res=JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <button className="btn_nav" onClick={() => navigate("/devdashboard")}>
        Home
      </button>
      <div className="signup_title">
        <h1>Profile</h1>

      </div>
      <div
        className="App mx-auto "
        style={{ width: "400px", backgroundColor: "white", marginTop: "15px" }}
      >
        <div className="signup_container mt-3">
          <div className="signup_inputs">
            <div className="add_project_inputs m-3 mb-0 w-50 add_project_container"></div>
            <h3>ID:            {res.id}</h3>
            <h3>User Name:     {res.username}</h3>
            <h3>Email:         {res.email}</h3>
            <h3>company:       {res.company}</h3>
           
    </div>
    </div>
    </div>
    </div>
  )
}

export default ManagerProfile