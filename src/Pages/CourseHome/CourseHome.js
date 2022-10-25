import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';
import LeftSide from '../../Shared/LeftSide/LeftSide';
import './CourseHome.css'

const CourseHome = () => {
    const allcourse = useLoaderData();
    return (
        <div className='hom mt-10'>
            <div className="basis-1/3 border">
                <LeftSide></LeftSide>

            </div>

           
                
            <div className='new'>
            
            {/* <h2>home{allcourse.length}</h2> */}
            {
               
            allcourse.map(course => <CourseCard
                key={course._id}
            course={course}></CourseCard>)
        }
        
           </div>
            
        </div>
    );
};

export default CourseHome;