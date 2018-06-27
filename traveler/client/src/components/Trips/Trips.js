import React, { Component } from "react";
import Navtabs from "../Navtabs";
import { Link } from "react-router-dom";
import Destination from "./Destination";
import Img from "./Img";
import Headers from "./Headers";
import Events from "./Li";
import Hotels from "./Hotels";
import Row from "./Row";
import Col from "./col";
import Restaurant from "./Restaurants";
import axios from "axios";
import TripHeader from "./TripHeader"
let userId = localStorage.getItem("userId");
let tripId = localStorage.getItem("tripId");
console.log("tripid ", tripId);

// import Trip from "../../../../controllers/tripsController";

class Trips extends Component {
  state = {
    trip: {},
    tripLegs: []
  };

  componentDidMount() {
    // console.log("User Id: " + userId);
    axios
      .get("/api/trips/" + tripId)
      .then(response => {
        console.log(response.data.tripLegs[0]);
        this.setState({
          trip: response.data,
          tripLegs: response.data.tripLegs
        });
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  }

  // trip = {
  //   trip: "U.S. 2019",
  //   destination: "New York",
  //   arrival: "8/15/18",
  //   img:
  //     "http://www.camp-campbell.com/wp-content/uploads/2014/09/o-NEW-YORK.jpg",
  //   events: [
  //     {
  //       name: "Central Park",
  //       date: "8/18/18 6pm",
  //       location: "Central Park, New York, NY"
  //     },
  //     {
  //       name: "Central Park",
  //       date: "8/18/18 6pm",
  //       location: "Central Park, New York, NY"
  //     },
  //     {
  //       name: "Central Park",
  //       date: "8/18/18 6pm",
  //       location: "Central Park, New York, NY"
  //     }
  //   ],
  //   hotels: [
  //     {
  //       name: "Park Central Hotel",
  //       date: "08/15/18 6pm",
  //       location: "870 7th Ave, New York, NY 10019"
  //     },
  //     {
  //       name: "Park Central Hotel",
  //       date: "08/15/18 6pm",
  //       location: "870 7th Ave, New York, NY 10019"
  //     }
  //   ],
  //   restaurants: [
  //     {
  //       name: "Carmine's Italian Restaurant",
  //       date: "08/17/18 5pm",
  //       location: "200 W 44th St, New York, NY 10036"
  //     },
  //     {
  //       name: "Carmine's Italian Restaurant",
  //       date: "08/17/18 5pm",
  //       location: "200 W 44th St, New York, NY 10036"
  //     }
  //   ]
  // };

  styles = {
    border: {
      padding: "30px",
      marginBottom: "40px"
    }
  };

  render() {
    // console.log(this.trip);
    return (
      <div>
        <Navtabs />

        <div className="container">
          <TripHeader
            name={this.state.trip.tripName}
          />
          {this.state.tripLegs.map(trip => {
            return (
          <div style={this.styles.border}>
            <Destination
              name={trip.city}
              arrival={trip.arrival}
            />
            <Img city={trip.city} />
            <Headers />




            {/* <Row>
              <Col>
                {this.state.trips.events.map(event => {
                  return (
                    <Events
                      name={event.name}
                      date={event.date}
                      location={event.location}
                    />
                  );
                })}
              </Col>
              <Col>
                {this.state.trips.hotels.map(hotel => {
                  return (
                    <Hotels
                      name={hotel.name}
                      date={hotel.date}
                      location={hotel.location}
                    />
                  );
                })}
              </Col>
              <Col>
                {this.state.trips.restaurants.map(restaurant => {
                  return (
                    <Restaurant
                      name={restaurant.name}
                      date={restaurant.date}
                      location={restaurant.location}
                    />
                  );
                })}
              </Col>
            </Row> */}
          



          </div>
            );
          })}
         </div> 
      </div>
    );
  }
}

export default Trips;
