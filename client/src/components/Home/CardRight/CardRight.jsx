import "./CardRight.css";
import { useEffect, useState, useRef, useCallback } from "react";
import React from "react";

const CardRight = ({ slides2 }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides2.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides2]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);
  return (
    <div className="slider">
      <div className="left-arrow" onClick={goToPrevious}></div>
      <div className="right-arrow" onClick={goToNext}></div>
      <div className="image1">
        <img src={slides2[currentIndex].image} alt="products" />
      </div>
      <div className="title">{slides2[currentIndex].title}</div>
      <div className="description1">{slides2[currentIndex].description}</div>
      <div className="card-bottom">
        <div>
          <p className="count">545K+ played</p>
        </div>
        <div>
          <button>Get it now</button>
        </div>
      </div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides2[currentIndex].url})` }}
      ></div>
      {/* <div className="dots-container">
        {slides2.map((slide, slideIndex) => (
          <div
            className="dots"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            —
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CardRight;
