import React, { Component } from "react";
import Panel from "../Panel/Panel";
import Bugs from "../Bugs/Bugs";

class Main extends Component {
  render() {
    return (
      <section>
        <Panel></Panel>
        <Bugs></Bugs>
      </section>
    );
  }
}

export default Main;
