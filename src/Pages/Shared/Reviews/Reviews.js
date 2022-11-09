import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    // const { message } = useLoaderData();
    // console.log(message);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:4000/reviews')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a, b) => a._id.localeCompare(b._id))
                    setReviews(result)
                })
                .catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

    }, [])
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