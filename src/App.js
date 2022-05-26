import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Word from "./Components/Word";
import HoneyLocust from "./Components/pages/HoneyLocust";
import PinOak from "./Components/pages/PinOak";
import American from "./Components/pages/American";
import CardContainer from "./Components/CardContainer";

class App extends Component {

  
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
