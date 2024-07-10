import React, { PureComponent, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';



import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaBowlRice, FaCarSide, FaMoneyCheckDollar, FaUserLarge } from 'react-icons/fa6';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AdminHome = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data
        }
    })
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#EBC91E', '#30D158', '#64D2FF'];
    return (
        <div className=' h-full w-full overflow-x-hidden '>
            <style>
                {
                    ` .red-bullet::marker{
                        color:red;
                    }
                      .blue-bullet::marker{
                        color:blue;
                      }
                      .green-bullet::marker{
                        color:green;
                      }
                `}
            </style>
            <div className=''>
                <div className='bg-blue-500 text-white h-[300px] '>
                    <p className='text-5xl text-center md:text-start lg:text-start font-serif pb-8 pt-20  px-7 lg:px-16 md:px-16'>Welcome to Admin pool</p>
                </div>
               <div className='flex flex-col items-center justify-center'>
               <div className='md:flex lg:flex lg:justify-evenly md:justify-evenly lg:gap-12 md:gap-12 relative -top-28 md:ml-12 lg:ml-12'>
                    <div data-aos="fade-right" data-aos-duration="4000" className="card w-80 mb-10 bg-base-100 shadow-xl">

                        <div className="card-body items-center text-center" data-aos="fade-right" data-aos-duration="10000" >
                            <h2 className="card-title text-3xl pb-4 text-amber-600">Welcome to Emars Admin pool!</h2>
                            <p className='pb-5'><span className='text-[17px] '>Browse our fully designed UI ! <br /> Browse our pages and make a new item, vsit customer review, and show the profit</span></p>
                            <figure className="">
                                <img className="h-[200px] rounded-xl" src="https://img.freepik.com/free-vector/mini-people-with-gear-machinery_24877-56137.jpg?t=st=1716617029~exp=1716620629~hmac=63133f65da716ae2673347beb634e5a37fe72c6b221538236920e69a5ceaaad3&w=900" />
                            </figure>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="10000" className="card w-80 mb-10 bg-base-100 shadow-xl">

                        <div className="card-body  p-0 ">
                            <div className='bg-base-200 pt-4 px-4 '>
                                <p className='text-amber-600 border-b-2 font-bold text-sm pb-4'>Recent activity</p>
                                <hr className='pb-4 px-2' />
                            </div>
                            <ul data-aos="fade-right" data-aos-duration="14000" className='list-disc px-8 text-[12px] text-slate-500 font-extralight'>
                                <li className='red-bullet pb-3' > New order placed! <span className='font-bold text-zinc-800'>Order #{stats.orders}</span> has been successfully placed</li>
                                <li className='green-bullet pb-3' >Your <span className='font-bold text-zinc-800'>Weekly report</span> has been generated and is ready to view.</li>
                                <li className='blue-bullet' >New <span className='font-bold text-zinc-800'>user #12 </span> has registered</li>
                                <li className='red-bullet pb-3' > server activity monitor alert</li>
                                <li className='green-bullet pb-3' >New order placed! <span className='font-bold text-zinc-800'>Order #{stats.orders}</span> has been successfully placed</li>
                                <li className='blue-bullet pb-3' >Details for<span className='font-bold text-zinc-800'>Marketing and planning Meeting </span> has been updated</li>
                                <li className='red-bullet ' > New order placed! <span className='font-bold text-zinc-800'>Order #{stats.orders}</span> has been successfully placed</li>
                                <li className='green-bullet pb-3' >Details for<span className='font-bold text-zinc-800'> Category and price </span> show the review and add items</li>
                                <li className='blue-bullet pb-3' >Details for<span className='font-bold text-zinc-800'>Marketing and planning Meeting </span> has been updated</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="14000" className="card w-80 bg-base-100 shadow-xl">

                        <div className="card-body  p-0 ">
                            <div className='bg-base-200 pt-4 px-4 '>
                                <p className='text-amber-600 border-b-2 font-bold text-sm pb-4'>Progress tracker</p>
                                <hr className='pb-4 px-2' />
                            </div>
                            <div className='px-4 text-slate-500' data-aos="fade-right" data-aos-duration="20000">
                                <div className='flex flex-col  text-[12px] mb-5 font-semibold'>
                                    <p className='flex justify-between'><span>Sales record</span> <span>60%</span></p>
                                    <progress className="progress progress-success w-full h-[12px]" value="60" max="100"></progress>
                                </div>
                                <div className='flex flex-col text-[12px] mb-5 font-semibold'>
                                    <p className='flex justify-between'><span>Order tracking</span> <span>80%</span></p>
                                    <progress className="progress progress-warning w-full h-[12px]" value="80" max="100"></progress>
                                </div>
                                <div className='flex flex-col text-[12px] mb-5 font-semibold'>
                                    <p className='flex justify-between'><span>Payment success</span> <span>68%</span></p>
                                    <progress className="progress progress-error w-full h-[12px]" value="68" max="100"></progress>
                                </div>
                                <div className='flex flex-col text-[12px] mb-5 font-semibold'>
                                    <p className='flex justify-between'><span>Loss project</span> <span>20%</span></p>
                                    <progress className="progress progress-accent w-full h-[12px]" value="20" max="100"></progress>
                                </div>
                                <div className='flex flex-col text-[12px] mb-5 font-semibold'>
                                    <p className='flex justify-between'><span>Customer satisfication</span> <span>90%</span></p>
                                    <progress className="progress progress-primary w-full h-[12px]" value="90" max="100"></progress>
                                </div>
                                <div className='flex flex-col text-[12px] mb-3 font-semibold'>
                                    <p className='flex justify-between'><span>Signed customer</span> <span>50%</span></p>
                                    <progress className="progress progress-success w-full h-[12px]" value="50" max="100"></progress>
                                </div>
                            </div>
                            <div className='bg-base-200 pt-2 px-4 mt-[74px]'>
                                <p className='text-slate-400  border-b-2 text-[10px] pb-1'>View review</p>
                                <hr className='pb-2 px-2' />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
               </div>
            </div>
            <div>
                <div className="flex md:flex-col -mt-16 flex-col-reverse mx-16">
                    <div className="lg:flex w-full mb-12 md:flex justify-center gap-4">
                        <div className="stat flex justify-center  items-center bg-gradient-to-r from-purple-700 to-purple-100">
                            <div className=" text-white text-[90px]">
                                <FaMoneyCheckDollar></FaMoneyCheckDollar>
                            </div>
                            <div className="flex flex-col ">
                                <div className="stat-value text-white text-center">${stats.revenue}</div>
                                <div className="stat-title text-white font-bold">Revenue</div>
                            </div>
                        </div>
                        <div className="stat flex justify-center items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                            <div className=" text-white text-[70px]">
                                <FaUserLarge></FaUserLarge>
                            </div>
                            <div className="flex flex-col ">
                                <div className="stat-value text-white text-center">{stats.users}</div>
                                <div className="stat-title text-white font-bold">Customers</div>
                            </div>
                        </div>
                        <div className="stat flex justify-center items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                            <div className=" text-white text-[70px]">
                                <FaBowlRice></FaBowlRice>
                            </div>
                            <div className="flex flex-col ">
                                <div className="stat-value text-white text-center">{stats.products}</div>
                                <div className="stat-title text-white font-bold">Menu Items</div>
                            </div>
                        </div>
                        <div className="stat flex justify-center items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                            <div className=" text-white text-[70px]">
                                <FaCarSide></FaCarSide>
                            </div>
                            <div className="flex flex-col ">
                                <div className="stat-value text-white text-center">{stats.orders}</div>
                                <div className="stat-title text-white font-bold">Orders</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>

                    </div>
                </div>

                <div className='lg:flex md:flex gap-4 px-5 lg:px-16 md:px-16'>
                    <ResponsiveContainer width="100%" height={400}>
                        <AreaChart
                            width={500}
                            height={400}
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="_id" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="totalPrice" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="count" stackId="1" stroke="#8884d8" fill="#82ca9d" />
                        </AreaChart>
                    </ResponsiveContainer>
                   
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart width={1000} height={600}>
                            <Pie data={chartData} dataKey="count" nameKey="_id" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;
