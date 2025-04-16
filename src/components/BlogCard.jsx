import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, category, shortDescription } = blog || {};
    return (
        <div className="card rounded-none bg-base-100 w-96 shadow-sm">
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
                <div className="card-actions justify-center">
                    <button className="btn">Details</button>
                    <button className="btn">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;