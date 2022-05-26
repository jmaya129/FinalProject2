import React, { Component } from "react";
import "/src/App.css";
import Navbar from "/src/Components/Navbar/Navbar";
import CardContainer from "/src/Components/CardContainer";

class American extends Component {
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

      })
  }

  
  search = (event) => {
    const search = this.state.search.toLowerCase();
    let found = this.state.data.find(
      (item) => item.dba.toLowerCase() === search
    );
 if (!found) return;
  };

  filterList = (searchValue) => {
    const filteredCommon = [];
    const filteredResults = this.state.data.filter((spc_common) => {
      if (!spc_common) return "";
      return spc_common.toLowerCase().includes(searchValue.toLowerCase());
    });
    
    filteredResults.forEach((item) => {
      if (!item.dba) return;
      filteredCommon.push(item.dba);
    });

    this.setState({ filteredCommon });
  }

render() {
    return (
      <div className="American">
        <div className="grid">
          <CardContainer data={this.state.data} />
        </div>

        <Navbar data={this.state.data} />
        

        
      </div>
    );
  }
}

export default American;