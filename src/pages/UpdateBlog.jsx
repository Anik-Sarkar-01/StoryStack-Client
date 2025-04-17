import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { format } from 'date-fns';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const UpdateBlog = () => {
    const blogData = useLoaderData();
    const {_id, title, imageUrl, category, shortDescription, longDescription } = blogData;
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
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Publish a Blog
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700' htmlFor='blog_title'>
                                Blog Title
                            </label>
                            <input
                                id='blog_title'
                                name='blog_title'
                                defaultValue={title}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='image_url'>
                                Image URL
                            </label>
                            <input
                                id='image_url'
                                name='image_url'
                                defaultValue={imageUrl}
                                type='url'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                defaultValue={user?.email}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                defaultValue={category}
                                className='border border-gray-200 p-2 rounded-md'
                            >
                                <option>Technology</option>
                                <option>Food</option>
                                <option>Travel</option>
                                <option>Health</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='short_description'>
                            Short Description
                        </label>
                        <input
                            id='short_description'
                            name='short_description'
                            type='text'
                            defaultValue={shortDescription}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='long_description'>
                            Long Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='long_description'
                            id='long_description'
                            defaultValue={longDescription}
                        ></textarea>
                    </div>
                    <div className='flex justify-start mt-6'>
                        <button className='btn'>
                            Update
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateBlog;