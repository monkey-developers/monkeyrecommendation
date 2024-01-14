import { useState } from "react";
import { SearchAnimeField } from "../components";

export const Recommend = () => {
  const [animeData, setAnimeData] = useState();
  const [inputs, setInputs] = useState({
    description: "",
    author: "",
  });

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-2 w-1/2">
        <SearchAnimeField setAnimeData={setAnimeData} />
        {animeData && (
          <div>
            Recommendation:{" "}
            <span className="text-main-color uppercase font-bold">
              {animeData.titles.en_jp}
            </span>
          </div>
        )}
        <div>
          <label>Description</label>
          <textarea
            className="text-black"
            onChange={handleChange}
            name="description"
            value={inputs.description}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            onChange={handleChange}
            name="author"
            value={inputs.author}
            className="text-black"
          />
        </div>
      </div>
    </div>
  );
};
