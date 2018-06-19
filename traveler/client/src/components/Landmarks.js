import React from "react";
const styles = {};

const Landmarks = props => (
  <div className="container">
    <div className="row">
      <div
        className="card border-dark col-md-12 col-sm-12 col-xs-12"
        style={styles.card}
      >
        <div className="row">
          <div className="card-header col-md-11 col-sm-10 col-xs-10">
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
        {/* <div className="card-body text-dark">
          <h3 className="card-title" style={styles.rating}>
            Rating: {props.rating ? props.rating : "None Provided"}
          </h3>
          <p className="card-text text-left" style={styles.rating}>
            This is where we'll display those in our DB who have stayed here/are
            staying here
          </p>
        </div>
        <button type="button" className="btn btn-dark addBtn">
          Add to My Path
        </button>
        {props.photo ? (
          <a href={props.photo} alt="hotelMap">
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
        )} */}
      </div>
    </div>
  </div>
);

export default Landmarks;
