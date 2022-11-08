import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Star = ({ rating }) => {
    const starRating = Array.from({ length: 5 }, (elem, index) => {
        let numbers = index + 0.5;

        return (
            <span key={index}>
                {rating > index + 1 ? (
                    <BsStarFill className='text-yellow-500' />
                ) : rating > numbers ? (
                    <BsStarHalf className='text-yellow-500' />
                ) : (
                    <BsStar className='text-yellow-500' />
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