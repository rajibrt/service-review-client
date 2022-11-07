import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        user(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div data-aos="flip-left" className="hero-content w-96">

                <div className="card shadow-2xl w-full">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 data-aos="zoom-in" data-aos-delay="200" className="text-2xl text-center font-bold">Signup now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user.email} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn w-full bg-yellow-500 border-none hover:text-white text-black" value="Sign Up" />
                        </div>
                    </form>
                    <div className='mb-4'>
                        <h2 className='text-center'>Already an account? Please <Link to='/login' className='text-yellow-500 cursor-pointer'>Login</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;