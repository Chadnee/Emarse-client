import { FaHouseCircleCheck, FaArrowRightLong } from "react-icons/fa6";
import useProducts from "../../../../hooks/useProducts";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { Autoplay, Navigation } from 'swiper/modules';

const Category = () => {

   return (
      <div className="mt-8 mb-10">
         <p className="text-start font-serif font-bold text-3xl mx-5 lg:mx-7 md:mx-7 pb-3">Categories</p>
         <div className="invisible md:visible lg:visible">
         <div className=" md:grid lg:grid  shadow-lg bg-base-100 gap-2 mx-5 grid-cols-2 md:grid-cols-10 lg:grid-cols-10">
            <Link to="/categoryItem/muslimWear"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/man-praying-floor-indoors_23-2148869303.jpg?w=900&t=st=1700934985~exp=1700935585~hmac=4ff50df08c03bd968a4adbd4db7ac636b2b2745bb473b86d0c485fdc1255ebcc" alt="" />
               <p className="text-center">Muslim Wear</p>
            </div></Link>
            <Link to="/categoryItem/traditionalWear"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/knitting-golden-ribbon-tissue_114579-12290.jpg?w=900&t=st=1700935464~exp=1700936064~hmac=bc717070bb37e02fd5858b47f97b8a372a8d6529102ff2b60de468010f99d00e" alt="" />
               <p className="text-center">Traditional Wear</p>
            </div></Link>
            <Link to="/categoryItem/shoes"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?w=740&t=st=1700936262~exp=1700936862~hmac=79d5d5c83aa80f8e2ca444418f554e9285cc3846a474ed67597a789d3b5b6ad8" alt="" />
               <p className="text-center">Shoes</p>
            </div></Link>
            <Link to="/categoryItem/bags"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?w=360&t=st=1700936919~exp=1700937519~hmac=67e3a2d8da8d90c89baf76a824474c6025827afac3e95e957e7b3bbf437a0a3c" alt="" />
               <p className="text-center">Bags</p>
            </div></Link>
            <Link to="/categoryItem/watches"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?w=740&t=st=1700937133~exp=1700937733~hmac=4a272112641cabcd4cea36d147268cd5e7f68dd1a405b9ea9b77754adaf38bf5" alt="" />
               <p className="text-center">Watch</p>
            </div></Link>
            <Link to="/categoryItem/smartphone"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-psd/shiny-smartphone-mock-up_1310-186.jpg?w=900&t=st=1700937564~exp=1700938164~hmac=43dece452ba2af3841cfbc97d6ea46d11d219558b3db58e1e47002e95cb6f399" alt="" />
               <p className="text-center">Smartphone</p>
            </div></Link>
            <Link to="/categoryItem/television"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg?w=900&t=st=1700937903~exp=1700938503~hmac=4c4bdae66d605abb9da8d2022243c33108f7553f58eaf050036d9db47a3dcb02" alt="" />
               <p className="text-center">Television</p>
            </div></Link>
            <Link to="/categoryItem/camera"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg?w=740&t=st=1700938059~exp=1700938659~hmac=42ff4df2c45725f96a28c42b49b96704b3bb872f19b234ac64275813b8253e62" alt="" />
               <p className="text-center">Camera</p>
            </div></Link>
            <Link to="/categoryItem/laptop"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?w=900&t=st=1700938260~exp=1700938860~hmac=3c74aa76b31ea991b75159bbcc1977c3d5c9c622e19b683d0c17d6bdd597491f" alt="" />
               <p className="text-center">Laptop</p>
            </div></Link>
            <Link to="/categoryItem/desktop"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-psd/realistic-computer-design_1310-689.jpg?w=900&t=st=1700938457~exp=1700939057~hmac=ed4bf9616969d2ffacd081974ce58f94cf1647fdc435f1a9b42c495ed91ec0c7" alt="" />
               <p className="text-center">Desktop</p>
            </div></Link>
            <Link to="/categoryItem/fruitsMeats&Frozen"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/frozen-food-table-arrangement_23-2148969451.jpg?w=900&t=st=1700939082~exp=1700939682~hmac=1c5383083e9b24506e9e7f515ec1d2f56f10fc02e2d1c71b74f136c75edc4214" alt="" />
               <p className="text-center">Fruits Meat & Frozen</p>
            </div></Link>
            <Link to="/categoryItem/cookingIngredient"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/premium-photo/thai-cooking-ingredients-spices-vegetables-fruits-herbs-seafood-meat_147376-90.jpg?w=360" alt="" />
               <p className="text-center">Cooking Ingredient</p>
            </div></Link>
            <Link to="/categoryItem/snacks&Eggs"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/fried-crutones-with-fried-eggs-orange-fresh_140725-4670.jpg?w=740&t=st=1700941097~exp=1700941697~hmac=1a9165dca13c67644dfa50ffed809605b27cc819530f90228211e9447d2eac71" alt="" />
               <p className="text-center">Snacks & Eggs</p>
            </div></Link>
            <Link to="/categoryItem/laundry&Household"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/electric-iron-pile-clothes_93675-131460.jpg?w=900&t=st=1700941397~exp=1700941997~hmac=e6979cbe833ff0906edd4399380c1593c574b564e2d63be786a04757622fd483" alt="" />
               <p className="text-center">Laundry & Household</p>
            </div></Link>
            <Link to="/categoryItem/motorbike"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg?w=900&t=st=1700958283~exp=1700958883~hmac=d627554ccd65622c834da95d6ec8cb0870daf463f873d354fb343172e49fd5db" alt="" />
               <p className="text-center">Motorbike</p>
            </div></Link>
            <Link to="/categoryItem/sportsIngredient"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/sports-clothing-kit-sport-running_1303-1733.jpg?w=900&t=st=1700958547~exp=1700959147~hmac=f30ec2d5b13ce5ee24f892f82e29f28c5449433a696f163dde3af3bbc8776184" alt="" />
               <p className="text-center">Sports Ingredient</p>
            </div></Link>
            <Link to="/categoryItem/outdoorSports"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/ba-sport-workout-kit-sports_1303-1726.jpg?w=900&t=st=1700958721~exp=1700959321~hmac=03e590bb8f91728093d7976ce2030508a25cb7bddaeb98a6bdc989c7aaa72d37" alt="" />
               <p className="text-center">Outdoor Sports</p>
            </div></Link>
            <Link to="/categoryItem/boxing&Martial"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/bright-red-yellow-boxing-glove-professional-sport-equipment-isolated-green-studio-background-concept-sport-activity-movement-healthy-lifestyle-wellbeing-modern-colors_155003-36246.jpg?w=360&t=st=1700959385~exp=1700959985~hmac=b59da3a543fa5259f68cd2e6e2d6aac6063ab86878c72269dc647e2c507c4636" alt="" />
               <p className="text-center">Boxing and Martial</p>
            </div></Link>
            <Link to='/categoryItem/furniture'><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-gray-tone_53876-132806.jpg?w=900&t=st=1700959578~exp=1700960178~hmac=e12e954f8475c872e23bed1f379d93449df321e2fed58b8b0af7466d2f99e0af" alt="" />
               <p className="text-center">Furniture</p>
            </div></Link>
            <Link to="/categoryItem/cleaner"><div className="border-2 h-40 flex flex-col items-center border-slate-400 p-2">
               <img className="h-24 w-full" src="https://img.freepik.com/free-vector/detergents-clothes-vertical-banner-set_1284-20780.jpg?w=740&t=st=1700959773~exp=1700960373~hmac=164ad8a52ce38b8d3a2966302cc808535b21f0955ea545aadf2f4c88be9131bf" alt="" />
               <p className="text-center">Cleaner</p>
            </div></Link>
         </div>
         <Link to="/allCategory/traditionalWear" className="flex flex-col items-center"><p className="bg-gradient-to-r from-amber-700 to-amber-300 py-2  h-7 mt-8 px-4 rounded-xl text-white btn">Show more categories <FaArrowRightLong></FaArrowRightLong> </p> </Link>
         
         </div>
         
        <div className="md:hidden lg:hidden -mt-[3280px]">
        <div className=" grid shadow-lg bg-base-100 gap-0 mx-5 grid-cols-5">
         <Link to="/categoryRaw/motorbike"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg?w=900&t=st=1700958283~exp=1700958883~hmac=d627554ccd65622c834da95d6ec8cb0870daf463f873d354fb343172e49fd5db" alt="" />
               <p className="text-center text-[10px]">Motorbike</p>
            </div></Link>
            <Link to='/categoryRaw/furniture'><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-gray-tone_53876-132806.jpg?w=900&t=st=1700959578~exp=1700960178~hmac=e12e954f8475c872e23bed1f379d93449df321e2fed58b8b0af7466d2f99e0af" alt="" />
               <p className="text-center text-[10px]">Furniture</p>
            </div></Link>
            <Link to="/categoryRaw/shoes"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?w=740&t=st=1700936262~exp=1700936862~hmac=79d5d5c83aa80f8e2ca444418f554e9285cc3846a474ed67597a789d3b5b6ad8" alt="" />
               <p className="text-center text-[10px]">Shoes</p>
            </div></Link>
            <Link to="/categoryRaw/bags"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?w=360&t=st=1700936919~exp=1700937519~hmac=67e3a2d8da8d90c89baf76a824474c6025827afac3e95e957e7b3bbf437a0a3c" alt="" />
               <p className="text-center text-[10px]">Bags</p>
            </div></Link>
            <Link to="/categoryRaw/watches"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?w=740&t=st=1700937133~exp=1700937733~hmac=4a272112641cabcd4cea36d147268cd5e7f68dd1a405b9ea9b77754adaf38bf5" alt="" />
               <p className="text-center text-[10px]">Watch</p>
            </div></Link>
            <Link to="/categoryRaw/smartphone"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-psd/shiny-smartphone-mock-up_1310-186.jpg?w=900&t=st=1700937564~exp=1700938164~hmac=43dece452ba2af3841cfbc97d6ea46d11d219558b3db58e1e47002e95cb6f399" alt="" />
               <p className="text-center text-[10px]">Smartphone</p>
            </div></Link>
            <Link to="/categoryRaw/television"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg?w=900&t=st=1700937903~exp=1700938503~hmac=4c4bdae66d605abb9da8d2022243c33108f7553f58eaf050036d9db47a3dcb02" alt="" />
               <p className="text-center text-[10px]">Television</p>
            </div></Link>
            <Link to="/categoryRaw/camera"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg?w=740&t=st=1700938059~exp=1700938659~hmac=42ff4df2c45725f96a28c42b49b96704b3bb872f19b234ac64275813b8253e62" alt="" />
               <p className="text-center text-[10px]">Camera</p>
            </div></Link>
            <Link to="/categoryRaw/laptop"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?w=900&t=st=1700938260~exp=1700938860~hmac=3c74aa76b31ea991b75159bbcc1977c3d5c9c622e19b683d0c17d6bdd597491f" alt="" />
               <p className="text-center text-[10px]">Laptop</p>
            </div></Link>
            <Link to="/categoryRaw/desktop"><div className="border-2 h-24 flex flex-col items-center border-black p-2">
               <img className="h-16 w-full" src="https://img.freepik.com/free-psd/realistic-computer-design_1310-689.jpg?w=900&t=st=1700938457~exp=1700939057~hmac=ed4bf9616969d2ffacd081974ce58f94cf1647fdc435f1a9b42c495ed91ec0c7" alt="" />
               <p className="text-center text-[10px]">Desktop</p>
            </div></Link>
         </div>
         <Link to="/allCategory" className="flex flex-col items-center"><p className="bg-gradient-to-r from-amber-700 to-amber-300 mt-8 px-4 rounded-xl text-sm text-white btn">Show more categories<FaArrowRightLong className="text-center"></FaArrowRightLong> </p> </Link>
      
        </div>
      </div>
   );
};

export default Category;

