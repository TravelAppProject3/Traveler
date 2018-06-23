import React from "react";
import { Link } from "react-router-dom";

const styles = {
  root: {
    backgroundImage:
      "url(https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif)",
    backgroundSize: "cover",
    overflow: "hidden",
    height: "750px",
    marginTop: "-75px",
    textAlign: "center",
    width: "100%"
  },
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
  },
  dropDown: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  dropNav: {
    marginTop: "5px"
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

        <li style={styles.dropNav} class="nav-item dropdown">
          <a style={styles.color} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Trips
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/Trips"><a style={styles.dropDown} class="dropdown-item" href="#">Trip 1</a></Link>
            <Link to="/Trips"><a style={styles.dropDown} class="dropdown-item" href="#">Trip 2</a></Link>
            <div class="dropdown-divider"></div>
            <Link to="/CreateTrip"><a style={styles.dropDown} class="dropdown-item" href="#">Create A Trip</a></Link>
          </div>
        </li>

        <li className="nav-item dropdown">
          
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
