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
    <div className="flex flex-col justify-center items-center">
      <label>Search Anime</label>

      <input
        id="anime-name"
        name="anime-name"
        type="text"
        onChange={handleChange}
        value={animeName}
        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full text-black"
        placeholder="Anime name..."
      />
      <div className="bg-white text-black flex flex-col text-start border-t border-black">
        {animeName != "" &&
          animes.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => handlePickAnime(item.attributes)}
              className="text-start hover:bg-blue-500 hover:text-white"
            >
              {item.attributes.titles.en_jp}
            </button>
          ))}
      </div>
    </div>
  );
};
