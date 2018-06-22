import React from "react";
import moment from "moment";

const styles = {
  card: {
    margin: 20,
    borderWidth: 7,
    borderRadius: 5,
    boxShadow: "0 7px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s"
  }
};

const Event = props => (
  <div
    className="card border-dark mb-3 col-lg-12 col-md-12 col-sm-12"
    style={styles.card}
  >
    <div className="card-header">
      <h2>{props.name}</h2>
      <h5>{props.address}</h5>
    </div>
    <div className="card-body text-dark">
      <h3>Time: {props.time}</h3>
      {props.description !== null ? (
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      ) : (
        <h4 className="card-text">Discover it for yourself!</h4>
      )}
    </div>

    <button type="button" className="btn btn-dark addBtn">
      Add to My Path
    </button>
    <a href={props.link} target="_blank" alt="eventLink">
      <button
        type="button"
        href={props.link}
        target="_blank"
        className="btn btn-dark mapBtn"
      >
        More Information
      </button>
    </a>
  </div>
);

export default Event;
