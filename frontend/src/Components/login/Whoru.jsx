import React from 'react'
import {useNavigate} from 'react-router-dom'
function Whoru() {
    const navigate = useNavigate()
  return (
      
    <div>
        <h1>Who r u?</h1>
        <button style={{"width":"100px","height":"70px"}} onClick={() => navigate('/signin')}>Client</button>
        <button style={{"width":"100px","height":"70px"}} onClick={() => navigate('/pmsignin')}>Project Manager</button>
        <button style={{"width":"100px","height":"70px"}} onClick={() => navigate('/devsignin')}>Developer</button>
    </div>
  )
}

export default Whoru