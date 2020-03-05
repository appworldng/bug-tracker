import React, { Component } from "react";
import Bug from "./Bug";

class Bugs extends Component {
  state = {
    bugs: [
      {
        id: 1,
        title: "Page title not showing up",
        status: "Pending",
        priority: "High"
      },
      {
        id: 2,
        title: "Anchor not display image link",
        status: "Pending",
        priority: "High"
      },
      {
        id: 3,
        title: "Form displaying wrong toggle control",
        status: "Pending",
        priority: "High"
      },
      {
        id: 4,
        title: "Blog not showing default navigation",
        status: "Pending",
        priority: "High"
      },
      {
        id: 5,
        title: "Admin dashboard not working properly",
        status: "Pending",
        priority: "High"
      },
      {
        id: 6,
        title: "Image rendering gone wrong with CSS",
        status: "Pending",
        priority: "High"
      }
    ]
  };

  styles = {
    paddingTop: "5em",
    paddingRight: 0,
    paddingBottom: "2em",
    paddingLeft: 0
  };

  render() {
    return (
      <section style={this.styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <ul className="nav nav-tabs clientify-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#activated">
                    Unfixed Bugs
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#upcoming">
                    Fixed Bugs
                  </a>
                </li>
              </ul>

              <div className="row">
                <div className="col-sm-12">
                  <div className="tab-content clientify-tab-content">
                    <div id="activated" className="tab-pane fade in active">
                      {this.state.bugs.map(bug => (
                        <Bug
                          key={bug.id}
                          title={bug.title}
                          status={bug.status}
                          priority={bug.priority}
                        />
                      ))}
                    </div>
                    <div id="upcoming" className="tab-pane fade"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bugs;
