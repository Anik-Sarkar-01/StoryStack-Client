import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';


const BlogCard = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const { _id, title, imageUrl, category, shortDescription, longDescription, author, publishDate } = blog || {};
    console.log(blog);

    const handleWishList = async () => {
        const wishBlogData = {
            id: _id,
            title,
            imageUrl,
            category,
            shortDescription,
            longDescription,
            publishDate,
            author,
            userEmail: user?.email,
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_apiUrl}/add-wishlist`, wishBlogData);
            console.log(data);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="card rounded-none bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={imageUrl}>
                        <img
                            src={imageUrl}
                            alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body space-y-2">
                <div className='flex justify-between'>
                    <div className="badge rounded-none bg-[#F4EBD0]">Category : {category}</div>
                    <div className="badge rounded-none bg-[#F4EBD0]">{publishDate}</div>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}..</p>

                <Link to={'/all-blogs'}>

                </Link>
                <div className="card-actions gap-4 justify-start">
                    <Link to={`/blog/${_id}`}>
                        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="btn bg-[#F98514] text-white rounded-none">
                            Details
                        </motion.button>
                    </Link>
                    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleWishList} className="btn rounded-none bg-[#F98514] text-white">WishList</motion.button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;