import ReactStars from 'react-stars'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form"
import { useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Review = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
      const [rating, setRating] = useState(0);
     const ratingChanged = (newRating) => {
        setRating(newRating);
        
    };
    const {register,handleSubmit,formState: { errors }, reset} = useForm()

    const onSubmit = data =>{
        const {favouriteGoods, suggesstion, details} = data;
        const addReview = {email:user.email, name:user.displayName, favouriteGoods, suggesstion, details, rating}
        axiosSecure.post('/review', addReview)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Thanks for a short review",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
        })
    }
    return (
        <div className='h-full w-full bg-slate-100 lg:px-40 md:px-40 px-7 pt-20 md:pt-5 lg:pt-5 mx-auto '>
            <SectionTitle subHeading='At a Glance' heading='Short review'></SectionTitle>
            <div className='flex flex-col items-center mb-7'><ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={80}
                        activeColor="#ffd700"
                    /></div>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#E8E8E8] rounded-lg pb-7 pt-5 mb-10'>
               <div className='form-control mx-10 mt-4'>
               <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold text-slate-600">What is your Favourite category Product?</span>
                    </div>
                    <input type="text" placeholder="Goods you loke most" className="input input-bordered w-full " 
                     {...register("favouriteGoods", { required: true })}/>
                </label>
               </div>
               <div className='form-control mx-10 mt-4'>
               <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold text-slate-600">Do you have any suggesstion for us?</span>
                    </div>
                    <input type="text" placeholder="Valuable suggesstion shortly" className="input input-bordered w-full " 
                    {...register("suggesstion", { required: true })}/>
                </label>
               </div>
               <div className='form-control mx-10 mt-4'>
               <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold text-slate-600">Kindly express your feelings in a short way</span>
                    </div>
                    <input type="text" placeholder="Review details" className="input input-bordered w-full  h-24" 
                     {...register("details", { required: true })}/>
                </label>
               </div>
               <div className='font-bold mx-10 mt-7 mb-4 text-center md:text-start lg:text-start'>
                   <input className='rounded-lg bg-amber-800 text-sm text-white px-7 py-2 mt-10' type="submit" value="Send review" />
               </div>
            </form>
        </div>
    );
};

export default Review;