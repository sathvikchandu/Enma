import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Client_newproject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const res= JSON.parse(localStorage.getItem("user"))

  const handleSubmit = (e) => {
    Axios.post("http://localhost:8000/project_create", {
      name: title,
      description: description,
      client_id: res.id,
      
      
    });
  };

  return (
    <div>
      <button className="btn_nav" onClick={() => navigate("/clientdashboard")}>
        Home
      </button>
      <div className="signup_title">
        <h1>Add a new project</h1>
      </div>
      <div
        className="App mx-auto "
        style={{ width: "400px", backgroundColor: "white", marginTop: "15px" }}
      >
        <div className="signup_container mt-3">
          <div className="signup_inputs">
            <div className="add_project_inputs m-3 mb-0 w-50 add_project_container">
              <input
                className="form-control titleIn mx-0"
                placeholder="Enter the project title"
                onChange={(event) => setTitle(event.target.value)}
              />

              <textarea
                type="textArea"
                className="mb-2 form-control desIn"
                placeholder="Enter the project Description"
                style={{ height: "150px" }}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>

              <button
                className="btn btn-primary mx-2 mb-3"
                style={{ borderRadius: "50px", fontWeight: "bold" }}
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client_newproject;
