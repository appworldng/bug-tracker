import React, { Component } from "react";
import SiteNav from "../../layouts/SiteNav";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <SiteNav />
        <section className="clientify-screen">
          <div className="clientify-fullscreen">
            <div className="clientify-fullscreen-child">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-10 col-sm-offset-1">
                    <div className="row">
                      <div className="col-sm-6">
                        <h1>Bug Tracker</h1>
                        <p>
                          A React application built to help developers & teams
                          manage bugs and resolve issues for ongoing projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
