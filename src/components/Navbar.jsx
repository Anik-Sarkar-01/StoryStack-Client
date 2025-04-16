import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import logo from "../assets/logo-64.png";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const navItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all-blogs"}>All Blogs</NavLink></li>
        <li><NavLink to={"/add-blog"}>Add Blog</NavLink></li>
        <li><NavLink to={"/featured-blog"}>Featured Blogs</NavLink></li>
        <li><NavLink to={"/wish-list"}>Wishlist</NavLink></li>
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
        <div className="navbar bg-base-100 shadow-sm">
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
                    <img className='w-12' src={logo} alt="" />
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
                            <button onClick={handleSignOut} className='btn'>Logout</button>
                        </div>
                    </> : <>
                        <div className='flex gap-3'>
                            <Link to="/register" className='btn'>Register</Link>
                            <Link to="/login" className="btn">Login</Link>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;