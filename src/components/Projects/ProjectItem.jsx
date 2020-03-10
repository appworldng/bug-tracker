import React, { Component } from "react";

class ProjectItem extends Component {
  state = {
    title: this.props.title,
    status: this.props.status,
    team: this.props.team,
    date: this.props.date
  };

  render() {
    return (
      <div className="clientify-tab-content-record">
        <table className="table clientify-table">
          <tbody>
            <tr>
              <td className="menu-field">
                <div className="table-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </td>
              <td className="name-field">
                <span className="field">Project</span>
                <span className="value">{this.state.title}</span>
              </td>
              <td className="data-field">
                <span className="field">Status</span>
                <span className="value" style={{ color: "red" }}>
                  <svg
                    style={{
                      marginRight: "10px",
                      float: "left",
                      fill: "#f00"
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                    className="clientify-icon"
                  >
                    <circle className="st0" cx="7.5" cy="7.5" r="7"></circle>
                    <path
                      className="st1"
                      d="M7.275 3.208V7.5L9.98 9.254"
                    ></path>
                  </svg>
                  {this.state.status}
                </span>
              </td>
              <td className="data-field">
                <span className="field">Team</span>
                <span className="value" style={{ color: "red" }}>
                  {this.state.team}
                </span>
              </td>
              <td className="time-field">
                <span className="field">Time Sent</span>
                <span className="value">
                  <svg
                    style={{
                      marginRight: "10px",
                      float: "left"
                    }}
                    viewBox="0 0 15 15"
                    className="clientify-icon"
                  >
                    <path
                      className="st0"
                      d="M.861.5H14.22v14H.861zm13.252 4.061H1.182"
                    ></path>
                    <path
                      className="st0"
                      d="M4.639 7.913c.178-.166.475-.359.893-.359.734 0 2.093 1.164-.906 3.906h2.297m1.295-3.905h2.425s-1.4 1.693-1.4 3.906"
                    ></path>
                  </svg>
                  {this.state.date}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProjectItem;
