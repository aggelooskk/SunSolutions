import { useEffect, useState } from "react";
import images from "../carousel";

function SolarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 m-4 rounded-2xl shadow-lg overflow-hidden">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full object-contain transition duration-1000 ease-in-out"
      />
    </div>
  );
}

export default SolarCarousel;
