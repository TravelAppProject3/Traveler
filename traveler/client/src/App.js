import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cities from "./components/Cities";
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import NewUser from "./components/NewUser";
import Trips from "./components/Trips/Trips";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Cities" component={Cities} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/NewUser" component={NewUser} />
          <Route exact path="/Trips" component={Trips} />
        </div>
      </Router>
    );
  }
}

export default App;
