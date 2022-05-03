import React from "react";
import results from "/src/Components/pages/results";
import "/src/Components/css/Navbar.css";

function Navbar(props) {
  console.log(props);

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

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
                  console.log(results());
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
