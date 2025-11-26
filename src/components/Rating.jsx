import React, {} from "react";
import ReactStars from "react-rating-stars-component";

function Rating({rating,setRating}) {
//   const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    console.log("New Rating: ", newRating);
    setRating(newRating);
  };

  return (
    <div>
      <h2>Rate this:</h2>

      <ReactStars
        count={5}           // number of stars
        size={35}           // size of stars
        activeColor="#ffd700" // yellow color
        value={rating}      // current value
        onChange={ratingChanged}
      />

      <p>Your Rating: {rating}</p>
    </div>
  );
}

export default Rating;
