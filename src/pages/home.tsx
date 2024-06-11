import "react-toastify/dist/ReactToastify.css";
import { Link } from "@tanstack/react-router";
import { List, Slideshow, SelectionBackground } from "@phosphor-icons/react";
import { getUser } from "../storage/localStorage";

import { FloatButton } from "../components";

export const HomePage = () => {
  const user = getUser();

  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="flex flex-col justify-center h-screen">
          <span className="text-6xl font-bold">
            Welcome to our anime review site! Let's explore the fascinating
            world of anime together.
          </span>
          <span className="text-3xl text-gray-500">
            The true anime experience.
          </span>
        </div>

        <FloatButton />
        <Link
          to="/review"
          className="bg-blue-500 fixed bottom-20 right-6 rounded-3xl h-12 w-12 flex items-center justify-center"
        >
          <List size={48} color="white" />
        </Link>
        <Link
          to="/carrousel"
          className="bg-blue-500 fixed bottom-[8.5rem] right-6 rounded-3xl h-12 w-12 flex items-center justify-center"
        >
          <Slideshow size={42} />
        </Link>
        <Link
          to="/background"
          className="bg-blue-500 fixed bottom-[12rem] right-6 rounded-3xl h-12 w-12 flex items-center justify-center"
        >
          <SelectionBackground size={42} />
        </Link>
      </div>

      <div className="p-24">
        <div className="w-full flex items-center flex-col p-12 rounded-lg">
          <div className="flex items-center justify-center">
            <div className="flex flex-col j">
              <span className="text-4xl font-bold text-blue-500">
                The next generation anime plataform.
              </span>
              <span className="text-2xl text-gray-500">
                Track, share and discover your favorite anime with
                Monkeyrecommendation
              </span>
            </div>
          </div>

          <div className="flex p-3 mt-[10%]">
            <div className="p-4 flex basis-6/12	">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-500">
                    Discover your obsessions
                  </span>
                  <span className="text-xl text-gray-500">
                    What are your highest rated genres follow your reviews.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-500">
                    Bring monkeyrecommendation anywhere
                  </span>
                  <span className="text-xl text-gray-500">
                    Keep track of your reviews in your android or iphone.
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 flex basis-6/12">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-500">
                    Join the conversation
                  </span>
                  <span className="text-xl text-gray-500">
                    See other reviews and discover new anime to watch.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-500">
                    Tweak to your liking
                  </span>
                  <span className="text-xl text-gray-500">
                    Customize your scoring system, title format and much more!
                  </span>
                </div>
              </div>
            </div>
          </div>
          {!user && (
            <Link to="/register">
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Register Now!
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
