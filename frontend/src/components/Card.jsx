import "./card.scss";
import undefined from "../assets/undefined.jpeg";
import { Rating } from "react-simple-star-rating";

export const Card = ({
  img,
  masterpiece = "UNKNOWN",
  rate = 0,
  description = "...",
  category = "UNKNOWN",
  author = "UNNAMED",
}) => {
  return (
    <article className="article">
      <span className="category">{category}</span>
      <div className="card">
        <img src={img || undefined} />
        <div className="card-data">
          <h1 className="data-title">{masterpiece}</h1>
          <div>
            <Rating allowFraction={true} initialValue={rate} readonly={true} />
            <span>{rate}/5</span>
          </div>
          <p>{description}</p>
        </div>
        <span className="card-author">{author}</span>
      </div>
    </article>
  );
};
