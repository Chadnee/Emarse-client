import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navber from './Pages/Home/Navber/Navber';
import Footer from './Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("allCategory") || location.pathname.match(/^\/categoryItem\/[^/]+$/);
    //const noHeaderFooter = location.pathname.includes("allCategory") || location.pathname.match(/^\/categoryItem\/[^/]+$/);
    return (
        <div className='bg-base-200'>
            <Navber></Navber>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;