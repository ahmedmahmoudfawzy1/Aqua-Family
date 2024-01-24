import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";
// pagination = {{clickable: true}}
export default function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination , Autoplay]}
        pagination = {{clickable : true}}
        navigation
        spaceBetween={5}
        slidesPerView={1}
        // autoplay={true}
        loop={true}
        className="slider"
      >
        <SwiperSlide><img src="/assets/image/designOne.jpg" alt="photo1" /></SwiperSlide>
        <SwiperSlide><img src="/assets/image/fawzy22.jpg" alt="photo2" /></SwiperSlide>
        <SwiperSlide><img src="/assets/image/Untitled-1.jpg"alt="photo3" /></SwiperSlide>
        <SwiperSlide><img src="/assets/image/posterone.jpg" alt="photo4" /></SwiperSlide>
      </Swiper>
    </>
  );
}
