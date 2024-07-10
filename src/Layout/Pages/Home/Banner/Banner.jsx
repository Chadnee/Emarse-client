import img1 from '../../../../assets/carousal/img1.jpg'
import img2 from '../../../../assets/carousal/img2.jpg'
import img3 from '../../../../assets/carousal/img3.jpg'
import img4 from '../../../../assets/carousal/img4.jpg'
import vedio1 from '../../../../assets/vedio/pexels-kindel-media-6774633 (Original).mp4'
import vedio2 from '../../../../assets/vedio/pexels-mart-production-7680115 (2160p).mp4'
import './Banner.css'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from '../../../../hooks/useProducts'
const Banner = () => {
  const [product] = useProducts()
  console.log(product)

  const vedioRef1 = useRef(null);
  useEffect(() => {
    vedioRef1.current.play();
  }, []);
  const vedioRef2 = useRef(null);
  useEffect(() => {
    vedioRef2.current.play();
  }, []);
  
  return (

    <div className='md:flex lg:flex mt-2 h-[400px] gap-4 justify-between'>
      <div className='md:flex lg:flex hidden md:visible lg:visible w-full flex-col gap-2'>
      <video className='h-1/2  w-full rounded-2xl' ref={vedioRef1}  controls autoPlay>
        <source src={vedio1} type="video/mp4" />
      </video>
      <video className='h-1/2 w-full rounded-2xl' ref={vedioRef2}  controls autoPlay>
        <source src={vedio2} type="video/mp4" />
      </video>
     </div>
      <div className='h-1/2 '>
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
          modules={[Autoplay, Navigation]}
          className="mySwiper  rounded-xl "
        >
          <SwiperSlide className=''><img className='' src={img1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='' src={img2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='' src={img3} alt="" /></SwiperSlide>
          <SwiperSlide><img className='' src={img4} alt="" /></SwiperSlide>


        </Swiper>
      </div>
     
    </div>
  );
};

export default Banner;