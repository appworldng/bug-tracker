import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav
          className="navbar navbar-default navbar-fixed-top clientify-app-nav"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <a className="navbar-brand" href="./">
                  Bug Tracker
                </a>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="./dashboard">Dashboard</a>
                  </li>
                  <li>
                    <a href="./projects">Projects</a>
                  </li>
                  <li>
                    <a href="./tracker">Tracker</a>
                  </li>
                  <li>
                    <a href="./reports">Reports</a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="./">Chigozie Orunta</a>
                  </li>
                  <li>
                    <a href="./">Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
