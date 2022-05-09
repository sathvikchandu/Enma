import React from "react";
import { useNavigate } from "react-router-dom";

function DeveloperProjects() {
  const navigate = useNavigate();
  return (
    <div className="projects_review_body">
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
              <p>Profile</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="cards p-5">
        <div className="card m-3 ">
          <div class="card-body w-auto">
            <h5 class="card-title">Project-1</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="review_btns">
              <button class="btn btn-primary w-auto m-0" type="button">
                Check status
              </button>
              <button class="btn btn-primary w-auto m-0" type="button">
                Update status
              </button>
            </div>
          </div>
        </div>
        <div className="card m-3">
          <div class="card-body w-auto">
            <h5 class="card-title">Project-2</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="review_btns">
              <button class="btn btn-primary w-auto m-0" type="button">
                Check status
              </button>
              <button class="btn btn-primary w-auto m-0" type="button">
                Update status
              </button>
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown button
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>Action</li>
                      <li>Another action</li>
                      <li>Something else here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-3">
          <div class="card-body w-auto">
            <h5 class="card-title">Project-3</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="review_btns">
              <button class="btn btn-primary w-auto m-0" type="button">
                Check status
              </button>
              <button class="btn btn-primary w-auto m-0" type="button">
                Update status
              </button>
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown button
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>Action</li>
                      <li>Another action</li>
                      <li>Something else here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-3">
          <div class="card-body w-auto">
            <h5 class="card-title">Project-4</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="review_btns">
              <button class="btn btn-primary w-auto m-0 " type="button">
                Check status
              </button>
              <button class="btn btn-primary w-auto m-0" type="button">
                Update status
              </button>
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown button
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>Action</li>
                      <li>Another action</li>
                      <li>Something else here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-3">
          <div class="card-body w-auto">
            <h5 class="card-title">Project-5</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="review_btns">
              <button class="btn btn-primary w-auto m-0" type="button">
                Check status
              </button>
              <button class="btn btn-primary w-auto m-0" type="button">
                Update status
              </button>
            </div>
            <div>
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown button
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>Action</li>
                      <li>Another action</li>
                      <li>Something else here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeveloperProjects;