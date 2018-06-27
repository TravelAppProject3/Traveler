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
  },
  text: {
    textAlign: "center"
  }
};

const sendLandmark = (name, address, id) => {
  console.log("Click works on Landmark");
  console.log(name, address, id);

  axios
    .post("/api/activity", {
      name: name,
      address: address,
      restaurantBoolean: false,
      activityId: id
    })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log("error found:  " + err);
    });
};

const Landmarks = props => (
  <div className="container">
    <div className="row">
      <div
        className="card border-dark col-md-12 col-sm-12 col-xs-12"
        style={styles.card}
      >
        <div className="row">
          <div
            className="card-header col-md-11 col-sm-10 col-xs-10"
            style={styles.text}
          >
            <h2>{props.name}</h2>
            <h4>{props.address}</h4>
            {props.type === "park" ? (
              <h4>Park</h4>
            ) : props.type === "shoppingCentre" ? (
              <h4>Shopping Center</h4>
            ) : props.type === "cemetery" ? (
              <h4>Cemetery</h4>
            ) : props.type === "universityCollege" ? (
              <h4>Univerity/College</h4>
            ) : (
              <h4>{props.type}</h4>
            )}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark addBtn"
          data-id={props.landmarkId}
          dataname={props.name}
          dataaddress={props.address}
          onClick={() =>
            sendLandmark(props.name, props.address, props.landmarkId)
          }
        >
          Add to My Path
        </button>
      </div>
    </div>
  </div>
);

export default Landmarks;
