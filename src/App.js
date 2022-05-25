import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Word from "./Components/Word";
import HoneyLocust from "./Components/pages/HoneyLocust";
import PinOak from "./Components/pages/PinOak";
import American from "./Components/pages/American";
import CardContainer from "./Components/CardContainer";

class App extends Component {
  //settign up state
  state = {
    filteredRestaurants: [],
    data: [],
    boroname: "Manhattan",
    search: "",
    
  };

  //fetching data
  componentDidMount() {
    fetch(
      `https://data.cityofnewyork.us/resource/uvpi-gqnh.json?$$app_token=EhwYR2nqCIBmEXdrvrs8D3FpE`
    )
      .then((data) => data.json())
      .then((data) => {
        const dataHolder = data.slice(0, 100);
        this.setState({ data: dataHolder });

        
       

  // search for the value when the button is clicked
  search = (event) => {
    // Get the search value
    const search = this.state.search.toLowerCase();
    // Search the data for the value
    let found = this.state.data.find(
      (item) => item.dba.toLowerCase() === search
    );

    // If it is undefined, don't update the screen
    if (!found) return;
    // Return a response based on what is found if the item exists.
  };

  filterList = (searchValue) => {
    const filteredCommon = [];
    const filteredResults = this.state.data.filter((spc_common) => {
      if (!spc_common) return "";
      return spc_common.toLowerCase().includes(searchValue.toLowerCase());
    });
    // Print values to the screen
    filteredResults.forEach((item) => {
      if (!item.dba) return;
      filteredCommon.push(item.dba);
    });

    this.setState({ filteredCommon });
  };


  render() {
    return (
      <div className="App">
        <div className="grid">
          <CardContainer data={this.state.data} />
        </div>

        <Navbar data={this.state.data} />
        <Word />

        
      </div>
    );
  }
}

export default App;
