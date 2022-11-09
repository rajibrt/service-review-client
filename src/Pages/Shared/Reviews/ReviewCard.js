import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ReviewCard = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { message, photoURL } = review;

    return (
        <div className="flex flex-wrap items-center border-2 border-grey-500 p-4 rounded-lg">
            <div>
                <img className='w-10 rounded-full ring ring-yellow-500 ring-offset-base-100 ring-offset-2' src={user?.photoURL} alt="" />
            </div>
            <div className='lg:ml-4'>
                <p>{message}</p>
            </div>
        </div>

    );
};

export default ReviewCard;