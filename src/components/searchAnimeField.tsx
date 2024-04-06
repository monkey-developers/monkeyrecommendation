import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  setAnimeData: any;
};

export const SearchAnimeField = ({ setAnimeData }: Props) => {
  const [animeName, setAnimeName] = useState("");
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      axios
        .get(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${animeName}`)
        .then((res) => setAnimes(res.data.data));
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [animeName]);

  const handleChange = (e: any) => {
    setAnimeName(e.target.value);
  };

  const handlePickAnime = (item: any) => {
    setAnimeData(item);
    setAnimeName("");
  };

  return (
    <div className="relative flex flex-col">
      <label>Search Anime</label>
      <input
        className="text-black"
        id="anime-name"
        name="anime-name"
        type="text"
        onChange={handleChange}
        value={animeName}
      />
      <div className="bg-white text-black flex flex-col text-start border-t border-black">
        {animeName != "" &&
          animes.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => handlePickAnime(item.attributes)}
              className="text-start hover:bg-main-color hover:text-white"
            >
              {item.attributes.titles.en_jp}
            </button>
          ))}
      </div>
    </div>
  );
};
