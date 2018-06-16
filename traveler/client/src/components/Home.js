import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navtabs from "./NavtabsHome";
const styles = {
  root: {
    backgroundImage:
      "url(https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif)",
    backgroundSize: "cover",
    overflow: "hidden",
    height: "798px",
    marginTop: "-40px",
    textAlign: "center",
    width: "100%"
  },
  button1: {
    width: "220px",
    height: "60px",
    marginRight: "50px",
    fontSize: "30px",
    color: "white"
  },
  button2: {
    height: "60px",
    fontSize: "30px",
    width: "220px"
  },
  color: {
    color: "white",
    textDecoration: "none"
  },
  inspiration: {
    color: "black",
    marginTop: "150px",
    marginBottom: "40px",
    fontSize: "40px",
    fontWeight: "bold"
  }
};

class Home extends Component {
  render() {
    return (
      <div>
        <Navtabs />
      <div style={styles.root}>
        
        <div style={styles.inspiration}>
          {" "}
          Take solo travel to the next level with Travelo.
        </div>
        <Link to="/NewUser" style={styles.color}>
          <button style={styles.button1} className="btn btn-dark">
            Sign Up
          </button>{" "}
        </Link>
        <Link to="/SignIn" style={styles.color}>
          <button style={styles.button2} className="btn btn-dark">
            Sign In
          </button>
        </Link>
      </div>
      </div>
    );
  }
}

export default Home;
