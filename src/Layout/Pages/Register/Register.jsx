import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Routes/AuthProvider/AuthProvider';

const Register = () => {
    const {user, signedUp, updateProfileUser}= useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    

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
                const saveUser = {name: data.name, email:data.email}
                console.log(saveUser);
            })

        })
    }
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" {...register("name", {required : true})} placeholder="Provide your name" className="input input-bordered w-full max-w-xs" />
            {errors.name && <p>This field is required</p>}
            </div>
           <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", {required: true})} placeholder="Provide your email" className="input input-bordered w-full max-w-xs" />
            {errors.email && <p>This field is required</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="Password" {...register("password", {required: true, pattern: /^(?=.*[0-9])(?=.*[A-Z]).{6,16}$/ })} placeholder="Provide a password" className="input input-bordered w-full max-w-xs" />
            {errors.password?.type === "required" && <span>This field is required</span> }
            {errors.password?.type === "pattern"&& <span>This password must be in six characters with one upercase & atleast one digit</span>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Confirm password</span>
                </label>
                <input type="Password" {...register("confirmedPassword")} placeholder="Provide a password" className="input input-bordered w-full max-w-xs" />
            {errors.confirmedPassword?.type === "required" && <span>This field is required</span> }
            
            </div>
            <div>
                <input className='btn btn-success mt-4 w-28' type="submit" value="Login" />
            </div>
           </form>
        </div>
    );
};

export default Register;