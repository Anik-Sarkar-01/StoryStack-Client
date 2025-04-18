import React from 'react';
import bannerImg1 from "../assets/bannerImg-01.jpg"
import bannerImg2 from "../assets/bannerImg-02.jpg"
import bannerImg3 from "../assets/bannerImg-03.jpg"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero bg-[#FEF9E1] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                <div className='flex-1'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed">Discover the life changing stories !</h1>
                    <p className="py-6 text-justify leading-relaxed">
                        Step into the lives of remarkable individuals and uncover powerful stories of growth, resilience, and transformation that will inspire you to see the world and yourself in a whole new light.
                    </p>
                    <Link to={'/all-blogs'}>
                        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="btn bg-[#F98514] text-white rounded-none">
                            Read Now
                        </motion.button>
                    </Link>
                </div>
                <div className='flex-1 flex gap-3'>
                    <PhotoProvider>
                        <PhotoView src={bannerImg1}>
                            <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} src={bannerImg1} className="max-w-36 lg:max-w-56 object-cover h-96 shadow-2xl border-8 border-white" />
                        </PhotoView>
                        <PhotoView src={bannerImg2}>
                            <motion.img animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} src={bannerImg2} className="max-w-32 lg:max-w-44 object-cover h-96 shadow-2xl border-4 border-white" />
                        </PhotoView>
                        <PhotoView src={bannerImg3}>
                            <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} src={bannerImg3} className="max-w-36 lg:max-w-56 object-cover h-96 shadow-2xl border-8 border-white" />
                        </PhotoView>
                    </PhotoProvider>
                </div>

            </div>
        </div>
    );
};

export default Banner;