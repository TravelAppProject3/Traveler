import React from "react";

const Weather = props => {
  const styles = {
    weather: {
      position: "absolute",
      fontSize: 24,
      width: 10,
      right: 300,
      top: 135,
      background: "rgba(255, 255, 255, .9)",
      // display: "inline-block"
      paddingRight: "120px",
      paddingLeft: "10px",
      paddingTop: "0px",
      paddingBottom: "10px",
      borderRadius: "50%"
    },
    img: { height: 100,
    marginLeft: "4px",
    paddingTop: "-5px" },
    text: {
      position: "absolute",
      top: 60,
      left: 15,
      color: "black",
      textShadow: "2px 2px white",
      textAlign: "center",
      marginLeft: ".01px",
      // marginRight: "5px"
    }
  };
  return (
    <div className="container" style={styles.weather}>
      <div>
        <img src={props.weather.icon} alt="weatherIcon" style={styles.img} />
      </div>
      <div className="row" style={styles.text}>
        <div className="conditions">
          {props.weather.conditions}, {props.weather.temp}°{" "}
        </div>
      </div>
    </div>
  );
};

export default Weather;
