import React from "react";
import axios from "axios";

const styles = {
  card: {
    width: "18rem",
    margin: 20,
    borderWidth: 7,
    borderRadius: 5,
    boxShadow: "0 7px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s"
  },
  icon: {
    height: 50,
    width: 50,
    position: "relative",
    top: 20
  },
  rating: {
    paddingLeft: 80
  }
};

const sendRestaurant = (name, address, id) => {
  console.log("click works on Restaurants");
  console.log(name, address, id);

  axios
    .post("/api/activity", {
      name: name,
      address: address,
      restaurantBoolean: true,
      activityId: id
    })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log("error found:  " + err);
    });
};

const Restaurant = props => (
  <div className="container">
    <div className="row">
      <div
        className="card border-dark col-md-12 col-sm-12 col-xs-12"
        style={styles.card}
      >
        <div className="row">
          <img
            src={props.icon}
            alt="restaurantIcon"
            style={styles.icon}
            className="col-md-1 col-sm-2 col-xs-2"
          />
          <div className="card-header col-md-11 col-sm-10 col-xs-10">
            <h2>{props.name}</h2>
            <h4>{props.address}</h4>
          </div>
        </div>
        <div className="card-body text-dark">
          <h3 className="card-title" style={styles.rating}>
            Rating: {props.rating ? props.rating : "None Provided"}
          </h3>
          <p className="card-text text-left" style={styles.rating}>
            This is where we'll display those in our DB who have stayed here/are
            staying here
          </p>
        </div>
        <button
          type="button"
          className="btn btn-dark addBtn"
          onClick={() =>
            sendRestaurant(props.name, props.address, props.restaurantId)
          }
        >
          Add to My Path
        </button>
        {props.photo ? (
          <a href={props.photo} target="_blank" alt="hotelMap">
            <button
              type="button"
              href={props.photo}
              target="_blank"
              className="btn btn-dark mapBtn"
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
);

export default Restaurant;
