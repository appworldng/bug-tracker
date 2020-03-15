import React, { Component } from "react";
import App from "../../layouts/App";
import Bugs from "../../components/Bugs/Bugs";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <App />
        <Bugs />
      </div>
    );
  }
}

export default Dashboard;
