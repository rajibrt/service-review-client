import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
// ..
AOS.init();

const Login = () => {
    useTitle('Login')
    const { login, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const googleProviderLogin = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user, email);
                const currentUser = {
                    email: user.email

                }
                console.log(currentUser);

                fetch('https://onclick-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('onClink-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => console.log(error));
    }


    const handleGoogleSignIn = () => {
        return providerLogin(googleProviderLogin)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div data-aos="flip-right" className="hero-content w-96">

                <div className="card shadow-2xl w-full">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 data-aos="zoom-in" data-aos-delay="200" className="text-2xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                        <div className="form-control mt-6 flex gap-2">
                            <input type="submit" className="btn w-full bg-yellow-500 border-none hover:text-white text-black" value="login" />
                            <button className='btn w-full bg-blue-500 border-none hover:text-white text-white' onClick={handleGoogleSignIn}><FaGoogle className='mr-2'></FaGoogle>Login with Google</button>
                        </div>
                    </form>
                    <div className='mb-4'>
                        <h2 className='text-center'>New on Trust? Please <Link to='/signUp' className='text-yellow-500 cursor-pointer'>Sign Up</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;