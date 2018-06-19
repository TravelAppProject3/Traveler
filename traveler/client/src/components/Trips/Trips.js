import React, { Component } from "react";
import Navtabs from "../Navtabs";
import { Link } from "react-router-dom";
import Destination from "./Destination";
import Img from "./Img";
import Headers from "./Headers";
import Li from "./Li";

class Trips extends Component {
  state = {};

  styles = {
    border: {
      padding: "30px",
      marginBottom: "40px"
    }
  };

  render() {
    return (
      <div>
        <Navtabs />

        <div className="container">
          <div style={this.styles.border}>
            <Destination />
            <Img />
            <Headers />
            <Li />
            
          </div>
        </div>
      </div>
    );
  }
}

export default Trips;
