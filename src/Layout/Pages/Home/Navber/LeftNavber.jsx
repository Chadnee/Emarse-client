import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavber = ({handleCategory, handleAllCategory}) => {


    return (
       <div className='overflow-y-scroll h-[700px]'>
         <Link onClick = {handleAllCategory} ><p className='text-start text-indigo-400 underline '>All</p> </Link>
           <div className='font-semibold text-green-700 font-serif'>
                <Link to="/categoryItem/muslimWear" onClick={handleCategory}>
                   <p className=" text-start pt-2">Muslim Wear</p>
               </Link>
                <Link to="/categoryItem/traditionalWear" onClick={handleCategory}>
                   <p className="text-start pt-2">Traditional Wear</p>
               </Link>
                <Link to="/categoryItem/shoes" onClick={handleCategory}>
                   <p className="text-start pt-2">Shoes</p>
               </Link>
                <Link to="/categoryItem/bags" onClick={handleCategory}>
                  <p className="text-start pt-2">Bags</p>
               </Link>
                <Link to="/categoryItem/watches" onClick={handleCategory}>
                   <p className="text-start pt-2">Watch</p>
               </Link>
                <Link to="/categoryItem/smartphone" onClick={handleCategory}>
                  <p className="text-start pt-2">Smartphone</p>
               </Link>
                <Link to="/categoryItem/television" onClick={handleCategory}>
                   <p className="text-start pt-2">Television</p>
               </Link>
                <Link to="/categoryItem/camera" onClick={handleCategory}>
                   <p className="text-start pt-2">Camera</p>
               </Link>
                <Link to="/categoryItem/laptop" onClick={handleCategory}>
                   <p className="text-start pt-2">Laptop</p>
               </Link>
                <Link to="/categoryItem/desktop" onClick={handleCategory}>
                  <p className="text-start pt-2">Desktop</p>
               </Link>
                <Link to="/categoryItem/fruitsMeats&Frozen" onClick={handleCategory}>
                   <p className="text-start pt-2">Fruits Meat & Frozen</p>
               </Link>
                <Link to="/categoryItem/cookingIngredient" onClick={handleCategory}>
                  <p className="text-start pt-2">Cooking Ingredient</p>
               </Link>
                <Link to="/categoryItem/snacks&Eggs" onClick={handleCategory}>
                   <p className="text-start pt-2">Snacks & Eggs</p>
               </Link>
                <Link to="/categoryItem/laundry&Household" onClick={handleCategory}>
                   <p className="text-start pt-2">Laundry & Household</p>
               </Link>
                <Link to="/categoryItem/motorbike" onClick={handleCategory}>
                  <p className="text-start pt-2">Motorbike</p>
               </Link>
                <Link to="/categoryItem/sportsShoes&Clothing" onClick={handleCategory}>
                  <p className="text-start pt-2">Sports Ingredient</p>
               </Link>
                <Link to="/categoryItem/outdoorSportsIngredient" onClick={handleCategory}>
                  <p className="text-start pt-2">Outdoor Sports</p>
               </Link>
                <Link to="/categoryItem/boxing&MartialArts" onClick={handleCategory}>
                   <p className="text-start pt-2">Boxing and Martial</p>
               </Link>
                <Link to="/categoryItem/furniture" onClick={handleCategory}>
                  <p className="text-start pt-2">Furniture</p>
               </Link>
                <Link to="/categoryItem/cleaner" onClick={handleCategory}>
                  <p className="text-start pt-2">Cleaner</p>
               </Link>
                <Link to="/categoryItem/bedding" onClick={handleCategory}>
                   <p className="text-start pt-2">Bedding</p>
               </Link>
                <Link to="/categoryItem/media&Music" onClick={handleCategory}>
                  <p className="text-start pt-2">Media & Music</p>
               </Link>
                <Link to="/categoryItem/kidsWatches" onClick={handleCategory}>
                  <p className="text-start pt-2">Kid's watches</p>
               </Link>
                <Link to="/categoryItem/man'sJewellery" onClick={handleCategory}>
                  <p className="text-start pt-2">Man's jewellery</p>
               </Link>
                <Link to="/categoryItem/skinCare" onClick={handleCategory}>
                   <p className="text-start pt-2">Skin Care</p>
               </Link>
                <Link to="/categoryItem/healthCare" onClick={handleCategory}>
                   <p className="text-start pt-2">Health Care</p>
               </Link>
                <Link to="/categoryItem/hairCare" onClick={handleCategory}>
                  <p className="text-start pt-2">Hair Care</p>
               </Link>
                <Link to="/categoryItem/makeup" onClick={handleCategory}>
                   <p className="text-start pt-2">Make Up</p>
               </Link>
                <Link to="/categoryItem/men'sCare" onClick={handleCategory}>
                   <p className="text-start pt-2">Men's Care</p>
               </Link>
                <Link to="/categoryItem/bath&Body" onClick={handleCategory}>
                  <p className="text-start pt-2">Bath & Body</p>
               </Link>
                <Link to="/categoryItem/leatherBag" onClick={handleCategory}>
                  <p className="text-start pt-2">Leather Bag</p>
               </Link>
                <Link to="/categoryItem/leatherWatches" onClick={handleCategory}>
                   <p className="text-start pt-2">Leather Watches</p>
               </Link>
                <Link to="/categoryItem/leatherBelt" onClick={handleCategory}>
                   <p className="text-start pt-2">Leather Belt</p>
               </Link>
        </div>
       </div>
    );
};

export default LeftNavber;