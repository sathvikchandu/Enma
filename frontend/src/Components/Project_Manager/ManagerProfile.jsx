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
        className="App mx-auto"
        style={{ width: "400px", backgroundColor: "white", marginTop: "15px" }}
      >
        <div className="signup_container">
          <div className="signup_inputs">
            <div className="add_project_inputs m-3 mb-0 w-50 add_project_container"></div>
            <label>Username</label>
            <input type="text" class="form-control w-50 m-0" placeholder={res.username} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            <br />
            <label>E-mail</label>
            <input type="text" class="form-control w-50 m-0" placeholder={res.email} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            <br />
            <label>Companny</label>
            <input type="text" class="form-control w-50 m-0" placeholder={res.company} aria-label="Username" aria-describedby="basic-addon1" disabled/>
           
    </div>
    </div>
    </div>
    </div>
  )
}

export default ManagerProfile