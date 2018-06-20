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
    activeObj: [],
    hotelClick: false,
    sightsClick: false,
    drinksClick: false
  };

  styles = {
    card: {
      width: "maxWidth: 18rem",
      height: "200px",
      margin: 30
    },
    hotelIcon: {
      position: "absolute",
      marginTop: "10px",
      left: 145
    },
    cameraIcon: {
      position: "absolute",
      marginTop: "10px",
      left: 130
    },
    beerIcon: {
      position: "absolute",
      marginTop: "10px",
      left: 155
    },
    city: {
      backgroundImage: `url(${this.state.cityPic})`
    },
    center: {
      textAlign: "center"
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
    this.setState({ sightsClick: true, hotelClick: false, drinksClick: false });

    console.log(
      "Hotels click:  " +
        this.state.hotelClick +
        "\nSights Click:  " +
        this.state.sightsClick
    );

    museum(lat, lon)
      .then(data => {
        this.setState({ museumObj: data.data.results });
        landmarks(lat, lon)
          .then(data => {
            this.setState({
              landmarkObj: data.data.Response.View[0].Result
            });
            active(lat, lon)
              .then(data => {
                this.setState({ activeObj: data.data.results });
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  getHotels = () => {
    document.getElementsByClassName("sightsDiv").innerHTML = "";
    document.getElementsByClassName("drinksDiv").innerHTML = "";

    console.log("click worked");
    const lat = this.state.lat;
    const lon = this.state.lon;
    this.setState({ hotelClick: true, sightsClick: false, drinksClick: false });
    console.log(
      "Hotels click:  " +
        this.state.hotelClick +
        "\nSights Click:  " +
        this.state.sightsClick
    );

    getHotels(lat, lon)

      .then(data =>
        console.log(data)
        // this.setState({ hotelObj: data.data.results })
        )
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
        <h2 style={this.styles.center}> Click a card below to get started! </h2>
        <div className="row justify-content-center">
          {/* Hotel Card */}
          <div
            className="card text-white bg-dark mb-3 col-md-3 col-lg-3 col-sm-12 hotelCard"
            style={this.styles.card}
            onClick={() => this.getHotels(this.state.lat, this.state.lon)}
          >
            <div className="card-body">
              <h3 className="card-title text-center">Lodging</h3>
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
              <h3 className="card-title text-center">Sights & Sounds</h3>
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
              <h3 className="card-title text-center">Eat, Drink, Do</h3>
              <p className="card-text text-center">Live It Up Like a Local</p>
              <i className="fas fa-beer fa-5x" style={this.styles.beerIcon} />
            </div>
          </div>
        </div>
        <div className="hotelsDiv">
          {this.state.hotelClick ? this.renderHotels(this.state.hotelObj) : " "}
        </div>
        <div className="sightsDiv">
          {this.state.sightsClick ? (
            <Sights
              museum={this.state.museumObj}
              landmark={this.state.landmarkObj}
              active={this.state.activeObj}
            />
          ) : (
            " "
          )}
        </div>
        {/* <div className="drinksDiv">{this.renderDrinks}</div> */}
      </div>
    );
  }
}

export default Cities;
