import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";


import Home from "../../Pages/Home/Home";
import FAQ from "../../Pages/FAQ/FAQ";
import ErrorPage from "../../Shared/ErrorPage";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";


import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";

import AllData from "../../Pages/AllData/AllData";
import Login from "../../Shared/Login/Login";
import Signup from "../../Shared/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import Profile from "../../Pages/Profile/Profile";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
           
            {
                path: '/courses',
                element: <Courses></Courses>,
                
            },
            {
                path: '/',
                element: <Home></Home>
               
            },
            {
                path: '/home',
                element: <Home></Home>
               
            },
            {
                path: 'category/:id/checkout',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://learning-server-side-sooty.vercel.app/category/${params.id}`)
                    console.log(params);
                }
               
            },
            
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: async ({ params }) => {
                    return fetch(`https://learning-server-side-sooty.vercel.app/category/${params.id}`)
                    
                }
               
            },
           
            {
                path: '/FAQ',
                element:<FAQ></FAQ>

            },
            {
                path: '/Blogs',
                element:<Blogs></Blogs>

            },
           
            {
                path: '/',
                element: <AllData></AllData>,

            },
            {
                path: 'login',
                element: <Login></Login>,

            },
            {
                path: '/signup',
                element: <Signup></Signup>,

            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }

           


        ]
    }

])