import undefined from "../assets/undefined.jpeg";
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";

export const Card = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    console.log(rating)
  })
  

  return (
    <div>
      <img src={undefined} />
      <Rating onClick={handleRating} allowFraction={true} initialValue={2.5} />
    </div>
  );
};
