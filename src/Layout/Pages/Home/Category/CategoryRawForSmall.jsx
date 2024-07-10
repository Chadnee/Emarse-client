import React, { useEffect, useState } from 'react';
import { FaListAlt } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const CategoryRawForSmall = () => {
    const category = useLoaderData();
    const [gridMode, setGridMode] = useState(true);

    const handleRawCategory = () => {
        setGridMode(true);
    }
    const handleListCategory = () => {
        setGridMode(false);
    }
   console.log(category)
    
    useEffect(() => {
        AOS.init({
            // Add AOS configurations here if needed
        });
    }, []); // Initialize AOS only once when the component mounts

    
    return (
        <div>
            <div className="flex  items-center mx-3 mb-3 gap-4">
                  <button className="bg-slate-300 text-2xl mt-24" onClick={()=>handleRawCategory()}><IoGrid ></IoGrid></button>
                  <button className="bg-slate-300 text-2xl mt-24" onClick={()=>handleListCategory()}><FaListAlt></FaListAlt></button>
               </div>
         {
            gridMode? <div className='grid  grid-cols-2 mx-5 mb-10 gap-2 justify-center items-center'>
            {
                category.map(item =>(<div className='' key={item._id}>
                      <Link to={`/products/${item._id}`} className=''>
      <div data-aos={`${gridMode} && 'zoom-in'`} className="card bg-black h-[230px]  border-4 border-zinc-700 shadow-xl rounded-none mb-2">
           <img className="  w-full h-[170px]" src={item.image[0].url} alt="" />
           {/* <div className="relative top-5"> */}
             <p className="absolute right-1 top-2 font-serif bg-black rounded-xl px-4 py-1 text-[12px] text-white">{item.quality}</p>
           {/* </div> */}
           <div className="flex text-white px-3 py-3 justify-between items-center">
              <p className="text-[13px]  font-serif">{item.name}</p>
              <p className="text-[13px] ">${item.price}</p>
           </div>
      </div>
   </Link>
                </div>) )
            }
        </div>
        :
        <div className="flex flex-col mb-10 overflow-hidden  justify-center items-center">
            {
                category.map(item => (<div   key={item._id}>
                     <Link to={`/products/${item._id}`} className='border-2  '>
            <div data-aos={`${!gridMode} && 'fade-left'`} className='flex items-center justify-center -my-3 border-2 gap-6 mx-3 h-[170px]'>
                <figure className='w-[250px]'><img className=' mx-2 h-[130px] flex flex-col items-center justify-center' src={item.image[0].url} alt="" /></figure>
                <div className='text-start py-2 pr-2 '>
                   <p className='font-bold pb-1'>{item.name}</p>
                   <p className='text-cyan-500 text-sm font-semibold'>${item.price}</p>
                   <p className='text-[10px] font '>A authentic product which is more easiest wearable and made by chaina or Uk. six month gurrantee will be provide after purchasing and home delivary is available. </p>
                   <Link to={`/products/${item._id}`}>
                   <button className='bg-cyan-500 text-[12px] text-white font-semibold px-2 py-1 mt-3'>Read more</button>
                   </Link>
                </div>
            </div>
        </Link>
                </div>))
            }
        </div>
         }
        </div>
    );
};

export default CategoryRawForSmall;