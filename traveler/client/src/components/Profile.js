import React, { Component } from "react";
import Navtabs from "./Navtabs.js";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {};

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
    //   paddingLeft: "150px",
      fontSize: "30px",
    //   borderBottom: "solid 1px black",
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
        paddingTop: "100px",
        // border: "solid 1px black"
        paddingLeft: "200px"
        // textAlign: "center"
    },
    span: {
        marginRight: "40px"
    }
  };

  render() {
    return (
      <div>
        <Navtabs />
        <div style={this.styles.body}>
          <div style={this.styles.container} className="container">
            <div id="row">
                <div class="col-md-4">
                    <img style={this.styles.img} src="https://www.communities.bendigobank.com.au/__data/assets/image/0018/12726/Default-Profile.png"></img>
                </div>
                <div style={this.styles.text} className="col-md-8">
                
                    <span style={this.styles.span}>User:</span> Richard Holme
                
                </div>
                <div style={this.styles.text} className="col-md-8">
                    <span style={this.styles.span}>Email:</span> rchrd@email.com
                </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Profile;