import React from 'react';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import useAuth from '../../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const AdminPaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth()

    const {data: allPayments = [], refetch} = useQuery({
        queryKey: ['allPayments'],
        queryFn: async()=> {
            const res = await axiosSecure('/allPayments');
            return res.data;
        }
    })

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
                axiosSecure.delete(`/allPayments/${raw._id}`)
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
        <div className='h-full w-full px-4 lg:px-20 md:px-20 mt-16 lg:mt-8 md:mt-8 mb-8'>
        
            {
                allPayments.length>0? <div>
                    <p className='text-center text-[#d08d27] underline pb-4'>All are Paid</p>
                    <p className='text-center font-serif text-3xl'>Payment History</p>
                   
                <div className="overflow-x-scroll max-h-screen pr-5 my-8">
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
                        {allPayments.map((raw, index) => <tr key={raw._id} className=''>
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
                : <p>No payment has been added</p>
            }
        </div>
    );
};

export default AdminPaymentHistory;