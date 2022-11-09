import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaPen, FaUserCircle } from "react-icons/fa";
import { FcCameraAddon } from "react-icons/fc";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <li><Link to='/addservice'>Add Service</Link></li>
                :
                <Link to='/profile'>{user?.email && <span>Welcome, {user.email}</span>}</Link>
        }

    </>


    return (
        <div className="navbar bg-base-100 md:px-8 lg:py-4 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'><img className='lg:w-32 w-20' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email ?
                        <>
                            <Link to='/addservice' className="btn btn-ghost hover:bg-white text-red-500"><FcCameraAddon className='mr-2 text-xl'></FcCameraAddon> <span className='hidden lg:grid '>Add Service</span></Link>
                            <Link to='/myreviews' className="btn btn-ghost hover:bg-white text-red-500"><FaPen className='mr-2 text-xl'></FaPen> <span className='hidden lg:grid '>My Reviews</span></Link>
                            <button className='btn btn-ghost hover:bg-white hover:text-yellow-500' onClick={logOut}>Logout</button>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <Link to="/profile">
                                    {user?.photoURL ?
                                        <img alt='Profile Img' className='img-fluid rounded-full' style={{ height: '40px', width: '40px' }} src={user?.photoURL}></img>
                                        : <FaUserCircle className='text-2xl text-blue-600 rounded-full  ring ring-orange-500 ring-offset-base-100 ring-offset-2' ></FaUserCircle>
                                    }
                                </Link>
                            </div>
                        </>
                        :
                        <Link className="btn bg-gray-900 text-white border-0 hover:bg-yellow-500 mx-4" to='/login'>Login</Link>


                }
            </div>
        </div>
    );
};

export default Header;