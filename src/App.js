import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Word from "./Components/Word";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Word />
      </div>
    );
  }
}

export default App;
