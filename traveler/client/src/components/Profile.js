import React, { Component } from "react";
import Navtabs from "./Navtabs.js";
import { Link } from "react-router-dom";
import axios from "axios";
let userId = localStorage.getItem("userId");
let username = localStorage.getItem("userName");

let email = localStorage.getItem("email");
console.log(thumbnail);
let thumbnail = localStorage.getItem("thumbnail");
thumbnail = thumbnail.slice(0, -2);
thumbnail = thumbnail + "200";

class Profile extends Component {
  state = {
    trips: []
  };

  deleteRows(idx) {
    this.setState({
      trips: this.state.trips.filter((e, i) => i !== idx)
    });
  }

  componentDidMount() {
    axios
      .get("/api/trips/getUserTrips/" + userId)
      .then(response => {
        console.log(response.data);
        this.setState({
          trips: response.data
        });
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  }

  styles = {
    form: {
      marginTop: "80px",
      width: "500px",
      height: "auto",
      display: "inline-block"
    },
    body: {
      textAlign: "center",
      backgroundSize: "cover",
      overflow: "hidden",
      height: "auto",
      marginTop: "-75px",
      textAlign: "center",
      width: "100%",
      fontSize: "20px"
    },
    text: {
      textAlign: "left",
      fontSize: "30px",
      lineHeight: "65px"
    },
    textSize: {
      fontSize: "20px",
      opacity: "10",
      color: "white"
    },
    img: {
      height: "200px",
      width: "200px",
      borderRadius: "50%",
      float: "left"
    },
    container: {
      marginTop: "110px",
      paddingTop: "50px",
      paddingBottom: "50px",
      paddingLeft: "200px",
      backgroundColor: "rgba(255, 255, 255, .8)",
      border: "1px black solid",
      borderRadius: "10px"
      // backgroundColor: "rgba(255, 255, 255, .7)";
    },
    span: {
      marginRight: "20px"
    },
    arrow: {
      fontSize: "25px"
    },
    ul: {
      listStyleType: "none"
    },
    links: {
      // fontSize: "20px",
      // fontWeight: "bold",
      // textDecoration: "none",
      color: "black"
      // textDecoration: "none"
    }
  };

  render() {
    return (
      <div>
        <Navtabs />
        <div style={this.styles.body}>
          <div style={this.styles.container} className="container">
            <div id="row">
              <div className="col-md-4">
                <img style={this.styles.img} src={thumbnail} />
              </div>
              <div style={this.styles.text} className="col-md-8">
                <div>
                  <span style={this.styles.span}>User:</span> {username}
                </div>
                <div style={this.styles.text}>
                  <span style={this.styles.span}>Email:</span> {email}
                </div>
                <div style={this.styles.text}>
                  <span>Your Trips:</span>
                  <ul style={this.styles.ul}>
                    {this.state.trips.map((trip, idx) => {
                      return (
                        <li>
                          <Link to="/Trips">
                            <li>{trip.tripName}</li>
                          </Link>
                          <button onClick={() => this.deleteRows(idx)}>
                            X
                          </button>;
                        </li>
                      );
                    })};
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
