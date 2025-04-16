import React from 'react';
import Banner from '../components/Banner';
import RecentBlogs from '../components/RecentBlogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='py-16'>
                <RecentBlogs></RecentBlogs>
            </div>
        </div>
    );
};

export default Home;