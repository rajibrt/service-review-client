import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
    return (
        <footer className='bg-slate-800 pb-4'>
            <div data-aos="zoom-in" className='pt-4 m-auto'>
                <Link to='/'><img className='md:w-64 w-32 m-auto' src={logo} alt="" /></Link>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center py-4 text-neutral-content">
                <div className='flex gap-2 my-2'>
                    <span className="footer-title">Company</span>
                    <a href="/" className="hover:text-yellow-500 border-solid border-r-2 pr-2 border-yellow-200/50">About us</a>
                    <Link className="hover:text-yellow-500 border-solid pr-2 border-r-2 border-yellow-200/50" to='/services'>Services</Link>
                    <a href="/" className="hover:text-yellow-500">Contact</a>

                </div>
                <div className='flex gap-2 my-2'>
                    <span className="hover:text-yellow-500 footer-title">Legal</span>
                    <a href="/" className="hover:text-yellow-500 border-solid pr-2 border-r-2 border-yellow-200/50">Terms of use</a>
                    <a href="/" className="hover:text-yellow-500 border-solid pr-2 border-r-2 border-yellow-200/50">Privacy policy</a>
                    <a href="/" className="hover:text-yellow-200/50 link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-yellow-500 text-center'>Kayum &copy; 2023 by onClick Photography</div>
        </footer>
    );
};

export default Footer;