import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchAllBlogs();
    }, [])

    const fetchAllBlogs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}/all-blogs`);
        setBlogs(data);
    }

    return (
        <div>
            This is all blogs page - {blogs.length}
        </div>
    );
};

export default AllBlogs;