import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import ArrivalItems from './ArrivalItems';

const Arrival = () => {
    const [product] = useProducts()

    const arrivalProductAll = product.filter(product => (product.ratings === 4))
    const arrivalProduct = arrivalProductAll.slice(16,26)
    console.log(arrivalProduct)
    return (
        <div className='bg-zinc-300'>
            <p className='text-zinc-900 px-8 py-4 text-start text-2xl uppercase font-serif font-bold'>New Arrivals</p>
            <div className='grid md:grid-cols-5 lg:grid-cols-5 mx-7 mb-14 gap-3 justify-center items-center '>
                {arrivalProduct.map(product =><ArrivalItems
                key = {product._id} product = {product}></ArrivalItems> )}
            </div>
        </div>
    );
};

export default Arrival;