import React, { Component } from "react";
import cityPicApi from "../utils/cityPicApi";
import CityJumbo from "./CityJumbo";
import Hotels from "./Hotels";
import Navtabs from "./Navtabs";

class Cities extends Component {
  state = {
    city: "raleigh",
    cityPic: ""
  };

  styles = {
    card: {
      width: "maxWidth: 18rem",
      height: "200px",
      margin: 30
    },
    hotelIcon: {
      position: "absolute",
      left: 160
    },
    cameraIcon: {
      position: "absolute",
      left: 145
    },
    beerIcon: {
      position: "absolute",
      left: 175
    },
    city: {
      backgroundImage: `url(${this.state.cityPic})`
    }
  };

  render() {
    return (
      <div>
        <Navtabs />
        <CityJumbo />

        <div className="row justify-content-center">
          <div
            className="card text-white bg-dark mb-3 col-md-3 col-lg-3 col-sm-12"
            style={this.styles.card}
          >
            <div className="card-body">
              <h5 className="card-title text-center">Lodging</h5>
              <p className="card-text text-center">
                Hotel, Motel, Hostels & Inns
              </p>
              <i
                className="fas fa-h-square fa-5x"
                style={this.styles.hotelIcon}
              />
            </div>
          </div>

          <div
            className="card text-white bg-dark mb-3 col-md-3 col-lg-3 col-sm-12"
            style={this.styles.card}
          >
            <div className="card-body">
              <h5 className="card-title text-center">Sights & Sounds</h5>
              <p className="card-text text-center">Go Ahead, Be a Tourist</p>
              <i
                className="fas fa-camera-retro fa-5x col-lg-12 col-md-12"
                style={this.styles.cameraIcon}
              />
            </div>
          </div>

          <div
            className="card text-white bg-dark mb-3 col-md-3 col-lg-3 col-sm-12"
            style={this.styles.card}
          >
            <div className="card-body">
              <h5 className="card-title text-center">Eat, Drink, Do</h5>
              <p className="card-text text-center">Live It Up Like a Local</p>
              <i className="fas fa-beer fa-5x" style={this.styles.beerIcon} />
            </div>
          </div>
        </div>
        <Hotels />
      </div>
    );
  }
}

export default Cities;
