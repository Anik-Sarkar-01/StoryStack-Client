import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import logo from "../assets/logo-64.png";
import { FaHome } from "react-icons/fa";
import { MdNoteAdd } from "react-icons/md";
import { BsPostcardHeartFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa6";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";
import { IoLogInSharp } from "react-icons/io5";




const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const navItems = <>
        <li><NavLink to={"/"}><FaHome className='text-xl text-[#F98514]'/>Home</NavLink></li>
        <li><NavLink to={"/add-blog"}><MdNoteAdd className='text-xl text-[#F98514]'/>Add Blog</NavLink></li>
        <li><NavLink to={"/all-blogs"}><BsPostcardHeartFill className='text-xl text-[#F98514]'/>All Blogs</NavLink></li>
        <li><NavLink to={"/featured-blog"}><FaFire className='text-xl text-[#F98514]'/>Featured Blogs</NavLink></li>
        <li><NavLink to={"/wish-list"}><RiHeartAdd2Fill className='text-xl text-[#F98514]'/>Wishlist</NavLink></li>
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Sign Out Successful");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-14' src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">StoryStack</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className='flex items-center gap-3'>
                            <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                            <button onClick={handleSignOut} className='btn rounded-none bg-[#F98514] text-white'>Logout <IoLogOutSharp className='text-xl'/> </button>
                        </div>
                    </> : <>
                        <div className='flex gap-3'>
                            <Link to="/login" className="btn rounded-none bg-[#F98514] text-white">Login <IoLogInSharp className='text-xl'/>
                            </Link>
                            <Link to="/register" className='btn rounded-none bg-[#F98514] text-white'>Register <IoLogInSharp className='text-xl'></IoLogInSharp> </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;