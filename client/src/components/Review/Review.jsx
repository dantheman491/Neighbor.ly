import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-container">
      <div className="review">
        <h3>username</h3>
        <p key={Review.comment}>comment</p>
      </div>
      <div className="review">
        <h3>username</h3>
        <p>comment</p>
      </div>
      <div className="review">
        <h3>username</h3>
        <p>comment</p>
      </div>
    </div>
  );
};

export default Review;
