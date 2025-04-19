import React from 'react';
import Banner from '../components/Banner';
import RecentBlogs from '../components/RecentBlogs';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div className='space-y-10 py-10'>
            <Banner></Banner>

            <RecentBlogs></RecentBlogs>

            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;