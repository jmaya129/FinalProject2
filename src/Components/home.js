import React from "react";
import "./css/home.css";

function home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="primary-text">Tree Finder</h1>
          </div>
        </div>
        <div className="row profile">
          <div className="col-4">
            <img
              className="food-test"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftrees&psig=AOvVaw1BGrB7Aa3NZh3lPEmQBvVR&ust=1651161996597000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJjjk_zPtPcCFQAAAAAdAAAAABAD"
              alt="tree"
            />
          </div>
          <div className="col-8">
            <h1 className="secondary-text">
              Not all street eats are created equal
            </h1>
            <p className="paragraph-text">
              Ever wonder why some food carts have giant long lines, and others
              barely have any lines at all? Is the cart hype to be believed? Is
              the popular choice always the best?
            </p>
            <p className="paragraph-text">
              Here at Street Eats, we take the business of picking the right
              food cart seriously. We've checked out those carts with the
              consicuously short lines so you can know if they're undiscovered
              gems, or if it's worth waiting in line for the most popular cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
