import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManagerDashboard.css";

function ManagerDashboard() {
  const navigate = useNavigate();
  return (
    <div className="review_body">
      <div class="navBar">
        <ul className="header_ul">
          <li>
            <div className="header_li">
            <button className="btn p-0 text-light" onClick={() => navigate("/managerdashboard")}
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
            <span className="p-0">
              <button
                className=" text-light position-relative"
                onClick={() => navigate("/newprojects")}
              >
                New Projects
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span class="visually-hidden">New alerts</span>
                </span>
              </button>
            </span>
          </li>
          <li>
            <div className="header_li p-3">
              <button className="btn m-0 text-light" onClick={()=>navigate("/managerprofile")}>Profile</button>
            </div>
          </li>
          <li>
          <div className="header_li p-0">
                <button className="btn text-light m-0" onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/whoru");
                }}> Signout</button>
              </div>
          </li>
        </ul>
      </div>

      <div className="manager_container">
        <div className="client_number">
          <h3>Current Clients:</h3>
          <h1>13</h1>
        </div>
        <div className="client_number">
          <h3>Current Clients request:</h3>
          <h1>5</h1>
          <button className="btn btn-primary request_btn">Review</button>
        </div>
        <div className="client_number projects">
          <h3>Current projects:</h3>
          <div className="projects_content">
            <h1>5</h1>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/reviewprojects")}
            >
              review
            </button>
          </div>
          <h3>Overall Progress:</h3>
          <br />
          <div class="progress">
            <div
              class="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;