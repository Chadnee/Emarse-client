import React from 'react';
import JustForItems from './JustForItems';
import useProducts from '../../../../hooks/useProducts';

const JustForProducts = () => {
    const [product] = useProducts()

    const JustForAll = product.filter(product => (product.ratings === 4))
    const justFor = JustForAll.slice(0,15)
    console.log(justFor)
   
    return (
        <div className=''>
            <p className='text-start font-serif font-bold text-3xl pb-2'>Just for you</p>
            <div className='grid md:grid-cols-5  lg:grid-cols-5  mb-14 gap-4 justify-center items-center '>
                {justFor.map(product =><JustForItems
                key = {product._id} product = {product}></JustForItems> )}
            </div>
        </div>
    );
};

export default JustForProducts;