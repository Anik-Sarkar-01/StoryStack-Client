import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const BlogCard = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const { _id, title, imageUrl, category, shortDescription, longDescription, author, publishDate } = blog || {};
    const handleWishList = async() => {
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
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{shortDescription}..</p>
                <div className="card-actions justify-start">
                    <Link to={`/blog/${_id}`} className="btn">Details</Link>
                    <button onClick={handleWishList} className="btn">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;