import React from 'react';
import { Link } from 'react-router-dom';

const ListCategory = ({item}) => {
    const { _id, name, image, price, ratings, quality, category } = item;
    return (
        <Link to={`/products/${_id}`} className='border-2  w-8/12'>
            <div className='flex'>
                <figure className='w-[600px]  my-6'><img className='h-[170px] mx-7 w-[170px] flex flex-col items-center justify-center' src={image[0].url} alt="" /></figure>
                <div className='text-start py-6 pr-7 h-[170px]'>
                   <p className='font-bold pb-4'>{name}</p>
                   <p className='text-cyan-500 font-semibold'>${price}</p>
                   <p className='text-[14px] font'>A authentic product which is more easiest wearable and made by chaina or Uk. six month gurrantee will be provide after purchasing and home delivary is available. </p>
                   <Link to={`/products/${_id}`}>
                   <button className='bg-cyan-500 text-sm text-white font-semibold px-4 py-1 mt-5'>Read more</button>
                   </Link>
                </div>
            </div>
        </Link>
    );
};

export default ListCategory;