import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rating }) => {
    const starRating = Array.from({ length: 5 }, (elem, index) => {
        let numbers = index + 0.5;

        return (
            <span key={index}>
                {rating > index + 1 ? (
                    <FaStar className='text-yellow-500' />
                ) : rating > numbers ? (
                    <FaStarHalfAlt className='text-yellow-500' />
                ) : (
                    <AiOutlineStar className='text-yellow-500' />
                )}
            </span>
        );
    });
    return (
        <div className='icon-style flex'>
            {starRating}
        </div>
    );
};

export default Star;