import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import CheckOut from './CheckOut/CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe("pk_test_51NzwAzBUuWC9D1i2z9Bka1Wp3SZ3qnIimH7jkY0qRzwDMaAEeC4NRf20yTr7gYargd4gqUERzOgTuaMWTmFgWsXs00S3AyAns2")

const MyPayment = () => {
         
    const product = useLoaderData();
    const {_id, productId, name, category, image, price, ratings,quantity, quality, email, customerName, status, date} = product;
    console.log(product)
    return (
        <div className='w-full h-full md:my-20 lg:20 my-32 md:px-32 px-7'>
            <p className='text-4xl text-center fon uppercase text-[#eaba4a]'>Payment</p>
            <Elements stripe={stripePromise}>
            <CheckOut _id={_id} productId={productId} name={name} category = {category} image={image} individualPrice={price} quantity ={quantity}
            quality={quality} ratings={ratings} email={email} customerName={customerName} status={status} date={date}></CheckOut>
            </Elements>
        </div>
    );
};

export default MyPayment;