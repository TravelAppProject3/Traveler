import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Cities from "./components/Cities";
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import NewUser from "./components/NewUser";
import Trips from "./components/Trips/Trips";
import CreateTrip from "./components/CreateTrip";
import Navtabs from "./components/Navtabs";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    cities: ["Raleigh", "Paris", "Amsterdam"]
  };

  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }
  componentDidMount() {
    axios.get("/auth/user").then(response => {
      console.log(response.data);
      if (!!response.data.user) {
        console.log("THERE IS A USER");
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios.post("/auth/logout").then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _login(username, password) {
    axios
      .post("/auth/login", {
        username,
        password
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user
          });
        }
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Header user={this.state.user} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Cities" component={Cities} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/NewUser" component={NewUser} />
          <Route exact path="/Trips" component={Trips} />
          <Route exact path="/CreateTrip" component={CreateTrip} />
          <Route exact path="/Navtabs" component={Navtabs} />
        </div>
      </Router>
    );
  }
}

export default App;
