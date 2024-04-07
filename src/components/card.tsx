import { clsx } from "clsx";
import { useState } from "react";

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
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
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
          <h1 className="text-2xl font-bold">Attack on Titan</h1>
          <div className="flex justify-between text-sm">
            <span>25 episodes</span>
            <span className="font-semibold">Finished</span>
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
              className={
                showFullText
                  ? "text-sm line-clamp-2 leading-relaxed text-overflow"
                  : "text-sm  leading-relaxed"
              }
            >
              {description}
            </div>
            {showFullText && (
              <button className="" onClick={toggleText}>
                Read More
              </button>
            )}
            {!showFullText && (
              <button className="" onClick={toggleText}>
                Show Less
              </button>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Comment</span>
              <span>{comment}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-green-500 dark:bg-gray-900 p-4 w-36">
              <div className="flex justify-between items-center">
                <button className="text-gray-500 dark:text-gray-400">
                  Play Trailer
                </button>
              </div>
            </div>
            <span>{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
