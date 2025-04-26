import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BloggerCornerDetails = () => {
    const data = useLoaderData();

    console.log(data);

    return (
        <section className="min-h-screen bg-base-200 my-10 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="card bg-base-100 shadow-xl border border-[#F98514]">
                    <div className="card-body p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#F98514] mb-4">
                            {data.title} ?
                        </h1>
                        <div className="text-base text-gray-700 leading-relaxed text-justify">
                            {data.longDescription}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link to={'https://www.facebook.com'} target="_blank" className="btn btn-outline btn-warning rounded-full">
                                Share This Tip
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BloggerCornerDetails;
