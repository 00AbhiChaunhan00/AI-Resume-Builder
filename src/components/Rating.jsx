import React from "react";
import ReactStars from "react-rating-stars-component";

function Rating({ rating, setRating }) {
  

  const ratingChanged = (newRating) => {
    console.log("New Rating: ", newRating);
    setRating(newRating);
  };

  return (
    <div>
      <h2>Rate this:</h2>

      <ReactStars
        count={5}
        size={35} 
        activeColor="#ffd700" 
        value={rating} 
        onChange={ratingChanged}
      />

      <p>Your Rating: {rating}</p>
    </div>
  );
}

export default Rating;
