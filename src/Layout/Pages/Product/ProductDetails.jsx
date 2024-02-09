import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React, { useEffect, useRef, useState } from 'react';
import './ProductDetails.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// import ReactStarsRating from 'react-awesome-stars-rating';
// import ReactStars from "react-rating-stars-component";



const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, name, image, price, ratings, quality, category } = product;
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const Navigate = useNavigate();
    const location = useLocation();
    const [rating, setRating] = useState(0)
    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    //};
   
    const [mainImage, setMainImage] = useState(image[0].url)
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        quantity < 8 ? setQuantity(quantity + 1) : setQuantity(8)
    }
    const handleDecrease = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
    }

    //create a new date object
    const currentDate = new Date();

    // get day, month, and year
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based so we add 1
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const date = day + "-" + month + "-" + year + ";" + " " + hour + "." + minutes;

    const handleAddToCart = (product) => {
        if (user) {
            const orderItem = { productId: _id, name, image: mainImage, ratings, price, quality, category, quantity, email: user.email, customerName: user.displayName, status: "payment_pending", date }
            console.log("orderItem", orderItem)
            axiosSecure.post("/carts", orderItem)
                .then(res => {
                    console.log(res.data);
                     if(res.data.insertedId){
                        Swal.fire({
                            icon: "success",
                            title: "Add to cart successfully",
                            showConfirmButton: false,
                            timer: 1000
                          });
                     }
                })
        }
        else{
            Swal.fire({
                title: "Please log in to make a order!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    Navigate("/login", {state: {from:location}})
                }
              });
        }

    }

    return (
        <div className="mx-20 flex flex-col items-center">
            <div className="bg-base-100 px-10 py-7 w-8/12 flex justify-center mt-7 mb-10">
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-serif font-bold pb-3">{name}</p>
                    <figure className=" ">
                        <img className="w-[300px] h-[300px] mb-" src={mainImage} alt="" />
                    </figure>

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
                        className="mySwiper myySwiper rounded-xl "
                    >
                        {/* <SwiperSlide>{image.map(img =>  <img key={img.id} src="" alt="" />)}</SwiperSlide> */}
                        {image.map(img => <SwiperSlide key={img.id} className="w-[100px] pb-2">
                            <img className="w-[100px]" src={img.url} alt="" /></SwiperSlide>)}


                    </Swiper>
                    {/* <div className="flex justify-center gap-2">{image.map(img => <img
                        onClick={() => setMainImage(img.url)}
                        key={img.id}
                        src={img.url}
                        className="w-[50px] border-2 border-black" />)}
                    </div> */}
                </div>
                <div className="card-body text-start">
                    <span className="text-xl  font-semibold">A Authentic product of {category}.
                        <br /> The product is {quality} quality </span>

                    <span className="flex gap-4"><Rating style={{ maxWidth: 100 }} value={ratings} onChange={setRating} /><span className="text-cyan-600">{quality} zone</span></span>
                    {/* <span><ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    /></span> */}
                    <span className="text-start text-sm text-slate-400 border-b-2 mb-3 pb-3">Brand:<span className="text-cyan-600 pl-2 text-sm">No Brand |More {name} from No Brand</span> </span>
                    <span className=" text-orange-500 text-2xl font-semibold ">${price}</span>
                    <span ><span className="text-slate-400">$</span><del className="text-slate-400 pr-1">{price + 200}</del> <span className="font-semibold">-56%</span></span>
                    <span className="font-semibold">Color family</span>
                    <div className="flex justify-start gap-2">{image.map(img => <img
                        onClick={() => setMainImage(img.url)}
                        key={img.id}
                        src={img.url}
                        className="w-[50px] h-[40px] border-2 border-black" />)}
                    </div>

                    <div className="mt-4">
                        <span className="pr-10">Quantity</span>
                        <button onClick={() => handleDecrease()} className=" px-2 mr-2 bg-base-200">-</button>
                        <span >{quantity}</span>
                        <button onClick={() => handleIncrease()} className="px-2 mx-2 bg-base-200">+</button>
                    </div>
                    <div className="mt-3">
                        <button className="w-48 bg-cyan-400 py-2 text-white mr-4">Buy Now</button>
                        <button onClick={() => handleAddToCart(product)} className="w-48 bg-amber-700 py-2 text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;