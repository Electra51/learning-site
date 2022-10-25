import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Category = () => {
    const course = useLoaderData();
    return (
        <div>
            <h3>category{course.length}</h3>
            {
                course.map(course => <CourseCard
                    key={course._id}
                course={course}></CourseCard>)
            }
        </div>
    );
};

export default Category;