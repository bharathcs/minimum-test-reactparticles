import React, { Component } from "react";
import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
              },
            },
          },
        }}
      />
    );
  }
}

export default App;
