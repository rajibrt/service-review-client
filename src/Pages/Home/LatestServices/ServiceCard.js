import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();

const ServiceCard = ({ service }) => {
    const { _id, title, rating, image, content, price } = service;
    return (
        <div data-aos="fade-up"
            data-aos-duration="800" className="card xl:w-3/3 md:1/3 bg-base-100 shadow-xl">
            <div className='relative rounded-xl'>
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div data-aos="fade-down"
                    data-aos-duration="3000" className='card-actions justify-between absolute bottom-0 bg-gray-800/50 w-full p-2 text-white'>
                    <h2>Rating: {rating} </h2>
                    <h2>Price <span className='font-bold text-orange-500'>${price}</span></h2>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title} </h2>
                <p className='text-left'>{content.length > 100 ? content.slice(0, 100) + '...' : content}</p>
                <Link to={`/service/${_id}`} className="btn w-full bg-yellow-500 border-none hover:text-white text-black">Details</Link>
            </div>
        </div>
    );
};

export default ServiceCard;