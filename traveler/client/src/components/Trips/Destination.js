import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
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
}

class Destination extends Component {
    render() {
        return(
            <div>
                <p style={styles.p}>New York 8/15/18</p>
                <Link to="/Cities">
                <button style={styles.profileBtn}>
                    <span className="fa fa-user" />
                </button>
                </Link>
            </div>
        )
    }
}

export default Destination;