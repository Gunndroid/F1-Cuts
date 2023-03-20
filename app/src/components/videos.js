import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const VerticalVideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? videos.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === videos.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="vertical-video-carousel">
      <div className="video-container">
        <video src={videos[currentIndex]} autoPlay muted loop />
      </div>
      <div className="controls">
        <button onClick={handlePrevClick}>
          <FaChevronUp />
        </button>
        <button onClick={handleNextClick}>
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default VerticalVideoCarousel;
