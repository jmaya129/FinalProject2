import React, { Component } from "react";
import Navbar from "/src/Components/Navbar/Navbar";
import "/src/Components/css/results.css";

class results extends Component {
  render() {
    return (
      <div className="results">
        <Navbar data={this.state.data} />
      </div>
    );
  }
}

export default results;
