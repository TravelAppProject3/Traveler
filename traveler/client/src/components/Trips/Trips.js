import React, { Component } from "react";
import Navtabs from "../Navtabs";

class Trips extends Component {
  state = {};

  styles = {
    img: {
        height: "300px",
        width: "100%"
    },
    p: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        // color: "white"
    },
    border: {
        // borderTop: "1px solid black",
        padding: "30px",
        borderBottom: "1px solid black",
        marginBottom: "40px"
    },
    col: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
    },
    ul: {
        textAlign: "left",
        listStyleType: "none"
    }
  };

  render() {
    return (
        <div>
            <Navtabs />

            <div className="container">
            <div style={this.styles.border}>
                <p style={this.styles.p}>New York 8/15/18</p>
                <img style={this.styles.img} src="http://www.camp-campbell.com/wp-content/uploads/2014/09/o-NEW-YORK.jpg"></img>
                <div className="row">
                <div style={this.styles.col} className="col-md-4">
                Events
                <ul style={this.styles.ul}>
                    <li>doing this</li>
                    <li>that</li>
                    <li>& the other</li>
                </ul>
                </div>
                <div style={this.styles.col} className="col-md-4">
                Hotels
                <ul style={this.styles.ul}>
                    <li>doing this</li>
                    <li>that</li>
                    <li>& the other</li>
                </ul>
                </div>
                <div style={this.styles.col} className="col-md-4">
                Resturants
                <ul style={this.styles.ul}>
                    <li>doing this</li>
                    <li>that</li>
                    <li>& the other</li>
                </ul>
                </div>
                </div>
            </div>
            
            <div style={this.styles.border}>
                <p style={this.styles.p}>San Francisco 10/10/19</p>
                <img style={this.styles.img} src="https://www.paulreiffer.com/wp-content/uploads/2012/01/Paul_Reiffer_Photographer_San_Francisco_Bay_Bridge_Cityscape_Treasure_Island_Sunset_Night_Time.jpg"></img>
                <div className="row">
                <div style={this.styles.col} className="col-md-4">
                Events
                <ul style={this.styles.ul}>
                    <li>doing this</li>
                    <li>that</li>
                    <li>& the other</li>
                </ul>
                </div>
                <div style={this.styles.col} className="col-md-4">
                Hotels
                <ul style={this.styles.ul}>
                    <li>doing this</li>
                    <li>that</li>
                    <li>& the other</li>
                </ul>
                </div>
                <div style={this.styles.col} className="col-md-4">
                Resturants
                <ul style={this.styles.ul}>
                    <li>doing this</li>
                    <li>that</li>
                    <li>& the other</li>
                </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default Trips;