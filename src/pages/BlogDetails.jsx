import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { format } from 'date-fns';
import { IoIosHeart } from "react-icons/io";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll } from "motion/react"


const BlogDetails = () => {
    const { user } = useContext(AuthContext);
    const { scrollYProgress } = useScroll()

    const { _id, title, imageUrl, category, longDescription, publishDate, author } = useLoaderData();

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
        const commentTime = format(new Date(), 'PPpp');
        const commentData = {
            blog_id: _id,
            comment,
            commentTime,
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
        <div>
            <motion.div id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 8,
                    originX: 0,
                    backgroundColor: "#F98514",
                }} className='z-50'>
            </motion.div>
            <div className="card bg-base-100 max-w-5xl mx-auto rounded-none py-10 px-5">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={imageUrl}>
                            <img
                                className='h-72 w-full object-cover'
                                src={imageUrl}
                                alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body p-0 space-y-3 pt-3">
                    <div className='flex gap-3 w-fit justify-center items-center'>
                        <h2 className="card-title text-3xl">{title}</h2>
                        <p className='text-justify bg-[#F98514] w-fit text-white p-1'><span className='font-semibold'>Category:</span> {category}</p>
                    </div>
                    <div className='w-fit font-bold flex gap-3 *:p-1'>
                        <p className='bg-[#F4EBD0]'>Published Date: {publishDate} </p>
                        <p className='text-justify bg-[#F4EBD0]'><span className='font-semibold'>Author:</span> {author?.name}</p>
                    </div>

                    <p className='text-justify leading-loose'>{longDescription}</p>

                    {(author?.email === user.email) ? <>
                        <div>
                            <Link to={`/update-blog/${_id}`} className='btn bg-[#F98514] text-white rounded-none'>Update Blog</Link>
                        </div>
                        <p className='text-lg font-semibold p-2 text-center bg-[#F4EBD0]'>Can not comment on own Blog !</p>
                    </> : <>
                        <form onSubmit={handleComment} className="fieldset">
                            <legend className="fieldset-legend text-sm"><p className='flex items-center gap-2'>Add Comment < IoIosHeart className='text-[#F98514] text-lg' /></p></legend>
                            <textarea required className="textarea h-24 rounded-none" name='comment' placeholder="Your Comment Here"></textarea>
                            <div className="fieldset-label">
                                <button className='btn bg-[#F98514] rounded-none text-white'>Submit</button>
                            </div>
                        </form>
                    </>}
                    <div>
                        {
                            (comments.length > 0) && <h2 className='text-sm'><span className='font-semibold'>{comments.length}</span> comments on - <span className='font-bold'>"{title}"</span></h2>
                        }
                        {
                            comments.map(comment =>
                                <div key={comment._id} className='space-y-3 pt-10'>
                                    <div className='flex gap-3 items-center'>
                                        <img className='w-10 rounded-full' src={comment?.profile_picture} alt="" />
                                        <h3 className='font-semibold'>{comment?.user_name}</h3>
                                    </div>
                                    <p className='text-xs ps-12'>{comment?.commentTime}</p>
                                    <p className='ps-12'>{comment?.comment}</p>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;