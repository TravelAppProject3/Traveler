import React from "react";

const Weather = props => {
  const styles = {
    weather: {
      position: "relative",
      left: 1250,
      bottom: 300,
      fontSize: 24,
      width: 10
    },
    img: { height: 100 },
    text: {
      position: "relative",
      bottom: 20,
      left: 15,
      color: "white",
      textShadow: "2px 2px black",
      textAlign: "center"
    }
  };
  return (
    <div>
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
    </div>
  );
};

export default Weather;
