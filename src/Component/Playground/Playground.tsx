// import React from "react";
import "./Playground.css";

import { useState } from "react";

const Playground = () => {
  const reviews = [
    { id: 1, text: "Review 1" },
    { id: 2, text: "Review 2" },
    { id: 3, text: "Review 3" },
    // Add more reviews as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel-container">
      <div
        className="reviews"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToReview(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playground;
