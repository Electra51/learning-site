// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import CourseCard from '../../Shared/CourseCard/CourseCard';
// import LeftSide from '../../Shared/LeftSide/LeftSide';
// import Category from '../Category/Category';
// import CourseHome from '../CourseHome/CourseHome';
// import './Courses.css'
// const Courses = () => {
//     // const courses = useLoaderData();
//     // console.log(courses)
//     return (
//         <div className='courseCat'>
//         <div className="courses border">
//         <Category></Category>
//             </div>
            
        
//         <div className="category border">
//             <LeftSide></LeftSide>
//         </div>
//     </div>
//     );
// };

// export default Courses;


import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';
import Description from '../Description/Description';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
        .then(data=>setCourses(data))
    }, [])

    const handleClick = (course) => {
        console.log(course)
        const newCourse = [course];
        setDescription(newCourse);
    }




    return (
        <div className='course-container'>
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