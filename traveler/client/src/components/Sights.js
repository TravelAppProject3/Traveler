import React, { Component } from "react";
import Museums from "./Museums";
import Landmarks from "./Landmarks";

class Sights extends Component {
  state = {
    museumObj: [],
    landmarkObj: [],
    activeObj: [],
    museumClick: true,
    landmarkClick: false,
    activeClick: false
  };

  //When the component mounts, setState to the data we passed it from Cities//
  componentDidMount() {
    this.setState({
      museumObj: this.props.museum,
      landmarkObj: this.props.landmark,
      activeObj: this.props.active
    });
  }

  //A function to render museums found by the API to the page//
  renderMuseum = museumObj => {
    return (
      <div>
        {museumObj.map(museum => {
          let href;
          museum.photos
            ? (href = museum.photos[0].html_attributions[0])
            : "no photo";
          const thisHref = href
            ? href.match(/\".*\"/)[0].replace(/\"/g, "")
            : null;
          return (
            <Museums
              icon={museum.icon}
              name={museum.name}
              address={museum.vicinity}
              rating={museum.rating}
              key={museum.id}
              photo={thisHref}
            />
          );
        })}
      </div>
    );
  };

  //A funciton to render landmarks found by the API to the page//
  renderLandmark = landmarkObj => {
    console.log("Landmarks say hello");
    console.log(landmarkObj);
    return (
      <div>
        {landmarkObj.map(landmark => {
          let href;
          landmark.photos
            ? (href = landmark.photos[0].html_attributions[0])
            : "no photo";
          const thisHref = href
            ? href.match(/\".*\"/)[0].replace(/\"/g, "")
            : null;
          return (
            <Landmarks
              name={landmark.Location.Name}
              address={landmark.Location.Address.Label}
              type={landmark.Location.LocationType}
              lat={landmark.Location.DisplayPosition.Latitude}
              lon={landmark.Location.DisplayPosition.Longitude}
              key={landmark.Location.Name}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link"
              id="museum-tab"
              data-toggle="tab"
              href="#museum"
              role="tab"
              aria-controls="museum"
              aria-selected="true"
              onClick={() => this.renderMuseum(this.state.museumObj)}
            >
              Museums
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="landmark-tab"
              data-toggle="tab"
              href="#landmark"
              role="tab"
              aria-controls="landmark"
              aria-selected="false"
              onClick={() => this.renderLandmark(this.state.landmarkObj)}
            >
              Landmarks
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="active-tab"
              data-toggle="tab"
              href="#active"
              role="tab"
              aria-controls="active"
              aria-selected="false"
            >
              Be Active
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="museum"
            role="tabpanel"
            aria-labelledby="museum-tab"
          >
            <h1 className="text-center">Museums to Make You Smarter</h1>
            {this.renderMuseum(this.state.museumObj)}
          </div>
          <div
            className="tab-pane fade"
            id="landmark"
            role="tabpanel"
            aria-labelledby="landmark-tab"
          >
            <h1 className="text-center">Landmarks to Snap Instagrams Of</h1>
            {this.renderLandmark(this.state.landmarkObj)}
          </div>
          <div
            className="tab-pane fade"
            id="active"
            role="tabpanel"
            aria-labelledby="active-tab"
          >
            <h1>The Be Active component renders here </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Sights;
