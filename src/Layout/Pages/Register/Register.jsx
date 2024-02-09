import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Routes/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const {user, signedUp, updateProfileUser}= useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit=(data)=> {
        console.log(data)
        if(data.password !== data.confirmedPassword){
            alert("Your Confirmation password is not matched. Try later")
            return 
        }
        signedUp(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateProfileUser(data.name)
            .then(()=> {
                console.log("user:", data.name)
                const saveUser = {name: data.name, email:data.email};
                axiosSecure.post("/users", saveUser)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        reset()
                        Swal.fire({
                            icon: "success",
                            title: "User successfully added ",
                            showConfirmButton: false,
                            timer: 1300
                          });
                         navigate('/')
                    }
                })
               
            })

        })
    }
    return (
        <div className='w-full'>
        <div className="hero bg-slate-200 mb-">
  <div className="hero-content  flex-col ">
    <div className="">
      <p className="py-6 text-start">Welcome to Emars! Please Register!!</p>
    </div>
    <div className="card p-7 mx-auto rounded-none shrink-0 w-full  bg-base-100">
    <form className='md:flex mb-12 lg:flex justify-center w-[700px]  gap-14 items-center' onSubmit={handleSubmit(onSubmit)}>
           <div className='w-1/2 mx-auto'>
           <div className="form-control mb-3 w-full ">
           <label className="label">
                    <span className="label-text font-semibold font-serif">Name</span>
                </label>
                <input type="name" {...register("name", {required : true})} placeholder="Provide your name" className="input rounded-none input-bordered w-full max-w-xs" />
            {errors.name && <p className='text-orange-700 pl-4 text-start font-semibold text-sm'>This field is required</p>}
            </div>
            <div className="form-control mb-3 w-full ">
            <label className="label">
                    <span className="label-text font-semibold font-serif">Email</span>
                </label>
                <input type="email" {...register("email", {required: true})} placeholder="Provide your email" className="input rounded-none input-bordered w-full max-w-xs" />
            {errors.email && <p className='text-orange-700 pl-4 text-start font-semibold text-sm'>This field is required</p>}
            </div>
            <div className='form-control mb-3 w-full'>
            <label className="label">
                    <span className="label-text font-semibold font-serif">Password</span>
                </label>
                <input type="Password" {...register("password", {required: true, pattern: /^(?=.*[0-9])(?=.*[A-Z]).{6,16}$/ })} placeholder="Provide a password" className="input rounded-none input-bordered w-full max-w-xs" />
            {errors.password?.type === "required" && <span className='text-orange-700 pl-4 text-start font-semibold text-sm'>This field is required</span> }
            {errors.password?.type === "pattern"&& <span className='text-orange-700 pl-2 text-start font-semibold text-[10px]'>This password must be in six characters with one upercase & at least one digit</span>}
            </div>
            <div className="form-control mb-3 w-full">
                <label className="label">
                    <span className="label-text font-semibold font-serif">Confirm password</span>
                </label>
                <input type="Password" {...register("confirmedPassword")} placeholder="Provide a password" className="input rounded-none input-bordered w-full max-w-xs" />
            {errors.confirmedPassword?.type === "required" && <span className='text-orange-700 pl-4 text-start font-semibold text-sm'>This field is required</span> }
            
            </div>
           </div>
            
            <div className='w-1/2 flex flex-col items-center'>
            <div>
                <input className='btn mb-10 text-white rounded-none text-xl bg-amber-700 text-center mt-4 w-64' type="submit" value="Register" />
            </div>
            <p className='text-green-700 font-serif mb-3 font-semibold'>or login with</p>
            <GoogleLogin></GoogleLogin>
            <p className='text-sm font-semibold pt-4'>Allready have an account? Please <Link to = "/login" className='text-amber-700 font-semibold'>Login</Link></p>
            </div>
           </form> 
    </div>
  </div>
</div>

        </div>
    );
};

export default Register;