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
              <p>Home</p>
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
            <span>
              <button
                className="dev_btn position-relative"
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
              <button onClick={()=>navigate("/managerprofile")}>Profile</button>
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