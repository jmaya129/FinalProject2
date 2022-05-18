import React, { Component } from "react";

import "/src/Components/css/results.css";
import Navbar from "/src/Components/Navbar/Navbar";

class results extends Component {
  render() {
    return (
      <div className="results">
        <Navbar data={this.state.data} />
        <results />
      </div>
    );
  }
}

export default results;
