import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Star from '../../Home/LatestServices/Star';
// ..
AOS.init();

const Service = ({ rating }) => {
    const { title, image, content, price } = useLoaderData();
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row bg-base-200 rounded-lg p-10 shadow-xl">
                {/* <img data-aos="fade-right" data-aos-delay="300" data-aos-duration="3000" src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}

                <PhotoProvider>
                    <PhotoView src={image}>
                        <img data-aos="fade-right" data-aos-delay="300" className='bg-center w-96 rounded-xl' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h2><Star rating={rating}> </Star></h2>
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{content}</p>
                    <div className='flex gap-4 bg-white shadow-inner my-4 p-4 w-fit'>
                        <h2 className='font-bold text-orange-500 text-2xl'>Price ${price}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;