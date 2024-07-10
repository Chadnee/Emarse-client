import useProducts from '../../../../hooks/useProducts';
import ArrivalItems from './ArrivalItems';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Arrival = () => {
    const [product] = useProducts()

    const arrivalProductAll = product.filter(product => (product.ratings === 4))
    const arrivalProduct = arrivalProductAll.slice(16,26)
    console.log(arrivalProduct)
    const per = arrivalProduct.map(product =>parseInt((product.price/((product.price+200)-product.price))*100))
   // const per = parseInt((perProduct/((perProduct+200)-perProduct))*100)
   // console.log(perProduct)
    console.log(per)
    return (
        <div className='bg-zinc-300'>
            <p className='text-zinc-900 px-8 py-4 text-start text-2xl uppercase font-serif font-bold'>New Arrivals</p>
           <div className='visible md:hidden lg:hidden  mb-20'>
           <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
         <div>
        {arrivalProduct.map(product => <SwiperSlide key = {product._id}>
              <Link to = {`/products/${product._id}`}>
                <img className='h-[200px] w-[250px]' src={product.image[0].url}  alt="" />
                <p className='font-bold'>{product.name}</p>
                <p className='flex justify-between pb-10 px-1'><span className=''>{product.price}</span> <span>-{parseInt((product.price/((product.price+200)-product.price))*100)}%</span></p>
              </Link>
        </SwiperSlide> )}
        </div>
      </Swiper>
           </div>
            
            <div className='hidden md:visible lg:visible lg:grid md:grid md:grid-cols-5 lg:grid-cols-5 mx-7 mb-14 gap-3 justify-center items-center '>
                {arrivalProduct.map(product =><ArrivalItems
                key = {product._id} product = {product}></ArrivalItems> )}
            </div>
        </div>
    );
};

export default Arrival;