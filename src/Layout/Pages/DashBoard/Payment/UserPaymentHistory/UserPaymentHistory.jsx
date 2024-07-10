import React from 'react';
import useCart from '../../../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const UserPaymentHistory = () => {

    const [cart, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure()
    const paymentsCart = cart.filter(item => (item.status === "payment_completed"))
    console.log(paymentsCart.length)
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cartsAll/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "The payment history has been deleted",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='w-full md:px-20 lg:px-20 h-full my-20'>
            {paymentsCart.length>0? <div className="overflow-x-auto overflow-y-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-white bg-amber-700 '>
                            <th>
                                <td className='text-center'>#</td>
                            </th>
                            <th className='text-center'>Visibility</th>
                            <th className='text-center'>Item</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>date</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentsCart.map((raw, index) => <tr key={raw._id} className=''>
                            <td className='text-center'>
                                {index + 1}
                            </td>
                            <td>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={raw.image} alt="" />
                                </div>
                            </td>
                            <td className='text-center'>{raw.name}</td>
                            <td className='text-center'>{raw.price}</td>
                            <td className='text-center'>{raw.quantity}</td>
                            <td className='text-center'>{raw.payment_date}</td>
                            <td className='flex flex-col items-center'>
                                <button onClick={() => handleDelete(raw)} className=" text-amber-700 text-3xl "><FaTrashAlt className='text-center'></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
                :<div className='flex flex-auto text-slate-500 items-center'><span className='md:pl- lg:pl-'>No payments history is available & please make sure a payment again.</span></div> 
            }
        </div>
    );
};

export default UserPaymentHistory;