import React, { Component } from "react";

class SiteNav extends Component {
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
              <div className="col-sm-10 col-sm-offset-1">
                <a className="navbar-brand" href="./">
                  Bug Tracker
                </a>
                <ul className="nav navbar-nav"></ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <a href="./login">Login</a>
                  </li>
                  <li>
                    <a href="./register">Sign Up</a>
                  </li>
                  <li>
                    <a href="https://www.github.com/chigozieorunta/bug-tracker">
                      GitHub
                    </a>
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

export default SiteNav;
