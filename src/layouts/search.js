import React, { Component } from "react";

class Search extends Component {
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

  render() {
    return (
      <section id="clientify-left-panel">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <form className="form clientify-form" method="POST">
                <div className="form-group">
                  <input
                    className="form-control clientify-control"
                    type="text"
                    placeholder="Search Bugs"
                  />
                  <label for="clientify-search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 15"
                      className="clientify-icon"
                    >
                      <g
                        fill="none"
                        stroke="#9d9d9d"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                      >
                        <circle cx="6.055" cy="5.805" r="5.305"></circle>
                        <path d="M9.847 9.727l4.166 4.773"></path>
                      </g>
                    </svg>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="row" style={{ borderTop: "2px solid #f1f1f1" }}>
            <div className="col-sm-12">
              <ul className="clientify-client-list">
                {this.state.bugs.map(bug => (
                  <li>
                    <p>{bug.title}</p>
                    <svg
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
                    <span>Pending</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
