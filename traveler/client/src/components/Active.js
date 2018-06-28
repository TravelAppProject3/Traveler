import moment from "moment";
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
    boxShadow: "1px 3px 8px 1px #888888"
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
    boxShadow: "1px 1px 4px 1px #888888"
  },
  button: {
    marginBottom: "15px",
    background: "black",
    color: "white",
    boxShadow: "1px 1px 4px 1px #888888",
    opacity: "10"
  }
};

class Active extends Component {
  sendActive = (name, street, city, state, id) => {
    const address = street + " " + city + ", " + state;

    console.log("click seen on Active");
    console.log(name, address, id);

    axios
      .post("/api/trips/addActivity/" + legId, {
        name: name,
        address: address,
        restaurantBoolean: false,
        activityId: id
      })
      .then(function(response) {
        console.log(response);
        axios
          .put("/api/activity/addParticipant/" + userId + "/" + id)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log("Err - " + error);
          });
      })
      .then(function(res) {
        console.log(res);
      })
      .then(function(err) {
        console.log("error found:  " + err);
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
            <div className="row justify-content-center">
              <div
                className="card-header col-md-11 col-sm-10 col-xs-10"
                style={styles.header}
              >
                <h2>{this.props.name}</h2>
                <h4>{this.props.address}</h4>
                <h4>
                  {this.props.city}, {this.props.state} {this.props.zip}
                </h4>
              </div>
            </div>
            <div className="card-body text-dark">
              <h3 className="card-title" style={styles.rating}>
                Start Date:{" "}
                {moment(this.props.startDate).format("MMMM Do YYYY, h:mm a")}.
                End Date:{" "}
                {moment(this.props.endDate).format("MMMM Do YYYY, h:mm a")}
              </h3>
              <h3 className="card-text text-left" style={styles.rating}>
                Tickets Remaining: {this.props.tktsRemain}. Capacity:{" "}
                {this.props.capacity}. Sales Status:{" "}
                {this.props.saleStatus == "registration-open"
                  ? "Registration Open"
                  : this.props.saleStatus == "registration-closed"
                    ? "Registration Closed"
                    : "Nothing to Report"}
              </h3>
            </div>
            <button
              type="button"
              className="btn addBtn"
              style={styles.button}
              data-id={this.props.activeId}
              dataname={this.props.name}
              dataaddress={this.props.address}
              onClick={() =>
                this.sendActive(
                  this.props.name,
                  this.props.address,
                  this.props.city,
                  this.props.state,
                  this.props.activeId
                )
              }
            >
              Add to My Path
            </button>
            {this.props.description !== "No Description Provided" ? (
              <div
                dangerouslySetInnerHTML={{ __html: this.props.description }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Active;
