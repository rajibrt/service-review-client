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
import Reviews from '../../Shared/Reviews/Reviews';
import { FaUserCircle } from 'react-icons/fa';
import PostReview from '../../Shared/Reviews/PostReview';
// ..
AOS.init();

const Service = () => {
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


    // const handleInputBlur = event => {
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     const newReview = { ...reviews }
    //     newReview[field] = value;
    //     setReview(newReview);
    // }

    return (
        <div className=" min-h-screen m-auto w-5/6 my-8">
            <div className=" bg-base-200 rounded-lg p-10 shadow-xl">
                <div className='hero-content flex-col lg:flex-row'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img data-aos="fade-right" data-aos-delay="300" className='bg-center w-96 rounded-xl cursor-pointer' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <div>Publish Date: {time}</div>
                        {/* <div>Publish Date: {moment().format('MMMM Do YYYY, h:mm:ss a')}</div> */}
                        <h2 className='mt-4 text-xl'><Star rating={rating}> </Star></h2>
                        <p className="py-6">{content}</p>
                        <div className='flex gap-4 bg-white shadow-inner my-4 p-4 w-fit'>
                            <h2 className='font-bold text-orange-500 text-2xl'>Price ${price}</h2>
                        </div>
                    </div>
                </div>
                <Reviews></Reviews>
                {/* <div className='grid grid-cols-1 gap-4 m-auto justify-items-center'>
                    <div className='grid justify-items-center my-8'>
                        <form onSubmit={handleSubmitReview} className='mt-4 grid gap-2 w-96'>
                            <input type="email" name='email' placeholder={user.email} defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                            <input type="number" name='starRating' placeholder="Rating 1 to 5" min="1" max="5" step="0.5" className="input input-bordered w-1/2" required />
                            <textarea type="text" name='message' className="textarea textarea-bordered h-48" placeholder="Fill Up" required></textarea>
                            <button type='submit' className='btn'>Submit Reviews</button>
                            <Toaster />

                        </form>
                    </div>
                </div> */}
            </div>
            <PostReview></PostReview>
        </div>
    );
};

export default Service;