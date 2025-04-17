import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchAllBlogs();
    }, [])

    const fetchAllBlogs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}/all-blogs`);
        setBlogs(data);
    }

    return (
        <div className='space-y-8'>
            <h1 className='text-center font-semibold text-4xl'>Recent Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;