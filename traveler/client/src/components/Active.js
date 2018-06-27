import React from "react";
import moment from "moment";
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

const sendActive = (name, street, city, state, id) => {
  const address = street + " " + city + ", " + state;

  console.log("click seen on Active");
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
    .then(function(err) {
      console.log("error found:  " + err);
    });
};

const Active = props => (
  <div className="container">
    <div className="row">
      <div
        className="card border-dark col-md-12 col-sm-12 col-xs-12"
        style={styles.card}
      >
        <div className="row justify-content-center">
          <div className="card-header col-md-11 col-sm-10 col-xs-10">
            <h2>{props.name}</h2>
            <h4>{props.address}</h4>
            <h4>
              {props.city}, {props.state} {props.zip}
            </h4>
          </div>
        </div>
        <div className="card-body text-dark">
          <h3 className="card-title" style={styles.rating}>
            Start Date: {moment(props.startDate).format("MMMM Do YYYY, h:mm a")}.
            End Date: {moment(props.endDate).format("MMMM Do YYYY, h:mm a")}
          </h3>
          <h3 className="card-text text-left" style={styles.rating}>
            Tickets Remaining: {props.tktsRemain}. Capacity: {props.capacity}.
            Sales Status:{" "}
            {props.saleStatus == "registration-open"
              ? "Registration Open"
              : props.saleStatus == "registration-closed"
                ? "Registration Closed"
                : "Nothing to Report"}
          </h3>
        </div>
        <button
          type="button"
          className="btn btn-dark addBtn"
          data-id={props.activeId}
          dataname={props.name}
          dataaddress={props.address}
          onClick={() =>
            sendActive(
              props.name,
              props.address,
              props.city,
              props.state,
              props.activeId
            )
          }
        >
          Add to My Path
        </button>
        {props.description !== "No Description Provided" ? (
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        ) : (
          ""
        )}
      </div>
    </div>
  </div>
);

export default Active;
