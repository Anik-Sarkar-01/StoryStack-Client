import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AuthorCard = ({ author }) => {
    const { name, photo, bio, facebook, linkedin, instagram } = author;
    return (
        <div className="max-w-sm shadow-sm bg-white p-4 text-center m-3 space-y-3 border-e-4 border-[#F98514]">
            <img
                src={photo}
                alt=""
                className="w-20 h-20 mx-auto rounded-full border-2 border-[#F98514] object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{bio}</p>
            <div className='flex gap-3 justify-center items-center'>
                <Link to={facebook} target="_blank"><BsFacebook className='text-[#F98514]'></BsFacebook></Link>
                <Link to={linkedin} target="_blank"> <BsLinkedin className='text-[#F98514]'></BsLinkedin> </Link>
                <Link to={instagram} target="_blank"><BsInstagram className='text-[#F98514]'></BsInstagram></Link>
            </div>
        </div>

    );
};

export default AuthorCard;