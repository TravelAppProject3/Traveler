import React from "react";

const Weather = props => {
  const styles = {
    weather: {
      position: "relative",
      left: 1250,
      bottom: 170,
      fontSize: 24,
      width: 10
    },
    img: { height: 100 },
    text: {
      position: "relative",
      top: 30,
      right: 50,
      color: "white",
      textShadow: "2px 2px black"
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
            {props.weather.conditions}, {props.weather.temp}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
