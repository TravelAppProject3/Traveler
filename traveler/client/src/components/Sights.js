import React, { Component } from "react";
import Museums from "./Museums";

class Sights extends Component {
  state = {
    museumObj: [],
    landmarkObj: [],
    activeObj: [],
    museumClick: true,
    landmarkClick: false,
    activeClick: false
  };

  componentDidMount() {
    this.setState({
      museumObj: this.props.museum,
      landmarkObj: this.props.landmark,
      activeObj: this.props.active
    });
  }

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
            <h1>The Museum component renders here</h1>
            {this.renderMuseum(this.state.museumObj)}
          </div>
          <div
            className="tab-pane fade"
            id="landmark"
            role="tabpanel"
            aria-labelledby="landmark-tab"
          >
            <h1>The Landmark component renders here</h1>
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
