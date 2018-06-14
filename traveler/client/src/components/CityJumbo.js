import React, { Component } from "react";
import cityPicApi from "../utils/cityPicApi";

class CityJumbo extends Component {
  state = {
    city: "raleigh",
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
    this.getCityPic(this.state.city);
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
            Raleigh
          </h1>
        </div>
      </div>
    );
  }
}

export default CityJumbo;
