
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge , LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Login = () => {
    const {user, signedIn} = useAuth()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const captchaRef = useRef(null)
    const[disabled, setDesabled] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || "/" 
   
    const onSubmit = (data) => {
        signedIn(data.email, data.password)
        .then(result => {
           const user = result.user;
           console.log(user)
           reset()
           Swal.fire({
            icon: "success",
            title: "You are logged in successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, {replace:true})
        })
        .catch(error => {
            console.log(error.message)})
    }
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        if(validateCaptcha(userCaptchaValue)){
            setDesabled(false);
        }
        else{
            setDesabled(true)
        }
    }
    return (
       <div className='w-full'>
        <div className="hero bg-slate-200 mb-">
  <div className="hero-content  flex-col ">
    <div className="">
      <p className="py-6 text-start">Welcome to Emars! Please Login!!</p>
    </div>
    <div className="card p-7 mx-auto rounded-none shrink-0 w-full  bg-base-100">
    <form className='md:flex mb-12 lg:flex justify-center w-[700px]  gap-14 items-center' onSubmit={handleSubmit(onSubmit)}>
           <div className='w-1/2 mx-auto'>
           <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text font-semibold font-serif">Email</span>
                </label>
                <input type="email" {...register("email")} placeholder="Provide your email" className="input rounded-none input-bordered w-full " />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text font-semibold font-serif">Password</span>
                </label>
                <input type="text" {...register("password")} placeholder="Provide your password" className="input rounded-none input-bordered w-full " />
            </div>
            <div className="form-control w-full ">
                <label className="label ">
                <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={handleValidateCaptcha} ref={captchaRef} name = "captcha" placeholder="Type the text above" required className="input rounded-none input-bordered w-full " />
            </div>
           </div>
            <div className='w-1/2 flex flex-col items-center'>
            
            <div>
                <input disabled = {disabled} className='btn mb-10 text-white rounded-none text-xl bg-amber-700 text-center mt-4 w-64' type="submit" value="Login" />
            </div>
            <p className='text-green-700 font-serif mb-3 font-semibold'>or login with</p>
            <GoogleLogin></GoogleLogin>
            <p className='text-sm font-semibold pt-4'>Haven't no account? Please <Link to = "/register" className='text-amber-700 font-semibold'>Register</Link></p>
            </div>
           </form> 
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;