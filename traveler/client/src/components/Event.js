import moment from "moment";
import React, { Component } from "react";
import axios from "axios";
let userId = localStorage.getItem("userId");
let legId = localStorage.getItem("tripLegId");

const styles = {
  card: {
    // margin: 20,
    
    // width: "18rem",
    margin: 20,
    // border: "2px solid black",
    // borderWidth: 7,
    // borderRadius: "5px",
    // boxShadow: "0 7px 8px 0 rgba(0,0,0,0.2)",
    boxShadow: "1px 3px 8px 1px #888888",
    // transition: "0.3s"
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

class Event extends Component {

  componentDidMount(){
    // this.props.hotelId.map( id => {
      // axios
      // .get("/api/activity/" + this.props.eventId)
      // .then(response => {
      //   console.log(response);
      //   // this.setState({ guests: response.data[0] ? response.data[0].guests : []})
      //   // this.setState({
      //   //   trip: response.data,
      //   //   tripLegs: response.data.tripLegs
      //   // });
      // })
      // .catch(function(error) {
      //   console.log("Error: " + error);
      // });

    // })
    console.log(this.props);
  }

  sendEvent = (name, address, id) => {
    console.log("click works on Event");
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
      })
      .then(function(err) {
        console.log("error found:  " + err);
      });
  };

  render() {
    return (
      <div
        className="card mb-3 col-lg-12 col-md-12 col-sm-12"
        style={styles.card}
      >
        <div className="card-header" style={styles.header}>
          <h2>{this.props.name}</h2>
          <h5>{this.props.address}</h5>
        </div>
        <div className="card-body text-dark">
          <h3>Time: {this.props.time}</h3>
          {this.props.description !== null ? (
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: this.props.description }}
            />
          ) : (
            <h4 className="card-text">Discover it for yourself!</h4>
          )}
        </div>

        <button
          type="button"
          style={styles.button}
          className="btn addBtn"
          onClick={() => this.sendEvent(this.props.name, this.props.address, this.props.eventId)}
        >
          Add to My Path
        </button>
        <a href={this.props.link} target="_blank" alt="eventLink">
          <button
            type="button"
            style={styles.button}
            href={this.props.link}
            target="_blank"
            className="btn mapBtn"
          >
            More Information
          </button>
        </a>
      </div>
  )};
};

export default Event;
