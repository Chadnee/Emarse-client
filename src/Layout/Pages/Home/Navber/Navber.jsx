import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo/logo.png'
import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import { FaBucket, FaUser } from 'react-icons/fa6';
import { FaHome, FaShoppingCart, } from 'react-icons/fa';
import { CiSettings } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import UseAdmin from '../../../../hooks/UseAdmin';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Navber = () => {
  const [isAdmin, isAdminLoading] = UseAdmin();
  const [axiosSecure] = useAxiosSecure();
  const [cart, refetch] = useCart()
  console.log(cart.length)
  const { user, signedOut, loading } = useAuth();
  const handleLogOut = () => {
    signedOut()
      .then(() => {

      })
      .catch(error => console.log(error.message))
  }

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/users")
      console.log(res.data);
      return res.data;
    }
  })

  const userr = users.filter(userrr => {
    if (userrr.email === user?.email) {
      return userrr;
    }
  })
  const profileImage = userr[0]?.image
  console.log(user, users, userr, profileImage);
  const navbar = <>
    <li className='text-white font-bold'><Link to="/">Home</Link></li>
    <li className='text-white font-bold invisible md:visible lg:visible'><Link to="/categoryItem/traditionalWear">Categories</Link></li>
    <li className='text-white font-bold visible md:hidden lg:hidden'><Link to="/allCategory">Categories</Link></li>
    {user?<>
      {
      isAdmin && !isAdminLoading ?
        <li className='text-white font-bold'><Link to="/dashBoard/users">Dashboard</Link></li>
        : <div className='md:flex lg:flex'>
          <li className='text-white font-bold'><Link to="/dashBoard/myCart">DashBoard</Link></li>
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
        </div>
    }</>:<></>}


    {user ?
      <div className='flex'>
        {/* <li className='text-white font-bold' onClick={handleLogOut}><Link>SignOut</Link></li> */}
      </div> :

      <div className='flex'>
        <li className='text-white font-bold'><Link to="/login">Login</Link></li>
        <li className='text-white font-bold '><Link to="/register">Regisration</Link></li>
      </div>}




  </>
  return (
    <div className='w-full'>
      <div className="navbar max-w-screen-2xl  fixed z-10 bg-opacity-40 w-full bg-zinc-900">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu  bg-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
              {navbar}
            </ul>
          </div>
          <img className='md:h-20 h-10 rounded-xl' src={logo} alt="" />
          <p className='text-2xl'><span className='md:text-5xl text-white font-bold'>E</span> <span className='text-amber-700 font-[etalic] md:text-5xl'>M</span><span className='font-bold text-white md:text-5xl'>ars</span></p>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar}
          </ul>
        </div>
        {/* {
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
        } */}
        {
          user && <div className='navbar-end mt-5  md:mr-12 lg:mr-12'>
            <div className="dropdown">
              <label tabIndex={0} className="">
                <li className='text-white font-bold  justify-center gap-1 text-sm items-center md:flex hidden md:visible lg:visible'>
                  {profileImage ? <><img className='w-5 h-5 rounded-full' src={profileImage} alt="" /></>
                    : <CiSettings className='text-xl'></CiSettings>}{userr[0]?.name}</li>
                <ul>
                <li className=' md:hidden lg:hidden visible'>
                   <IoSettings className=' text-black text-2xl ml-8'></IoSettings>
                </li>
                </ul>
                {/* <li  className='text-white font-bold flex justify-center gap-1 text-sm items-center'>
              {profileImage?<><img className='w-5 h-5 rounded-full' src={profileImage} alt="" /></>
              :<CiSettings className='text-xl'></CiSettings>}
              <span className=''></span>{user?.displayName}</li> */}
                <p className='text-white text-[12px] pl-2 text-center invisible md:visible lg:visible'>Account settings</p>
              </label>
              <ul tabIndex={0} className="menu bg-opacity-70 bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-36">
                {/* {navbar} */}
                <li>
                  <Link to="/settings" className='font-bold'>My Account</Link>
                </li>
                <li className=' font-bold' onClick={handleLogOut}><Link>SignOut</Link></li>
              </ul>
            </div>
          </div>

        }
      </div>
     </div>
  );
};

export default Navber;