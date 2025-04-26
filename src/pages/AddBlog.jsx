import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { format } from "date-fns";
import applicationLottie from "../assets/lottie/application-lottie.json";
import Lottie from 'lottie-react';
import { motion } from "motion/react"
import useAxiosSecure from '../hooks/useAxiosSecure';


const AddBlog = () => {
    const { user, toastSuccess, toastError } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

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
            const { data } = await axiosSecure.post(`/add-blog`, formData);
            form.reset();

            if (data.insertedId) {
                toastSuccess("Blog Added!")
            }
            else {
                toastError("Error Occurred! Try Again.")
            }

        } catch (err) {
            if (err) {
                toastError("Error Occurred! Try Again.")
            }
        }

    }
    return (
        <div className='flex justify-center items-center py-10'>
            <section className='p-3 lg:p-5 mx-auto shadow-sm w-6xl flex flex-col md:flex-row gap-10 items-center'>
                <div className='flex-1'>
                    <h2 className='text-2xl font-semibold uppercase border-b-4 border-[#F98514] w-fit mx-auto'>
                        Submit Your Blog
                    </h2>
                    <div className='w-4/5 mx-auto hidden md:block'>
                        <Lottie animationData={applicationLottie} loop={true}></Lottie>
                    </div>
                </div>

                <form className='flex-1' onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 '>
                        <div>
                            <label>
                                Blog Title
                            </label>
                            <input
                                name='blog_title'
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
                                className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                            />
                        </div>


                        <div className='flex flex-col gap-2'>
                            <label>
                                Category
                            </label>
                            <select
                                name='category'
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
                            required
                            className='block w-full px-5 py-2 mt-3 bg-white border-2 border-gray-100 focus:outline-none focus:ring
                                 focus:border-[#F98514] focus:ring-[#F98514]'
                            name='long_description'

                        ></textarea>
                    </div>
                    <div className='flex justify-start mt-6'>
                        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="btn bg-[#F98514] text-white rounded-none">
                            Submit
                        </motion.button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddBlog;