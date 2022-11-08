import React from 'react';
import './Hero.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const HeroItem = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full" alt='' />
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="bg-transparent border-none md:text-3xl font-bold text-white hover:text-yellow-500 hover:bg-transparent">PREV</a>
                <div>
                    <h2 data-aos="zoom-out-down" className="md:text-6xl font-bold text-white">on <span className="text-yellow-500">Click</span> </h2>
                    <h1 data-aos="flip-left" className="md:text-4xl font-bold text-white md:my-6">The moment for <span className=" text-yellow-500">a few seconds</span> <br />but I capture it for a <span className="text-yellow-500">lifetime</span></h1>
                    <p className="text-white">"It's not enough to just own a camera.<br /> Everyone owns a camera. <br />To be a photographer, you must understand, appreciate,<br /> and harness the power you hold!"</p>
                </div>
                <a href={`#slide${next}`} className="bg-transparent border-none md:text-3xl font-bold text-white hover:text-yellow-500 hover:bg-transparent ">NEXT</a>
            </div>
        </div >
    );
};

export default HeroItem;