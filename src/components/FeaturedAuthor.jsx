import React, { useEffect, useState } from 'react';
import AuthorCard from './authorCard';
import Marquee from "react-fast-marquee";

const FeaturedAuthors = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        fetch('/authors.json')
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, [])

    console.log(authors);
    return (

        <div>
            <div className='text-center space-y-3 pb-5'>
                <h2 className='text-3xl font-semibold'>Featured <span className="text-[#F98514]">Writers</span></h2>
                <p className='text-center'>Every great blog has a voice. Here are the brilliant voices behind ours.</p>
            </div>
            <Marquee pauseOnHover={true} speed={20}>
                {
                    authors.map((author, idx) => <AuthorCard key={idx} author={author}></AuthorCard>)
                }
            </Marquee>
        </div>
    );
};

export default FeaturedAuthors;