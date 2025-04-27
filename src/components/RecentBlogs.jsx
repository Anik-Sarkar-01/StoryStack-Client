import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchAllBlogs();
    }, []);

    const fetchAllBlogs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}/recent-blogs`);
        setBlogs(data);
    };

    return (
        <div className="space-y-8">
            <h1 className='text-center font-semibold text-4xl'>
                Recent <span className="text-[#F98514]">Blogs</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 xl:px-0 justify-center items-center place-items-center'>
                {blogs.map(blog => (
                    <InView key={blog._id} triggerOnce={false} threshold={0.1}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} 
                                transition={{ duration: 0.5 }}
                                
                            >
                                <BlogCard blog={blog} />
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>
        </div>
    );
};

export default RecentBlogs;
