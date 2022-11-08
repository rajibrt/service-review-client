import React from 'react';
import { FaCamera, FaClock, FaGlobeAmericas, FaSkiing, FaSmile, FaUsers } from 'react-icons/fa';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MyGoal = () => {
    return (
        <div data-aos="zoom-in-down" className="md:max-w-screen-xl w-5/6 m-auto md:p-28 p-10 bg-white text-gray-800 relative md:-mt-20 -mt-10 mb-8 rounded-lg text-center shadow-md">
            <h2 data-aos="zoom-out" className='text-gray-800 text-3xl font-bold'>My Goal</h2>
            <div className="divider"></div>
            <p>Capture the moment for the life!</p>
            <div className='grid md:grid-cols-3 gap-3'>
                <div data-aos="fade-right" className='md:my-8 pb-3 md:border-none border-b-2 rounded-md border-gray-200 '>
                    <FaClock className="text-4xl m-auto my-4"></FaClock>
                    <h2 className='font-bold mb-2'>onClick Time</h2>
                    <p>Time waits for no one, but I will capture it through pictures.</p>
                </div>
                <div data-aos="fade-down" className='md:my-8 pb-3 md:border-none border-b-2 rounded-md border-gray-200'>
                    <FaSmile className="text-4xl m-auto my-4"></FaSmile>
                    <h2 className='font-bold mb-2'>onClick Smile</h2>
                    <p>There are not always moments of laughter in life, but I will capture them through pictures.</p>
                </div>
                <div data-aos="fade-left" className='md:my-8 pb-3 md:border-none border-b-2 rounded-md border-gray-200'>
                    <FaSkiing className="text-4xl m-auto my-4"></FaSkiing>
                    <h2 className='font-bold mb-2'>onClick Moment</h2>
                    <p>Things happen in moments, but I'll capture them in pictures.</p>
                </div>
            </div>
        </div>
    );
};

export default MyGoal;