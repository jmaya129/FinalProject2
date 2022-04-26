import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundData: []
    };
  }
  //Mapping Data
  findData = () => {
    const list = this.state.data;
    const found = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].spc_common) {
        found.push(list[i].spc_common);
      }
    }
    this.setState({ foundData: found });
  };

  //fetching data
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/uvpi-gqnh.json?$$app_token=EhwYR2nqCIBmEXdrvrs8D3FpE"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Tree Finder</h1>
        <Navbar data={this.state.data} />
      </div>
    );
  }
}

export default App;
