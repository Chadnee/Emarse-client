import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form"
import { FaUserAlt, FaUserAltSlash, FaUserCircle } from 'react-icons/fa';
import { FaUser, FaUserAstronaut } from 'react-icons/fa6';
import photo from '../../../assets/logo/profile.jpg'
import { useRef } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const Settings = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const imageRef = useRef(null)
    const [profilImage, setProfilImage] = useState([photo])
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                const res = await axiosSecure("/users");
            console.log(res.data);
            return res.data;
            } catch(error){
                console.log("error fetching:", error)
                return [];
            }
        }
    })
    console.log(users);
    // const profileUser = users.find(userr => userr.length)
    const profileUser = users.filter(userr => {
        if (userr?.email === user.email) {
            return userr
        }
    })
    console.log(profileUser)
    console.log(user.email)
    const id = profileUser[0]._id;
    const image= profileUser[0].image;
    console.log(image);

    console.log(id);
    const handleImageClick = () => {
        imageRef.current.click();
    }

    const handleImageChange = (event) => {
        event.preventDefault();
        const form = event.target;
        const file = form.files[0];
        const urlFile = URL.createObjectURL(file)
        console.log(urlFile)

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to a add a profile picture?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add"
        }).then((result) => {
            if (result.isConfirmed) {
                if (file) {
                    setProfilImage(urlFile);
                   // setProfilImage(file);
                    console.log("set", profilImage)
                }
            }
        });
    }
    console.log(user)
   
    const onSubmit = (data) => {
        console.log(id);
        // const formData = new FormData();
        // formData.append("image", profilImage)
        // formData.append("name", data.name)
        // formData.append("location", data.location)
        // formData.append("contact", data.contact)
        // formData.append("gender", data.gender)
        axiosSecure.patch(`/users/${id}`,  {
            name: data.name,
            location: data.location,
            contact: data.contact,
            gender: data.gender,
            image: profilImage
    
        })
            .then(res =>{
                if(res.data.modifiedCount>0){
                    console.log("updated", res.data)
                     reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }
    

    // const onSubmit = (data) =>{
    //     const userInfo = {name: data.name,
    //             location: data.location,
    //             contact: data.contact,
    //             gender: data.gender,
    //             image: profilImage}
    //     axiosSecure.post('/users' , userInfo )
    //     .then(res =>{
    //         if(res.data.insertedId){
    //             console.log("post success" , res.data)
    //         }
    //     })
    // }
    return (
        <div className='mx-20 my-10 '>
            {
                user &&
                <div className='md:ml-20  '>
                    <div className='flex flex-col items-center'>
                        <p className='text-xl font-serif flex gap-2 items-center'>
                            <FaUserCircle className='text-2xl'></FaUserCircle>
                            <span className='text-'>{user.displayName}</span>
                        </p>
                        <p className='border-2 ml-6  border-zinc-400 mt-3 rounded-lg font-semibold inline-block px-3'>{user.email}</p>

                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col font-serif ml-6 mt-7 '>

                            <div className='flex flex-col items-center'>
                                <p className='mt-4 pb-4 label-text text-3xl uppercase text-slate-600'>Update profile photo</p>
                                <div onClick={() => handleImageClick()} >
                                    {
                                        image ? <><img className='w-[200px] h-[200px] rounded-full mb-7' src={image} alt="" /></> :
                                            <><img className='w-[200px] h-[200px] rounded-full' src={profilImage} alt="" /></>
                                    }
                                </div>
                                <label className="form-control hidden w-full ml-3">
                                    <input type="file" ref={imageRef} onChange={handleImageChange} className="d-none" />
                                </label>
                            </div>
                            <div className='flex justify-between mt-7 gap-20'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold text-slate-600">Update profile name</span>
                                    </div>
                                    <input type="text" name="name" {...register("name", { required: true })} placeholder="update your name" className="input input-bordered border-2  w-full pl-3 py-1 border-zinc-400 rounded-lg" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold text-slate-600">Add location</span>
                                    </div>
                                    <input type="text" name="location" {...register("location", { required: true })} placeholder='Add your location' className="input input-bordered border-2 w-full pl-3 py-1 border-zinc-400 rounded-lg" />
                                </label>
                            </div>
                            <div className='flex justify-between mt-4 gap-20'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold text-slate-600">Add Conatct</span>
                                    </div>
                                    <input type="text" name="contact" {...register("contact", { required: true })} placeholder="Add your contact number" className="input input-bordered border-2  w-full pl-3 py-1 border-zinc-400 rounded-lg" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold text-slate-600">Gender</span>
                                    </div>
                                    <select defaultValue="Male" name='gender' {...register("gender", { required: true })} className="select select-bordered">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Third Gender</option>
                                        <option>Others</option>
                                    </select>
                                </label>
                            </div>

                            <div className=''>
                                <input className='bg-zinc-400 max-w-xs input px-10 rounded-lg text-black font-semibold pb-1 mt-16 mb-20 inline-block' type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default Settings;