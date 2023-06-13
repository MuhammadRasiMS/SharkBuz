import './TopDeals.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import MainCard from '../MainCard/MainCard';
import "swiper/css"
import  "swiper/css/free-mode"
import "swiper/css/pagination"
import { Pagination, Autoplay } from 'swiper';

const TopDeals = ({ topdealSlide }) => {
  return (
    <div className="topdeals">
      <div className="topdeals-datas">
        <p>Top Deals</p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          direction="vertical"
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={2000}
          modules={[Pagination, Autoplay]}
          className="topdeals-swiper"
        >
          {topdealSlide.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="deal-item">
                  <div className="deal-image">
                    <img src={item.url} alt="deal-image" />
                  </div>
                  <div className="win">
                    <span>Win&nbsp;</span>
                    <h4>{item.title}</h4>
                    <p>Play & win</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> 
      {/* <MainCard /> */}
    </div>
  );
};

export default TopDeals