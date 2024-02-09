import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo/logo.png'
import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import { FaBucket, FaUser } from 'react-icons/fa6';
import { FaShoppingCart, } from 'react-icons/fa';
import { CiSettings } from "react-icons/ci";
import UseAdmin from '../../../../hooks/UseAdmin';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Navber = () => {
  const [isAdmin] = UseAdmin();
  const [axiosSecure] = useAxiosSecure();
  const [cart, refetch] = useCart()
  console.log(cart.length)
  const { user, signedOut } = useAuth();
  const handleLogOut = () => {
    signedOut()
      .then(() => {

      })
      .catch(error => console.log(error.message))
  }
  
 const {data: users = [] } = useQuery({
  queryKey: ["users"],
  queryFn: async() => {
    const res = await axiosSecure("/users")
    console.log(res.data);
    return res.data;
  }
 })

const userr = users.filter(userr => {
  if(userr.email === user?.email) {
    return userr;
  }})
 const profileImage = userr[0]?.image
console.log(profileImage);
  const navbar = <>
    <li className='text-white font-bold'><Link to="/">Home</Link></li>
    <li className='text-white font-bold'><Link to="/allCategory">Categories</Link></li>
    {
      isAdmin ?
        <li className='text-white font-bold'><Link to="/dashBoard/users">Dashboard</Link></li>
        : <li className='text-white font-bold'><Link to="/dashBoard/myCart">DashBoard</Link></li>
    }
    <li className='text-white font-semibold'>
      <Link to="/dashBoard/myCart" >

        <div className='flex gap-2 items-center'>
          <span className='md:hidden'><FaBucket></FaBucket></span>
          <p className="badge badge-primary"><FaShoppingCart></FaShoppingCart>
            +{cart ? (cart.filter(raw => raw.status === 'payment_pending').length)
              : (0)}
          </p>
        </div>

      </Link>
    </li>

    {user ?
      <div className='flex'>
        <li className='text-white font-bold' onClick={handleLogOut}><Link>SignOut</Link></li>
      </div> :

      <div className='flex'>
        <li className='text-white font-bold '><Link to="/register">Regisration</Link></li>
        <li className='text-white font-bold'><Link to="/login">Login</Link></li>
      </div>}




  </>
  return (
    <div className='w-full'>
      <div className="navbar w-full bg-zinc-900">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu bg-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
              {navbar}
            </ul>
          </div>
          <img className='h-20 rounded-xl' src={logo} alt="" />
          <p><span className='text-5xl text-white font-bold'>E</span> <span className='text-amber-700 font-[etalic] text-5xl'>M</span><span className='font-bold text-white text-5xl'>ars</span></p>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar}
          </ul>
        </div>
        {
          user && <div className="navbar-end flex flex-col mr-12">
          <Link to = "/settings">
           <p className="">
              <ul>
            <li  className='text-white font-bold flex justify-center gap-1 text-sm items-center'>
              {profileImage?<><img className='w-5 h-5 rounded-full' src={profileImage} alt="" /></>
              :<CiSettings className='text-xl'></CiSettings>}{user?.displayName}</li>
            </ul>
             
              <p className='text-white text-[12px] pl-2 text-center '>Account settings</p>
            </p>
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Navber;