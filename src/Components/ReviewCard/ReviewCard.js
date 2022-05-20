import React from "react";
import "/src/Components/css/ReviewCard.css";
function ReviewCard(props) {
  return (
    <div className="col-4 Review">
      <div className="card text-center mb-3r">
        <div className="card-header"></div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://www.muse-magazine.com/wp-content/uploads/2020/08/cottagecore2.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">Lets take some pictures guys :)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
