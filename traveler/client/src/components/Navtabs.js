import React from "react";
import { Link } from "react-router-dom";

const Navtabs = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/Home">
      <span className="navbar-brand">Travelo</span>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/Cities">
            <span className="nav-link">
              My Profile <span className="sr-only">(current)</span>
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/Trips">
            <span
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              My Trips
            </span>
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navtabs;
