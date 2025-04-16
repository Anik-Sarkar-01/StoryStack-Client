import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLottie from "../assets/lottie/login-lottie.json";
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then((result) => {
            console.log("sign In", result.user);
            navigate('/');
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then((result) => {
            console.log("Google Login",result.user);
            navigate('/');
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                </div>
            </div>
        </div>
    );
};

export default Login;