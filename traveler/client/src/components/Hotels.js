import React from "react";

const styles = {
  card: {
    width: "18rem",
    margin: 20
  },
  icon: {
    height: 50,
    width: 50
  },
  rating: {
    paddingLeft: 80
  }
};
const Hotels = props => (
  <div className="container">
    <div className="row">
      <div
        className="card border-dark col-md-6 col-sm-12 col-xs-12"
        style={styles.card}
      >
        <div className="row">
          <img
            src={props.icon}
            alt="hotelIcon"
            style={styles.icon}
            className="col-md-2"
          />
          <div className="card-header col-md-10">
            <h2>{props.name}</h2>
            <h4>{props.address}</h4>
          </div>
        </div>
        <div className="card-body text-dark">
          <h3 className="card-title" style={styles.rating}>
            Rating: {props.rating ? props.rating : "None Provided"}
          </h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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

export default Hotels;
