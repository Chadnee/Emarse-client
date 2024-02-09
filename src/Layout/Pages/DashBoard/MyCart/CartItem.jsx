import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../../hooks/useCart';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const CartItem = ({ item }) => {
    const [axiosSecure] = useAxiosSecure()
    
    const { _id, name, image, category, quantity, quality, ratings, date, status, email, price } = item;
    const [,refetch] = useCart()

    const handleDelete = (product) => {
        console.log(product)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) 
            {
              axiosSecure.delete(`/cartsAll/${product._id}`)
              .then(res => {
                console.log(res.data)
                if(res.data.deletedCount>0){
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: `Done! is deleted!`,
                    icon: "success"
                  });
                }
              })
            }
          });
    }
    return (
        <div className='border-4 md:flex lg:flex justify-between'>
            <div className='flex'>
                <figure className='my-4 mx-4'><img className='border-4 border-zinc-800 w-[130px] h-[100px]' src={image} alt="" /></figure>
                <div className='my-3 mx-4 text-start'>
                    <span className='font-bold'>{name}| {category}</span><br />
                    <span className='rounded-xl text-white text-sm px-3 bg-amber-700 mr-3 pb-1 '> EMARS</span>
                    <span className='rounded-xl text-white text-sm px-3 bg-cyan-700 pb-1'>{quality}</span>
                    <p className='text-amber-700 font-semibold pt-2'>${price}<del className='text-slate-400 pl-3'>${price + 50}</del></p>
                    <p className='flex justify-between'>
                        <span className='text-cyan-700'>{status}</span>
                        <span className='text-slate-400'>{date}</span>
                    </p>
                </div>
            </div>
            <div className='flex gap-3 mt-4'>
                <Link to={`/dashBoard/myPayment/${_id}`} className=''><button className='rounded-xl px-3 pb-1 text-sm  bg-green-700 text-white'>pay</button></Link>
                <span className=''>||</span>
                <div><button onClick={()=>handleDelete(item)} className='rounded-xl px-3 mr-3 pb-1 bg-amber-700 text-white text-sm'>Delete</button></div>
            </div>
        </div>
    );
};

export default CartItem;

//style= {{borderRadius:"70% 0 70% 70%"}}