import React, { Component } from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import History from "./services/history";
import Header from "./layouts/header";
import Search from "./layouts/search";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Search></Search>
        <Router history={History}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
