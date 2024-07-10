import React, { useEffect, useState } from 'react';
import JustForItems from './JustForItems';
import useProducts from '../../../../hooks/useProducts';
import useAuth from '../../../../hooks/useAuth';
import { FaCircleDollarToSlot, FaCoins, FaGratipay, FaHandshake, FaHouseCircleCheck, FaRotateLeft, FaTruck } from "react-icons/fa6";

const JustForProducts = () => {
    const [product, productLoading] = useProducts()
    const [justFor, setJustFor] = useState([])
    
    // const justForAll = product.filter(p
    // useEffect(() => {
    //     // if(!loading && product.length >0 ){
    //         showProducts(justFor);
        
    // }, [product]);

    // const showProducts = products => {
    //     const justForAll = product.filter(product => (product.ratings === 4))
    //     const justForLimited = justForAll.slice(0,5);
    //     setJustFor(justForLimited)
   
    // }
    useEffect(() => {
        const showProducts = (products) => {
            const justForAll = products.filter(product => product.ratings === 4);
            const justForLimited = justForAll.slice(0, 5);
            setJustFor(justForLimited);
        };

        if (product.length > 0) {
            showProducts(product);
        }
    }, [product]);
    
    
   const handleShowAll =(item)=>{
    console.log(item.length)
          const justForAll = item.filter(product => (product.ratings === 4))
          const justForLimited =justForAll.slice(0,10)
          setJustFor(justForLimited);
        }
   const handleShowLess =(item)=>{
    console.log(item.length)
          const justForAll = item.filter(product => (product.ratings === 4))
          const justForLimited =justForAll.slice(0,5)
          setJustFor(justForLimited);
        }

        if(productLoading && justFor<1 ) {
            return <div className='flex flex-col items-center justify-center'>
                <span className='flex justify-center items-center gap-2'>loading <span className="loading loading-spinner text-amber-700 loading-lg "></span></span>
                </div>;
        }
    return (
        <div className=''>
            <p className='text-start font-serif font-bold mx-7 text-3xl pb-2'>Just for you</p>
            <div className='grid grid-cols-2 md:grid-cols-5  lg:grid-cols-5 mx-5  mb-14 gap-2 md:gap-4 lg:gap-4 justify-center items-center '>
                {justFor.map(product =><JustForItems
                key = {product._id} product = {product}></JustForItems> )}
            </div>
            <div className='flex flex-col items-center'>
             {
                (justFor.length === 5) &&  <button onClick={()=> handleShowAll(product)} id='show-all' className='text-amber-600  border-amber-600 border-2 px-3 py-1 rounded-full  font-bold mb-14'>Show all</button>
             }
             {
                (justFor.length === 10) &&  <button onClick={()=>handleShowLess(product)} id='show-all' className=' text-amber-600 border-amber-600 border-2 px-3 py-1 rounded-full font-bold mb-14'>Show less</button>
             }
            </div>
        </div>
    );
};

export default JustForProducts;