import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const BlogDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, category, longDescription, publishDate, author } = useLoaderData();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchAllBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchAllBlogs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}/all-comments/${_id}`);
        console.log(_id);
        setComments(data);
    }

    const handleComment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const commentData = {
            blog_id: _id,
            comment,
            user_name: user?.displayName,
            profile_picture: user?.photoURL,
            user_email: user?.email,
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_apiUrl}/add-comment`, commentData);
            form.reset();
            console.log(data);
            fetchAllBlogs();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='py-10'>
            <div className="card lg:card-side bg-base-100 max-w-5xl mx-auto rounded-none p-5">
                <figure>
                    <img
                        src=""
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl"> {title}</h2>
                    <div className='bg-[#F5841F] w-fit px-3 font-bold'>
                        <p>Published Date: {publishDate} </p>
                    </div>
                    <p className='text-justify'><span className='font-semibold'>Category:</span> {category}</p>
                    <p className='text-justify'><span className='font-semibold'>Details:</span> {longDescription}</p>
                    <p className='text-justify'><span className='font-semibold'>Author:</span> {author?.name}</p>

                    {(author?.email === user.email) ? <>
                        <div>
                            <Link to={`/update-blog/${_id}`} className='btn'>Update Blog</Link>
                        </div>
                        <p className='text-xl font-semibold text-amber-300'>"Can not comment on own Blog!"</p>
                    </> : <>
                        <form onSubmit={handleComment} className="fieldset">
                            <legend className="fieldset-legend">Add Comment</legend>
                            <textarea className="textarea h-24" name='comment' placeholder="Your Comment Here"></textarea>
                            <div className="fieldset-label">
                                <button className='btn'>Submit</button>
                            </div>
                        </form>
                    </>}
                    <div>
                        {
                            comments.map(comment => <p key={comment._id}>{comment?.comment}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;