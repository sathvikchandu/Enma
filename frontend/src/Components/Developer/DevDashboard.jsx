import React from "react";
import { useNavigate } from "react-router-dom";
import "./DevDashboard.css";
function DevDashboard() {
  const navigate = useNavigate();
  return (
    <div className="review_body">
      <div class="navBar">
        <ul className="header_ul">
          <li>
            <div className="header_li">
            <button className="btn p-0 text-light" onClick={() => navigate("/devdashboard")}
>Home</button>            </div>
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
          <div className="header_li">
                <button onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/whoru");
                }}> Signout</button>
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
              <button onClick={()=> navigate("/devprofile")}>Profile</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="manager_container">
        <div className="client_number">
          <h1>Assign Status:</h1>
          <br />
          <h3>Assigned</h3>
        </div>
        <div className="client_number">
          <h1>Projects Contribution:</h1>
          <br />
          <h2>5</h2>
          <button className="btn btn-primary request_btn">Review</button>
        </div>
        <div className="client_number projects">
          <h3>Current projects:</h3>
          <div className="projects_content">
            <h1>5</h1>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/devprojects")}
            >
              review
            </button>
          </div>
          <h3>Overall Progress:</h3>
          <br />
          <div class="progress">
            <div
              class="progress-bar w-25"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevDashboard;