import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import WishCard from '../components/WishCard';


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
        <div className='py-5 space-y-10'>
            <h2 className='text-center text-2xl font-semibold text-gray-500'>{wishlist.length} Blogs Found !! </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center'>
                {
                    wishlist.map(wishItem => <WishCard key={wishItem._id} wishItem={wishItem} wishlist={wishlist} setWishlist={setWishlist}></WishCard>)
                }
            </div>
        </div>

    );
};

export default WishList;