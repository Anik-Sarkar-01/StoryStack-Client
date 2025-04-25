import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottie from "../assets/lottie/register-lottie.json"
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogInSharp } from "react-icons/io5";

const Register = () => {

    const { createUser, setUser, updateUserProfile, toastSuccess, toastError } = useContext(AuthContext);

    const navigate = useNavigate();
    const [error, setError] = useState();


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{7,}$/;
        if (!regex.test(password)) {
            setError({ error: "Password should contain minimum 1 uppercase, 1 number, 1 special character. And Length should be 6 character" })
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                        setError({error: " "})
                        toastSuccess("Registration Successful!")
                    })
                    .catch(error => {
                        if (error) {
                            toastError("Error Occurred! Try Again.")
                        }
                    })
            })
            .catch(error => {
                if (error) {
                    toastError("Error Occurred! Try Again.")
                }
            })
    }


    return (
        <div className="hero bg-base-200 my-10 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96 hidden md:block">
                    <Lottie animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl md:text-4xl font-bold">Register now !</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="name" className="input" name='name' placeholder="Name" />

                            <label className="fieldset-label">Photo URL</label>
                            <input type="url" className="input" name='photoUrl' placeholder="Photo Url" />

                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div className='pt-2'>
                                <p className='text-xs text-red-600'>{error?.error}</p>
                            </div>
                            <button className="btn bg-[#F98514] mt-4 text-white">Register <IoLogInSharp className='text-xl'></IoLogInSharp> </button>
                        </form>
                        <p className='text-center font-semibold'>Already have an Account? <Link to="/login" className='btn text-[16px] font-semibold rounded-none bg-[#F98514] text-white'>Login <IoLogInSharp className='text-xl'></IoLogInSharp></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;