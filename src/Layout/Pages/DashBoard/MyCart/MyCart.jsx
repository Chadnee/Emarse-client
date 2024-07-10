
import useCart from '../../../../hooks/useCart'
import CartItem from './CartItem'
import add1 from "../../../../assets/advertising/adver1.jpg"
import add2 from "../../../../assets/advertising/adver2.jpg"
import add3 from "../../../../assets/advertising/adver3.jpg"
import { useRef, useState } from 'react';
import './MyCart.css'
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const MyCart = () => {
    const [cart] = useCart();
    return (
        <div className='h-full md:bg-none lg:bg-none bg-sl w-full md:my-8 lg:my-8 my-20'>
           {/* <div className=''>
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
          <SwiperSlide className=''><img className='' src={add1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='' src={add2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='' src={add3} alt="" /></SwiperSlide>


        </Swiper>
            </div> */}
            <div className='flex  flex-col gap-2 mx-2 md:mx-36'>
            {
                cart.map(item=>{if(item.status === "payment_pending")return<CartItem  
                key = {item._id}
                item={item}></CartItem>})
            }
            </div>
        </div>
    );
};

export default MyCart;