import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

// import Category from "../../Pages/Category/Category";
// import Courses from "../../Pages/Courses/Courses";
// import CourseHome from "../../Pages/CourseHome/CourseHome";
import Home from "../../Pages/Home/Home";
import FAQ from "../../Pages/FAQ/FAQ";
import ErrorPage from "../../Shared/ErrorPage";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
// import News from "../../Pages/News/News";
import Description from "../../Pages/Description/Description";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Category from "../../Pages/Category/Category";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            // {
            //     path: '/courses',
            //     element: <CourseHome></CourseHome>,
            //     loader: () => fetch('http://localhost:5000/courses')
            // },
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
                path: '/category/:id',
                element: <Category></Category>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                    console.log(params.id)
                }
               
            },
            // {
            //     path: '/CourseDetails',
            //     element: <CourseDetails></CourseDetails>
               
            // },
            {
                path: '/FAQ',
                element:<FAQ></FAQ>

            },
            {
                path: '/Blogs',
                element:<Blogs></Blogs>

            },
            // {
            //     path: '/courses/:id',
            //     element:<New></New>
            // }


        ]
    }

])