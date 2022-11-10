import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import Star from './Star';
import { PhotoProvider, PhotoView } from 'react-photo-view';
// ..
AOS.init();

const ServiceCard = ({ service }) => {
    const { _id, title, rating, image, content, price } = service;
    const [services, setServices] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:4000/services/home')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a, b) => a.submissionTime.localeCompare(b.submissionTime))
                    setServices(result)
                })
                .catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

    }, [])

    return (
        <div data-aos="fade-up"
            data-aos-duration="800" className="card xl:w-3/3 md:1/3 bg-base-100 shadow-xl">
            <div className='relative rounded-xl'>
                <figure>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img data-aos="fade-up" data-aos-delay="300" className='bg-center w-96 rounded-xl cursor-pointer' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider></figure>
                <div data-aos="fade-down"
                    data-aos-duration="1000" className='card-actions items-center justify-between absolute bottom-0 bg-gray-800/50 w-full p-2 text-white'>
                    <h2><Star rating={rating}> </Star></h2>

                    <h2 className='font-bold'>Price <span className='text-orange-500'>${price}</span></h2>
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