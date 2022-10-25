import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Home = () => {
    const allcourse = useLoaderData();
    return (
        <div>
            <h2>home{allcourse.length}</h2>
            {
                allcourse.map(course => <CourseCard
                    key={course._id}
                course={course}></CourseCard>)
            }
        </div>
    );
};

export default Home;