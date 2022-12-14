import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Star from '../../Home/LatestServices/Star';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Reviews from '../../Shared/Reviews/Reviews';
import { FaKey, FaUserCircle } from 'react-icons/fa';
import PostReview from '../../Shared/Reviews/PostReview';
import ReviewCard from '../../Shared/Reviews/ReviewCard';
import useTitle from '../../../hooks/useTitle';

// ..
AOS.init();

const Service = () => {
    const { _id, time, title, image, rating, content, price } = useLoaderData();
    useTitle(`${title}`)
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


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


    useEffect(() => {
        fetch(`https://onclick-server.vercel.app/review?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [_id])

    return (
        <div className="m-auto w-5/6 my-8">
            <div className=" bg-base-200 rounded-lg p-10 shadow-xl">
                <div className='hero-content flex-col lg:flex-row'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img data-aos="fade-right" data-aos-delay="300" className='bg-center w-96 rounded-xl cursor-pointer' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h2 className='mt-4 text-xl'><Star rating={rating}> </Star></h2>
                        <p className="py-6">{content}</p>
                        <div className='flex gap-4 bg-white shadow-inner my-4 p-4 w-fit'>
                            <h2 className='font-bold text-orange-500 text-2xl'>Price ${price}</h2>
                        </div>
                    </div>
                </div>

                <div className='shadow-inner w-full bg-white p-4 rounded-lg mb-10'>
                    <div className="lg:card-title text-center mb-2">Review found for this service: {reviews.length}</div>
                    <div className='grid lg:grid-cols-2 gap-2'>
                        {
                            reviews.map(review => <ReviewCard
                                key={review._id}
                                review={review}
                            ></ReviewCard>)
                        }
                    </div>
                </div>

                {
                    user?.email ?
                        <PostReview></PostReview>
                        :
                        <div data-aos="fade-up" className='grid mx-auto max-w-fit border-dotted border-2 border-yellow-600 p-4 rounded-lg'>
                            <h2>login to add a review .</h2>
                            <Link to='/login' className="btn btn-ghost hover:bg-white text-red-500"><FaKey className='mr-2 text-xl'></FaKey> <span className='hidden lg:grid '>LOGIN</span></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Service;