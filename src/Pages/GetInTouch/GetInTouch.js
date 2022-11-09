import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const GetInTouch = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="mx-auto rounded-lg mb-10 hero w-5/6 min-h-[500px]" style={{ backgroundImage: `url("https://i.ibb.co/4WfNf66/get-in-touch.webp")` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-md">
                    <h1 data-aos="fade-up"
                        data-aos-anchor-placement="center-center" className="mb-5 text-5xl font-bold text-yellow-500">Get In Touch</h1>
                    <p data-aos="fade-up"
                        data-aos-anchor-placement="center-center" className="mb-5 text-white">To capture your event or moment feel free to contact with me. I am always ready to go...</p>
                    <button className="btn bg-yellow-500 text-gray-800 hover:text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;