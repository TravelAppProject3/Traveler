import React from "react";

const Header = props => {
  let Greeting;
  let styles;

  styles = {
    formatLogin: {
      color: "white",
      backgroundColor: "black",
      paddingRight: "70px",
      lineHeight: "20px",
      margin: "0px",
      height: "20px",
      textAlign: "right",
      width: "auto"
    }
  };

  if (props.user === null) {
    Greeting = <p>Hello guest</p>;
  } else if (props.user.google) {
    Greeting = (
      <p>
        Welcome back, <strong>{props.user.google.name}</strong>
      </p>
    );
  } else if (props.user.twitter) {
    Greeting = (
      <p>
        Welcome back, <strong>{props.user.twitter.displayName}</strong>
      </p>
    );
  } else if (props.user.facebook) {
    Greeting = (
      <p>
        username Welcome back, <strong>{props.user.facebook.name} </strong>
      </p>
    );
  }
  return (
    <div style={styles.formatLogin} className="Header">
      {Greeting}
    </div>
  );
};

export default Header;
