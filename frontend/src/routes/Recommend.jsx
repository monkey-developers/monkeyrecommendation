import "./recommend.scss";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useMutation, useQueryClient } from "react-query";
import {
  postRecommendations,
  postImageRecommendations,
} from "../fetchers/recommendations";
import { ButtonNavigate } from "../components/ButtonNavigate";
import { ArrowLeft } from "phosphor-react";

export const Recommend = () => {
  const client = useQueryClient();
  const mutation = useMutation(postRecommendations, {
    onSuccess: () => {
      client.invalidateQueries("recommend");
    },
  });
  const imageMutation = useMutation(postImageRecommendations, {
    onSuccess: () => {
      client.invalidateQueries("recommend");
    },
  });
  const [inputs, setInputs] = useState({
    rate: 0,
    masterpiece: "",
    author: "",
    description: "",
    category: "Anime",
  });
  const [selectedFile, setSelectedFile] = useState();

  const handleChange = (evt) => {
    setInputs({
      ...inputs,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleRating = (rate) => {
    setInputs({
      ...inputs,
      rate,
    });
  };

  const handlePhoto = (evt) => {
    setSelectedFile(evt.target.files[0]);
  };

  const handleSubmit = () => {
    event.preventDefault();
    mutation.mutate(inputs);
    const formData = new FormData();
    formData.append("foto", selectedFile);
    imageMutation.mutate(formData);
  };

  return (
    <article className="register-container">
      <form onSubmit={handleSubmit}>
        <Rating onClick={handleRating} allowFraction={true} />
        <input
          name="masterpiece"
          type="text"
          placeholder="Show name"
          className="input"
          value={inputs.masterpiece}
          onChange={(evt) => handleChange(evt)}
          required
        />
        <input
          name="author"
          type="text"
          placeholder="Recommended by"
          className="input"
          value={inputs.author}
          onChange={(evt) => handleChange(evt)}
          required
        />
        <textarea
          name="description"
          type="text"
          className="textarea"
          placeholder="Description..."
          maxLength={255}
          value={inputs.description}
          onChange={(evt) => handleChange(evt)}
          required
        />
        <select
          name="category"
          className="select"
          onChange={(evt) => handleChange(evt)}
        >
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
          <option value="serie">Serie</option>
          <option value="book">Book</option>
          <option value="movie">Movie</option>
        </select>
        <input
          name="photo"
          type="file"
          className="input-file"
          onChange={(evt) => handlePhoto(evt)}
          required
        />
        <button type="submit">Create</button>
      </form>
      <ButtonNavigate url={"/"}>
        <ArrowLeft size={40} />
      </ButtonNavigate>
    </article>
  );
};
