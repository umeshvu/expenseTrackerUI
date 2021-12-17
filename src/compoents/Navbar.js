import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          Track financial activities
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li
              className={
                splitLocation[1] === "home" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "add-activity"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/add-activity">
                Add New Financial Activity
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "list-activities"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/list-activities">
                List Financial Activities
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
