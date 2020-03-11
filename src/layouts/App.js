import React, { Component } from "react";
import AppNav from "./AppNav";
import AppSearch from "./AppSearch";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav></AppNav>
        <AppSearch></AppSearch>
      </div>
    );
  }
}

export default App;
