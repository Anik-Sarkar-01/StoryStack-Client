import React from 'react';
import Banner from '../components/Banner';
import RecentBlogs from '../components/RecentBlogs';
import Newsletter from '../components/Newsletter';
import FeaturedAuthors from '../components/FeaturedAuthor';
import BloggersCorner from '../components/BloggersCorner';


const Home = () => {
    return (
        <div className='space-y-20 py-10'>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <BloggersCorner></BloggersCorner>
            <FeaturedAuthors></FeaturedAuthors>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;