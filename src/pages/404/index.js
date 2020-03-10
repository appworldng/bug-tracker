import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <section className="clientify-screen text-center">
        <div className="clientify-fullscreen">
          <div className="clientify-fullscreen-child">
            <h1 style={{ fontWeight: 300 }}>
              Some... times in our lives, we all have pain!
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;
