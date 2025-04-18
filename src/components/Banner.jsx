import React from 'react';
import bannerImg1 from "../assets/bannerImg-01.jpg"
import bannerImg2 from "../assets/bannerImg-02.jpg"
import bannerImg3 from "../assets/bannerImg-03.jpg"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"


const Banner = () => {
    return (
        <div className="hero bg-[#FEF9E1] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ]">
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Discover the life changing stories!</h1>
                    <p className="py-6 text-justify">
                        Step into the lives of remarkable individuals and uncover powerful stories of growth, resilience, and transformation that will inspire you to see the world and yourself in a whole new light.
                    </p>
                    <button className="btn bg-[#F6851F]">Read Now</button>
                </div>
                <div className='flex-1 flex gap-3'>
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{ duration: 10, repeat: Infinity }} src={bannerImg1} className="max-w-32 lg:max-w-48 object-cover h-96 shadow-2xl" />
                    <motion.img animate={{ y: [0, -25, 0] }} transition={{ duration: 10, repeat: Infinity }} src={bannerImg2} className="max-w-32 lg:max-w-48 object-cover h-96 shadow-2xl" />
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{ duration: 10, repeat: Infinity }} src={bannerImg3} className="max-w-32 lg:max-w-48 object-cover h-96 shadow-2xl" />
                </div>

            </div>
        </div>
    );
};

export default Banner;