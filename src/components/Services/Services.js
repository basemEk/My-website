import React, { useState } from "react";
import "./Services.css";
import { FaStar } from "react-icons/fa";

const Services = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
          <h2 className='rate-service'>Rate Our Service</h2>

      <div className="five-stars">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={50}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <br />
      <h5 className="rating-is">
        {`Rating is:
         ${rating === 1
          ? "Very Bad"
          : rating === 2
          ? "Bad"
          : rating === 3
          ? "Good"
          : rating === 4
          ? "Very Good"
          : rating === 5
          ? "Excellent!"
          : ''} `}
      </h5>
      

      
    </div>
  );
};

export default Services;
