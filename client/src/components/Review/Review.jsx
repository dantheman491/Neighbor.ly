import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review-container">
      <div className="review">
        <h3>{review.user.username}</h3>
        <p>{review.content}</p>
      </div>
    </div>
  );
};

export default Review;
