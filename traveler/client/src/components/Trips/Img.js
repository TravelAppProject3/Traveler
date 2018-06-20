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

const Img = props => {
  
        return(
            <div>
                <img
                style={styles.img}
                src={props.href}
                />
            </div>
        )
    
}

export default Img;