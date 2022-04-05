import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button onclick="getElementById('demo').innerHTML=data()">
              Search
            </button>
            <p id="demo"></p>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
