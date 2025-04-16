import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto nunito-font'>
            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-285px)]'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;