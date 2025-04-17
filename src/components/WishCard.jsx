import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const WishCard = ({ wishItem, wishlist, setWishlist }) => {
    const { _id, id, title, author, shortDescription } = wishItem;


    const handleDelete = async (id) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_apiUrl}/delete-wishBlog/${id}`)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    const remaining = wishlist.filter(item => item._id !== id);
                    setWishlist(remaining);
                }
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: { err },
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            }

        }
    }



    return (
        <div className="card w-72 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}</p>
                <p>{author?.name}</p>
                <div className="justify-start card-actions">
                    <Link to={`/blog/${id}`} className="btn btn-primary">Details</Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
}


export default WishCard;