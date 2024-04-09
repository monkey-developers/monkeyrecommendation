import { clsx } from "clsx";
import { useState } from "react";

import { Popup } from "./popup";
import { TrailerPopup } from "./trailerPopup";
import { X } from "@phosphor-icons/react";

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

  const [synopsis, setSynopsis] = useState(false);
  const [trailer, setTrailer] = useState(false);

  const handlePopup = () => {
    setSynopsis(!synopsis);
    console.log(videoId);
    console.log("fodase");
  };

  const handleTrailerPopup = () => {
    setTrailer(!trailer);
  };

  return (
    <>
      {synopsis && (
        <Popup text={description} closePopup={handlePopup} title={title} />
      )}
      {trailer && (
        <TrailerPopup videoId={videoId} closePopup={handleTrailerPopup} />
      )}
      <div className="max-w-2xl mx-auto bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex">
          <img
            src={image}
            alt="Image not found..."
            className="w-1/2 h-auto"
            width="300"
            height="300"
          />
          <div className="p-4 space-y-4 w-1/2">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">{title}</h2>
              <X size={32} onClick={deleteAnime} cursor={"pointer"} />
            </div>
            <div className="text-sm space-y-1">
              <p className="text-gray-400">{episodes} episodes</p>
              <p className="text-green-400">{status}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">Score</span>
                <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {score}/10
                </div>
              </div>
            </div>
            <div className="py-10 flex flex-col">
              <h3 className="font-bold text-lg">Synopsis</h3>
              <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed text-overflow">
                {description}
              </p>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-blue-400 text-xs mt-1"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                onClick={handlePopup}
              >
                Read More
              </button>
              <span className="font-bold text-lg">Comment</span>
              <span>{comment}</span>
            </div>

            <div className="flex justify-between items-center">
              <button
                className={clsx(
                  { "text-xs": !videoId },
                  "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                )}
                onClick={handleTrailerPopup}
                disabled={videoId == null}
              >
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
