import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import results from "/src/Components/pages/results";
import "/src/Components/css/Navbar.css";

smoothscroll.polyfill();
function Navbar(props) {
  const findData = () => {
    for (let i = 0; i < props.data.length; i++) {
      console.log(props.data[i].spc_common);
    }
  };

  function results(e) {
    e.preventDefault();
    window.location = "my-app/src/Components/results";
  }

  return (
    <nav id="navbar" class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="sticky">
          <div class="content">
            <a class="navbar-brand"> </a>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Type in a Tree"
                aria-label="Search"
              />

              <button
                type="button"
                class="btn btn-success"
                onClick={() => {
                  findData();
                  //console.log(results());   printing out the locations of the trees
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
