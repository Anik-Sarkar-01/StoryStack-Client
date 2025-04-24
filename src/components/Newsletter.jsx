import React from 'react';
import toast from 'react-hot-toast';

const Newsletter = () => {
    const notify = (e) => {
        e.preventDefault();
        const form = e.target;
        form.reset();
        toast.success('Thank You For Subscribing To Our Newsletter');
    }

    return (
        <div className='bg-base-200 p-10'>
            <div className='max-w-3xl mx-auto'>
                <div className='text-center space-y-3 pb-5'>
                    <h2 className='text-3xl font-semibold'>Subscribe to our <span className="text-[#F98514]">Newsletter</span></h2>
                    <p>Get the latest updates and news right in your inbox!</p>
                </div>
                <form onSubmit={notify} className="join flex justify-center py-12 bg-gradient-to-r from-white to-[#FEF9E1] shadow-sm ">
                    <div>
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn bg-[#F98514] join-item text-white">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;