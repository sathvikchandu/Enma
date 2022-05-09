import React from "react";
import { useNavigate } from "react-router-dom";
import Devsignin from "../login/Devsignin";
function DevDashboard() {
  const navigate = useNavigate();
  console.log(Signindata)
  return (
    <div className="review_body">
       <div className="General-navbar">
       <div className="navbar-internal">
            <ul className='navbar-ul'>
              <li className='navbar-li'><button className='btn_nav'>Home</button></li>                         
              <li className='navbar-li'><button className='btn_nav'>About us</button></li>
              
              <li className='navbar-li'><button className='btn_nav'>Contact us</button></li>
              <div className="nav_btn">

                  <button className="btn_nav" onClick={()=> navigate('/signup_support')}>SignOut</button>

              </div>
              

            </ul>
            

        </div>      
      </div>

      <div className="dev_body">
        
      </div>
    </div>
  );
}

export default DevDashboard;