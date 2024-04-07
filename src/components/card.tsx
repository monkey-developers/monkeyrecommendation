import { clsx } from "clsx";
import { useState } from "react";
import { Popup } from "./popup"
import { TrailerPopup } from "./trailerPopup"

type Props = {
  id: number;
  image: string;
  title: string;
  episodes: number;
  status: string;
  description: string;
  author: string;
  score: number;
  comment: string;
  videoId: string;
  deleteFunc: (id: number) => void;
};

export const Card = ({
  id,
  image,
  description,
  episodes,
  status,
  title,
  author,
  score,
  comment,
  videoId,
  deleteFunc,
}: Props) => {
  function deleteAnime() {
    deleteFunc(id);
  }
  const [synopsis, setSynopsis] = useState(false)
  const [trailer, setTrailer] = useState(false)

  const handlePopup = () => {
    setSynopsis(!synopsis)
    console.log(videoId)
  }

  const handleTrailerPopup = () => {
    setTrailer(!trailer)
  }

  return (
    <>
    {synopsis && <Popup text={description} closePopup={handlePopup} />}
    {trailer && <TrailerPopup videoId={videoId} closePopup={handleTrailerPopup} />}
    <div
      className="border bg-card text-card-foreground max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
      data-v0-t="card"
    >
      <div className="flex">
        <div className="w-1/2">
          <img
            src={image}
            alt="Attack on Titan"
            width="280"
            height="120"
            className="object-cover h-full aspect-ratio[500 / 150]"
          />
        </div>
        <div className="w-1/2 p-6 space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex justify-between text-sm">
            <span>{episodes} episodes</span>
            <span className="font-semibold">{status}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Score</span>
            <span className={score < 5 ? "text-red-500" : "text-green-500"}>
              {score}/10
            </span>
          </div>
          <h2 className="text-xl font-semibold">Synopsis</h2>
          <div className="mt-4">
            <div
              className="text-sm line-clamp-2 leading-relaxed text-overflow">
              {description}
            </div>
              <button onClick={handlePopup}>
                Read More
              </button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Comment</span>
              <span>{comment}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
                <button onClick={handleTrailerPopup} disabled={videoId == null} className={clsx({"text-xs": !videoId}, "text-gray-500 dark:text-gray-400 bg-green-500 dark:bg-gray-900 p-4 w-36 text-center")}>
                  {videoId ? "Play Trailer" : "Trailer Unavailable"}
                </button>
                <span>{author}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
