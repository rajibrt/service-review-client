import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewCard from '../Shared/Reviews/MyReviewCard';
import ReviewCard from '../Shared/Reviews/ReviewCard';

const MyReviews = () => {
    useTitle('My Review')
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [reviews, setReviews] = useState([])
    console.log(user);

    useEffect(() => {
        fetch(`https://onclick-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('onClink-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    useEffect(() => {
        const fetchData = () => {
            fetch('https://onclick-server.vercel.app/myreviews')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a, b) => b._id.localeCompare(a._id))
                    setReviews(result)
                })
                .catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

    }, [])


    return (
        <div className='shadow-inner bg-white p-4 rounded-lg lg:w-3/5 w-5/6 mx-auto my-8 min-h-screen'>
            <div className='mb-4'>
                <h2 className='text-center  text-2xl'><span className='mr-2'>You have reviewed:</span>
                    {myReviews.length > 0 ? myReviews.length : `No reviews were added`}</h2>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>
                {
                    myReviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                    ></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;