import React from 'react'
import {useNavigate} from 'react-router-dom'
function Whoru() {
    const navigate = useNavigate()
  return (
      
    <div>
      <button className="btn_nav" onClick={() => navigate("/")}>
        Home
      </button>
        <div className="signin_title">
        <h1>Please select your role</h1>
        </div>
        <div className="signin_container">
          <div className="signin_inputs">
        <button className='btn btn-success w-50 m-0' style={{"width":"100px","height":"70px"}} onClick={() => navigate('/signin')}>Click here to signin as Client</button>
        <br />
        <button className='btn btn-success w-50 m-0' style={{"width":"100px","height":"70px"}} onClick={() => navigate('/pmsignin')}>Click here to signin as Project Manager</button>
        <br />
        <button className='btn btn-success w-50 m-0' style={{"width":"100px","height":"70px"}} onClick={() => navigate('/devsignin')}>Click here to signin as Developer</button>
        </div>
        </div>
    </div>
  )
}

export default Whoru