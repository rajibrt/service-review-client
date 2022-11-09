import React from 'react';

const ReviewCard = ({ review }) => {
    const { message, photoURL } = review;
    return (
        <div className="flex flex-wrap items-center border-2 border-grey-500 p-4 rounded-lg">
            <div>
                <img className='w-20 rounded-full ring ring-yellow-500 ring-offset-base-100 ring-offset-2' src={photoURL} alt="" />
            </div>
            <div className='lg:ml-4'>
                <p>{message}</p>
            </div>
        </div>

    );
};

export default ReviewCard;