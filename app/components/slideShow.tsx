"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SlideShow() {
  return (
    <>
      <div className="slideshow">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className="text-center Main-banner1">
            <a href="#">
              <img src="https://res.cloudinary.com/dbnslnawc/image/upload/v1697723202/hellweenshop/vf4c0ttxjy68izalqla5.jpg" alt="Main-banner1" className="img-responsive" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center Main-banner2">
            <a href="#">
              <img src="https://res.cloudinary.com/dbnslnawc/image/upload/v1697723201/hellweenshop/xazh7f5dafrlu1fmcy0y.jpg" alt="Main-banner2" className="img-responsive" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center Main-banner3">
            <a href="#">
              <img src="https://res.cloudinary.com/dbnslnawc/image/upload/v1697723196/hellweenshop/b0o5r0xj9d4ysjaidtb0.jpg" alt="Main-banner3" className="img-responsive" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
