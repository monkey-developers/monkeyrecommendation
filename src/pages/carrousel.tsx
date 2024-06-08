import { useState, useEffect, SetStateAction } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

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

  const handleIndicatorClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full"
          >
            <CaretLeft size={48} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full"
          >
            <CaretRight size={48} />
          </button>
        </div>
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
    </>
  );
}
