import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Star from '../../Home/LatestServices/Star';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Reviews from './Reviews';
import { FaUserCircle } from 'react-icons/fa';
// ..
AOS.init();
const PostReview = () => {
    const { _id, time, title, image, rating, content, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    // const [review, setReview] = useState({});
    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email ? user.email : 'unregistered';
        const photoURL = user?.photoURL ? user.photoURL : <FaUserCircle></FaUserCircle>
        const message = form.message.value;
        const starRating = form.starRating.value;

        // console.log(reviews);

        const reviews = {
            serviceId: _id,
            photoURL,
            starRating,
            email,
            time,
            title,
            image,
            message
        }

        fetch('http://localhost:4000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    <div>
                        {toast.success('Review added successfully!')}
                        < Toaster />
                    </div>
                    event.target.reset();
                }
            })
    }

    return (
        <div className="m-auto w-5/6 my-8">


            <div className='grid grid-cols-1 gap-4 m-auto justify-items-center'>
                <div className='grid justify-items-center my-8'>
                    <form onSubmit={handleSubmitReview} className='mt-4 grid gap-2 w-96'>
                        <input type="email" name='email' placeholder={user.email} defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        <input type="number" name='starRating' placeholder="Rating 1 to 5" min="1" max="5" step="0.5" className="input input-bordered w-1/2" required />
                        <textarea type="text" name='message' className="textarea textarea-bordered h-48" placeholder="Fill Up" required></textarea>
                        <button type='submit' className='btn'>Submit Reviews</button>
                        <Toaster />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default PostReview;