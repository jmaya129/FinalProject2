import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Tree Finder</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
