import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_apiUrl,
    withCredentials: true
})

const useAxiosSecure = () => {

    const { signOutUser, toastError } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                signOutUser()
                    .then(() => {
                        navigate('/login');
                    })
                    .catch(error => {
                        toastError(error.message);
                    })
            }

            return Promise.reject(error);
        })

    }, [navigate, signOutUser, toastError])
    return axiosInstance;
};

export default useAxiosSecure;