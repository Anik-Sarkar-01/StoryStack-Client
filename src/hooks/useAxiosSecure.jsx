import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_apiUrl}`,
    withCredentials: true
})

const useAxiosSecure = () => {

    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log("Error Caught in interceptor", error);
            if (error.status === 401 || error.status === 403) {
                console.log("need to logout the user")
                signOutUser()
                    .then(() => {
                        console.log("log out user chor");
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }

            return Promise.reject(error);
        })

    }, [navigate, signOutUser])
    return axiosInstance;
};

export default useAxiosSecure;