import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Project extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "BangMaster",
        status: "Active",
        team: 5,
        date: "04-03-2020 02:35pm"
      },
      {
        id: 2,
        title: "LadipoMarket.com.ng",
        status: "Active",
        team: 3,
        date: "01-03-2020 11:57am"
      },
      {
        id: 3,
        title: "FlexPay",
        status: "Active",
        team: 4,
        date: "27-02-2020 09:41am"
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
                    Active Projects
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#upcoming">
                    Closed Projects
                  </a>
                </li>
              </ul>

              <div className="row">
                <div className="col-sm-12">
                  <div className="tab-content clientify-tab-content">
                    <div id="activated" className="tab-pane fade in active">
                      {this.state.projects.map(project => (
                        <ProjectItem
                          key={project.id}
                          title={project.title}
                          status={project.status}
                          team={project.team}
                          date={project.date}
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

export default Project;
