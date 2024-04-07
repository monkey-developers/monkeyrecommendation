import { useState } from "react";
import { SearchAnimeField } from "../components";
import axios from "axios";
import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type AnimeDataType = {
  titles: { en_jp: string };
  posterImage: { small: string };
  episodeCount: number;
  status: string;
  description: string;
  youtubeVideoId: string;
};
export const Recommend = () => {
  const [animeData, setAnimeData] = useState<AnimeDataType>();
  const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({
    author: "",
    score: 0,
    comment: "",
  });

  const navigate = useNavigate();
  const notify = () =>
    toast.success("Recommended! Redirecting now...", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      onClose: () => navigate({ to: "/" }),
    });
  const notifyErr = () =>
    toast.error("Error on recommendation =(", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(animeData);
  };

  function recommendAnime() {
    if (animeData && inputs.author) {
      setErr("");
      const data = {
        name: animeData.titles.en_jp,
        image: animeData.posterImage.small,
        episodes: animeData.episodeCount,
        status: animeData.status,
        description: animeData.description,
        author: inputs.author,
        score: inputs.score,
        comment: inputs.comment,
        videoId: animeData.youtubeVideoId,
      };
      axios
        .post(`${import.meta.env.VITE_API}/api/animes/`, data)
        .then((res) => {
          if (res) {
            notify();
          }
        });
    } else {
      setErr("Error on recommend, try again");
      notifyErr();
    }
  }

  return (
    <div className="h-full w-full">
      <button
        className="bg-main-color p-2 rounded absolute right-2"
        onClick={() => navigate({ to: "/" })}
      >
        Voltar
      </button>
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
        <div className="flex flex-col">
          <label>Author</label>
          <input
            onChange={handleChange}
            name="author"
            value={inputs.author}
            className={clsx(
              { "border-2 border-red-500": err != "" && inputs.author == "" },
              "text-black"
            )}
          />
        </div>
        <div className="flex flex-col">
          <label>score</label>
          <input
            onChange={handleChange}
            name="score"
            maxLength={2}
            value={inputs.score < 0 ? 0 : inputs.score > 10 ? 10 : inputs.score}
            className={clsx(
              { "border-2 border-red-500": err != "" && inputs.score == 0 },
              "text-black"
            )}
          />
        </div>
        <div className="flex flex-col">
          <label>Comment</label>
          <input
            onChange={handleChange}
            name="comment"
            value={inputs.comment}
            className={clsx(
              { "border-2 border-red-500": err != "" && inputs.comment == "" },
              "text-black"
            )}
          />
        </div>
        <button
          className="bg-main-color active:bg-transparent active:border-2 active:border-main-color"
          onClick={recommendAnime}
        >
          Recommend
        </button>
      </div>
      {animeData && animeData.youtubeVideoId != null && (
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${animeData.youtubeVideoId}?autoplay=0`}
        ></iframe>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};
