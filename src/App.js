import React, { Component } from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import History from "./services/history";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={History}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
