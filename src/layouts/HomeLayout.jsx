import React from 'react';
import Navbar from '../components/Navbar';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ImageSection from '../components/ImageSection';
import FeaturedFoods from '../components/FeaturedFoods';

const HomeLayout = () => {
    return (
        <div className='font-poppins mx-auto'>
           
            <nav>
                <Navbar/>
            </nav>
           
            <main className="p-4">
        <Outlet />
            </main>

           
            
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default HomeLayout;