import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaCross } from 'react-icons/fa';
import { FaCrosshairs } from 'react-icons/fa6';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import useAuth from '../../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const CheckOut = ({ _id, productId, name, image, individualPrice, ratings, quantity, quality, category, email, customerName, status, date }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [transectionId, setTransectionId] = useState('');
    
    const price = individualPrice * quantity;
    console.log(individualPrice, quantity, price)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError("")
            console.log('PaymentMethod]', paymentMethod);
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "anonymous",
                        email: user?.email || "anonymous"
                    },
                },
            }
        )
        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransectionId(paymentIntent.id)
            const paymentDetails = {
                productId, 
                name, 
                image, 
                price, 
                ratings, 
                quantity, 
                quality, 
                category, 
                email, 
                customerName, 
                status: "service_pending",
                date 
            }
            axiosSecure.post(`/payments/${_id}`, paymentDetails)
            .then(res =>{
                if(res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Payment succeed & see activities",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-sm bg-amber-700 text-white px-3 pb-1' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-orange-700 text-sm text-start flex items-center gap-2'><FaCrosshairs></FaCrosshairs> Sorry, {cardError}</p>}
            {transectionId && <p className='text-orange-700 text-sm text-start flex items-center gap-2'><FaCrosshairs></FaCrosshairs> payment success</p>}

        </div>
    );
};

export default CheckOut;