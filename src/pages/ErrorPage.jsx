import React from 'react';
import errorLottie from "../assets/lottie/error-lottie.json"
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-3 md:flex-row items-center justify-center min-h-lvh merriweather-font'>
            <div>
                <Lottie className='w-96' animationData={errorLottie} loop={true}></Lottie>
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <p>Error Occurred!</p>
                <Link to={'/'} className='btn bg-[#F98514] rounded-none text-white'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;