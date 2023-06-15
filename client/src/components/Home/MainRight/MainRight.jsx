import './MainRight.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import {  Autoplay, EffectFade } from "swiper";
const MainRight = () => {
  return (
    <div className="mainright-container">
      <Swiper
        slidesPerView={2}
        direction="vertical"
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect="fade" // Set the effect to 'fade'
        fadeEffect={{
          crossFade: true, // Enable crossFade for smoother transition
        }}
        speed={3000}
        modules={[EffectFade, Autoplay]}
        className="swiper-main"
      >
        <SwiperSlide>
          <div className="mainright1">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>
                Daily <br /> Draw & Games
              </h1>
              <div className="get-container">
                <p>₹10</p>
                <div className="get-it-now">
                  <h2>+ Get it now</h2>
                </div>
              </div>
            </div>
            <div className="draw-product">
              <img src="../../src/assets/images/earpod.png" alt="" />
            </div>
          </div>
          <div className="mainright2">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>
                Weekly <br /> Draw & Games
              </h1>
              <div className="get-container">
                <p>₹10</p>
                <button className="get-it-now">
                  <h2>+ Get it now</h2>
                </button>
              </div>
            </div>
            <div className="draw-product2">
              <img src="../../src/assets/images/iphone2.png" alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mainright3">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>
                Monthly <br /> Draw & Games
              </h1>
              <div className="get-container">
                <p>₹10</p>
                <div className="get-it-now">
                  <h2>+ Get it now</h2>
                </div>
              </div>
            </div>
            <div className="draw-product">
              <img src="../../src/assets/images/earpod.png" alt="" />
            </div>
          </div>
          <div className="mainright4">
            <div className="left-section">
              <div className="year">
                <p>2020</p>
              </div>
              <h1>
                Yearly <br /> Draw & Games
              </h1>
              <div className="get-container">
                <p>₹10</p>
                <button className="get-it-now">
                  <h2>+ Get it now</h2>
                </button>
              </div>
            </div>
            <div className="draw-product2">
              <img src="../../src/assets/images/iphone2.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainRight