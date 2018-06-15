import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Navtabs";
import Cities from "./components/Cities";
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import NewUser from "./components/NewUser";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    cities: ["Raleigh", "Paris", "Amsterdam"]
  };

  render() {
    return (
      <Router>
        <div>
          <Navtabs cities={this.state.cities} />
          <br />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Cities" component={Cities} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/NewUser" component={NewUser} />
        </div>
      </Router>
    );
  }
}

export default App;
