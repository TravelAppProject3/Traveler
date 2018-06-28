import React from "react";

const Weather = props => {
  const styles = {
    weather: {
      position: "absolute",
      fontSize: 24,
      width: 10,
      right: 570,
      top: 130
    },
    img: { height: 100 },
    text: {
      position: "absolute",
      top: 60,
      left: 15,
      color: "white",
      textShadow: "2px 2px black",
      textAlign: "center"
    }
  };
  return (
    <div className="row" style={styles.weather}>
      <div className="row">
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
