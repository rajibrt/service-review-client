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
                    <h2 data-aos="zoom-out-down" className="md:text-3xl font-bold text-white">Help The <span className="text-yellow-500">People</span> </h2>
                    <h1 data-aos="flip-left" className="md:text-6xl font-bold text-white md:my-6">Grow up <span className=" text-yellow-500">humanity</span> & <span className="text-yellow-500">kindness</span></h1>
                    <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <a href={`#slide${next}`} className="bg-transparent border-none md:text-3xl font-bold text-white hover:text-yellow-500 hover:bg-transparent ">NEXT</a>
            </div>
        </div >
    );
};

export default HeroItem;