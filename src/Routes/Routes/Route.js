import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/home',
                element: <Home></Home>,
               
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
            // {
            //     path: '/course/:id',
            //     element:<Course></Course>
            // }
        ]
    }

])