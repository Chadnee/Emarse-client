
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {user, signedIn} = useAuth()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    console.log(user)
    const onSubmit = (data) => {
        signedIn(data.email, data.password)
        .then(result => {
           const user = result.user;
           console.log(user)
        })
        .catch(error => {
            console.log(error.message)})
    }
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} placeholder="Provide your email" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="Password" {...register("password")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <input className='btn btn-success mt-4 w-28' type="submit" value="Login" />
            </div>
           </form>
        </div>
    );
};

export default Login;