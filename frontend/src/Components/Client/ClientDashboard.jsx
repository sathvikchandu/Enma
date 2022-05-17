import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

function ClientDashboard() {
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <div className="navBar">
          <ul className="header_ul">
            <li>
              <div className="header_li">
              <button className="btn p-0 text-light" onClick={() => navigate("/clientdashboard")}
>Home</button>
              </div>
            </li>
            <li>
              <div className="header_li">
                <p>About</p>
              </div>
            </li>
            
            <li>
              <div className="header_li">
                <p>Contact Us</p>
              </div>
            </li>
            <li>
              <div className="header_li p-0">
              
             
                <button className="btn m-0 text-light" onClick={()=>{
                  navigate("/clientviewprofile")
                }}>Profile</button>
              </div>
            </li>
            <li>
              <div className="header_li p-0">
                <button className="btn m-0 text-light" onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/whoru");
                }}> Signout</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="body">
          <div className="content">
            <div className="dummy_heading">
              <h1>You can submit your new project! </h1>
              <button
                className="nav_btn client_btn w-auto p-2"
                onClick={() => navigate("/client_newproject")}
              >
                Add a new project
              </button>
            </div>
            <p className="dummy">
              You can add your project here
            </p>
          </div>
          <div className="content">
            <div className="dummy_heading">
              <h1>You can review your project! </h1>
              <button
                className="nav_btn client_btn w-auto p-2"
                onClick={() => navigate("/client_viewcurrproj")}
              >
                Review your project
              </button>
            </div>
            <p className="dummy">
              You can review your project here
            </p>
          </div>
          <div className="content">
            <div className="dummy_heading">
              <h1>You can view your previous projects! </h1>
              <button
                className="nav_btn client_btn w-auto p-2"
                onClick={() => navigate("/client_viewpastproj")}
              >
                Projects history
              </button>
            </div>
            <p className="dummy">
              You can view your projects history here
            </p>
          </div>
        </div>
        {/* <div className="App">
          <button
            className="mx-0"
            style={{ width: "300px", marginBottom: "10px" }}
            onClick={() => navigate("/client_newproject")}
          >
            Create a new project
          </button>

          <button
            className="mx-0"
            style={{ width: "300px", marginBottom: "10px" }}
            onClick={() => navigate("/client_viewcurrproj")}
          >
            View your current projects
          </button>
          <button
            className="mx-0"
            style={{ width: "300px", marginBottom: "10px" }}
            onClick={() => navigate("/client_viewpastproj")}
          >
            View past projects
          </button>
        </div> */}
      </div>
    </>
  );
}

export default ClientDashboard;
