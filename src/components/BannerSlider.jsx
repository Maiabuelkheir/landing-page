import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function BannerSlider() {
  return (
    <div className="slider">
      <div className="container">
        <div className="slide-swp mySwiper">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <a href="#">
                <img src="img/banner_home1.png" alt="Banner 1" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src="img/banner_home2.png" alt="Banner 2" />
              </a>
            </SwiperSlide>
                <SwiperSlide>
              <a href="#">
                <img src="img/banner_home33.png" alt="Banner 3" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="banner_2">
          <a href="#">
            <img src="img/banner_home3.jpg" alt="Banner 3" />
          </a>
        </div>
         
      </div>
      
    </div>
    
  );
}

export default BannerSlider;
