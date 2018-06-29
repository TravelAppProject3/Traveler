import React, { Component } from "react";
import axios from "axios";
let userId = localStorage.getItem("userId");
let legId = localStorage.getItem("tripLegId");

const styles = {
  card: {
    width: "18rem",
    margin: 20,
    // border: "2px solid black",
    // borderWidth: 7,
    // borderRadius: "5px",
    // boxShadow: "0 7px 8px 0 rgba(0,0,0,0.2)",
    boxShadow: "1px 3px 8px 1px #888888",
    // transition: "0.3s"
  },
  icon: {
    height: 50,
    width: 50,
    position: "relative",
    top: 20
  },
  rating: {
    paddingLeft: 80
  },
  header: {
    boxShadow: "1px 1px 4px 1px #888888",
  },
  button: {
    background: "black",
    color: "white",
    boxShadow: "1px 1px 4px 1px #888888",
    opacity: "10"
  }
};

class Museums extends Component {

  state= {
    guests: []
  }

  // componentDidMount(){
  //   // this.props.hotelId.map( id => {
  //     axios
  //     .get("/api/activity/" + this.props.museumId)
  //     .then(response => {
  //       console.log(response);
  //       // this.setState({ guests: response.data[0] ? response.data[0].guests : []})
  //       // this.setState({
  //       //   trip: response.data,
  //       //   tripLegs: response.data.tripLegs
  //       // });
  //     })
  //     .catch(function(error) {
  //       console.log("Error: " + error);
  //     });

  //   // })
  //   // console.log(this.props);
  // }

  sendMuseum = (name, address, id) => {
    console.log("click seen on Museum");
    console.log(name, address, id);
  
    axios
      .post("/api/trips/addActivity/" + legId, {
        name: name,
        address: address,
        restaurantBoolean: false,
        activityId: id
      })
      .then(function(res) {
        console.log(res);
        axios
          .put("/api/activity/addParticipant/" + userId + "/" + id)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log("Err - " + error);
          });
      })
      .catch(function(err) {
        console.log("Error Found:  " + err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="card col-md-12 col-sm-12 col-xs-12"
            style={styles.card}
          >
            <div className="row">
              <img
                src={this.props.icon}
                alt="hotelIcon"
                style={styles.icon}
                className="col-md-1 col-sm-2 col-xs-2"
              />
              <div className="card-header col-md-11 col-sm-10 col-xs-10" style={styles.header}>
                <h2>{this.props.name}</h2>
                <h4>{this.props.address}</h4>
              </div>
            </div>
            <div className="card-body text-dark">
              <h3 className="card-title" style={styles.rating}>
                Rating: {this.props.rating ? this.props.rating : "None Provided"}
              </h3>
              <p className="card-text text-left" style={styles.rating}>
                This is where we'll display those in our DB who have stayed here/are
                staying here
              </p>
            </div>
            <button
              type="button"
              className="btn addBtn"
              style={styles.button}
              data-id={this.props.museumId}
              dataname={this.props.name}
              dataaddress={this.props.address}
              onClick={() => this.sendMuseum(this.props.name, this.props.address, this.props.museumId)}
            >
              Add to My Path
            </button>
            {this.props.photo ? (
              <a href={this.props.photo} alt="hotelMap">
                <button
                  type="button"
                  href={this.props.photo}
                  target="_blank"
                  className="btn mapBtn"
                  style={styles.button}
                >
                  View on Google Maps
                </button>
              </a>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
  )};
};

export default Museums;
