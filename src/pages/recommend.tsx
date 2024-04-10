import { useEffect, useState } from "react";
import { SearchAnimeField } from "../components";
import axios from "axios";
import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "../storage/localStorage";

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
    score: 0,
    comment: "",
  });

  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user) {
      navigate({ to: "/login" });
    }
  });

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
      onClose: () => navigate({ to: "/review" }),
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
  };

  function recommendAnime() {
    console.log(animeData);
    if (animeData && user) {
      setErr("");
      const data = {
        name: animeData.titles.en_jp,
        image: animeData.posterImage.small,
        episodes: animeData.episodeCount,
        status: animeData.status,
        description: animeData.description,
        author: user.username,
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
    <div className="flex h-[calc(100vh-64px)] justify-center items-center">
      <div className="flex flex-col gap-2 w-96">
        <SearchAnimeField setAnimeData={setAnimeData} />
        {animeData && (
          <div>
            Recommendation:{" "}
            <span className="text-blue-500 uppercase font-bold">
              {animeData.titles.en_jp}
            </span>
          </div>
        )}
        <div className="flex flex-col justify-center items-center">
          <label>Score</label>
          <input
            onChange={handleChange}
            name="score"
            maxLength={2}
            value={inputs.score < 0 ? 0 : inputs.score > 10 ? 10 : inputs.score}
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full text-black"
            type="text"
            placeholder="Score..."
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label>Comment</label>
          <input
            onChange={handleChange}
            name="comment"
            value={inputs.comment}
            maxLength={35}
            className={clsx(
              { "border-2 border-red-500": err != "" && inputs.comment == "" },
              "flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full text-black"
            )}
            type="text"
            placeholder="Comment"
          />
        </div>
        <button
          className="inline-flex bg-blue-500 items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          onClick={recommendAnime}
        >
          Recommend
        </button>
        <button
          className="bg-gray-700 p-2 rounded "
          onClick={() => navigate({ to: "/" })}
        >
          Voltar
        </button>
      </div>
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
