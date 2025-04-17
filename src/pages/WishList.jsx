import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';


const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchAllBlogs = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_apiUrl}/all-wishlist?email=${user.email}`
            );
            setWishlist(data);
        };
        fetchAllBlogs();
    }, [setWishlist, user.email]);

    return (
        <div>
            This is wishlist page: {wishlist?.length}
        </div>
    );
};

export default WishList;