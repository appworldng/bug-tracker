import React, { Component } from "react";
import Project from "../../components/Projects/Project";
import App from "../../layouts/App";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <App />
        <Project />
      </div>
    );
  }
}

export default Projects;
