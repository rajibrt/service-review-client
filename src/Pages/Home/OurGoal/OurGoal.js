import React from 'react';
import { FaGlobeAmericas, FaSmile, FaUsers } from 'react-icons/fa';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const OurGoal = () => {
    return (
        <div data-aos="zoom-in-down" className="md:max-w-screen-xl w-5/6 m-auto md:p-28 p-10 bg-white text-gray-800 relative md:-mt-20 -mt-10 mb-8 rounded-lg text-center shadow-md">
            <h2 data-aos="zoom-out" className='text-gray-800 text-3xl font-bold'>My Goal</h2>
            <div className="divider"></div>
            <p>There are many variations of azer duskam of Lorem Ipsum available,</p>
            <div className='grid md:grid-cols-3 gap-3'>
                <div data-aos="fade-right" className='md:my-8 pb-3 md:border-none border-b-2 rounded-md border-gray-200 '>
                    <FaSmile className="text-4xl m-auto my-4"></FaSmile>
                    <h2 className='font-bold mb-2'>Save Children</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                </div>
                <div data-aos="fade-down" className='md:my-8 pb-3 md:border-none border-b-2 rounded-md border-gray-200'>
                    <FaUsers className="text-4xl m-auto my-4"></FaUsers>
                    <h2 className='font-bold mb-2'>People Care</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                </div>
                <div data-aos="fade-left" className='md:my-8 pb-3 md:border-none border-b-2 rounded-md border-gray-200'>
                    <FaGlobeAmericas className="text-4xl m-auto my-4"></FaGlobeAmericas>
                    <h2 className='font-bold mb-2'>Peace The Planet</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                </div>
            </div>
        </div>
    );
};

export default OurGoal;