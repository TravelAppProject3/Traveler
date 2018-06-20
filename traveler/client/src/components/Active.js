import React from "react";

const Active = props => (
  <div>
    <div className="card text-white bg-dark mb-3 col-md-3 col-sm-6 col-xs-12">
      <div className="card-header">
        <h2>{props.name}</h2>
        <h5>{props.address}</h5>
        <h5>
          {props.city}
          {props.state}
        </h5>
      </div>
      <div className="card-body">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
);

export default Active;
