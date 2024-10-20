"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,FreeMode, Pagination, Autoplay } from "swiper/modules";

// swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Slider() {
  return (
    <div className="bg-indigo-700/100 w-full ">
      <Swiper
        spaceBetween={0}
        freeMode={true}
        autoplay={true}
        navigation={true}
        loop={true}
        speed={400}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
         
      >
        <SwiperSlide>
          <div>
            <img
              src="/callof.jpg"
              className="w-full h-[300px] xl:h-[400px] "
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/pubg.jpg"
              className="w-full h-[300px] xl:h-[400px]  "
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="/tiktok.png"
              className="w-full h-[300px] xl:h-[400px]  "
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
