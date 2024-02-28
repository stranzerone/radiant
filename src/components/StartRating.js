// StarRating.js

import React from 'react';
import "./main.scss"
const StarRating = ({ rating }) => {
  const stars = [];

  // Generate full star icons
  for (let i = 0; i < Math.floor(rating/2); i++) {
    stars.push(<i className="fas fa-star" key={i}></i>);
  }

  // Generate half star icon if rating is not an integer
  if (rating % 1 !== 0) {
    stars.push(<i className="fas fa-star-half-alt" key="half"></i>);
  }

  // Generate empty star icons to fill the rest of the rating
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<i className="far fa-star" key={i + Math.ceil(rating)}></i>);
  }
  return (
    <div className="star-rating">
    <div>
    {stars}

    </div>
    </div>
  );
}

export default StarRating;
