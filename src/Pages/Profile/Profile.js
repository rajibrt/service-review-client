import { updateCurrentUser } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Profile = () => {
    useTitle('Profile')
    const { user } = useContext(AuthContext);
    const { updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL);

    // const handleUpdate = event => {
    //     event.preventDefault();
    //     console.log(photoURLRef.current.value);
    // }
    // const handleNameChange = event => {
    //     setName(event.target.value);
    // }

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        // const email = form.email.value;
        // const password = form.password.value;

        console.log(name, photoURL);

        updateUserProfile(updateCurrentUser)
            .then(result => {
                handleUpdateUserProfile(name, photoURL);
                // console.log(user);
            })
            .catch(error => console.log(error));
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div data-aos="flip-left" className="hero-content w-96">

                <div className="card shadow-2xl w-full">
                    <form onSubmit={handleUpdate} className="card-body">
                        <h1 data-aos="zoom-in" data-aos-delay="200" className="text-2xl text-center font-bold">My Details</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Image</span>
                            </label>
                            <input type="text" name="photoURL" defaultValue={user?.photoURL} placeholder="profile image https/..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user.email} name="email" placeholder="email" className="input input-bordered" readOnly required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control mt-6">
                            <input type="submit" className="btn w-full bg-yellow-500 border-none hover:text-white text-black" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;