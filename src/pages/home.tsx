import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Card, FloatButton } from "../components";

export const HomePage = () => {
  const [animes, getAnimes] = useState<
    [
      {
        id: number;
        name: string;
        image: string;
        episodes: number;
        status: string;
        description: string;
        author: string;
        score: number;
        comment: string;
        videoId: string;
      }
    ]
  >([
    {
      id: 0,
      name: "none",
      image: "none",
      episodes: 0,
      status: "none",
      description: "none",
      author: "none",
      score: 0,
      comment: "",
      videoId: "",
    },
  ]);

  const notify = () =>
    toast.success("Deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  function getAllAnimes() {
    axios
      .get(`${import.meta.env.VITE_API}/api/animes`)
      .then((res) => getAnimes(res.data.data));
  }

  useEffect(() => {
    getAllAnimes();
  }, []);

  function deleteRecommendation(id: number) {
    axios.delete(`${import.meta.env.VITE_API}/api/anime/${id}`).then(notify);
    getAllAnimes();
  }

  return (
    <>
        <div className="h-full w-full flex flex-col">
            <div className="flex flex-col justify-center h-screen">
                <span className="text-6xl font-bold">Welcome to our anime review site! Let's explore the fascinating world of anime together.</span>
                <span className="text-3xl text-gray-500">The true anime experience.</span>
            </div>
            <FloatButton />
        </div>

        <div className="p-24">
        <div className="w-full flex items-center flex-col p-12 rounded-lg">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col j">
                        <span className="text-4xl font-bold text-blue-500">The next generation anime plataform.</span>
                        <span className="text-2xl text-gray-500">Track, share and discover your favorite anime with Monkeyrecommendation</span>
                    </div>
                </div>
            
                <div className="flex p-3 mt-[10%]">
                    <div className="p-4 flex basis-6/12	">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-blue-500">Discover your obsessions</span>
                                <span className="text-xl text-gray-500">What are your highest rated genres follow your reviews.</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-blue-500">Bring monkeyrecommendation anywhere</span>
                                <span className="text-xl text-gray-500">Keep track of your reviews in your android or iphone.</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 flex basis-6/12">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-blue-500">Join the conversation</span>
                                <span className="text-xl text-gray-500">See other reviews and discover new anime to watch.</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-blue-500">Tweak to your liking</span>
                                <span className="text-xl text-gray-500">Customize your scoring system, title format and much more!</span>
                            </div>
                        </div>
                    </div> 
                </div>
                </div>
        </div>
    </>
  );
};
