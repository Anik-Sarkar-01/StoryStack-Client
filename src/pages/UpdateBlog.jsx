import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { format } from 'date-fns';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const UpdateBlog = () => {
    const blogData = useLoaderData();
    const { _id, title, imageUrl, category, shortDescription, longDescription } = blogData;
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.blog_title.value;
        const imageUrl = form.image_url.value;
        const email = form.email.value;
        const category = form.category.value;
        const shortDescription = form.short_description.value;
        const longDescription = form.long_description.value;
        const publishDate = format(new Date(), "MM/dd/yyyy");

        const formData = {
            title,
            imageUrl,
            category,
            shortDescription,
            longDescription,
            publishDate,
            author: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }
        };

        try {
            console.log(_id);
            const { data } = await axios.put(`${import.meta.env.VITE_apiUrl}/all-blogs/${_id}`, formData);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex justify-center items-center my-12'>
            <section className='p-5 mx-auto bg-white shadow-sm rounded-none w-2xl lg:w-3xl '>
                <h2 className='text-xl font-semibold '>
                    Update Blog - <span className='border-b-2 border-b-[#F98514]'>"{title}"</span>
                </h2>

                <form className='pt-8' onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                        <div>
                            <label>
                                Blog Title
                            </label>
                            <input
                                name='blog_title'
                                defaultValue={title}
                                type='text'
                                required
                                className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                            />
                        </div>

                        <div>
                            <label>
                                Image URL
                            </label>
                            <input
                                name='image_url'
                                defaultValue={imageUrl}
                                type='url'
                                required
                                className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                            />
                        </div>

                        <div>
                            <label>
                                Email Address
                            </label>
                            <input
                                type='email'
                                name='email'
                                defaultValue={user?.email}
                                readOnly
                                required
                                className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                            />
                        </div>


                        <div className='flex flex-col gap-2 '>
                            <label>
                                Category
                            </label>
                            <select
                                name='category'
                                defaultValue={category}
                                required
                                className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                            >
                                <option>Technology</option>
                                <option>Food</option>
                                <option>Travel</option>
                                <option>Health</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label>
                            Short Description
                        </label>
                        <input
                            name='short_description'
                            type='text'
                            defaultValue={shortDescription}
                            required
                            className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label>
                            Long Description
                        </label>
                        <textarea
                            name='long_description'
                            defaultValue={longDescription}
                            required
                            className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                        ></textarea>
                    </div>
                    <div className='flex justify-start mt-6'>
                        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="btn bg-[#F98514] text-white rounded-none">
                            Update
                        </motion.button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateBlog;