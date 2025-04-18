import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const BlogCard = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const { _id, title, imageUrl, category, shortDescription, longDescription, author, publishDate } = blog || {};
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
                <img
                    src={imageUrl}
                    alt="" />
            </figure>
            <div className="card-body space-y-2">
                <div className='flex justify-between'>
                    <div className="badge rounded-none bg-[#F4EBD0]">Category : {category}</div>
                    <div className="badge rounded-none bg-[#F4EBD0]">{publishDate}</div>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}..</p>
                <div className="card-actions justify-start">
                    <Link to={`/blog/${_id}`} className="btn rounded-none bg-[#F98514]">Details</Link>
                    <button onClick={handleWishList} className="btn rounded-none bg-[#F98514]">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;