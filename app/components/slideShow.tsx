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
              <img src="/image/cache/catalog/banners/mainbanner1-1920x950.jpg" alt="Main-banner1" className="img-responsive" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center Main-banner2">
            <a href="#">
              <img src="/image/cache/catalog/banners/mainbanner2-1920x950.jpg" alt="Main-banner2" className="img-responsive" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center Main-banner3">
            <a href="#">
              <img src="/image/cache/catalog/banners/mainbanner3-1920x950.jpg" alt="Main-banner3" className="img-responsive" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
