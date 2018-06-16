import React, { Component } from "react";
import "./style.css";

const styles = {
  body: {
    textAlign: "center",
    backgroundImage:
      "url(https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif)",
    backgroundSize: "cover",
    overflow: "hidden",
    height: "720px",
    marginTop: "-40px",
    textAlign: "center",
    width: "100%"
  },
  margin: {
    marginTop: "50px"
  }
};

class SignIn extends Component {
  state = {};

  render() {
    return (
      <div style={styles.body}>
        <div className="container">
          <form action="/action_page.php" style={styles.margin}>
            <div className="row">
              {/* <h2 style={this.styles.body} >Login with Social Media or Manually</h2> */}
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>

              <div className="col">
                <a href="#" className="fb btn">
                  <i className="fa fa-facebook fa-fw" /> Login with Facebook
                </a>
                <a href="#" className="twitter btn">
                  <i className="fa fa-twitter fa-fw" /> Login with Twitter
                </a>
                <a href="#" className="google btn">
                  <i className="fa fa-google fa-fw" /> Login with Google+
                </a>
              </div>

              <div className="col">
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>

                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
