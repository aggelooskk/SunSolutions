import { useState } from "react";
import images from "../carousel.json";

function SolarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover transition duration-500"
      />
      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2"
      >
        &#8594;
      </button>
    </div>
  );
}

export default SolarCarousel;
