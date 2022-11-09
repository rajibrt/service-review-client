import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    // const { message } = useLoaderData();
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:4000/review?serviceId=${reviews.eserviceId}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [reviews?.serviceId])
    return (
        <div className='shadow-inner w-full bg-white p-4 rounded-lg'>
            <div className="card-title">Review found for this service: {reviews.length}</div>
            <div className='grid gap-2'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;