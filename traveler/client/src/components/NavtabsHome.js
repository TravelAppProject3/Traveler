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
  </nav>
);

export default Navtabs;