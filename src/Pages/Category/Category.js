import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Category = () => {
    const course = useLoaderData();
    // const [courses, setCourses] = useState([]);

    // useEffect( () => {
    //     fetch(`http://localhost:5000/category/${params}`)
    //         .then(res => res.json())
    //     .then(data=>console.log(data))
    // }, [])
    return (
        <div className='new'>
            {/* <h3>category{course.length}</h3> */}
            {
                course.map(course => <CourseCard
                    key={course._id}
                course={course}></CourseCard>)
            }
        </div>
    );
};

export default Category;