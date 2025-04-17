import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const { title, category, longDescription } = useLoaderData();

    return (
            <div className='py-10'>
                <div className="card lg:card-side bg-base-100 shadow-sm max-w-5xl mx-auto rounded-none border-2 border-[#F5841F] p-5">
                    <figure>
                        <img
                            src=""
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl"> {title}</h2>
                        <div className='bg-[#F5841F] w-fit px-3 font-bold'>
                            <p>Date: </p>
                        </div>
                        <p className='text-justify'><span className='font-semibold'>Details:</span> {longDescription}</p>
                        <p className='text-justify'><span className='font-semibold'>Category:</span> {category}</p>
                        <p className='text-justify'><span className='font-semibold'>Email:</span> {}</p>
                        <p className='text-justify'><span className='font-semibold'>Name:</span> {name}</p>
                        <div className="card-actions">
                            <button className='btn rounded-none text-lg bg-[#F5841F]'> Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BlogDetails;