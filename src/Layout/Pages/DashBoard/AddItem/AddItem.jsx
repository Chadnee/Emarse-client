import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

import {useForm} from "react-hook-form"
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
//const img_hosting_token=import.meta.env.VITE_Image_Upload_Token;
const img_hosting_token = ("edf2630bdcc1b597ea4ce6f619c23acc");

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const {register,handleSubmit,formState: { errors }, reset} = useForm()
    // const img_hosting_url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    // console.log(img_hosting_token);
    // const onSubmit = (data) =>{
    //     console.log(data);
    //     const formData = new FormData();
    //     console.log(img_hosting_url)
    //      if (data.image) {
    //          const imagesArray = Array.isArray(data.image) ? data.image : [data.image];
    //        console.log(imagesArray)
    //         imagesArray.forEach((image, index) => {
    //             console.log(image)
    //           formData.append(`image${index + 1}`, [image]);
    //        });
        
    //       }
    //       console.log(formData)
    // //     formData.append('image', data.image[0])
    //    fetch(img_hosting_url, {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //         'content-type': 'multipart/form-data',
    //     },
    //    })
    //    .then(res => res.json())
    //    .then(imgResponse => {
    //     console.log(imgResponse);
    //    })

    // }
    
    const onSubmit = (data) =>{
        console.log(data)
        const formData = new FormData();
        formData.append("image", data.image)
        // formData.append("name", data.name)
        // formData.append("price", data.price)
        // formData.append("category", data.category)
        // formData.append("quality", data.quality)
        // formData.append("ratings", data.ratings)
        console.log(formData)
        axiosSecure.post('/products', formData, 
        { headers: {'Content-Type': 'multipart/form-data'}})
        .then(res =>{
            console.log(res.data)
        })
     

        // fetch('https://emars-server-8fqc5oghl-chadnee.vercel.app/uploadImage', {
        //     method: 'POST',
        //     body:formData,
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     },
        // })
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        // })
        // axiosSecure.post('/uploadImage', formData,
        // {headers: {'Content-Type': 'multipart/form-data'}})
        // .then(res => console.log(res.data))
    }
    return (
        <div className='w-full h-full mt-16 lg:mt-7 md:mt-7 mb-7 px-5 lg:px-36 md:px-36'>
           <SectionTitle subHeading="Increase your product" heading="Add Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}  className='bg-slate-100 px-10 mt-10 rounded-xl py-10'>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold text-slate-600">Product name?</span>
                    </div>
                    <input {...register("name", { required: true})} type="text" placeholder="Add product name" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold text-slate-600">Category?</span>
                    </div>
                    <input  {...register("category", { required: true})} type="text" placeholder="Add a category in camel case" className="input input-bordered w-full" />
                </label>
                <div className='flex gap-3'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold text-slate-600">Price?</span>
                        </div>
                        <input {...register("price", { required: true})} type="text" placeholder="Provide a profitable price" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold text-slate-600">Quality?</span>
                        </div>
                        <input {...register("quality", { required: true})} type="text" placeholder="Provide the quality types" className="input input-bordered w-full" />
                    </label>
                </div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold text-slate-600">Ratings?</span>
                    </div>
                    <input  {...register("ratings", { required: true})} type="text" placeholder="Add a ratings in number" className="input input-bordered w-full" />
                </label>
                <label className="form-control mt-7 w-full ">
                 <input  multiple {...register("image", { required: true})} type="file" accept='image/' className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                </label>
                <div className='md:text-start lg:text-start text-center'>
                    <input className='bg-amber-900 rounded-lg text-white px-4 pb-1 mt-16 mb-20' type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;