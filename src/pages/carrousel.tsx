import { useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Link } from "@tanstack/react-router";
import { House } from "@phosphor-icons/react";

const images = [
  "https://images.alphacoders.com/131/1311951.jpg",
  "https://w.wallhaven.cc/full/p9/wallhaven-p92zqj.png",
  "https://cdn.wallpapersafari.com/55/83/Pl6QHc.jpg",
  "https://wallpapercave.com/wp/wp12324408.jpg",
  "https://getwallpapers.com/wallpaper/full/f/7/c/500676.jpg",
  "https://cdn.wallpapersafari.com/68/11/t9vZSU.jpg",
];

export function CarrouselPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    const nextNextIndex = (currentIndex + 2) % images.length;

    return [
      images[prevIndex],
      images[currentIndex],
      images[nextIndex],
      images[nextNextIndex],
    ];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform ease-in-out duration-[5000ms]">
          {getVisibleImages().map((image, index) => {
            const isMain = index === 1 || index === 2;
            return (
              <div
                key={index}
                className={`${
                  isMain ? "w-1/3" : "w-1/6"
                } min-w-[16.66%] p-2 ${
                  isMain ? "" : "scale-75 opacity-30"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full rounded-lg"
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full bg-black bg-opacity-50 p-2"
        >
          <CaretLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full bg-black bg-opacity-50 p-2"
        >
          <CaretRight size={24} />
        </button>
      </div>
      <Link
        to="/"
        className="bg-blue-500 fixed bottom-6 right-6 rounded-3xl h-12 w-12 flex justify-center items-center"
      >
        <House size={24} color="white" />
      </Link>
      <div className="flex mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
