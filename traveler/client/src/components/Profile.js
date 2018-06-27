import React, { Component } from "react";
import Navtabs from "./Navtabs.js";
import { Link } from "react-router-dom";
import axios from "axios";
let userId = localStorage.getItem("userId");
let username = localStorage.getItem("userName");
// let thumbnail = localStorage.getItem("thumbnail");
// thumbnail = thumbnail.slice(0, -2);
// thumbnail = thumbnail + '200';
let email = localStorage.getItem("email");
// console.log(thumbnail);
// let thumbnail = localStorage.getItem("thumbnail");
// thumbnail = thumbnail.slice(0, -2);
// thumbnail = thumbnail.slice(0, -2);
// thumbnail = thumbnail + "200";
// console.log(thumbnail);

class Profile extends Component {
  state = {
    trips: []
  };

  componentDidMount() {
    axios
      .get("/api/trips/getUserTrips/" + userId)
      .then((response) => {
        console.log(response.data);
        this.setState({
          trips: response.data
        })
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  }

  styles = {
    form: {
      marginTop: "80px",
      width: "500px",
      height: "200px",
      display: "inline-block"
    },
    body: {
      textAlign: "center",
      backgroundImage:
        "url(https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif)",
      backgroundSize: "cover",
      overflow: "hidden",
      height: "750px",
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
      color: "black",
      // textDecoration: "none"
    },
  };

  render() {
    return (
      <div>
        <Navtabs />
        <div style={this.styles.body}>
          <div style={this.styles.container} className="container">
            <div id="row">
              <div className="col-md-4">
                <img
                  style={this.styles.img}
                  src="https://www.communities.bendigobank.com.au/__data/assets/image/0018/12726/Default-Profile.png"
                />
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
                    
                  {this.state.trips.map(trip => {
                    return (
                      // console.log(trip);
                      <Link to="/Trips">
                      {/* {console.log(trip)} */}
                        <li style={this.styles.links}>
                          {trip.tripName}
                        </li>
                      </Link>
                    );
                  })}                    
                    {/* <li>
                      <span
                      // style={this.styles.arrow}
                      // className="fa fa-angle-right"
                      />{" "}
                      - Trip 1
                    </li>
                    <li>
                      <span
                      // style={this.styles.arrow}
                      // className="fa fa-angle-right"
                      />{" "}
                      - Trip 1
                    </li> */}

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
