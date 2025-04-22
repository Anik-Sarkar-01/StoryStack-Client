import React from 'react';
import logo from "../assets/logo-64.png";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#FEF9E1] '>
            <div className='flex flex-col justify-center items-center pt-10'>
                <img className='w-24' src={logo} alt="" />
                <p className='text-center'>
                    StoryStack Ltd.
                </p>
            </div>
            <footer className="footer sm:footer-horizontal place-items-center text-base-content p-10">
                <aside className='w-xs'>
                    <h4 className='footer-title'>About Us</h4>
                    <p className='text-justify leading-loose'>StoryStack is your hub for stories, insights, and inspiration across tech, coding, food, travel, and health. Explore, learn, and stay curious.</p>
                </aside>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All Blogs</a>
                    <a className="link link-hover">Featured Blogs</a>
                </nav>
                
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <a className="link link-hover flex items-center gap-2"><FaFacebook></FaFacebook> Facebook</a>
                    <a className="link link-hover flex items-center gap-2"><FaLinkedin></FaLinkedin>Linkedin</a>
                    <a className="link link-hover flex items-center gap-2"><FaInstagram></FaInstagram>Instagram</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;