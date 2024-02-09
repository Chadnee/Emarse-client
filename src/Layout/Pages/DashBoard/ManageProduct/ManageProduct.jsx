import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

const ManageProduct = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: product = [], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await axiosSecure('/products')
            return res.data
        }
    });

    
    const handleDelete=(raw)=>{
        console.log(raw)
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
                axiosSecure.delete(`/products/${raw._id}`)
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
        <div className='w-full px-14'>
              <div className="overflow-y-scroll overflow-x-scroll w-3/12 md:overflow-x-hidden md:w-full lg:w-full max-h-screen md:pr-4 lg:pr-4 my-8">
                <table className="table">
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
                            <th className='text-center'>Customer</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((raw, index) => <tr key={raw._id} className=''>
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
                            <td className='text-center'>{raw.date}</td>
                            <td className='text-center'>{raw.customerName}</td>
                            <td className='flex flex-col items-center'>
                                <button onClick={()=>handleDelete(raw)}  className=" text-amber-700 text-3xl "><FaTrashAlt className='text-center'></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;