import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/swiper.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Swipers = () => {
  return (
    <div style={{color:'#FAFAFA'}} className="container pt-5">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img width={"100%"} src="image.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={"100%"} src="image.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={"100%"} src="image.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="gallery d-flex justify-content-between mt-5">
        <div className="gallery-card"><img width={'100%'} src="skin.png" alt="" /></div>
        <div className="gallery-card"><img width={'100%'}  src="skin2.png" alt="" /></div>
        <div className="gallery-card"><img width={'100%'} src="skn3.png" alt="" /></div>

      </div>
    </div>
  );
};

export default Swipers;
