import React from "react";
import { Link } from "react-router-dom";

const styles = {
  color: {
    color: "white",
    textDecoration: "none",
    float: "right",
    marginRight: "10px"
  },
  height: {
    padding: "15px",
    fontSize: "24px"
  },
  logo: {
    fontSize: "30px"
  }
};

const Navtabs = () => (
  <nav
    style={styles.height}
    className="navbar navbar-expand-lg navbar-dark bg-dark"
  >
    <Link to="/Home">
      <span style={styles.logo} className="navbar-brand">
        Travelo
      </span>
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
    <div
      className="collapse navbar-collapse"
      id="navbarNavDropdown"
      style={styles.color}
    >
      <ul className="navbar-nav" style={styles.color}>
        <li className="nav-item active" style={styles.color}>
          <Link to="/Cities" style={styles.color}>
            <span className="nav-link" style={styles.color}>
              My Profile <span className="sr-only">(current)</span>
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/Trips" style={styles.color}>
            <span
              className="nav-link dropdown-toggle"
              style={styles.color}
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
            <Link to="/Cities" style={styles.color}>
              <a className="dropdown-item" href="#">
                My Profile
              </a>
            </Link>
            <Link to="/Trips" style={styles.color}>
              <a className="dropdown-item">My Trips</a>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navtabs;
