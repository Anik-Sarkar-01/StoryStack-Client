import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLottie from "../assets/lottie/login-lottie.json";
import AuthContext from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signInUser, setUser, signInWithGoogle, toastSuccess, toastError } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toastSuccess("Login Successful!")
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                if (error) {
                    toastError("Error Occurred! Try Again.")
                }
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toastSuccess("Login Successful!")
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                if(error){
                    toastError("Error Occurred! Try Again.")
                }
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <button onClick={handleGoogleLogin} className='btn btn-primary'>Login With Google</button>
                    </div>
                    <p className='text-center font-semibold'>Don't have an Account? <Link to="/register" className='btn text-[16px] font-semibold rounded-none'> Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;