import React, { Component } from "react";

class NewUser extends Component {
  state = {};

  styles = {
    form: {
      marginTop: "40px",
      width: "500px",
      height: "200px",
      display: "inline-block"
    },
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
    text: {
      textAlign: "left"
    }
  };

  render() {
    return (
      <div style={this.styles.body}>
        <form style={this.styles.form}>
          <div style={this.styles.text} class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div style={this.styles.text} class="form-group">
            <label for="exampleInputEmail1">Destination</label>
            <input
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Where are you going?"
            />
          </div>
          <div style={this.styles.text} class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div style={this.styles.text} className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewUser;
