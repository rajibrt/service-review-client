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
        image: 'https://i.imgur.com/PWFmCRk.jpg',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://i.imgur.com/gM9af0b.jpg',
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: 'https://i.imgur.com/LPM16HK.jpg',
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