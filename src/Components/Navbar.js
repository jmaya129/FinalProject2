import React from "react";

function Navbar(props) {
  console.log(props);

  const findData = () => {
    for (let i = 0; i < props.data.length; i++) {
      console.log(props.data[i].spc_common);
    }
  };
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
