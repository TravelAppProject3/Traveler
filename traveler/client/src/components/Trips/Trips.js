import React, { Component } from "react";
import Navtabs from "../Navtabs";
import { Link } from "react-router-dom";

class Trips extends Component {
  state = {};

  styles = {
    img: {
        height: "300px",
        width: "100%",
        img: "1px solid black",
        boxShadow: "1px 3px 8px 1px #888888",
        marginTop: "10px",
        marginBottom: "10px"
    },
    p: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "30px",
        color: "white",
        background: "black",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "1px 3px 8px 1px #888888"
    },
    border: {
        // borderTop: "1px solid black",
        // boxShadow: "5px 5px 5px 1px #888888",
        padding: "30px",
        // border: "3px solid black",
        borderRadius: "10px",
        marginBottom: "40px",
        // background: "#f2f2f2"
    },
    col: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px"
        // border: "1px solid black"
    },
    ul: {
        // border: "1px solid black",
        textAlign: "left",
        listStyleType: "none"
    },
    li: {
        border: "1px solid black",
        borderRadius: "5px",
        textAlign: "center",
        margin: "3px",
        marginTop: "10px",
        marginBottom: "5px",
        background: "black",
        color: "white",
        fontWeight: "normal",
        fontSize: "20px",
        boxShadow: "1px 3px 8px 1px #888888"
    },
    liTitle: {
        border: "1px solid black",
        borderRadius: "5px",
        // textAlign: "center",
        paddingLeft: "10px",
        marginTop: "10px",
        marginBottom: "20px",
        background: "black",
        color: "white",
        fontSize: "28px",
        // fontWeight: "bold"
        boxShadow: "1px 3px 8px 1px #888888"
    },
    ulNest: {
        marginRight: "25px"
    },
    liNest: {
        border: "2px solid black",
        borderRadius: "5px",
        // textAlign: "center",
        margin: "3px",
        // background: "black",
        // color: "white",
        fontWeight: "normal",
        fontSize: "20px",
        listStyleType: "none",
        paddingLeft: "10px",
        boxShadow: "1px 3px 8px 1px #888888"
    },
    span: {
        // textAlign: "left"
        float: "left",
        // marginLeft: "10px",
        marginTop: "3px",
        marginRight: "10px"
    },
    profileBtn: {
        border: "2px solid white",
        color: "white",
        background: "black",
        borderRadius: "5px",
        float: "left",
        position: "absolute",
        top: "70px",
        right: "50px"

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
                <Link to="/Cities">
                <button style={this.styles.profileBtn}
                ><span className="fa fa-user"></span></button>
                </Link>
                <div className="row">
                    {/* <div style={this.styles.col} className="col-md-4"> */}
                        <ul style={this.styles.ul} className="col-md-4">
                            <li style={this.styles.liTitle}><span style={this.styles.span} className="fa fa-ticket"></span>Events</li>
                            <li style={this.styles.li}>Central Park</li>
                            <ul style={this.styles.ulNest}>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-calendar-check-o"></span>8/18/18 6pm</li>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-map-marker"></span>Central Park, New York, NY</li>
                            </ul>
                            <li style={this.styles.li}>Art Show</li>
                            <ul style={this.styles.ulNest}>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-calendar-check-o"></span>8/20/18 10pm</li>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-map-marker"></span>530 W 25th St, New York, NY 10001</li>
                            </ul>
                            <li style={this.styles.li}>Concert</li>
                            <ul style={this.styles.ulNest}>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-calendar-check-o"></span>Tomorrow</li>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-map-marker"></span>At The Place</li>
                            </ul>
                        </ul>
                    {/* </div> */}
                    {/* <div style={this.styles.col} className="col-md-4"> */}
                        <ul style={this.styles.ul} className="col-md-4">
                            <li style={this.styles.liTitle}><span style={this.styles.span} className="fa fa-bed"></span>Hotels</li>
                            <li style={this.styles.li}>Park Central Hotel</li>
                            <ul style={this.styles.ulNest}>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-calendar-check-o"></span>08/15/18 6pm</li>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-map-marker"></span>870 7th Ave, New York, NY 10019</li>
                            </ul>
                        </ul>
                    {/* </div> */}
                    {/* <div style={this.styles.col} className="col-md-4"> */}
                        <ul style={this.styles.ul} className="col-md-4">
                            <li style={this.styles.liTitle}><span style={this.styles.span} className="fa fa-cutlery"></span>Restaurants</li>
                            <li style={this.styles.li}>Carmine's Italian Restaurant</li>
                            <ul style={this.styles.ulNest}>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-calendar-check-o"></span>08/17/18 5pm</li>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-map-marker"></span>200 W 44th St, New York, NY 10036</li>
                            </ul>
                            <li style={this.styles.li}>Niles New York City</li>
                            <ul style={this.styles.ulNest}>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-calendar-check-o"></span>08/21/18 6pm</li>
                                <li style={this.styles.liNest}><span style={this.styles.span} className="fa fa-map-marker"></span>371 7th Ave, New York, NY 10001</li>
                            </ul>
                            
                        </ul>
                    {/* </div> */}
                </div>
            </div>
            
            <div style={this.styles.border}>
                <p style={this.styles.p}>San Francisco 10/10/19</p>
                <img style={this.styles.img} src="https://www.paulreiffer.com/wp-content/uploads/2012/01/Paul_Reiffer_Photographer_San_Francisco_Bay_Bridge_Cityscape_Treasure_Island_Sunset_Night_Time.jpg"></img>
                <div className="row">
                    {/* <div style={this.styles.col} className="col-md-4"> */}
                        <ul style={this.styles.ul} className="col-md-4">
                            <li style={this.styles.liTitle}><span style={this.styles.span} className="fa fa-ticket"></span>Events</li>
                            <li style={this.styles.li}>doing this</li>
                            <li style={this.styles.li}>that</li>
                            <li style={this.styles.li}>& the other</li>
                        </ul>
                    {/* </div> */}
                    {/* <div style={this.styles.col} className="col-md-4"> */}
                        <ul style={this.styles.ul} className="col-md-4">
                            <li style={this.styles.liTitle}><span style={this.styles.span} className="fa fa-bed"></span>Hotels</li>
                            <li style={this.styles.li}>doing this</li>
                            <li style={this.styles.li}>that</li>
                            <li style={this.styles.li}>& the other</li>
                        </ul>
                    {/* </div> */}
                    {/* <div style={this.styles.col} className="col-md-4"> */}
                        <ul style={this.styles.ul} className="col-md-4">
                            <li style={this.styles.liTitle}><span style={this.styles.span} className="fa fa-cutlery"></span>Restaurants</li>
                            <li style={this.styles.li}>doing this</li>
                            <li style={this.styles.li}>that</li>
                            <li style={this.styles.li}>& the other</li>
                        </ul>
                    {/* </div> */}
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Trips;