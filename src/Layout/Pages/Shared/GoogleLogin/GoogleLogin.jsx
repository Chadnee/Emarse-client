import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { FaFacebook, FaGofore, FaGooglePlusG } from "react-icons/fa6";

const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <button className='btn mb-4 rounded-none  text-white w-64 bg-orange-700' onClick={handleGoogleLogin}>  <FaGooglePlusG className='text-4xl'></FaGooglePlusG> <span className='text-xl'>Google</span></button>
            <button className='btn rounded-none text-white w-64 bg-orange-700' > <FaFacebook className='text-2xl'></FaFacebook> <span className='text-xl'>Facebook</span></button>
        
        </div>
    );
};

export default GoogleLogin;