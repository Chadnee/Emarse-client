import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { FaFacebook, FaGofore, FaGooglePlusG } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {googleLogin, user} = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || "/" 
    
    const handleGoogleLogin = () => {
        googleLogin()
        .then(()=> {

                Swal.fire({
                 icon: "success",
                 title: "You are logged in successfully",
                 showConfirmButton: false,
                 timer: 1500
               });
               navigate(from, {replace:true})
               console.log("frommm:",from)
            
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div className=' flex flex-col items-center'>
            <button className='btn mb-4 rounded-none  text-white w-64 bg-orange-700' onClick={handleGoogleLogin}>  <FaGooglePlusG className='text-4xl'></FaGooglePlusG> <span className='text-xl'>Google</span></button>
            <button className='btn rounded-none text-white w-64 bg-orange-700' > <FaFacebook className='text-2xl'></FaFacebook> <span className='text-xl'>Facebook</span></button>
        
        </div>
    );
};

export default GoogleLogin;