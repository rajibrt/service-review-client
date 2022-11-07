import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>

        {
            user?.email ?
                <li><Link to='/addservice'>Add Service</Link></li>
                :
                <Link to='/profile'>{user?.email && <span>Welcome, {user.email}</span>}</Link>
        }

    </>


    return (
        <div className="navbar bg-base-100 px-8 py-4 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'><img className='w-32' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/addservice' className="btn bg-red-500 text-white border-0 hover:bg-yellow-500">Add Service</Link>
                {
                    user?.email ?
                        <>
                            <button onClick={logOut}>Logout</button>
                            <Link to='/profile'>{user?.email && <span>Welcome, {user.email}</span>}</Link>
                            <Link to='/profile'>Profile</Link>
                        </>
                        :
                        <Link className="btn bg-gray-900 text-white border-0 hover:bg-yellow-500 mx-4" to='/login'>Login</Link>


                }
            </div>
        </div>
    );
};

export default Header;