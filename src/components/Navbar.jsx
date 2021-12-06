import React from "react";

import logo from "../logo.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Local CSS
import "../App.css";
// React Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        {/* eslint-disable-next-line */}
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} className="nav-bar-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" aria-current="page" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" aria-current="page" href="#">
                How I work
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" aria-current="page" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" href="#">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
