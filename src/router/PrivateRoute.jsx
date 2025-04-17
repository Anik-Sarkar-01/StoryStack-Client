import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate to={"/login"} state={location?.pathname}></Navigate>
};

export default PrivateRoute;