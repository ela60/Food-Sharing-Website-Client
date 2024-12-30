import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
    return (
        <div className='font-poppins w-11/12 mx-auto '>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default AuthLayouts;