import React, { Component } from "react";
import cityPicApi from "../utils/cityPicApi";

class CityJumbo extends Component {
  state = {
    city: "San Francisco",
    cityPic: ""
  };

  styles = {
    background: {
      backgroundImage: `url(${this.state.cityPic})`
    },
    cityText: {
      color: "white",
      fontSize: 100,
      textShadow: "4px 4px black"
    }
  };

  componentDidMount() {
    const city = this.state.city;
    let cityLower = city.toLowerCase();
    if (cityLower === "san francisco") {
      cityLower = "san francisco bay area";
    } else if (cityLower === "wasington, d.c.") {
      cityLower = "washington d.c.";
    }
    const cityDashes = cityLower.replace(/\s+/g, "-");

    this.getCityPic(cityDashes);
  }

  getCityPic = city => {
    cityPicApi
      .cityPic(city)
      .then(data => this.setState({ cityPic: data.data.photos[0].image.web }))
      .then(console.log(this.state.cityPic))
      .catch(err => console.log(err));
  };

  render() {
    const imgStyle = { backgroundImage: `url(${this.state.cityPic})` };
    return (
      <div className="jumbotron jumbotron-fluid" style={imgStyle}>
        <div className="container">
          <h1 className="display-4 text-center" style={this.styles.cityText}>
            {this.state.city}
          </h1>
        </div>
      </div>
    );
  }
}

export default CityJumbo;