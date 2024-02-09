import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import useCart from '../../../../hooks/useCart'
import CartItem from './CartItem';

const MyCart = () => {
    const [cart] = useCart();
    return (
        <div className='h-full w-full my-8 mx-20'>
            <SectionTitle subHeading="---At a Glance---" heading="My cart"></SectionTitle>
            <div className='flex flex-col gap-3 mx-36'>
            {
                cart.map(item=>{if(item.status === "payment_pending")return<CartItem  
                key = {item._id}
                item={item}></CartItem>})
            }
            </div>
        </div>
    );
};

export default MyCart;