import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';
import LeftSide from '../../Shared/LeftSide/LeftSide';
import Category from '../Category/Category';
import CourseHome from '../CourseHome/CourseHome';
import './Courses.css'
const Courses = () => {
    // const courses = useLoaderData();
    // console.log(courses)
    return (
        <div className='courseCat'>
        <div className="courses border">
        <Category></Category>
            </div>
            
        
        <div className="category border">
            <LeftSide></LeftSide>
        </div>
    </div>
    );
};

export default Courses;