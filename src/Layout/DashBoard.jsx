
import { Link, Outlet } from 'react-router-dom';
import { FaAlignJustify, FaBars, FaEnvelopeOpenText, FaHouseCircleCheck, FaHouseFire, FaHouseLock, FaHouseUser, FaRectangleList, FaUserSecret } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import useAuth from '../hooks/useAuth';
import UseAdmin from '../hooks/UseAdmin';
import useCart from '../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';

const DashBoard = () => {
    const { user } = useAuth()
    const [isAdmin] = UseAdmin();
    const [cart] = useCart();
    console.log(user)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="text-amber-700 text-3xl h-16  w-full bg-slate-200 py-4 pl-4 drawer-button lg:hidden top-0 left-0 fixed"><FaAlignJustify></FaAlignJustify></label>

                </div>
               <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full text-white bg-orange-700 font-serif font-bold">
                        {/* Sidebar content here */}
                        {isAdmin ?
                            <>
                                <li className='uppercase'><Link to='/dashBoard/adminHome'><FaHouseLock className='text-xl'></FaHouseLock> Admin home</Link></li>
                                <li className='uppercase'><Link to='/dashBoard/users'>ALL USERS</Link></li>
                                <li className='uppercase'><Link to='/dashBoard/addProduct'>add item</Link></li>
                                <li className='uppercase'><Link to='/dashBoard/users'>manage product</Link></li>
                                <li className='uppercase'><Link to='/dashBoard/adminPaymentHistory'>payment history</Link></li>
                            </>
                            :
                            <>
                                <li className='uppercase'><Link to='/dashBoard/userHome'><FaHouseUser className='text-xl'></FaHouseUser> User Home</Link></li>
                                <li className='uppercase'><Link to='/dashBoard/review'><MdRateReview className='text-[18px]'></MdRateReview> Review</Link></li>
                                <li className='uppercase'><Link to='/dashBoard/myCart'><FaShoppingCart className='text-xl'></FaShoppingCart>my cart <span className='badge bg-cyan-700 py-1 px-3 border-none text-white'><FaShoppingCart></FaShoppingCart>
                                    +{cart ? (cart.filter(raw => raw.status === 'payment_pending').length)
                                        : (0)}</span></Link></li>
                                <li className='uppercase'><Link to='/dashBoard/userPaymentHistory'><GiWallet className='text-xl'></GiWallet>Payment History</Link></li>
                            </>}

                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider"></div>
                        </div>
                        <li className='uppercase'><Link to='/'><FaHouseCircleCheck className='text-xl'></FaHouseCircleCheck>Home</Link></li>
                        <li className='uppercase md:hidden lg:hidden'><Link to='/allCategory'><FaRectangleList className='text-xl'></FaRectangleList>Category</Link></li>
                        <li className='uppercase invisible md:visible lg:visible'><Link to="/categoryItem/traditionalWear"><FaRectangleList className='text-xl'></FaRectangleList>Category</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;