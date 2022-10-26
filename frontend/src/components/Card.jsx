import "./cardStyle.scss";
import undefined from "../assets/undefined.jpeg";
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";

export const Card = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="card">
      <img src={undefined} />
      <div className="card-data">
        <h1 className="data-title">CHAINSAW MAN</h1>
        <div>
          <Rating
            onClick={handleRating}
            allowFraction={true}
            initialValue={2.5}
            readonly={true}
          />
          <span>TEXTO</span>
        </div>
        <p>DESCRIPTION</p>
      </div>
      <span className="card-author">
        By: <span>Igor</span>
      </span>
    </div>
  );
};
