
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import img from "../../../../assets/logo/profile.jpg"
import { useEffect, useState } from 'react';
import { FaDollarSign, FaGift, FaLightbulb, FaMonero, FaMoneyBill, FaRegLightbulb } from 'react-icons/fa6';


const UserHome = () => {
    const { user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [loading, setLoading] = useState(true)
    //const [order, setOrder] = useState()
    // //const [userr, setUserr] = useState()
    const [userProfile, setUserProfile] = useState([]);
    const [orderProfile, setOrderProfile] = useState([]);
    const [paymentsProfile, setPaymentsProfile] = useState([])
    const [userMessage, setUserMessage] = useState('')
    const [orderMessage, setOrderMessage] = useState('')
    const [paymentsMessage, setPaymentsMessage] = useState('')
    
    console.log(user)

    // useEffect(() => {
    //     fetch("https://emars-server.vercel.app/cart-stats")
    //         .then(res => res.json())
    //         .then(data => setOrder(data))
    // }, [])

    const { data: userr = [], isLoading: userLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    const { data: order = [], isLoading: orderLoading} = useQuery({
        queryKey: ['cart-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get("/cart-stats")
            return res.data
        }
    })
    const { data: payments = [], isLoading: paymentsLoading} = useQuery({
        queryKey: ['payment-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get("/payment-stats")
            return res.data
        }
    })

    useEffect(()=>{
        if(userr.length>0){
            const userpro = userr.filter(profile=>(profile.email === user.email))
            console.log('u',userpro.length)
            if(userpro.length === 1){
                setUserProfile(userpro)
                setLoading(false)
            }
            if(userpro.length === 0){
                setUserMessage('please wait for searching user')
                setLoading(false)
            }
            
        }
    },[userr])
    useEffect(()=>{
        if(order.length>0){
            const orderpro = order.filter(profile=>(profile.email === user.email))
            console.log('o',orderpro.length)
            if(orderpro.length === 1){
                setOrderProfile(orderpro)
                setLoading(false)
            }
            if(orderpro.length === 0){
                setOrderMessage('Please add a cart')
                setLoading(false)
            }
                  }
    },[order])
    useEffect(()=>{
        if(payments.length>0){
            const paymentspro = payments.filter(profile=>(profile.email === user.email))
            console.log('p',paymentspro.length)
            if(paymentspro.length === 1){
                setPaymentsProfile(paymentspro)
                setLoading(false)
            }
            if(paymentspro.length === 0){
                setPaymentsMessage('please make a payment')
                setLoading(false)
            }
           
        }
    },[payments])
   
    console.log(userr, order, payments)
   console.log(userProfile, orderProfile, paymentsProfile);
   console.log(userProfile.length, orderProfile.length, paymentsProfile.length)
    
    
    //  const userProfile = userr.filter(profile => { if (profile.email === user.email) return profile })

    //console.log(userProfile[0].image);

    //const orderProfile = order.filter(profile => { if (profile.email === user.email) return profile })
    //const paymentsProfile = payments.filter(profile => { if (profile.email === user.email) return profile })

   

    if (userLoading) {
        return <div>user is Loading...</div>;
    }
    if (orderLoading) {
        return <div>order is Loading...</div>;
    }
    if (paymentsLoading) {
        return <div>Payments are Loading...</div>;
    }

    if (error) {
        console.error('Error fetching users:', error);
        return <div>Error fetching users</div>;
    }
    console.log(user, userr, order, payments)

    return (
        <div className='w-full h-full bg-green-950'>
            {loading?
           <div className='flex flex-col items-center jus'> <div className='flex flex-col items-center justify-center'>
            <span className='flex justify-center items-center gap-2'>loading <span className="loading loading-spinner text-amber-700 loading-lg "></span></span>
        </div></div>:
        <div>
        <div className='flex flex-col lg:mt-0 md:mt-0 mt-16 items-center justify-center md:items-stretch lg:items-stretch'>
        <div className='lg:flex md:flex lg:px-20 md:px-20 justify-between pb-28 lg:pb-36 md:pb-36 bg-sky-200 w-full'>
             <div className='flex lg:pl-12 md:pl-12 pl-7 pt-5 flex-col justify-center'>
                 <p className='text-5xl'>
                     <span className='font-bold '>
                     {(userProfile.length===0)?<span><span className='text-[7px]'>{userMessage}</span></span>:<>{userProfile[0].name}</> }
                     </span>
                     <span className=''>/ userHome</span>
                 </p>
                 <p className='text-xl pt-3  text-slate-500'>A platform see activities and overview the User home</p>
             </div>
             <div className='flex flex-col items-center'>
                 {userProfile[0]?.image ?
                     <>
                         <img className='rounded-full h-[200px] lg:h-[150px] md:h-[150px] my-4' src={img} alt="" />
                         {/* <img src={userProfile[0].image} alt="" /> */}
                     </>
                     :
                     <>
                         <img className='rounded-full h-[150px] my-4' src={img} alt="" />
                     </>}
             </div>
         </div>
        </div>
         <div className='flex flex-col  items-center lg:items-stretch md:items-stretch'>
         <div className='relative -top-20 lg:flex md:flex lg:justify-evenly md:justify-evenly'>
             <div className="card md:w-48 lg:w-48 w-[330px] mb-10 md:mb-0 lg:mb-0  lg:h-[400px] h-[450px] md:h-[400px] bg-slate-300 rounded-xl shadow-xl">
                 <div className="card-body h-[150px] pt-10 bg-cyan-800 items-center text-center">
                 <p className='text-3xl text-white font-semibold pb-4'>Overview</p>
                 </div>
                 <div className='flex flex-col items-center'><h2 className=" card-body relative -top-10  items-center justify-center rounded-full bg-cyan-800 font-bold text-4xl text-white h-20 w-20">1</h2></div>
                 <div className='bg-slate-300 h-[300px] flex flex-col items-center'>
                    <FaRegLightbulb className='text-cyan-800 text-5xl'></FaRegLightbulb>
                    <p className='text-center text-cyan-800 font-bold pt-7 '>Total order 
                    <br />
                    <span className='flex justify-center items-center gap-1'> <FaGift></FaGift>{(orderProfile.length===0)?<span><span className='text-[7px]'>{orderMessage}</span></span>:<>  {orderProfile[0].bookingCount}</> }</span>
                    </p>
                 </div>
             </div>
             <div className="card md:w-48 lg:w-48 w-[330px] mb-10 md:mb-0 lg:mb-0  lg:h-[400px] h-[450px] md:h-[400px] bg-slate-300 rounded-xl shadow-xl">
                 <div className="card-body h-[150px] pt-10 bg-yellow-900 items-center text-center">
                 <p className='text-3xl text-white font-semibold pb-4'>Overview</p>
                 </div>
                 <div  className='flex flex-col items-center'>
                 <h2 className="card-body relative -top-10  justify-center rounded-full bg-yellow-900 text-white font-bold text-4xl  h-20 w-20">2</h2>
                 </div>
                
                 <div className='bg-slate-300 h-[300px] flex flex-col items-center'>
                    
                    <FaRegLightbulb className='text-yellow-900 text-5xl'></FaRegLightbulb>
                    <p className='text-center text-yellow-900 font-bold pt-7 '>Order Price 
                    <br />
                    <span className='flex justify-center items-center gap-1'> <FaMoneyBill></FaMoneyBill>{(orderProfile.length===0)?<span><span className='text-[7px]'>{orderMessage}</span></span>:<>{orderProfile[0].totalPrice}</> }</span>
                    </p>
                 </div>
             </div>
             <div className="card md:w-48 lg:w-48 w-[330px]  lg:h-[400px] h-[450px] md:h-[400px] bg-slate-300 rounded-xl shadow-xl">
                 <div className="card-body h-[150px] pt-10 bg-cyan-800 items-center text-center">
                 <p className='text-3xl text-white font-semibold pb-4'>Overview</p>
                 </div>
                 <div className='flex flex-col items-center'>
                 <h2 className=" card-body relative -top-10  justify-center rounded-full bg-cyan-800 text-white font-bold text-4xl  h-20 w-20">3</h2>
                 </div>
                
                 <div className='bg-slate-300 h-[300px] flex flex-col items-center'>
                    <FaRegLightbulb className='text-cyan-800 text-5xl'></FaRegLightbulb>
                    <p className='text-center text-cyan-800 font-bold pt-7 '>Total Payment
                    <br />
                    <span className='flex justify-center items-center gap-1'> <FaMonero></FaMonero>{(paymentsProfile.length===0)?<span className='text-[7px]'>{paymentsMessage}</span>:<>{paymentsProfile[0].totalPrice}</>}</span>
                    </p>
                 </div>
             </div>
         </div>
         </div>
         </div>}
            
        </div>
    );
};

export default UserHome;