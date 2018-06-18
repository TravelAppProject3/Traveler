import React, { Component } from "react";
import {
  restaurant,
  getEvents,
  getHotels,
  museum,
  landmarks,
  active,
  weather
} from "../utils/API";
import CityJumbo from "./CityJumbo";
import Hotels from "./Hotels";
import Navtabs from "./Navtabs";
import Sights from "./Sights";

class Cities extends Component {
  state = {
    city: "Raleigh",
    cityPic: "",
    lat: "",
    lon: "",
    hotelObj: [],
    museumObj: [],
    landmarkObj: [],
    activeObj: []
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

  componentDidMount() {
    const city = this.state.city;
    weather(city)
      .then(data =>
        this.setState({ lat: data.data.coord.lat, lon: data.data.coord.lon })
      )
      .then(console.log(this.state))
      .catch(err => console.log("error:  " + err));
  }

  getSights = () => {
    console.log("click seen");
    document.getElementsByClassName("hotelsDiv").innerHTML = "";
    document.getElementsByClassName("drinksDiv").innerHTML = "";

    const lat = this.state.lat;
    const lon = this.state.lon;

    museum(lat, lon)
      .then(data => this.setState({ museumObj: data.data.results }))
      .catch(err => console.log(err));

    landmarks(lat, lon)
      .then(data =>
        this.setState({ landmarkObj: data.data.Response.View[0].Result })
      )
      .catch(err => console.log(err));

    active(lat, lon)
      .then(data => this.setState({ activeObj: data.data.results }))
      .catch(err => console.log(err));

    this.renderSights();
  };

  getHotels = () => {
    document.getElementsByClassName("hotelsDiv").innerHTML = "";
    document.getElementsByClassName("sightsDiv").innerHTML = "";
    document.getElementsByClassName("drinksDiv").innerHTML = "";

    console.log("click worked");
    const lat = this.state.lat;
    const lon = this.state.lon;

    getHotels(lat, lon)
      .then(data => this.setState({ hotelObj: data.data.results }))
      .then(console.log(this.state.hotelObj))
      .catch(err => console.log(err));
  };

  renderSights = (museumObj, landmarkObj, activeObj) => {
    // console.log("Museum Obj:  " + JSON.stringify(museumObj));
    return (
      <Sights museum={museumObj} landmark={landmarkObj} active={activeObj} />
    );
  };

  renderHotels = hotelObj => {
    return (
      <div>
        {hotelObj.map(hotel => {
          let href;
          hotel.photos
            ? (href = hotel.photos[0].html_attributions[0])
            : "no photo";
          const thisHref = href
            ? href.match(/\".*\"/)[0].replace(/\"/g, "")
            : null;
          return (
            <Hotels
              icon={hotel.icon}
              name={hotel.name}
              address={hotel.vicinity}
              rating={hotel.rating}
              key={hotel.id}
              photo={thisHref}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Navtabs />
        <CityJumbo city={this.state.city} />

        {/* Museum Card */}
        <div className="row justify-content-center">
          <div
            className="card text-white bg-dark mb-3 col-md-3 col-lg-3 col-sm-12 hotelCard"
            style={this.styles.card}
            onClick={() => this.getHotels(this.state.lat, this.state.lon)}
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

          {/* Sights Card */}
          <div
            className="card text-white bg-dark mb-3 col-md-3 col-lg-3 col-sm-12 sightsCard"
            style={this.styles.card}
            onClick={() => this.getSights(this.state.lat, this.state.lon)}
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

          {/* Drinks Card */}
          <div
            className="card text-white bg-dark mb-3 col-md-3 col-lg-3 col-sm-12 drinkCard"
            style={this.styles.card}
          >
            <div className="card-body">
              <h5 className="card-title text-center">Eat, Drink, Do</h5>
              <p className="card-text text-center">Live It Up Like a Local</p>
              <i className="fas fa-beer fa-5x" style={this.styles.beerIcon} />
            </div>
          </div>
        </div>
        <div className="hotelsDiv">
          {this.renderHotels(this.state.hotelObj)}
        </div>
        <div className="sightsDiv">
          {this.state.museumObj.length !== 0
            ? this.renderSights(
                this.state.museumObj,
                this.state.landmarkObj,
                this.state.activeObj
              )
            : " "}
        </div>
        {/* <div className="drinksDiv">{this.renderDrinks}</div> */}
      </div>
    );
  }
}

export default Cities;
