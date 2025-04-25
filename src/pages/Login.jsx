import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import loginLottie from "../assets/lottie/login-lottie.json";
import AuthContext from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogInSharp } from "react-icons/io5";

const Login = () => {
    const { signInUser, setUser, signInWithGoogle, toastSuccess, toastError } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError({error: " "})
                toastSuccess("Login Successful!")
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                if (error) {
                    toastError("Error Occurred! Try Again.")
                    setError({error: "Try again with correct password"})
                }
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError({error: " "})
                toastSuccess("Login Successful!")
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                if (error) {
                    toastError("Error Occurred! Try Again.")
                    setError({error: "Try again with correct password"})
                }
            })
    }

    return (
        <div className="hero bg-base-200 my-10 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse p-20 md:p-0">
                <div className="text-center lg:text-left w-96 hidden md:block">
                    <Lottie animationData={loginLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <div className="card-body">
                        <h1 className="text-3xl md:text-4xl font-bold">Login Now !</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <p className='text-red-600 text-xs'>{error?.error}</p>
                            </div>
                            <button className="btn bg-[#F98514] mt-4 text-white">  Login <IoLogInSharp className='text-xl'></IoLogInSharp> </button>
                        </form>
                        <button onClick={handleGoogleLogin} className='btn  border-[#4086F4]'> <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="" /> Login With Google</button>
                    </div>
                    <p className='text-center font-semibold'>Don't have an Account? <Link to="/register" className='btn text-[16px] text-white font-semibold bg-[#F98514] rounded-none'> Register <IoLogInSharp className='text-xl'></IoLogInSharp> </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;