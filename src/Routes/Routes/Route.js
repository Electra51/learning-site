import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import CourseHome from "../../Pages/CourseHome/CourseHome";
import Home from "../../Pages/Home/Home";
import FAQ from "../../Pages/FAQ/FAQ";
import ErrorPage from "../../Shared/ErrorPage";
import Blogs from "../../Pages/Blogs/Blogs";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/courses',
                element: <CourseHome></CourseHome>,
                loader: () => fetch('http://localhost:5000/courses')
            },
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
                path: '/Courses',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
               
            },
            {
                path: '/FAQ',
                element:<FAQ></FAQ>

            },
            {
                path: '/Blogs',
                element:<Blogs></Blogs>

            }
            // {
            //     path: '/course/:id',
            //     element:<Course></Course>
            // }


        ]
    }

])