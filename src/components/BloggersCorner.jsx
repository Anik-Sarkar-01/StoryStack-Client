import React, { useEffect, useState } from 'react';
import { FaFeatherAlt, FaSearch, FaTools, FaClock, FaServer } from "react-icons/fa";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import axios from 'axios';



const BloggersCorner = () => {
    const [tips, setTips] = useState([]);
    useEffect(() => {
        fetchAllBlogs();
    }, [])

    const fetchAllBlogs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}/blogger-corner`);
        setTips(data);
    }

    return (
        <section className="py-16 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Blogger's Corner: <span className="text-[#F98514]">Tips & Tricks</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-none">
                    {tips.map((tip, index) => (
                        <Card className='space-y-3 p-3' key={index} sx={{ maxWidth: 345 }}>
                            <CardContent className='card-body items-center text-center'>
                                <div>
                                    {(index == 0) && <FaFeatherAlt className="text-3xl text-[#F98514]"></FaFeatherAlt>}
                                    {(index == 1) && <FaSearch className="text-3xl text-[#F98514]"></FaSearch>}
                                    {(index == 2) && <FaTools className="text-3xl text-[#F98514]"></FaTools>}
                                    {(index == 3) && <FaClock className="text-3xl text-[#F98514]"></FaClock>}
                                </div>
                                <h3 className="card-title text-lg font-semibold">{tip.title}</h3>
                                <p className="text-sm text-gray-600">{tip.description}</p>
                            </CardContent>
                            <CardActions className='flex'>
                                <Link to={'https://www.facebook.com'} target="_blank" className='btn bg-[#FEFAE7] rounded-none'>Share Now</Link>
                                <Link to={`/blogger-corner/${tip._id}`} className='btn bg-[#FEFAE7] rounded-none'>Learn More</Link>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BloggersCorner;