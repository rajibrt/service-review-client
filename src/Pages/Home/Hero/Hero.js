import React from 'react';
import HeroItem from './HeroItem';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const bannerData = [
    {
        image: 'https://i.ibb.co/m56SPz4/slide1.webp',
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: 'https://i.ibb.co/mztwTM3/slide2.webp',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://i.ibb.co/54Pk0Vz/slide3.webp',
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: 'https://i.ibb.co/b7gp5NF/slide4.webp',
        prev: 3,
        id: 4,
        next: 1
    }
]


const Hero = () => {
    return (
        <div className="carousel w-full text-center">
            {
                bannerData.map(slide => <HeroItem
                    key={slide.id}
                    slide={slide}
                ></HeroItem>)
            }
        </div >
    );
};

export default Hero;