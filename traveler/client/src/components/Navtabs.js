// import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import {OverlayTrigger, Popover} from "react-bootstrap";
import { InputTrip, FormBtn } from "./Form";
let userId = localStorage.getItem("userId");


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
    // marginRight: "10px"
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
    fontWeight: "bold",
    textDecoration: "none",
    color: "black"
  },
  dropNav: {
    marginTop: "5px"
  },
  newTrip: {
    marginTop: "8px",
    // marginLeft: "-8px"
    marginRight: "10px",
    marginLeft: "10px",
    cursor: "pointer"
  }
};

class Navtabs extends Component {
  

  state = {
    trips: [],
    newTrip: "",
  };

  componentDidMount() {
    axios
      .get("/api/trips/getUserTrips/" + userId)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
      axios
      .post("api/trips/new/", {
        tripUser: userId,
        tripName: this.state.newTrip
      })
      .then(function(response) {
        // console.log(response);
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  };


  renderPopupForm = () => (
      <form>
              <InputTrip
                value={this.state.newTrip}
                onChange={this.handleInputChange.bind(this)}
                name="newTrip"
                // placeholder="Title (required)"
              />
              <FormBtn
                // disabled={!(this.state.newTrip)}
                onClick={this.handleFormSubmit}
              >
              </FormBtn>
            </form>

  )

  render() {
    console.log(this.state)
    return (
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
              <Link to="/Profile" style={styles.color}>
                <span className="nav-link" style={styles.color}>
                  My Profile <span className="sr-only">(current)</span>
                </span>
              </Link>
            </li>

            <li className="nav-item active" style={styles.color}>
              {/* <Link to="/Profile" style={styles.color}> */}
              <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="popover-trigger-click">{this.renderPopupForm()}</Popover>}>
                <span className="nav-link" style={styles.newTrip}>
                  New Trip <span className="sr-only">(current)</span>
                </span>
              {/* </Link> */}
              </OverlayTrigger>
            </li>

            <li style={styles.dropNav} className="nav-item dropdown">
              <a
                style={styles.color}
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My Trips
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/Trips">
                  <a style={styles.dropDown} className="dropdown-item" href="#">
                    Trip 1
                  </a>
                </Link>
                <Link to="/Trips">
                  <a style={styles.dropDown} className="dropdown-item" href="#">
                    Trip 2
                  </a>
                </Link>
              </div>
            </li>

            {/* <li className="nav-item dropdown">
              
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/Profile" style={styles.color}>
                  <a className="dropdown-item" href="#">
                    My Profile
                  </a>
                </Link>
                <Link to="/Trips" style={styles.color}>
                  <a className="dropdown-item">My Trips</a>
                </Link>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navtabs;
