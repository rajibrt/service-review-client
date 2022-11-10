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
        const submissionTime = new Date().getTime();
        const email = user?.email ? user.email : 'unregistered';
        const displayName = user?.displayName ? user.displayName : ''
        const photoURL = user?.photoURL ? user.photoURL : <FaUserCircle></FaUserCircle>
        const message = form.message.value;
        const starRating = form.starRating.value;

        // console.log(reviews);

        const reviews = {
            serviceId: _id,
            photoURL,
            displayName,
            starRating,
            email,
            submissionTime,
            title,
            image,
            message
        }

        fetch('https://onclick-server.vercel.app/reviews', {
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
        <div data-aos="fade-down" className="m-auto my-8 lg:full w-9/12 ">
            <div className='grid grid-cols-1 gap-4 m-auto justify-items-center'>
                <div className='grid justify-items-center my-8'>
                    <form onSubmit={handleSubmitReview} className='mt-4 grid gap-2 lg:w-full w-9/12'>
                        <div className='border-b-2 border-yellow-500 lg:w-full w-9/12'>
                            <h2 className='text-center font-bold text-xl border-b-2 border-yellow-500'>Dear {user.displayName}, Thanks for your review! </h2>
                            <div className='flex justify-between'>
                                <input type="text" name='name' placeholder={user.displayName} defaultValue={user?.displayName} className="input input-bordered" disabled />
                                <input type="email" name='email' placeholder={user.email} defaultValue={user?.email} className="input input-bordered textarea" disabled />
                            </div>
                        </div>
                        <input type="number" name='starRating' placeholder="Rating 1 to 5" min="1" max="5" step="0.5" className="input input-bordered w-1/2" required />
                        <textarea type="text" name='message' className="textarea textarea-bordered h-48 lg:w-full w-9/12" placeholder="Fill Up" required></textarea>
                        <button type='submit' className='btn lg:w-full w-fit mx-auto '>Submit Reviews</button>
                        <Toaster />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default PostReview;