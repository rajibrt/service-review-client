import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import AddService from "../../Pages/Services/AddService/AddService";
import Services from "../../Pages/Services/Services/Services";
import Service from "../../Pages/Services/Service/Service";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/service/${params.id}`)
            }

        ]
    }
])

export default router; 