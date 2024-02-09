import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner2.css'
import img1 from "../../../../assets/advertising/adver1.jpg"
import img2 from "../../../../assets/advertising/adver2.jpg"
import img3 from "../../../../assets/advertising/adver3.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner2 = () => {
    return (
        // <center>
          <div className='w-full margin'>
            {/* <div className='flex mt-28 mb-16 items-center justify-center w-[900px] h-[200px] overflow-hidden rounded-full'> */}
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mx-28  w-full h-full "
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
        // </center>
    );
};

export default Banner2;