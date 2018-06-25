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
      marginTop: "0px",
      height: "20px",
      textAlign: "right",
      width: "auto"
    }
  };

  if (props.user === null) {
    Greeting = <p>Hello guest</p>;
  } else if (props.user.username) {
    Greeting = (
      <p>
        Welcome back, <strong>{props.user.username}</strong>
      </p>
    );
  } else if (props.user.local.username) {
    Greeting = (
      <p>
        Welcome back, <strong>{props.user.local.username} </strong>
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
