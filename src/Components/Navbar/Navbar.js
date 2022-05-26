import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import "/src/Components/css/Navbar.css";

smoothscroll.polyfill();
function Navbar(props) {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="App.js">
        Treestagram
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="App.js">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="HoneyLocust">
              HoneyLocust
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="PinOak">
              PinOak
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="American">
              American Linban
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
