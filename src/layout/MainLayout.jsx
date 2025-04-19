import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='merriweather-font text-[#1F2937]'>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>

                <div className='min-h-[calc(100vh-285px)]'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;