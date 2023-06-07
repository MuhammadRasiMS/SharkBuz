import "./MainCard.css";
import {useEffect, useState, useRef, useCallback} from 'react';
import React from 'react';

const MainCard = ({slides}) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
  useEffect(()=>{
    if (timerRef.current){
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(()=>{
      goToNext();
    }, 3500);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);
  return (
    <div className="slider">
      <div className="free-to-play">
        <button>Free to Play</button>
      </div>
      <div className="left-arrow" onClick={goToPrevious}></div>
      <div className="right-arrow" onClick={goToNext}></div>
      <div className="image">
        <img src={slides[currentIndex].image} alt="products" />
      </div>
      <div className="title">{slides[currentIndex].title}</div>
      <div className="description">{slides[currentIndex].description}</div>
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
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* <div className="dots-container">
        {slides.map((slide, slideIndex) => (
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
}

export default MainCard
