
import React from 'react';
import { Link } from 'react-router-dom';
import './AllCourses.css'

const AllCourses = (props) => {
    const { name, img } = props.course;
    
    
    return (
        <div className='allcourse'>
            
<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <Link to='' onClick={()=>props.handleClick(props.course)}>
        <img className="rounded-t-lg" src={img} alt=""/>
    </Link>
    <div className="p-5">
        <Link to=''  onClick={()=>props.handleClick(props.course)}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        
       
    </div>
</div>

        </div>
    );
};

export default AllCourses;