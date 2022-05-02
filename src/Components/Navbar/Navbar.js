import React from "react";
import results from "/src/Components/pages/results";
import "/src/Components/css/Navbar.css";

function Navbar(props) {
  console.log(props);

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("Navbar");

  // Get the offset position of the navbar
  var sticky = Navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

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
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
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
            class="btn btn-primary"
            onClick={() => {
              findData();
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
