


import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';
import Description from '../Description/Description';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect( () => {
        fetch('https://learning-server-side-sooty.vercel.app/categories')
            .then(res => res.json())
        .then(data=>setCourses(data))
    }, [])

    const handleClick = (course) => {
        console.log(course)
        const newCourse = [course];
        setDescription(newCourse);
    }




    return (
        <div className='course-container mt-8'>
            
             <div className="AllCourses  pt-5">
                {
                    courses.map(course => <AllCourses key={course.id}
                        course={course}
                    handleClick={handleClick}></AllCourses>)
                }

            </div>
            <div className="CourseDescription ">
                {/* description{description.length} */}
                <Description description={description}></Description>

            </div>

           
           
        </div>
    );
};

export default Courses;