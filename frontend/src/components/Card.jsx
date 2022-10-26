import "./cardStyle.scss";
import undefined from "../assets/undefined.jpeg";
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";

export const Card = ({ img, masterpiece = "UNKNOWN", rate = 0, description = "...", category = "NO", author = "UNNAMED" }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <article className="article">
      <span className="category">{category}</span>
      <div className="card">
        <img src={img || undefined} />
        <div className="card-data">
          <h1 className="data-title">{masterpiece}</h1>
          <div>
            <Rating
              onClick={handleRating}
              allowFraction={true}
              initialValue={rate}
              readonly={true}
            />
            <span>{rate}/5</span>
          </div>
          <p>{description}</p>
        </div>
        <span className="card-author">
          By: <span>{author}</span>
        </span>
      </div>
    </article>
  );
};
