import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { format } from 'date-fns';
import { IoIosHeart } from "react-icons/io";
import { motion, useScroll } from "motion/react"
import useAxiosSecure from '../hooks/useAxiosSecure';


const BlogDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { user, toastSuccess, toastError } = useContext(AuthContext);
    const { scrollYProgress } = useScroll()
    const params = useParams();
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            const { data } = await axiosSecure.get(`/all-blogs/${params.id}`);
            setBlog(data);
        };
        fetchBlog();
    }, [axiosSecure, params.id]);


    const { _id, title, imageUrl, category, longDescription, publishDate, author } = blog || {};



    const fetchAllBlogs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}/all-comments/${_id}`);
        setComments(data);
    };
    
    useEffect(() => {
        if (_id) fetchAllBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id]);



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
            if (data.insertedId) {
                toastSuccess("Comment Added!")
            }
            else {
                toastError("Error Occurred! Try Again.")
            }

            fetchAllBlogs();

        } catch (err) {
            if (err) {
                toastError("Error Occurred! Try Again.")
            }
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