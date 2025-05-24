import React, { useEffect, useState } from 'react';
import JustForItems from './JustForItems';
import useProducts from '../../../../hooks/useProducts';
import useAuth from '../../../../hooks/useAuth';
import { FaCircleDollarToSlot, FaCoins, FaGratipay, FaHandshake, FaHouseCircleCheck, FaRotateLeft, FaTruck } from "react-icons/fa6";
import { showProducts } from '../../../../Utils/ShowProducts';

const JustForProducts = () => {
    const [product, productLoading] = useProducts()
    const [justFor, setJustFor] = useState([])
    
    useEffect(() => {
    const  callingProducts = async() => {
       if(product && product.length> 0) {
            const showproducts = await showProducts(product, 10, 15)
            console.log(showproducts)
            setJustFor(showproducts)
       }
    }
   callingProducts()
    }, [product]);
 
    console.log(justFor)
    
   const handleShowAll = async(item)=>{
     if(product && product.length> 0) {
        const callingProducts = await showProducts(item, 0, 10)
        setJustFor(callingProducts)
     }
        }
   const handleShowLess = async(item) =>{
        if(product && product.length> 0) {
        const callingProducts = await showProducts(item, 0, 5)
        setJustFor(callingProducts)
     }
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