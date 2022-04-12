import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //add state here
      data: []
    };
  }
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/uvpi-gqnh.json?$$app_token=EhwYR2nqCIBmEXdrvrs8D3FpE"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((e) => {
        alert(e);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Tree Finder</h1>
        <Navbar />
        <section className="list">{/* PUT API RESPONSE DATA HERE */}</section>
        {this.state.data.map((application) => (
          <li>
            {application.app_no}:{application.other_requirments}
          </li>
        ))}
      </div>
    );
  }
}

export default App;
