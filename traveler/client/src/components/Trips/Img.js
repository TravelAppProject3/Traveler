import React, { Component } from "react";

const styles = {
    img: {
        height: "300px",
        width: "100%",
        img: "1px solid black",
        boxShadow: "1px 3px 8px 1px #888888",
        marginTop: "10px",
        marginBottom: "10px"
      }
}

class Img extends Component {
    render () {
        return(
            <div>
                <img
                style={styles.img}
                src="http://www.camp-campbell.com/wp-content/uploads/2014/09/o-NEW-YORK.jpg"
                />
            </div>
        )
    }
}

export default Img;