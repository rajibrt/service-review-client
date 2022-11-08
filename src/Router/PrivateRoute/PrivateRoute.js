import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_kxsd2ytq.json"
            style={{ height: '300px', width: '300px' }}
        >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        // <div className='grid gap-4 place-content-center h-screen'>
        //     <progress className="progress bg-yellow-200 h-4 w-56"></progress>
        //     <button type="button" class="bg-indigo-500 ..." disabled>
        //         <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

        //         </svg>
        //         Processing...
        //     </button>
        // </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;