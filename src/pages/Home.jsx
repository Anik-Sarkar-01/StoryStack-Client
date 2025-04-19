import React from 'react';
import Banner from '../components/Banner';
import RecentBlogs from '../components/RecentBlogs';
import Newsletter from '../components/Newsletter';
import FeaturedAuthors from '../components/FeaturedAuthor';

const Home = () => {
    return (
        <div className='space-y-20 py-10'>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newsletter></Newsletter>
            <FeaturedAuthors></FeaturedAuthors>
        </div>
    );
};

export default Home;