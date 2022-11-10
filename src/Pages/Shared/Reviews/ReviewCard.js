import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { MdDelete } from "react-icons/md";
import Star from '../../Home/LatestServices/Star';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ReviewCard = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { _id, message, photoURL, displayName, starRating, } = review;
    const [reviews, setReviews] = useState([])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review')
        if (proceed) {
            fetch(`https://onclick-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        };
    }

    useEffect(() => {
        const fetchData = () => {
            fetch('https://onclick-server.vercel.app/reviews')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a, b) => b.submissionTime.localeCompare(a.submissionTime))
                    setReviews(result)
                })
                .catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

    }, [])

    return (
        <div data-aos="flip-up" className="flex flex-wrap items-center border-2 border-grey-500 p-4 rounded-lg relative justify-items-center">
            <div>
                <img className='w-10 lg:m-0 mb-2 rounded-full ring ring-yellow-500 ring-offset-base-100 ring-offset-2' src={photoURL} alt="" />
            </div>
            <div className='lg:ml-4 ml-4'>
                <h2 className='font-bold text-yellow-500'>{displayName}</h2>
                <p>{message}</p>
            </div>
            <div className='absolute right-2 top-2 lg:text-base text-xs'><Star rating={starRating}> </Star></div>
        </div>
    );
};

export default ReviewCard;