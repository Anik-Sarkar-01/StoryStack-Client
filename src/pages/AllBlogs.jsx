import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import BlogCard from '../components/BlogCard';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [filter, setFilter] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAllBlogs = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_apiUrl}/all-blogs?filter=${filter}&search=${search}`
            );
            setBlogs(data);
        };
        fetchAllBlogs();
    }, [filter, search]);

    const handleReset = () => {
        setFilter("");
        setSearch("");
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                <div>
                    <select
                        onChange={e => setFilter(e.target.value)}
                        name='category'
                        id='category'
                        className='border p-4 rounded-lg'
                        value={filter}
                    >
                        <option value=''>Filter By Category</option>
                        <option value='Technology'>Technology</option>
                        <option value='Food'>Food</option>
                        <option value='Travel'>Travel</option>
                        <option value='Health'>Health</option>
                    </select>
                </div>

                <div className='flex p-1 overflow-hidden border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Enter Blog Title'
                        aria-label='Enter Blog Title'
                        value={search}
                    />

                    
                </div>

                <button onClick={handleReset} className='btn'>Reset</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;