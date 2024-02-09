import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Pages/Home/Navber/Navber';
import Footer from './Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-base-200'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;